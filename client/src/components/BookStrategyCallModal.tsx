import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, Calendar, Sparkles } from "lucide-react";

interface BookStrategyCallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BookStrategyCallModal({ open, onOpenChange }: BookStrategyCallModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xeonappo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          formType: "Book a Strategy Call"
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          message: ""
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={open} onOpenChange={(open) => { onOpenChange(open); if (!open) setIsSubmitted(false); }}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
            <p className="text-muted-foreground mb-6">
              We've received your request for a strategy call. Here's what happens next:
            </p>
            <div className="text-left space-y-3 mb-6 max-w-md mx-auto">
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg">1.</span>
                <p className="text-sm">Our team will review your information within 24 hours</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg">2.</span>
                <p className="text-sm">You'll receive an email with available time slots for your consultation</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg">3.</span>
                <p className="text-sm">We'll conduct a 30-minute strategy session to identify AI opportunities tailored to your business</p>
              </div>
            </div>
            <Button onClick={() => { onOpenChange(false); setIsSubmitted(false); }} className="w-full">
              Close
            </Button>
          </div>
        ) : (
        <>
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-accent" />
            </div>
            <div>
              <DialogTitle className="text-2xl">Book Your Strategy Call</DialogTitle>
              <DialogDescription className="text-base mt-1">
                Let's discuss how AI can transform your business
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mb-4">
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">What to expect:</p>
              <ul className="space-y-1">
                <li>• 30-minute consultation with our AI strategy experts</li>
                <li>• Identify high-impact AI opportunities for your business</li>
                <li>• Receive a preliminary ROI assessment</li>
              </ul>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="John Smith"
                className="mt-1.5"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@company.com"
                className="mt-1.5"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className="mt-1.5"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Label htmlFor="company">Company Name *</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Acme Corp"
                className="mt-1.5"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="message">What challenges are you looking to solve?</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your business goals and challenges..."
              rows={4}
              className="mt-1.5 resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Book Strategy Call"
              )}
            </Button>
          </div>
        </form>
        </>
        )}
      </DialogContent>
    </Dialog>
  );
}
