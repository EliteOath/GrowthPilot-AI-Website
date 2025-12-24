import { Helmet } from "react-helmet-async";
import { useBookStrategyCall } from "@/hooks/useBookStrategyCall";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, ShoppingCart, TrendingUp, Target, Package } from "lucide-react";

export default function Ecommerce() {
  const { openModal, Modal } = useBookStrategyCall();

  return (
    <>
      <Helmet>
        <title>AI Solutions for E-commerce | GrowthPilot AI</title>
        <meta name="description" content="Transform your e-commerce business with AI-powered personalization, inventory optimization, and customer engagement. Increase sales and reduce operational costs." />
        <meta name="keywords" content="AI for e-commerce, retail AI, e-commerce automation, personalization AI, online retail technology" />
        <meta property="og:title" content="AI Solutions for E-commerce | GrowthPilot AI" />
        <meta property="og:description" content="Transform your e-commerce business with AI-powered automation and intelligent retail systems." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Solutions for E-commerce",
            "provider": {
              "@type": "Organization",
              "name": "GrowthPilot AI"
            },
            "description": "AI consulting and implementation services for e-commerce businesses including online retailers, marketplaces, D2C brands, and omnichannel merchants.",
            "areaServed": "Worldwide",
            "audience": {
              "@type": "Audience",
              "audienceType": "E-commerce Businesses"
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
                AI Solutions for E-commerce
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Boost sales, optimize inventory, and deliver personalized experiences with intelligent automation designed for online retailers, marketplaces, D2C brands, and omnichannel merchants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[oklch(0.70_0.15_200)] hover:bg-[oklch(0.65_0.15_200)]">
                  Book a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Download E-commerce AI Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Challenges Facing E-commerce Businesses</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <Target className="h-12 w-12 text-[oklch(0.45_0.10_250)] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Customer Acquisition Costs</h3>
                  <p className="text-gray-600">
                    Rising advertising costs and increased competition make it harder to acquire customers profitably while maintaining growth.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Package className="h-12 w-12 text-[oklch(0.45_0.10_250)] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Inventory Management</h3>
                  <p className="text-gray-600">
                    Balancing stock levels across channels, predicting demand, and avoiding stockouts or overstock situations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <ShoppingCart className="h-12 w-12 text-[oklch(0.45_0.10_250)] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Cart Abandonment</h3>
                  <p className="text-gray-600">
                    Average cart abandonment rates exceed 70%, representing significant lost revenue opportunities every day.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Solutions */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">How AI Transforms E-commerce</h2>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Personalization & Recommendations</h3>
                  <p className="text-gray-600 mb-4">
                    AI-powered recommendation engines analyze browsing behavior, purchase history, and customer preferences to deliver personalized product suggestions, content, and offers that drive conversion and increase average order value.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dynamic product recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Personalized email and marketing campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Individualized pricing and promotions</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 text-[oklch(0.45_0.10_250)] mx-auto mb-4" />
                    <div className="text-4xl font-bold text-[oklch(0.45_0.10_250)] mb-2">35%</div>
                    <p className="text-gray-600">Increase in conversion rate</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 bg-gray-100 p-8 rounded-lg">
                  <div className="text-center">
                    <Package className="h-16 w-16 text-[oklch(0.45_0.10_250)] mx-auto mb-4" />
                    <div className="text-4xl font-bold text-[oklch(0.45_0.10_250)] mb-2">28%</div>
                    <p className="text-gray-600">Reduction in inventory costs</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4">Intelligent Inventory & Supply Chain</h3>
                  <p className="text-gray-600 mb-4">
                    Predict demand with precision, optimize stock levels across warehouses and channels, automate reordering, and reduce carrying costs while maintaining product availability and customer satisfaction.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Demand forecasting and trend prediction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Automated inventory optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dynamic pricing based on market conditions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Customer Service & Engagement</h3>
                  <p className="text-gray-600 mb-4">
                    Provide 24/7 customer support with AI-powered chatbots, automate order tracking and returns, recover abandoned carts, and deliver proactive engagement that builds loyalty and increases lifetime value.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>AI chatbots for instant customer support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Automated cart abandonment recovery</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Predictive customer churn prevention</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg">
                  <div className="text-center">
                    <ShoppingCart className="h-16 w-16 text-[oklch(0.45_0.10_250)] mx-auto mb-4" />
                    <div className="text-4xl font-bold text-[oklch(0.45_0.10_250)] mb-2">42%</div>
                    <p className="text-gray-600">Increase in customer lifetime value</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">E-commerce-Specific Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Online Retailers</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Product recommendation engines</li>
                    <li>• Dynamic pricing optimization</li>
                    <li>• Visual search capabilities</li>
                    <li>• Fraud detection systems</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Marketplaces</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Seller performance analytics</li>
                    <li>• Search ranking optimization</li>
                    <li>• Review authenticity detection</li>
                    <li>• Automated moderation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">D2C Brands</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Customer segmentation</li>
                    <li>• Subscription optimization</li>
                    <li>• Influencer ROI tracking</li>
                    <li>• Content personalization</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Omnichannel</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Unified inventory management</li>
                    <li>• Cross-channel attribution</li>
                    <li>• Store fulfillment optimization</li>
                    <li>• Customer journey mapping</li>
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
                <h2 className="text-3xl font-bold mb-6">Case Study: D2C Fashion Brand</h2>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <div className="text-4xl font-bold text-[oklch(0.70_0.15_200)] mb-2">52%</div>
                    <p className="text-gray-300">Increase in average order value</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[oklch(0.70_0.15_200)] mb-2">$2.8M</div>
                    <p className="text-gray-300">Additional annual revenue</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[oklch(0.70_0.15_200)] mb-2">38%</div>
                    <p className="text-gray-300">Reduction in cart abandonment</p>
                  </div>
                </div>
                <p className="text-gray-200 mb-6">
                  A fast-growing D2C fashion brand implemented AI-powered personalization, intelligent inventory management, and automated customer engagement. The brand increased conversion rates by 35%, reduced inventory costs by 28%, and improved customer lifetime value by 42% while scaling operations without proportional cost increases.
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
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your E-commerce Business?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Discover how AI can boost sales, optimize operations, and deliver personalized experiences that drive growth.
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
