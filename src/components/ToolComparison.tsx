import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScreenshotDisplay from "@/components/ScreenshotDisplay";
import { ScreenshotService } from "@/services/screenshotService";
import { Camera } from "lucide-react";

const ToolComparison = () => {
  const [screenshotStates, setScreenshotStates] = useState<Record<string, {
    isLoading: boolean;
    screenshotPath?: string;
  }>>({});
  
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
      searchVolume: "22,000",
      websiteUrl: "https://www.jasper.ai"
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
      searchVolume: "18,500",
      websiteUrl: "https://surferseo.com"
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
      searchVolume: "35,000",
      websiteUrl: "https://www.copy.ai"
    }
  ];

  const handleCaptureScreenshot = async (toolName: string, url: string) => {
    setScreenshotStates(prev => ({
      ...prev,
      [toolName]: { isLoading: true }
    }));

    try {
      const result = await ScreenshotService.captureToolScreenshot(toolName, url);
      
      setScreenshotStates(prev => ({
        ...prev,
        [toolName]: {
          isLoading: false,
          screenshotPath: result.success ? result.imagePath : undefined
        }
      }));
    } catch (error) {
      console.error(`Failed to capture screenshot for ${toolName}:`, error);
      setScreenshotStates(prev => ({
        ...prev,
        [toolName]: { isLoading: false }
      }));
    }
  };

  const handleCaptureAllScreenshots = async () => {
    const toolsWithUrls = tools.map(tool => ({
      name: tool.name,
      url: tool.websiteUrl
    }));

    // Set all tools to loading state
    const loadingStates: Record<string, {isLoading: boolean}> = {};
    tools.forEach(tool => {
      loadingStates[tool.name] = { isLoading: true };
    });
    setScreenshotStates(loadingStates);

    try {
      const results = await ScreenshotService.captureMultipleScreenshots(toolsWithUrls);
      
      const newStates: Record<string, {isLoading: boolean; screenshotPath?: string}> = {};
      results.forEach(({ toolName, result }) => {
        newStates[toolName] = {
          isLoading: false,
          screenshotPath: result.success ? result.imagePath : undefined
        };
      });
      
      setScreenshotStates(newStates);
    } catch (error) {
      console.error('Failed to capture screenshots:', error);
      // Reset loading states on error
      const errorStates: Record<string, {isLoading: boolean}> = {};
      tools.forEach(tool => {
        errorStates[tool.name] = { isLoading: false };
      });
      setScreenshotStates(errorStates);
    }
  };

  return (
    <section id="tools" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Top AI SEO Tools <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Compared</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We've analyzed pricing, features, and real user reviews to help you choose the right tool for your needs.
          </p>
          <Button onClick={handleCaptureAllScreenshots} className="mb-8">
            <Camera className="h-4 w-4 mr-2" />
            Capture All Screenshots
          </Button>
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
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="preview">Live Preview</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-6">
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
                  </TabsContent>
                  
                  <TabsContent value="preview" className="space-y-4">
                    <ScreenshotDisplay
                      toolName={tool.name}
                      websiteUrl={tool.websiteUrl}
                      screenshotPath={screenshotStates[tool.name]?.screenshotPath}
                      isLoading={screenshotStates[tool.name]?.isLoading}
                      onCaptureScreenshot={() => handleCaptureScreenshot(tool.name, tool.websiteUrl)}
                    />
                    <Button className="w-full" variant="outline">
                      Visit {tool.name}
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolComparison;
