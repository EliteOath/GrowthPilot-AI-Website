import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Shield, Zap, Users, TrendingUp, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Where Strategy Meets Intelligent Execution
              </h1>
              <p className="text-xl text-primary-foreground/90">
                GrowthPilot AI exists to bring clarity, strategy, and measurable results to the world of AI transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Purpose */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Purpose</h2>
                <p className="text-xl text-muted-foreground">
                  GrowthPilot AI exists to bring clarity, strategy, and measurable results to the world of AI transformation.
                </p>
              </div>

              <Card className="border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Our Philosophy</h3>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>AI is only valuable when aligned with business goals.</p>
                    <p>Technology is the tool — outcomes are the objective.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: Target,
                  title: "Strategy-First",
                  description: "Every engagement begins with understanding your business goals and challenges."
                },
                {
                  icon: TrendingUp,
                  title: "Business-Outcome-Driven",
                  description: "We focus on measurable results that impact your bottom line."
                },
                {
                  icon: Shield,
                  title: "Transparent & Ethical",
                  description: "Honest guidance with no vendor lock-in or hidden agendas."
                },
                {
                  icon: Zap,
                  title: "Tailored Solutions",
                  description: "Custom AI systems designed for your specific needs, not generic templates."
                },
                {
                  icon: Users,
                  title: "Long-Term Partnership",
                  description: "We stay with you beyond implementation to ensure continued success."
                },
                {
                  icon: Award,
                  title: "Implementation Excellence",
                  description: "High-quality builds with rigorous testing and validation."
                }
              ].map((item, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Mission</h3>
                  <p className="text-lg text-muted-foreground">
                    To architect and deploy AI systems that increase efficiency, reduce operational costs, and unlock new growth opportunities for modern organizations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Vision</h3>
                  <p className="text-lg text-muted-foreground">
                    A future where every business—regardless of size—operates with intelligent, automated, and data-driven systems that accelerate performance and free humans to do higher-value work.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to partner with us?
              </h2>
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Learn More About GrowthPilot AI
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
