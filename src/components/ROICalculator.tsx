
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ROICalculator = () => {
  const [teamSize, setTeamSize] = useState(5);
  const [contentVolume, setContentVolume] = useState(50);
  const [currentToolCost, setCurrentToolCost] = useState(200);

  const calculateROI = () => {
    const hoursPerContent = 3;
    const hourlyRate = 50;
    const timeSaved = contentVolume * hoursPerContent * 0.6; // 60% time savings
    const costSavings = timeSaved * hourlyRate;
    const newToolCost = 89; // Average AI tool cost
    const netSavings = costSavings - newToolCost;
    const roi = ((netSavings / newToolCost) * 100);

    return {
      timeSaved: Math.round(timeSaved),
      costSavings: Math.round(costSavings),
      netSavings: Math.round(netSavings),
      roi: Math.round(roi)
    };
  };

  const results = calculateROI();

  return (
    <section id="calculator" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Calculate Your <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">ROI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how much time and money you could save by switching to AI-powered SEO tools.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Your Current Situation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="teamSize">Team Size</Label>
                  <Input
                    id="teamSize"
                    type="number"
                    value={teamSize}
                    onChange={(e) => setTeamSize(parseInt(e.target.value) || 0)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="contentVolume">Content Pieces per Month</Label>
                  <Input
                    id="contentVolume"
                    type="number"
                    value={contentVolume}
                    onChange={(e) => setContentVolume(parseInt(e.target.value) || 0)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="currentCost">Current Monthly Tool Costs ($)</Label>
                  <Input
                    id="currentCost"
                    type="number"
                    value={currentToolCost}
                    onChange={(e) => setCurrentToolCost(parseInt(e.target.value) || 0)}
                    className="mt-2"
                  />
                </div>

                <div className="pt-4">
                  <h4 className="font-semibold mb-4">Assumptions:</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• 3 hours per content piece (traditional method)</li>
                    <li>• $50/hour average writer cost</li>
                    <li>• 60% time savings with AI tools</li>
                    <li>• $89/month average AI tool cost</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-purple-600/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Your Potential Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">
                      {results.roi}%
                    </div>
                    <div className="text-muted-foreground">Return on Investment</div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">
                        {results.timeSaved}h
                      </div>
                      <div className="text-sm text-muted-foreground">Hours Saved/Month</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">
                        ${results.costSavings}
                      </div>
                      <div className="text-sm text-muted-foreground">Cost Savings/Month</div>
                    </div>
                  </div>

                  <div className="bg-background p-6 rounded-lg border">
                    <h4 className="font-semibold mb-4">Monthly Breakdown:</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Labor Cost Savings:</span>
                        <span className="font-semibold text-green-600">+${results.costSavings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>AI Tool Cost:</span>
                        <span className="font-semibold text-red-600">-$89</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold">
                        <span>Net Savings:</span>
                        <span className="text-primary">${results.netSavings}</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full text-lg py-6">
                    Start Saving Today →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
