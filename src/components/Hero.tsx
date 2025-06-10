
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, User, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const [email, setEmail] = useState("");
  const { user, signOut } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Toast notification for demo
    toast({
      title: "Thanks!",
      description: "We'll send you the latest AI SEO insights.",
    });
    setEmail("");
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out",
        description: "You have been signed out successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to sign out",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-background via-background to-primary/5 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
            AI SEO Tools That Actually Work
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Stop wasting money on SEO tools that don't deliver. We've tested 50+ AI-powered platforms 
            to find the ones that actually boost rankings and drive traffic.
          </p>
          
          {user ? (
            <div className="flex flex-col items-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-lg text-primary">
                <User className="h-5 w-5" />
                <span>Welcome back, {user.email}!</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Ready to discover the best AI SEO tools for your business?
              </p>
              <Button onClick={handleSignOut} variant="outline" className="flex items-center gap-2">
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" className="whitespace-nowrap">
                  Get Free Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <div className="text-sm text-muted-foreground">
                or{" "}
                <Link to="/auth" className="text-primary hover:underline">
                  sign up for free
                </Link>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Tools Tested</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$342</div>
              <div className="text-sm text-muted-foreground">Max CPC Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">150K+</div>
              <div className="text-sm text-muted-foreground">Monthly Searches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
