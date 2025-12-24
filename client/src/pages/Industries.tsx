import { Link } from "wouter";
import { useBookStrategyCall } from "@/hooks/useBookStrategyCall";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Home, Heart, Briefcase, ShoppingCart, Car, HardHat } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Industries() {
  const { openModal, Modal } = useBookStrategyCall();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI Solutions Tailored to Your Industry
              </h1>
              <p className="text-xl text-primary-foreground/90">
                We understand the unique challenges and opportunities in your sector.
              </p>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="space-y-12 max-w-5xl mx-auto">
              {/* Home Services */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Home className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">Home Services (HVAC, Plumbing, Electrical, Roofing)</h3>
                      <ul className="space-y-2 text-muted-foreground mb-4">
                        <li>• AI reception & dispatch</li>
                        <li>• Lead qualification</li>
                        <li>• Intelligent scheduling</li>
                        <li>• Customer support automation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Services */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Briefcase className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">Professional Services (Law, Finance, Real Estate)</h3>
                      <ul className="space-y-2 text-muted-foreground mb-4">
                        <li>• Client intake automation</li>
                        <li>• Document workflows</li>
                        <li>• AI-powered support</li>
                        <li>• Appointment handling</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Healthcare */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Heart className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">Healthcare & Clinics</h3>
                      <ul className="space-y-2 text-muted-foreground mb-4">
                        <li>• Patient intake automation</li>
                        <li>• Support agents</li>
                        <li>• Follow-up reminders</li>
                        <li>• Data organization</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Retail & E-Commerce */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center">
                        <ShoppingCart className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">Retail & E-Commerce</h3>
                      <ul className="space-y-2 text-muted-foreground mb-4">
                        <li>• Customer support</li>
                        <li>• Inventory insights</li>
                        <li>• Order workflows</li>
                        <li>• Smart personalization</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Automotive */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Car className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">Automotive & Transportation</h3>
                      <ul className="space-y-2 text-muted-foreground mb-4">
                        <li>• 24/7 call handling</li>
                        <li>• Dispatch automation</li>
                        <li>• Lead capture</li>
                        <li>• Workflow tracking</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Manufacturing */}
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center">
                        <HardHat className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">Manufacturing & Industrial</h3>
                      <ul className="space-y-2 text-muted-foreground mb-4">
                        <li>• Process insights</li>
                        <li>• Internal workflow automation</li>
                        <li>• Reporting</li>
                        <li>• Equipment support workflows</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                See How AI Can Support Your Industry
              </h2>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={openModal}
              >
                Book a Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Modal />
    </div>
  );
}
