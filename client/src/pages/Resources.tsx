import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Download, FileText, CheckCircle, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Resources() {
  const [selectedResource, setSelectedResource] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const { data: resources, isLoading } = trpc.resources.list.useQuery();
  const downloadMutation = trpc.resources.download.useMutation({
    onSuccess: (data) => {
      toast.success("Download started!");
      // Open the file URL in a new tab
      window.open(data.fileUrl, "_blank");
      setSelectedResource(null);
      setFormData({ name: "", email: "", company: "" });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to download resource");
    },
  });

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedResource) {
      try {
        // Submit to Formspree
        const resource = resources?.find(r => r.id === selectedResource);
        await fetch("https://formspree.io/f/xeonappo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...formData,
            resourceTitle: resource?.title,
            formType: "Resource Download"
          })
        });
        
        // Also track in database
        downloadMutation.mutate({
          resourceId: selectedResource,
          ...formData,
        });
      } catch (error) {
        toast.error("Failed to submit form. Please try again.");
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    return <FileText className="h-6 w-6" />;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Free AI Strategy Resources
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Download our expert guides, templates, and tools to accelerate your AI adoption journey
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 bg-background">
          <div className="container">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : resources && resources.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resources.map((resource) => (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                          {getCategoryIcon(resource.category || "")}
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          {resource.category || "Guide"}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {resource.downloadCount} downloads
                        </span>
                        <Button
                          onClick={() => setSelectedResource(resource.id)}
                          className="bg-accent hover:bg-accent/90"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No resources available at the moment</p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                What You'll Get
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Actionable Frameworks",
                    description: "Step-by-step guides and templates you can implement immediately"
                  },
                  {
                    title: "Expert Insights",
                    description: "Best practices from real AI implementation projects"
                  },
                  {
                    title: "ROI Calculators",
                    description: "Tools to estimate the business impact of AI initiatives"
                  },
                  {
                    title: "Implementation Checklists",
                    description: "Comprehensive checklists to ensure successful deployment"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Download Dialog */}
      <Dialog open={selectedResource !== null} onOpenChange={() => setSelectedResource(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Download Resource</DialogTitle>
            <DialogDescription>
              Please provide your information to download this resource
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleDownload} className="space-y-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Your full name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="your@email.com"
              />
            </div>
            <div>
              <Label htmlFor="company">Company (Optional)</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Your company name"
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={downloadMutation.isPending}
            >
              {downloadMutation.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Download Now
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
