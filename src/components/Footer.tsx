
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    alert("Thanks for subscribing! You'll get our weekly AI SEO insights.");
    setEmail("");
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              AIToolsHub
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The definitive resource for AI-powered SEO tools. We test, compare, and review 
              so you can focus on growing your business.
            </p>
            
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
              <Input
                type="email"
                placeholder="Get weekly AI SEO insights"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                required
              />
              <Button type="submit" variant="outline" className="whitespace-nowrap border-gray-700 text-white hover:bg-gray-800">
                Subscribe
              </Button>
            </form>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Content Generation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Keyword Research</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rank Tracking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Link Building</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technical SEO</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Free Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ROI Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 AIToolsHub. Built with 🤖 and ❤️ by developers who understand the SEO struggle.
            </div>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
