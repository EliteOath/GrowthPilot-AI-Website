import { useState, useRef } from "react";
import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Cog, Zap, TrendingUp, DollarSign, Users, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCalendly } from "@/hooks/useCalendly";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerContainerSlow, scaleIn, slideDown, rotateScaleIn, slideInBottomLeft, slideInBottomRight } from "@/lib/animations";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

function AnimatedSection({ 
  children, 
  className = "", 
  variants = containerVariants 
}: { 
  children: React.ReactNode; 
  className?: string;
  variants?: any;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const { openCalendly } = useCalendly();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with Parallax */}
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
          
          {/* Floating shapes */}
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
          />

          <div className="container relative z-10">
            <motion.div 
              className="max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              style={{ opacity }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                variants={itemVariants}
              >
                Strategic AI for Real Business Results
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-primary-foreground/90"
                variants={itemVariants}
              >
                We help organizations identify high-impact AI opportunities and implement intelligent systems that accelerate growth, reduce costs, and improve operational efficiency.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto"
                    onClick={openCalendly}
                  >
                    Book a Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.a 
                  href="/ai-opportunity-guide.pdf" 
                  download="GrowthPilot-AI-Opportunity-Guide.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
                  >
                    Download AI Opportunity Guide
                  </Button>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Client Logos - Keep existing animation */}
        <section className="py-16 bg-muted/20 border-y border-border overflow-hidden">
          <div className="container">
            <motion.div 
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Trusted by Leading Organizations
              </p>
            </motion.div>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/20 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/20 to-transparent z-10 pointer-events-none" />
              
              <div className="flex animate-scroll-fast">
                <div className="flex items-center gap-16 px-8">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <img 
                      key={`logo-${num}`}
                      src={`/client-logo-${num}.png`}
                      alt={`Client ${num}`}
                      className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-16 px-8" aria-hidden="true">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <img 
                      key={`logo-dup-${num}`}
                      src={`/client-logo-${num}.png`}
                      alt={`Client ${num}`}
                      className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <AnimatedSection className="py-20 bg-background" variants={staggerContainerSlow}>
          <div className="container">
            <motion.div className="text-center mb-16" variants={slideDown}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Clarity → Strategy → Intelligent Execution
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Most businesses know AI can help — but few know where to start or how to implement it effectively. GrowthPilot AI provides the strategic guidance and hands-on execution needed to unlock real business value.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Target, title: "Identify High-Impact Opportunities", desc: "Pinpoint where AI automation and optimization deliver the strongest ROI for your business.", animation: slideInBottomLeft },
                { icon: Cog, title: "Eliminate Operational Bottlenecks", desc: "Streamline workflows and remove manual inefficiencies.", animation: slideInBottomRight },
                { icon: DollarSign, title: "Reduce Overhead & Improve Margins", desc: "Cut costs while maintaining or improving quality.", animation: slideInBottomLeft },
                { icon: Zap, title: "Deploy Tailored AI Systems", desc: "Intelligent solutions aligned to your specific needs and infrastructure.", animation: slideInBottomRight },
              ].map((item, index) => (
                <motion.div key={index} variants={item.animation}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-accent/50">
                    <CardContent className="p-6">
                      <motion.div
                        className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4"
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <item.icon className="h-7 w-7 text-accent" />
                      </motion.div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection className="py-20 bg-muted/30" variants={staggerContainer}>
          <div className="container">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
              <p className="text-lg text-muted-foreground">
                End-to-end AI solutions from strategy to implementation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "AI Strategy Consulting", desc: "Build a clear, actionable roadmap for AI adoption based on your most valuable business opportunities.", link: "/services/ai-strategy", animation: fadeInLeft },
                { title: "AI Implementation & Integration", desc: "We design and deploy intelligent systems that enhance operations, support teams, and improve customer experience.", link: "/services/ai-implementation", animation: scaleIn },
                { title: "AI Automation Solutions", desc: "From workflow automation to chatbots, we create tailored solutions that deliver measurable ROI.", link: "/services/ai-automation", animation: fadeInRight },
              ].map((service, index) => (
                <motion.div key={index} variants={service.animation}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.desc}</p>
                      <Link href={service.link}>
                        <motion.div
                          whileHover={{ x: 8 }}
                          className="inline-flex items-center text-accent font-semibold"
                        >
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.div>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Outcomes Section */}
        <AnimatedSection className="py-20 bg-background" variants={staggerContainer}>
          <div className="container">
            <motion.div className="text-center mb-16" variants={scaleIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">High-Impact Outcomes We Deliver</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                { icon: TrendingUp, title: "Operational Efficiency", desc: "Streamline workflows and eliminate repetitive tasks", animation: fadeInLeft },
                { icon: DollarSign, title: "Cost Reduction", desc: "Reduce overhead and free up team capacity", animation: fadeInRight },
                { icon: Zap, title: "Scalable Growth", desc: "Build systems that support expansion without bottlenecks", animation: fadeInLeft },
                { icon: Users, title: "Enhanced Customer Experience", desc: "24/7 AI-powered support, faster response times, and higher satisfaction", animation: fadeInRight },
              ].map((outcome, index) => (
                <motion.div 
                  key={index} 
                  variants={outcome.animation}
                  className="flex gap-6 items-start group"
                >
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <outcome.icon className="h-8 w-8 text-accent" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{outcome.title}</h3>
                    <p className="text-muted-foreground">{outcome.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* How It Works Section */}
        <AnimatedSection className="py-20 bg-muted/30" variants={staggerContainer}>
          <div className="container">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Our proven 3-step process takes you from uncertainty to measurable results</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { num: "01", title: "Discovery & Analysis", desc: "We audit your operations to identify high-ROI AI opportunities aligned with your business goals.", icon: Target },
                { num: "02", title: "Strategic Roadmap", desc: "Receive a prioritized implementation plan with clear timelines, costs, and expected outcomes.", icon: Cog },
                { num: "03", title: "Deploy & Optimize", desc: "We build, integrate, and refine intelligent systems that deliver measurable business value.", icon: Zap },
              ].map((step, i) => (
                <motion.div key={i} variants={i === 0 ? fadeInLeft : i === 1 ? fadeInUp : fadeInRight}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="text-5xl font-bold text-accent/20 mb-4">{step.num}</div>
                      <step.icon className="h-12 w-12 text-accent mb-4" />
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Why Choose Us Section */}
        <AnimatedSection className="py-20 bg-background" variants={staggerContainerSlow}>
          <div className="container">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GrowthPilot AI</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">We combine strategic thinking with hands-on execution</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Business-First Approach", desc: "We start with your business goals, not technology. Every recommendation is tied to measurable ROI.", icon: TrendingUp },
                { title: "End-to-End Execution", desc: "From strategy to deployment, we handle the entire journey so you don't need to hire a team.", icon: CheckCircle },
                { title: "Rapid Time-to-Value", desc: "See results in weeks, not months. Our agile approach delivers quick wins while building for scale.", icon: Zap },
                { title: "Industry Expertise", desc: "Deep experience across multiple sectors means we understand your unique challenges and opportunities.", icon: Users },
              ].map((item, i) => (
                <motion.div key={i} variants={i % 2 === 0 ? slideInBottomLeft : slideInBottomRight} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection className="py-20 bg-muted/50" variants={staggerContainerSlow}>
          <div className="container">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="max-w-4xl mx-auto bg-card border-border">
                <CardContent className="p-8 md:p-12">
                  <div className="flex gap-2 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-accent" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl mb-6 italic">
                    "GrowthPilot AI helped us reduce manual workload by 42% within 90 days. Their strategic approach is unmatched."
                  </p>
                  <p className="text-muted-foreground">Ahmad Alhagdow — Gateway Tutoring Academy Co-Founder</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-20 bg-background" variants={staggerContainer}>
          <div className="container">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to build intelligent systems that drive real business outcomes?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90"
                    onClick={openCalendly}
                  >
                    Book Your Strategy Call
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/services">
                    <Button size="lg" variant="outline">
                      Explore All Services
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
