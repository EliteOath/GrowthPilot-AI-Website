import { Helmet } from "react-helmet-async";
import { useBookStrategyCall } from "@/hooks/useBookStrategyCall";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, TrendingUp, Users, FileText, Clock } from "lucide-react";

export default function ProfessionalServices() {
  const { openModal, Modal } = useBookStrategyCall();

  return (
    <>
      <Helmet>
        <title>AI Solutions for Professional Services | GrowthPilot AI</title>
        <meta name="description" content="Transform your professional services firm with AI-powered automation, client management, and knowledge systems. Increase billable hours and improve service delivery." />
        <meta name="keywords" content="AI for professional services, legal AI, consulting automation, accounting AI, professional services technology" />
        <meta property="og:title" content="AI Solutions for Professional Services | GrowthPilot AI" />
        <meta property="og:description" content="Transform your professional services firm with AI-powered automation and intelligent systems." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Solutions for Professional Services",
            "provider": {
              "@type": "Organization",
              "name": "GrowthPilot AI"
            },
            "description": "AI consulting and implementation services for professional services firms including legal, consulting, accounting, and advisory businesses.",
            "areaServed": "Worldwide",
            "audience": {
              "@type": "Audience",
              "audienceType": "Professional Services Firms"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[oklch(0.25_0.05_250)] to-[oklch(0.20_0.04_250)] text-white py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI Solutions for Professional Services
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Increase billable hours, enhance client service, and streamline operations with intelligent automation designed for law firms, consulting practices, accounting firms, and advisory businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[oklch(0.70_0.15_200)] hover:bg-[oklch(0.65_0.15_200)]">
                  Book a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Download Case Study
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Challenges Facing Professional Services Firms</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <Clock className="h-12 w-12 text-[oklch(0.45_0.10_250)] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Time-Intensive Tasks</h3>
                  <p className="text-gray-600">
                    Billable hours lost to document review, research, data entry, and administrative work that could be automated.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <FileText className="h-12 w-12 text-[oklch(0.45_0.10_250)] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Knowledge Management</h3>
                  <p className="text-gray-600">
                    Critical expertise trapped in individual minds, making it difficult to scale services and maintain consistency.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-[oklch(0.45_0.10_250)] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Client Expectations</h3>
                  <p className="text-gray-600">
                    Clients demand faster turnaround, 24/7 availability, and more transparent communication throughout engagements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Solutions */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">How AI Transforms Professional Services</h2>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Intelligent Document Processing</h3>
                  <p className="text-gray-600 mb-4">
                    AI-powered systems automatically extract, analyze, and summarize information from contracts, case files, financial statements, and research documents. Reduce document review time by up to 80% while improving accuracy.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Automated contract analysis and risk identification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Intelligent document classification and routing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Automated data extraction from unstructured documents</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 text-[oklch(0.45_0.10_250)] mx-auto mb-4" />
                    <div className="text-4xl font-bold text-[oklch(0.45_0.10_250)] mb-2">80%</div>
                    <p className="text-gray-600">Reduction in document review time</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 bg-gray-100 p-8 rounded-lg">
                  <div className="text-center">
                    <Users className="h-16 w-16 text-[oklch(0.45_0.10_250)] mx-auto mb-4" />
                    <div className="text-4xl font-bold text-[oklch(0.45_0.10_250)] mb-2">35%</div>
                    <p className="text-gray-600">Increase in billable hours</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4">AI-Powered Research & Knowledge Systems</h3>
                  <p className="text-gray-600 mb-4">
                    Build institutional knowledge bases that learn from every engagement. AI systems provide instant access to relevant precedents, best practices, and expert insights, enabling junior staff to deliver senior-level work.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Intelligent legal and business research automation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Contextual knowledge retrieval from past engagements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>AI-assisted brief and proposal generation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Client Communication & Engagement</h3>
                  <p className="text-gray-600 mb-4">
                    Enhance client relationships with AI-powered communication tools that provide 24/7 responsiveness, proactive updates, and personalized insights. Improve client satisfaction while reducing partner workload.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Intelligent client portals with AI-powered Q&A</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Automated status updates and milestone notifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Predictive analytics for client needs and opportunities</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg">
                  <div className="text-center">
                    <CheckCircle2 className="h-16 w-16 text-[oklch(0.45_0.10_250)] mx-auto mb-4" />
                    <div className="text-4xl font-bold text-[oklch(0.45_0.10_250)] mb-2">92%</div>
                    <p className="text-gray-600">Client satisfaction rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Industry-Specific Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Law Firms</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Contract review & analysis</li>
                    <li>• Legal research automation</li>
                    <li>• E-discovery optimization</li>
                    <li>• Precedent identification</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Consulting Firms</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Data analysis automation</li>
                    <li>• Report generation</li>
                    <li>• Market research synthesis</li>
                    <li>• Proposal development</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Accounting Firms</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Automated bookkeeping</li>
                    <li>• Anomaly detection</li>
                    <li>• Tax optimization</li>
                    <li>• Audit automation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Advisory Services</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Client risk assessment</li>
                    <li>• Portfolio analysis</li>
                    <li>• Compliance monitoring</li>
                    <li>• Strategic planning tools</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[oklch(0.25_0.05_250)] text-white p-8 md:p-12 rounded-lg">
                <h2 className="text-3xl font-bold mb-6">Case Study: Mid-Size Law Firm</h2>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <div className="text-4xl font-bold text-[oklch(0.70_0.15_200)] mb-2">42%</div>
                    <p className="text-gray-300">Increase in billable hours per attorney</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[oklch(0.70_0.15_200)] mb-2">$850K</div>
                    <p className="text-gray-300">Additional annual revenue</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[oklch(0.70_0.15_200)] mb-2">6 months</div>
                    <p className="text-gray-300">ROI timeline</p>
                  </div>
                </div>
                <p className="text-gray-200 mb-6">
                  A 45-attorney law firm implemented AI-powered document review, legal research automation, and intelligent knowledge management. The firm reduced time spent on routine tasks by 35%, allowing attorneys to focus on high-value client work and take on 28% more cases without additional hiring.
                </p>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Practice?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Discover how AI can increase your billable hours, improve client satisfaction, and give your firm a competitive edge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Book a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Download AI Opportunity Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
