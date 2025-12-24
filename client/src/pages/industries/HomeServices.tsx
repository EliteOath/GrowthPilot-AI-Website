import { Helmet } from "react-helmet-async";
import { useBookStrategyCall } from "@/hooks/useBookStrategyCall";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  Wrench, 
  TrendingUp, 
  Users, 
  Calendar, 
  DollarSign, 
  BarChart3,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function HomeServices() {
  const { openModal, Modal } = useBookStrategyCall();
  
  const benefits = [
    {
      icon: Calendar,
      title: "Intelligent Scheduling",
      description: "AI-powered scheduling systems that optimize technician routes, reduce travel time, and maximize daily appointments while considering skills, availability, and customer preferences."
    },
    {
      icon: Users,
      title: "Customer Engagement",
      description: "Automated communication systems that send appointment reminders, provide real-time technician tracking, and follow up for reviews—improving customer satisfaction and retention."
    },
    {
      icon: DollarSign,
      title: "Dynamic Pricing",
      description: "AI algorithms that analyze demand patterns, competitor pricing, and service complexity to recommend optimal pricing strategies that maximize revenue without sacrificing bookings."
    },
    {
      icon: BarChart3,
      title: "Predictive Maintenance",
      description: "Machine learning models that analyze service history to predict equipment failures, enabling proactive maintenance recommendations that generate recurring revenue."
    }
  ];

  const useCases = [
    {
      title: "HVAC Companies",
      challenge: "Seasonal demand fluctuations create scheduling chaos and missed revenue opportunities",
      solution: "AI demand forecasting and dynamic scheduling that adjusts capacity planning based on weather patterns and historical data",
      results: ["35% increase in daily appointments", "28% reduction in drive time", "42% improvement in first-time fix rates"]
    },
    {
      title: "Plumbing Services",
      challenge: "Emergency calls disrupt scheduled appointments and reduce technician efficiency",
      solution: "Intelligent dispatch system that balances emergency and scheduled work while optimizing routes in real-time",
      results: ["45% faster emergency response", "31% more jobs per technician", "89% customer satisfaction score"]
    },
    {
      title: "Electrical Contractors",
      challenge: "Complex job estimation leads to pricing inconsistency and reduced profitability",
      solution: "AI-powered estimation tool that analyzes job details, material costs, and labor requirements for accurate quotes",
      results: ["52% reduction in estimation time", "23% improvement in profit margins", "67% fewer change orders"]
    }
  ];

  const features = [
    "Automated appointment scheduling and confirmation",
    "Intelligent route optimization for technicians",
    "AI-powered customer service chatbots",
    "Predictive equipment maintenance alerts",
    "Dynamic pricing based on demand and capacity",
    "Automated invoice generation and payment processing",
    "Customer sentiment analysis from reviews",
    "Inventory forecasting and management"
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions for Home Services Companies | GrowthPilot AI</title>
        <meta name="description" content="Transform your home services business with AI-powered scheduling, routing, customer engagement, and predictive maintenance. Increase efficiency by 40% and revenue by 35%." />
        <meta name="keywords" content="AI for home services, HVAC AI, plumbing automation, home services technology, field service AI, scheduling optimization, route optimization, home services software" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Solutions for Home Services Companies | GrowthPilot AI" />
        <meta property="og:description" content="Transform your home services business with AI-powered scheduling, routing, and customer engagement solutions." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Consulting for Home Services",
            "provider": {
              "@type": "Organization",
              "name": "GrowthPilot AI",
              "description": "AI strategy and implementation consulting for home services companies"
            },
            "areaServed": "United States",
            "audience": {
              "@type": "Audience",
              "audienceType": "Home Services Companies"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-background overflow-hidden">
          <div className="absolute inset-0 bg-grid-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Wrench className="w-4 h-4" />
                <span>Industry-Specific AI Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                AI Solutions for Home Services Companies
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Transform your HVAC, plumbing, electrical, or home services business with AI-powered scheduling, routing, customer engagement, and predictive maintenance that increases efficiency by 40% and revenue by 35%.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="text-lg px-8">
                    Schedule Strategy Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How AI Transforms Home Services Operations
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From scheduling to customer engagement, AI delivers measurable improvements across every aspect of your home services business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how leading home services companies are using AI to solve their biggest operational challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="p-8 bg-card">
                  <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">CHALLENGE</h4>
                    <p className="text-sm">{useCase.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">SOLUTION</h4>
                    <p className="text-sm">{useCase.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">RESULTS</h4>
                    <ul className="space-y-2">
                      {useCase.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Complete AI Capabilities for Home Services
                </h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive AI solutions designed specifically for the unique challenges of home services businesses.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Home Services Business?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Schedule a free strategy call to discover how AI can increase your efficiency, improve customer satisfaction, and boost your bottom line.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Book Your Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
