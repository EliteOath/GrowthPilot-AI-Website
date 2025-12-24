import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useBookStrategyCall } from "@/hooks/useBookStrategyCall";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";
import { Loader2 } from "lucide-react";

export default function Insights() {
  const { data: posts, isLoading } = trpc.blog.listPublished.useQuery();
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
                Insights on AI Strategy, Automation, and Business Transformation
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Practical guidance and strategic thinking for organizations leveraging AI.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-background">
          <div className="container">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {posts?.map((post) => (
                  <Card key={post.id} className="border-border hover:shadow-lg transition-shadow flex flex-col">
                    <CardContent className="pt-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 leading-tight">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                      
                      <Link href={`/insights/${post.slug}`}>
                        <Button 
                          variant="outline" 
                          className="w-full"
                        >
                          Read Article
                          <BookOpen className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated on AI Strategy
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get the latest insights, case studies, and strategic guidance delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md border border-input bg-background"
                />
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to develop your AI strategy?
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
