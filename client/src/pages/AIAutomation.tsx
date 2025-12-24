import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, MessageSquare, Target, Workflow, BarChart3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AIAutomation() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Intelligent Automation for Real-World Businesses
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Tailored AI automation solutions that deliver measurable ROI across your operations.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Book a Call to Explore Automation Opportunities
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Automation Solutions */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Automation Solutions Include
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Phone,
                  title: "AI Reception & Call Automation",
                  description: "Intelligent phone agents that handle inbound calls, scheduling, triaging, and support."
                },
                {
                  icon: MessageSquare,
                  title: "Customer Support Automation",
                  description: "AI chat systems that provide 24/7 assistance."
                },
                {
                  icon: Target,
                  title: "Lead Qualification & Sales Automation",
                  description: "Instant lead sorting, nurturing, and scoring."
                },
                {
                  icon: Workflow,
                  title: "Internal Workflow Automation",
                  description: "Automating repetitive tasks like data entry, reporting, approvals, and scheduling."
                },
                {
                  icon: BarChart3,
                  title: "Predictive Insights & Reporting",
                  description: "Turn your business data into actionable insights using AI."
                }
              ].map((solution, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <solution.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Industries Using These Solutions
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                "Home Services",
                "Healthcare",
                "Professional Services",
                "Retail & E-commerce",
                "Automotive",
                "Construction",
                "Agencies",
                "Real Estate"
              ].map((industry, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-4 text-center">
                    <p className="font-semibold">{industry}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/industries">
                <Button variant="outline">
                  View All Industries
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to automate your operations?
              </h2>
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Book a Call to Explore Automation Opportunities
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
