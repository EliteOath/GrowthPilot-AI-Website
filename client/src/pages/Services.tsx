import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Cog, Zap, TrendingUp, DollarSign, Users, BarChart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI Strategy. AI Implementation. Intelligent Automation.
              </h1>
              <p className="text-xl text-primary-foreground/90">
                We help organizations leverage artificial intelligence through a structured, strategic, and outcome-driven approach.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            </div>

            <div className="space-y-12 max-w-5xl mx-auto">
              {/* Service 1 */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-[1fr,2fr] gap-6 items-center">
                    <div className="flex justify-center">
                      <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center">
                        <Target className="h-12 w-12 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">1. AI Strategy Consulting</h3>
                      <p className="text-muted-foreground mb-4">
                        A comprehensive evaluation of your business to identify where AI can deliver the strongest ROI. Includes process analysis, opportunity mapping, and a tailored AI roadmap.
                      </p>
                      <Link href="/ai-strategy">
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service 2 */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-[1fr,2fr] gap-6 items-center">
                    <div className="flex justify-center">
                      <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center">
                        <Cog className="h-12 w-12 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">2. AI Implementation & Integration</h3>
                      <p className="text-muted-foreground mb-4">
                        We build and deploy intelligent systems — including automations, agents, workflows, and integrations — tailored to your operational needs.
                      </p>
                      <Link href="/ai-implementation">
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service 3 */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-[1fr,2fr] gap-6 items-center">
                    <div className="flex justify-center">
                      <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center">
                        <Zap className="h-12 w-12 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">3. AI Automation Solutions</h3>
                      <p className="text-muted-foreground mb-4">
                        AI-powered customer service, internal workflow automation, intelligent dispatch, lead qualification, and more.
                      </p>
                      <Link href="/ai-automation">
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service 4 */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-[1fr,2fr] gap-6 items-center">
                    <div className="flex justify-center">
                      <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center">
                        <BarChart className="h-12 w-12 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">4. Ongoing Optimization</h3>
                      <p className="text-muted-foreground mb-4">
                        AI systems evolve. We provide continuous monitoring, training, and optimization to ensure long-term performance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Outcomes We Focus On */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Outcomes We Focus On</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: TrendingUp, title: "Higher Productivity" },
                { icon: DollarSign, title: "Lower Operational Costs" },
                { icon: Users, title: "Stronger Customer Experience" },
                { icon: BarChart, title: "Increased Revenue" },
                { icon: Target, title: "Reduced Errors & Bottlenecks" },
                { icon: Zap, title: "Scalable Systems That Support Growth" }
              ].map((outcome, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="pt-6 flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <outcome.icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <h3 className="font-semibold">{outcome.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to explore how AI can transform your business?
              </h2>
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Explore Our AI Strategy Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
