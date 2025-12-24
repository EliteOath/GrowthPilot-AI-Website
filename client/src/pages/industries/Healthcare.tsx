import { Helmet } from "react-helmet-async";
import { useBookStrategyCall } from "@/hooks/useBookStrategyCall";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Heart, Shield, Clock, Users } from "lucide-react";

export default function Healthcare() {
  const { openModal, Modal } = useBookStrategyCall();

  return (
    <>
      <Helmet>
        <title>AI Solutions for Healthcare | GrowthPilot AI</title>
        <meta name="description" content="Transform healthcare delivery with AI-powered patient care, administrative automation, and clinical decision support. Improve outcomes while reducing costs." />
        <meta name="keywords" content="AI for healthcare, medical AI, healthcare automation, clinical AI, patient care technology" />
        <meta property="og:title" content="AI Solutions for Healthcare | GrowthPilot AI" />
        <meta property="og:description" content="Transform healthcare delivery with AI-powered automation and intelligent clinical systems." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Solutions for Healthcare",
            "provider": {
              "@type": "Organization",
              "name": "GrowthPilot AI"
            },
            "description": "AI consulting and implementation services for healthcare providers including hospitals, clinics, medical practices, and healthcare systems.",
            "areaServed": "Worldwide",
            "audience": {
              "@type": "Audience",
              "audienceType": "Healthcare Providers"
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
                AI Solutions for Healthcare
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Enhance patient care, streamline operations, and reduce administrative burden with intelligent automation designed for hospitals, clinics, medical practices, and healthcare systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[oklch(0.70_0.15_200)] hover:bg-[oklch(0.65_0.15_200)]">
                  Book a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Download Healthcare AI Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Challenges Facing Healthcare Organizations</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <Clock className="h-12 w-12 text-[oklch(0.45_0.10_250)] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Administrative Overload</h3>
                  <p className="text-gray-600">
                    Clinicians spend up to 50% of their time on documentation, billing, and administrative tasks instead of patient care.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-[oklch(0.45_0.10_250)] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Staff Shortages</h3>
                  <p className="text-gray-600">
                    Healthcare workforce shortages create burnout and limit capacity to serve growing patient populations effectively.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-[oklch(0.45_0.10_250)] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Quality & Compliance</h3>
                  <p className="text-gray-600">
                    Maintaining consistent quality of care while meeting complex regulatory requirements and documentation standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Solutions */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">How AI Transforms Healthcare</h2>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Clinical Decision Support</h3>
                  <p className="text-gray-600 mb-4">
                    AI-powered systems analyze patient data, medical history, and clinical guidelines to provide real-time recommendations, flag potential issues, and support evidence-based care decisions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Early disease detection and risk stratification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Treatment protocol recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Medication interaction alerts and dosing guidance</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg">
                  <div className="text-center">
                    <Heart className="h-16 w-16 text-[oklch(0.45_0.10_250)] mx-auto mb-4" />
                    <div className="text-4xl font-bold text-[oklch(0.45_0.10_250)] mb-2">28%</div>
                    <p className="text-gray-600">Improvement in diagnostic accuracy</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 bg-gray-100 p-8 rounded-lg">
                  <div className="text-center">
                    <Clock className="h-16 w-16 text-[oklch(0.45_0.10_250)] mx-auto mb-4" />
                    <div className="text-4xl font-bold text-[oklch(0.45_0.10_250)] mb-2">45%</div>
                    <p className="text-gray-600">Reduction in documentation time</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4">Administrative Automation</h3>
                  <p className="text-gray-600 mb-4">
                    Automate routine administrative tasks including appointment scheduling, insurance verification, medical coding, billing, and clinical documentation to free up staff for patient-facing activities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Automated medical coding and billing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>AI-powered clinical documentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Intelligent appointment scheduling and reminders</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Patient Engagement & Care Coordination</h3>
                  <p className="text-gray-600 mb-4">
                    Enhance patient experience and outcomes with AI-powered communication tools, personalized care plans, remote monitoring, and proactive outreach for chronic disease management.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>24/7 AI-powered patient triage and support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Remote patient monitoring and alerts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Personalized care plan recommendations</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg">
                  <div className="text-center">
                    <Users className="h-16 w-16 text-[oklch(0.45_0.10_250)] mx-auto mb-4" />
                    <div className="text-4xl font-bold text-[oklch(0.45_0.10_250)] mb-2">34%</div>
                    <p className="text-gray-600">Increase in patient satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Healthcare-Specific Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Hospitals</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Bed management optimization</li>
                    <li>• Surgical scheduling AI</li>
                    <li>• Sepsis prediction models</li>
                    <li>• Resource allocation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Medical Practices</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Automated appointment scheduling</li>
                    <li>• Clinical documentation</li>
                    <li>• Patient communication</li>
                    <li>• Revenue cycle management</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Specialty Clinics</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Diagnostic imaging analysis</li>
                    <li>• Treatment planning support</li>
                    <li>• Outcome prediction</li>
                    <li>• Referral management</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Healthcare Systems</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Population health management</li>
                    <li>• Quality metrics tracking</li>
                    <li>• Supply chain optimization</li>
                    <li>• Predictive analytics</li>
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
                <h2 className="text-3xl font-bold mb-6">Case Study: Regional Hospital System</h2>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <div className="text-4xl font-bold text-[oklch(0.70_0.15_200)] mb-2">38%</div>
                    <p className="text-gray-300">Reduction in administrative costs</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[oklch(0.70_0.15_200)] mb-2">$3.2M</div>
                    <p className="text-gray-300">Annual savings</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[oklch(0.70_0.15_200)] mb-2">22%</div>
                    <p className="text-gray-300">Improvement in patient outcomes</p>
                  </div>
                </div>
                <p className="text-gray-200 mb-6">
                  A 400-bed regional hospital system implemented AI-powered clinical decision support, administrative automation, and patient engagement tools. The system reduced clinician documentation time by 45%, improved diagnostic accuracy by 28%, and increased patient satisfaction scores by 34% while achieving significant cost savings.
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
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Healthcare Delivery?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Discover how AI can improve patient outcomes, reduce administrative burden, and enhance operational efficiency.
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
