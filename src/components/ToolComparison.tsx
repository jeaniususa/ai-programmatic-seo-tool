
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ToolComparison = () => {
  const tools = [
    {
      name: "Jasper AI",
      price: "$49/month",
      rating: 4.8,
      features: ["Content Generation", "SEO Optimization", "Brand Voice", "Templates"],
      pros: ["Excellent content quality", "Great templates", "Brand consistency"],
      cons: ["Expensive for small teams", "Learning curve"],
      bestFor: "Enterprise teams with content at scale",
      cpc: "$89.50",
      searchVolume: "22,000"
    },
    {
      name: "Surfer SEO",
      price: "$89/month", 
      rating: 4.9,
      features: ["Content Editor", "SERP Analysis", "Keyword Research", "Audit Tools"],
      pros: ["Data-driven insights", "Real-time optimization", "Competitor analysis"],
      cons: ["Higher price point", "Complex for beginners"],
      bestFor: "SEO agencies and professionals",
      cpc: "$156.20",
      searchVolume: "18,500"
    },
    {
      name: "Copy.ai",
      price: "$36/month",
      rating: 4.6,
      features: ["Copy Generation", "Multiple Languages", "Team Collaboration", "API Access"],
      pros: ["Affordable pricing", "User-friendly", "Good output variety"],
      cons: ["Limited SEO features", "Quality inconsistency"],
      bestFor: "Small businesses and startups",
      cpc: "$67.30",
      searchVolume: "35,000"
    }
  ];

  return (
    <section id="tools" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Top AI SEO Tools <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Compared</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've analyzed pricing, features, and real user reviews to help you choose the right tool for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tools.map((tool, index) => (
            <Card key={tool.name} className={`relative ${index === 1 ? 'border-primary border-2 scale-105' : ''}`}>
              {index === 1 && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{tool.name}</CardTitle>
                <div className="text-3xl font-bold text-primary mb-2">{tool.price}</div>
                <div className="flex justify-center items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-lg ${i < Math.floor(tool.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({tool.rating})</span>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {tool.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">Pros</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {tool.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">Cons</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {tool.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">✗</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">SEO Metrics</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Avg CPC</div>
                        <div className="font-semibold">{tool.cpc}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Search Vol.</div>
                        <div className="font-semibold">{tool.searchVolume}/mo</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground mb-4">
                    <strong>Best for:</strong> {tool.bestFor}
                  </div>

                  <Button className="w-full">
                    Start Free Trial
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolComparison;
