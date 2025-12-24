import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useBookStrategyCall } from "@/hooks/useBookStrategyCall";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    slug: "home-services-automation",
    title: "Home Services Company",
    industry: "HVAC & Plumbing Services",
    highlight: "42% reduction in manual workload within 3 months",
    challenge: "The company was overwhelmed with inbound calls, manual scheduling, and dispatch coordination. Their team spent hours each day on repetitive administrative tasks.",
    solution: "GrowthPilot AI implemented an intelligent call handling system with automated scheduling and dispatch workflows integrated with their existing CRM.",
    results: "Manual workload decreased by 42%, customer response times improved by 65%, and the team could focus on higher-value customer interactions."
  },
  {
    slug: "healthcare-patient-engagement",
    title: "Healthcare Provider",
    industry: "Regional Healthcare",
    highlight: "24/7 patient support with 67% reduction in missed appointments",
    challenge: "Patient inquiries outside business hours were going unanswered, leading to missed appointments and decreased patient satisfaction.",
    solution: "We deployed an intelligent AI chatbot capable of handling patient inquiries, appointment scheduling, and providing accurate medical information 24/7.",
    results: "Round-the-clock patient support achieved, 67% reduction in missed appointments, and 85% of patient inquiries resolved automatically."
  },
  {
    slug: "professional-services-efficiency",
    title: "Professional Services Firm",
    industry: "Consulting",
    highlight: "75% faster onboarding process",
    challenge: "The client onboarding process was taking 2-3 weeks and required significant manual effort from senior consultants.",
    solution: "We built an AI-driven onboarding platform that automated document collection, compliance checks, and initial client assessments.",
    results: "Onboarding time reduced from 3 weeks to 5 days, senior consultant time freed for billable work, and 92% client satisfaction with the process."
  }
];

export default function CaseStudies() {
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
                Client Success Stories
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Real results from organizations that partnered with GrowthPilot AI.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="space-y-8 max-w-4xl mx-auto">
              {caseStudies.map((study) => (
                <Card key={study.slug} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{study.industry}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-lg font-bold text-lg mb-4">
                        {study.highlight}
                      </div>
                    </div>

                    <div className="space-y-4 text-muted-foreground mb-6">
                      <p>
                        <strong className="text-foreground">Challenge:</strong> {study.challenge}
                      </p>
                      <p>
                        <strong className="text-foreground">Solution:</strong> {study.solution}
                      </p>
                      <p>
                        <strong className="text-foreground">Results:</strong> {study.results}
                      </p>
                    </div>

                    <Link href={`/case-studies/${study.slug}`}>
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        View Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Become Our Next Success Story
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
