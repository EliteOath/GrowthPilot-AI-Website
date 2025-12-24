import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, Map, Route, Settings, Shield, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AIStrategy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI Strategy Begins With Clarity
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Get a clear, actionable roadmap for AI adoption — built on real business needs, not hype.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Book Your AI Strategy Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What's Included in Our AI Strategy Consulting
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Search,
                  title: "1. Business Process Evaluation",
                  description: "We analyze your existing workflows, systems, and team structure to identify inefficiencies and automation potential."
                },
                {
                  icon: Map,
                  title: "2. AI Opportunity Mapping",
                  description: "We pinpoint where AI can deliver measurable value — from customer service to operations, marketing, and internal processes."
                },
                {
                  icon: Route,
                  title: "3. AI Roadmap Development",
                  description: "A step-by-step plan detailing what to implement, in what order, and with what expected ROI."
                },
                {
                  icon: Settings,
                  title: "4. Technology Recommendations",
                  description: "We identify the right tools, platforms, and integrations for your specific needs."
                },
                {
                  icon: Shield,
                  title: "5. Risk, Compliance & Change Management",
                  description: "Guidance to ensure smooth adoption and organizational alignment."
                }
              ].map((item, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Framework */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  The GrowthPilot AI Strategic Framework
                </h2>
                <p className="text-xl text-muted-foreground">
                  Clarity → Prioritization → Roadmap → Execution
                </p>
              </div>

              <Card className="border-border">
                <CardContent className="p-8">
                  <p className="text-lg text-center text-muted-foreground">
                    This framework ensures that every AI initiative is tied directly to business outcomes. We don't implement technology for technology's sake — we deploy intelligent systems that solve real problems and create measurable value.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Deliverables You Receive
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: FileText, title: "AI Opportunity Report" },
                { icon: Search, title: "Workflow & Process Analysis" },
                { icon: Route, title: "AI Roadmap (3–12 months)" },
                { icon: Settings, title: "Technology Recommendations" },
                { icon: Map, title: "Integration Blueprint" },
                { icon: ArrowRight, title: "ROI Projections" }
              ].map((deliverable, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="pt-6 flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <deliverable.icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <h3 className="font-semibold">{deliverable.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to develop your AI strategy?
              </h2>
              <p className="text-xl mb-8 text-secondary-foreground/90">
                Let's identify the highest-value opportunities for AI in your business.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Book Your AI Strategy Consultation
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
