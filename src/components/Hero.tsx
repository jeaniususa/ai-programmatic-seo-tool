
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Toast notification for demo
    alert("Thanks! We'll send you the latest AI SEO insights.");
    setEmail("");
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
          </div>

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
