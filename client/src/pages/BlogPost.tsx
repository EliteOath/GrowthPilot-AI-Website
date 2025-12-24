import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { useBookStrategyCall } from "@/hooks/useBookStrategyCall";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Loader2, ArrowLeft, Clock, Calendar, Eye } from "lucide-react";
import { Streamdown } from "streamdown";

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  
  const { data: post, isLoading } = trpc.blog.getBySlug.useQuery({ slug });
  const { openModal, Modal } = useBookStrategyCall();

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      <Footer />
      <Modal />
    </div>
  );
}

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <Link href="/insights">
              <Button>
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Insights
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.metaTitle || post.title}</title>
        <meta name="description" content={post.metaDescription || post.excerpt || ""} />
        <meta name="keywords" content={post.metaKeywords || ""} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.metaTitle || post.title} />
        <meta property="og:description" content={post.metaDescription || post.excerpt || ""} />
        <meta property="og:type" content="article" />
        
        {/* Article metadata */}
        {post.publishedAt && <meta property="article:published_time" content={post.publishedAt.toISOString()} />}
        {post.author && <meta property="article:author" content={post.author} />}
        {post.category && <meta property="article:section" content={post.category} />}
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Person",
              "name": post.author,
              "jobTitle": post.authorRole
            },
            "datePublished": post.publishedAt?.toISOString(),
            "dateModified": post.updatedAt?.toISOString(),
            "publisher": {
              "@type": "Organization",
              "name": "GrowthPilot AI"
            },
            "articleSection": post.category,
            "wordCount": post.content.split(/\s+/).length
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Back Button */}
          <section className="py-6 border-b">
            <div className="container">
              <Link href="/insights">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Insights
                </Button>
              </Link>
            </div>
          </section>

          {/* Article Header */}
          <article className="py-12">
            <div className="container max-w-4xl">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} min read</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishedAt!).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.viewCount} views</span>
                    </div>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-6">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-3 pt-6 border-t">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {post.author?.charAt(0) || "A"}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{post.author}</div>
                    <div className="text-sm text-muted-foreground">{post.authorRole}</div>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <Streamdown>{post.content}</Streamdown>
              </div>

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex flex-wrap gap-2 mb-6">
                  {JSON.parse(post.tags as string).map((tag: string, index: number) => (
                    <span 
                      key={index}
                      className="text-xs bg-muted px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* CTA Section */}
          <section className="py-20 bg-muted/30">
            <div className="container max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule a free strategy call to discover how AI can drive measurable results for your organization.
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={openModal}
              >
                Book a Strategy Call
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
