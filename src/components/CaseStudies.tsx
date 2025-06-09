
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "TechStart Inc.",
      industry: "SaaS",
      challenge: "Needed to scale content production from 10 to 100 articles/month",
      solution: "Implemented Jasper AI + Surfer SEO combination",
      results: {
        trafficIncrease: "340%",
        timeReduction: "65%",
        costSavings: "$12,000/month",
        rankingImprovement: "Top 3 for 89 keywords"
      },
      quote: "AI tools didn't just save us time - they completely transformed our content strategy. We're now ranking for keywords we never thought possible.",
      author: "Sarah Chen, Head of Marketing"
    },
    {
      company: "E-commerce Plus",
      industry: "E-commerce",
      challenge: "Product descriptions taking 2 hours each to write and optimize",
      solution: "Copy.ai for generation + custom SEO optimization workflow",
      results: {
        trafficIncrease: "185%",
        timeReduction: "80%",
        costSavings: "$8,500/month",
        rankingImprovement: "1,200+ product pages ranking"
      },
      quote: "From 2 hours per product to 20 minutes. The ROI was immediate and our organic traffic has exploded.",
      author: "Mike Rodriguez, SEO Manager"
    },
    {
      company: "Legal Eagles",
      industry: "Legal Services",
      challenge: "Competing with larger firms for local SEO visibility",
      solution: "Specialized legal AI tools + local SEO optimization",
      results: {
        trafficIncrease: "250%",
        timeReduction: "55%",
        costSavings: "$6,200/month",
        rankingImprovement: "#1 for 34 local keywords"
      },
      quote: "As a small firm, we couldn't afford big marketing teams. AI leveled the playing field completely.",
      author: "David Park, Managing Partner"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results from <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Real Companies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how businesses like yours are using AI SEO tools to drive measurable growth.
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card key={study.company} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-1 bg-gradient-to-br from-primary/10 to-purple-600/10 p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                      <Badge variant="secondary">{study.industry}</Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">Challenge:</h4>
                        <p className="text-sm text-muted-foreground">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-2">Solution:</h4>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-1">
                          {study.results.trafficIncrease}
                        </div>
                        <div className="text-sm text-muted-foreground">Traffic Increase</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-1">
                          {study.results.timeReduction}
                        </div>
                        <div className="text-sm text-muted-foreground">Time Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-1">
                          {study.results.costSavings}
                        </div>
                        <div className="text-sm text-muted-foreground">Cost Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-1">
                          {study.results.rankingImprovement.split(' ')[0]}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {study.results.rankingImprovement.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-primary pl-6 italic text-lg mb-4">
                      "{study.quote}"
                    </blockquote>
                    
                    <div className="text-sm text-muted-foreground">
                      — {study.author}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
