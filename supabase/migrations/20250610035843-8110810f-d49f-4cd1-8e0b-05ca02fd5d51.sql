
-- Create a table for newsletter subscriptions
CREATE TABLE public.newsletter_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- Add an index on email for faster lookups
CREATE INDEX idx_newsletter_subscriptions_email ON public.newsletter_subscriptions(email);

-- Add an index on subscribed_at for analytics
CREATE INDEX idx_newsletter_subscriptions_subscribed_at ON public.newsletter_subscriptions(subscribed_at);

-- Enable Row Level Security (RLS) - we'll make this publicly accessible for newsletter signups
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to INSERT newsletter subscriptions (public signup)
CREATE POLICY "Anyone can subscribe to newsletter" 
  ON public.newsletter_subscriptions 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that allows reading subscriptions (for admin purposes - you can restrict this later)
CREATE POLICY "Anyone can view newsletter subscriptions" 
  ON public.newsletter_subscriptions 
  FOR SELECT 
  USING (true);
