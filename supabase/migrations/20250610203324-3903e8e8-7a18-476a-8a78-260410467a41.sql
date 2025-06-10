
-- Remove the overly permissive policy that allows anyone to view all newsletter subscriptions
DROP POLICY IF EXISTS "Anyone can view newsletter subscriptions" ON public.newsletter_subscriptions;

-- Create a more secure policy that only allows users to view their own subscription (if they're logged in)
CREATE POLICY "Users can view their own newsletter subscription" 
  ON public.newsletter_subscriptions 
  FOR SELECT 
  USING (auth.uid() IS NOT NULL AND email = (SELECT email FROM auth.users WHERE id = auth.uid()));

-- Create an admin role enum for future use
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create a user_roles table for role-based access control
CREATE TABLE public.user_roles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Enable RLS on user_roles table
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create a security definer function to check user roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Create policy for admins to view all newsletter subscriptions
CREATE POLICY "Admins can view all newsletter subscriptions" 
  ON public.newsletter_subscriptions 
  FOR SELECT 
  USING (public.has_role(auth.uid(), 'admin'));

-- Allow users to view their own roles
CREATE POLICY "Users can view their own roles" 
  ON public.user_roles 
  FOR SELECT 
  USING (auth.uid() = user_id);

-- Only admins can manage roles
CREATE POLICY "Admins can manage all roles" 
  ON public.user_roles 
  FOR ALL 
  USING (public.has_role(auth.uid(), 'admin'));
