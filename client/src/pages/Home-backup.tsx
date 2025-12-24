import { useState } from "react";
import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Cog, Zap, TrendingUp, DollarSign, Users, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useBookStrategyCall } from "@/hooks/useBookStrategyCall";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer, scaleIn } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef } from "react";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();
  const { openModal, Modal } = useBookStrategyCall();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="relative bg-primary text-primary-foreground py-20 md:py-32 overflow-hidden">
          <motion.div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url(/hero-bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              y,
            }}
          />
          <div className="container relative z-10">
            <motion.div 
              className="max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                variants={fadeInUp}
              >
                Strategic AI for Real Business Results
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-primary-foreground/90"
                variants={fadeInUp}
              >
                We help organizations identify high-impact AI opportunities and implement intelligent systems that accelerate growth, reduce costs, and improve operational efficiency.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={openModal}
                >
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <a href="/ai-opportunity-guide.pdf" download="GrowthPilot-AI-Opportunity-Guide.pdf">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Download AI Opportunity Guide
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-16 bg-muted/20 border-y border-border overflow-hidden">
          <div className="container">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Trusted by Leading Organizations
              </p>
            </div>
            <div className="relative">
              {/* Fade-out gradient edges */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/20 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/20 to-transparent z-10 pointer-events-none" />
              
              <div className="flex animate-scroll-fast">
                {/* First set of logos */}
                <div className="flex items-center gap-16 px-8">
                  <img 
                    src="/client-logo-1.png" 
                    alt="TechVision" 
                    className="h-12 w-auto opacity-60 grayscale flex-shrink-0"
                  />
                  <img 
                    src="/client-logo-2.png" 
                    alt="Apex Solutions" 
                    className="h-12 w-auto opacity-60 grayscale flex-shrink-0"
                  />
                  <img 
                    src="/client-logo-3.png" 
                    alt="Summit Services" 
                    className="h-12 w-auto opacity-60 grayscale flex-shrink-0"
                  />
                  <img 
                    src="/client-logo-4.png" 
                    alt="Nexus Group" 
                    className="h-12 w-auto opacity-60 grayscale flex-shrink-0"
                  />
                  <img 
                    src="/client-logo-5.png" 
                    alt="Precision Pro" 
                    className="h-12 w-auto opacity-60 grayscale flex-shrink-0"
                  />
                  <img 
                    src="/client-logo-6.png" 
                    alt="Vertex Partners" 
                    className="h-12 w-auto opacity-60 grayscale flex-shrink-0"
                  />
                  <img 
                    src="/client-logo-7.png" 
                    alt="Catalyst Corp" 
                    className="h-12 w-auto opacity-60 grayscale flex-shrink-0"
                  />
                  <img 
                    src="/client-logo-8.png" 
                    alt="Elevate Systems" 
                    className="h-12 w-auto opacity-60 grayscale flex-shrink-0"
                  />
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-16 px-8">
                  <img 
                    src="/client-logo-1.png" 
                    alt="TechVision" 
                    className="h-12 w-auto opacity-60 grayscale flex-shrink-0"
                  />
                  <img 
                    src="/client-logo-2.png" 
                    alt="Apex Solutions" 
                    className="h-12 w-auto opacity-60 grayscale flex-shrink-0"
                  />
                  <img 
                    src="/client-logo-3.png" 
                    alt="Summit Services" 
                    className="h-12 w-auto opacity-60 grayscale flex-shrink-0"
                  />
                  <img 
                    src="/client-logo-4.png" 
                    alt="Nexus Group" 
                    className="h-12 w-auto opacity-60 grayscale flex-shrink-0"
                  />
                  <img 
                    src="/client-logo-5.png" 
                    alt="Precision Pro" 
                    className="h-12 w-auto opacity-60 grayscale flex-shrink-0"
                  />
                  <img 
                    src="/client-logo-6.png" 
                    alt="Vertex Partners" 
                    className="h-12 w-auto opacity-60 grayscale flex-shrink-0"
                  />
                  <img 
                    src="/client-logo-7.png" 
                    alt="Catalyst Corp" 
                    className="h-12 w-auto opacity-60 grayscale flex-shrink-0"
                  />
                  <img 
                    src="/client-logo-8.png" 
                    alt="Elevate Systems" 
                    className="h-12 w-auto opacity-60 grayscale flex-shrink-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why GrowthPilot AI */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Clarity → Strategy → Intelligent Execution
              </h2>
              <p className="text-lg text-muted-foreground">
                Most businesses know AI can help — but few know where to start or how to implement it effectively. GrowthPilot AI provides the strategic guidance and hands-on execution needed to unlock real business value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Target,
                  title: "Identify High-Impact Opportunities",
                  description: "Pinpoint where automation and optimization deliver the strongest ROI"
                },
                {
                  icon: Cog,
                  title: "Eliminate Operational Bottlenecks",
                  description: "Streamline workflows and remove manual inefficiencies"
                },
                {
                  icon: DollarSign,
                  title: "Reduce Overhead & Improve Margins",
                  description: "Cut costs while maintaining or improving quality"
                },
                {
                  icon: Zap,
                  title: "Deploy Tailored AI Systems",
                  description: "Intelligent solutions aligned to your specific goals"
                }
              ].map((item, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <item.icon className="h-12 w-12 text-accent mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                End-to-end AI solutions from strategy to implementation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Strategy Consulting",
                  description: "Build a clear, actionable roadmap for AI adoption based on your most valuable business opportunities.",
                  link: "/ai-strategy"
                },
                {
                  title: "AI Implementation & Integration",
                  description: "We design, deploy, and maintain intelligent systems that enhance operations, support teams, and improve customer experience.",
                  link: "/ai-implementation"
                },
                {
                  title: "AI Automation Solutions",
                  description: "From customer service to internal workflow automation, we create tailored solutions that deliver measurable ROI.",
                  link: "/ai-automation"
                }
              ].map((service, index) => (
                <Card key={index} className="bg-card hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <Link href={service.link}>
                      <Button variant="outline" className="w-full">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* High-Impact Outcomes */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">High-Impact Outcomes We Deliver</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Cog,
                  title: "Operational Efficiency",
                  description: "Streamline workflows and eliminate repetitive tasks."
                },
                {
                  icon: DollarSign,
                  title: "Cost Reduction",
                  description: "Reduce overhead and free up team capacity."
                },
                {
                  icon: TrendingUp,
                  title: "Scalable Growth",
                  description: "Build systems that support expansion without increasing headcount."
                },
                {
                  icon: Users,
                  title: "Enhanced Customer Experience",
                  description: "24/7 AI-powered support, faster response times, and higher satisfaction."
                }
              ].map((outcome, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <outcome.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{outcome.title}</h3>
                    <p className="text-muted-foreground">{outcome.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="bg-card/10 border-secondary-foreground/20">
                <CardContent className="pt-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle key={i} className="h-5 w-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <blockquote className="text-xl mb-6 text-secondary-foreground/90">
                    "GrowthPilot AI helped us reduce manual workload by 42% within 90 days. Their strategic approach is unmatched."
                  </blockquote>
                  <div className="text-sm">
                    <p className="font-semibold">Operations Director</p>
                    <p className="text-secondary-foreground/70">Home Services Company</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to build intelligent systems that drive real business outcomes?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={openModal}
                >
                  Book Your Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    Explore AI Strategy Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Modal />
    </div>
  );
}
