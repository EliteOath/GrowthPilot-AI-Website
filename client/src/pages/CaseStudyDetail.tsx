import { useRoute } from "wouter";
import { useBookStrategyCall } from "@/hooks/useBookStrategyCall";
import { ArrowLeft, TrendingUp, Users, Clock, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock case study data - in production, this would come from the database
const caseStudies = {
  "home-services-automation": {
    id: 1,
    title: "Home Services Company Reduces Manual Workload by 42%",
    industry: "Home Services",
    client: "Home Services Company",
    challenge: "The company was spending over 20 hours per week on manual scheduling, customer follow-ups, and quote generation. This operational burden limited their ability to scale and reduced team capacity for revenue-generating activities.",
    solution: "We implemented an AI-powered automation system that handled appointment scheduling, automated customer communications, and generated instant quotes based on service parameters. The system integrated with their existing CRM and calendar systems.",
    results: [
      { metric: "42%", description: "Reduction in manual workload" },
      { metric: "90 days", description: "Implementation timeline" },
      { metric: "3.2x", description: "Increase in quote generation speed" },
      { metric: "$85K", description: "Annual cost savings" }
    ],
    outcomes: [
      "Automated scheduling system handling 200+ appointments per month",
      "Instant quote generation reducing response time from 24 hours to 2 minutes",
      "Customer satisfaction scores increased by 28%",
      "Team capacity freed up for strategic growth initiatives"
    ],
    technologies: ["Custom AI Models", "CRM Integration", "Natural Language Processing", "Workflow Automation"],
    timeline: "3 months",
    testimonial: {
      quote: "GrowthPilot AI helped us reduce manual workload by 42% within 90 days. Their strategic approach is unmatched.",
      author: "Operations Director",
      company: "Home Services Company"
    },
    imageUrl: "/case-study-1.jpg"
  },
  "healthcare-patient-engagement": {
    id: 2,
    title: "Healthcare Provider Achieves 24/7 Patient Support",
    industry: "Healthcare",
    client: "Regional Healthcare Provider",
    challenge: "Patient inquiries outside business hours were going unanswered, leading to missed appointments and decreased patient satisfaction. The administrative team was overwhelmed with routine questions about appointments, billing, and general information.",
    solution: "We deployed an intelligent AI chatbot capable of handling patient inquiries, appointment scheduling, and providing accurate medical information 24/7. The system was HIPAA-compliant and integrated with their patient management system.",
    results: [
      { metric: "24/7", description: "Patient support availability" },
      { metric: "67%", description: "Reduction in missed appointments" },
      { metric: "85%", description: "Patient inquiries resolved automatically" },
      { metric: "4.8/5", description: "Patient satisfaction rating" }
    ],
    outcomes: [
      "Round-the-clock patient support without additional staffing costs",
      "Significant reduction in no-shows through automated reminders",
      "Administrative staff freed to focus on complex patient needs",
      "Improved patient experience and engagement metrics"
    ],
    technologies: ["HIPAA-Compliant AI", "Natural Language Understanding", "EHR Integration", "Automated Scheduling"],
    timeline: "4 months",
    testimonial: {
      quote: "The AI solution transformed our patient engagement. We now provide 24/7 support without increasing headcount.",
      author: "Chief Medical Officer",
      company: "Regional Healthcare Provider"
    },
    imageUrl: "/case-study-2.jpg"
  },
  "professional-services-efficiency": {
    id: 3,
    title: "Professional Services Firm Streamlines Client Onboarding",
    industry: "Professional Services",
    client: "Consulting Firm",
    challenge: "The client onboarding process was taking 2-3 weeks and required significant manual effort from senior consultants. This delayed project starts and created bottlenecks in the sales-to-delivery pipeline.",
    solution: "We built an AI-driven onboarding platform that automated document collection, compliance checks, and initial client assessments. The system used intelligent forms and automated workflows to guide clients through the process.",
    results: [
      { metric: "75%", description: "Faster onboarding process" },
      { metric: "5 days", description: "Average onboarding time" },
      { metric: "92%", description: "Client satisfaction with process" },
      { metric: "$120K", description: "Annual productivity gains" }
    ],
    outcomes: [
      "Onboarding time reduced from 3 weeks to 5 days",
      "Senior consultant time freed for billable work",
      "Improved client experience with streamlined process",
      "Scalable system supporting 3x growth without additional staff"
    ],
    technologies: ["Document AI", "Workflow Automation", "Compliance Checking", "Client Portal"],
    timeline: "2.5 months",
    testimonial: {
      quote: "Our onboarding process went from weeks to days. The ROI was immediate and substantial.",
      author: "Managing Partner",
      company: "Consulting Firm"
    },
    imageUrl: "/case-study-3.jpg"
  }
};

export default function CaseStudyDetail() {
  const { openModal, Modal } = useBookStrategyCall();

  const [, params] = useRoute("/case-studies/:slug");
  const slug = params?.slug || "";
  const caseStudy = caseStudies[slug as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
            <Link href="/case-studies">
              <Button>Back to Case Studies</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Back Button */}
        <section className="py-6 bg-background border-b">
          <div className="container">
            <Link href="/case-studies">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Case Studies
              </Button>
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl">
              <div className="text-sm font-semibold uppercase tracking-wider mb-4">
                {caseStudy.industry}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {caseStudy.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-primary-foreground/90">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{caseStudy.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{caseStudy.timeline} implementation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Key Results</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {caseStudy.results.map((result, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-accent mb-2">
                      {result.metric}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {result.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {caseStudy.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Business Outcomes</h2>
              <div className="space-y-4">
                {caseStudy.outcomes.map((outcome, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground pt-1">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-6xl mb-6">"</div>
              <blockquote className="text-2xl font-medium mb-8">
                {caseStudy.testimonial.quote}
              </blockquote>
              <div>
                <div className="font-semibold">{caseStudy.testimonial.author}</div>
                <div className="text-primary-foreground/80">{caseStudy.testimonial.company}</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Achieve Similar Results?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how we can help your organization leverage AI for measurable business outcomes.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Book a Strategy Call
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline">
                    View More Case Studies
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
