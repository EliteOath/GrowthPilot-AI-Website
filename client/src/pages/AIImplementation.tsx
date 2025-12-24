import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Workflow, Bot, Link2, Database, Wrench, BarChart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AIImplementation() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                From Strategy to Execution
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                We turn your AI roadmap into real, operational systems that produce measurable outcomes.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Explore Our AI Implementation Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How We Implement */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How We Implement AI Systems
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Workflow,
                  title: "1. Workflow Automation",
                  description: "Automate repetitive tasks, improve accuracy, and free up team capacity."
                },
                {
                  icon: Bot,
                  title: "2. AI Agent Development",
                  description: "Custom voice and chat agents for support, sales, lead capture, and internal communication."
                },
                {
                  icon: Link2,
                  title: "3. System Integration",
                  description: "Connect your CRM, ERP, scheduling software, communication tools, and more with AI-driven processes."
                },
                {
                  icon: Database,
                  title: "4. Data & Model Integration",
                  description: "Leverage AI models for classification, prediction, and optimization of key workflows."
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

        {/* Implementation Process */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Implementation Process
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {[
                  { icon: Wrench, title: "Technical Architecture", description: "Design system architecture and technical specifications" },
                  { icon: Bot, title: "Build & Development", description: "Develop and configure AI systems and integrations" },
                  { icon: Link2, title: "Integration & Training", description: "Connect systems and train AI models on your data" },
                  { icon: BarChart, title: "Testing & Validation", description: "Rigorous testing to ensure reliability and accuracy" },
                  { icon: ArrowRight, title: "Deployment & Monitoring", description: "Launch systems with real-time monitoring" },
                  { icon: BarChart, title: "Ongoing Optimization", description: "Continuous improvement and performance tuning" }
                ].map((step, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                          <step.icon className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to turn your AI strategy into reality?
              </h2>
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Explore Our AI Implementation Services
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
