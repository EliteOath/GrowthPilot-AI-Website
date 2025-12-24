import { Helmet } from "react-helmet-async";
import { useBookStrategyCall } from "@/hooks/useBookStrategyCall";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, DollarSign, Shield, TrendingUp, Users } from "lucide-react";

export default function FinancialServices() {
  const { openModal, Modal } = useBookStrategyCall();

  return (
    <>
      <Helmet>
        <title>AI Solutions for Financial Services | GrowthPilot AI</title>
        <meta name="description" content="Transform financial services with AI-powered risk management, fraud detection, and customer experience. Enhance compliance while reducing operational costs." />
        <meta name="keywords" content="AI for finance, fintech AI, financial automation, risk management AI, banking technology" />
        <meta property="og:title" content="AI Solutions for Financial Services | GrowthPilot AI" />
        <meta property="og:description" content="Transform financial services with AI-powered automation and intelligent risk management systems." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Solutions for Financial Services",
            "provider": {
              "@type": "Organization",
              "name": "GrowthPilot AI"
            },
            "description": "AI consulting and implementation services for financial institutions including banks, credit unions, wealth management firms, and insurance companies.",
            "areaServed": "Worldwide",
            "audience": {
              "@type": "Audience",
              "audienceType": "Financial Institutions"
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
                AI Solutions for Financial Services
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Enhance risk management, detect fraud, and deliver personalized experiences with intelligent automation designed for banks, credit unions, wealth management firms, and insurance companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[oklch(0.70_0.15_200)] hover:bg-[oklch(0.65_0.15_200)]">
                  Book a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Download Financial Services AI Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Challenges Facing Financial Institutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-[oklch(0.45_0.10_250)] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Fraud & Risk Management</h3>
                  <p className="text-gray-600">
                    Sophisticated fraud schemes and evolving cyber threats require advanced detection systems that adapt in real-time.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-[oklch(0.45_0.10_250)] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Customer Expectations</h3>
                  <p className="text-gray-600">
                    Customers demand instant, personalized service across channels while maintaining security and regulatory compliance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <DollarSign className="h-12 w-12 text-[oklch(0.45_0.10_250)] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Operational Efficiency</h3>
                  <p className="text-gray-600">
                    Manual processes for loan underwriting, compliance, and customer service create bottlenecks and increase costs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Solutions */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">How AI Transforms Financial Services</h2>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Fraud Detection & Risk Management</h3>
                  <p className="text-gray-600 mb-4">
                    AI-powered systems analyze transaction patterns, customer behavior, and market data in real-time to detect anomalies, prevent fraud, assess credit risk, and ensure regulatory compliance with unprecedented accuracy.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Real-time fraud detection and prevention</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Automated credit risk assessment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Anti-money laundering (AML) monitoring</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg">
                  <div className="text-center">
                    <Shield className="h-16 w-16 text-[oklch(0.45_0.10_250)] mx-auto mb-4" />
                    <div className="text-4xl font-bold text-[oklch(0.45_0.10_250)] mb-2">87%</div>
                    <p className="text-gray-600">Reduction in fraud losses</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 bg-gray-100 p-8 rounded-lg">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 text-[oklch(0.45_0.10_250)] mx-auto mb-4" />
                    <div className="text-4xl font-bold text-[oklch(0.45_0.10_250)] mb-2">65%</div>
                    <p className="text-gray-600">Faster loan processing time</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4">Intelligent Process Automation</h3>
                  <p className="text-gray-600 mb-4">
                    Automate loan underwriting, account opening, compliance reporting, document processing, and back-office operations to reduce processing time, minimize errors, and free staff for high-value advisory work.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Automated loan underwriting and approval</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Document processing and verification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Regulatory compliance automation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Personalized Customer Experience</h3>
                  <p className="text-gray-600 mb-4">
                    Deliver tailored financial advice, product recommendations, and proactive support through AI-powered chatbots, robo-advisors, and predictive analytics that understand individual customer needs and financial goals.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>AI-powered financial advisory services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>24/7 intelligent customer support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Personalized product recommendations</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg">
                  <div className="text-center">
                    <Users className="h-16 w-16 text-[oklch(0.45_0.10_250)] mx-auto mb-4" />
                    <div className="text-4xl font-bold text-[oklch(0.45_0.10_250)] mb-2">48%</div>
                    <p className="text-gray-600">Increase in customer satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Financial Services-Specific Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Banks</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Fraud detection systems</li>
                    <li>• Loan underwriting automation</li>
                    <li>• Customer churn prediction</li>
                    <li>• Branch optimization</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Credit Unions</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Member service chatbots</li>
                    <li>• Risk assessment models</li>
                    <li>• Personalized offerings</li>
                    <li>• Compliance automation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Wealth Management</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Robo-advisory platforms</li>
                    <li>• Portfolio optimization</li>
                    <li>• Market sentiment analysis</li>
                    <li>• Client reporting automation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Insurance</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Claims processing automation</li>
                    <li>• Risk underwriting models</li>
                    <li>• Fraud detection</li>
                    <li>• Customer lifetime value prediction</li>
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
                <h2 className="text-3xl font-bold mb-6">Case Study: Regional Bank</h2>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <div className="text-4xl font-bold text-[oklch(0.70_0.15_200)] mb-2">87%</div>
                    <p className="text-gray-300">Reduction in fraud losses</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[oklch(0.70_0.15_200)] mb-2">$4.2M</div>
                    <p className="text-gray-300">Annual cost savings</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[oklch(0.70_0.15_200)] mb-2">65%</div>
                    <p className="text-gray-300">Faster loan processing</p>
                  </div>
                </div>
                <p className="text-gray-200 mb-6">
                  A regional bank with $5B in assets implemented AI-powered fraud detection, automated loan underwriting, and intelligent customer service. The bank reduced fraud losses by 87%, accelerated loan processing by 65%, and improved customer satisfaction by 48% while achieving $4.2M in annual cost savings.
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
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Financial Services?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Discover how AI can enhance risk management, improve customer experience, and drive operational efficiency.
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
