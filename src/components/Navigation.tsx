
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Logo from "@/components/ui/logo";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Logo size={32} className="text-primary" />
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              VibeEngine
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#tools" className="text-foreground hover:text-primary transition-colors">
                Tool Comparisons
              </a>
              <a href="#calculator" className="text-foreground hover:text-primary transition-colors">
                ROI Calculator
              </a>
              <a href="#guides" className="text-foreground hover:text-primary transition-colors">
                Guides
              </a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">
                Reviews
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button variant="outline" className="mr-2">
              Sign In
            </Button>
            <Button>
              Start Free Trial
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a href="#tools" className="block px-3 py-2 text-foreground hover:text-primary">
                Tool Comparisons
              </a>
              <a href="#calculator" className="block px-3 py-2 text-foreground hover:text-primary">
                ROI Calculator
              </a>
              <a href="#guides" className="block px-3 py-2 text-foreground hover:text-primary">
                Guides
              </a>
              <a href="#reviews" className="block px-3 py-2 text-foreground hover:text-primary">
                Reviews
              </a>
              <div className="pt-4 pb-2">
                <Button variant="outline" className="w-full mb-2">
                  Sign In
                </Button>
                <Button className="w-full">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
