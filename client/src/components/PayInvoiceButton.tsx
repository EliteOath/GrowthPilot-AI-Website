import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

interface PayInvoiceButtonProps {
  invoiceId: number;
}

export default function PayInvoiceButton({ invoiceId }: PayInvoiceButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const payMutation = trpc.billing.payInvoice.useMutation({
    onSuccess: (data) => {
      if (data.checkoutUrl) {
        toast.success("Redirecting to payment...");
        window.open(data.checkoutUrl, "_blank");
      }
      setIsProcessing(false);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to initiate payment");
      setIsProcessing(false);
    },
  });

  const handlePayment = () => {
    setIsProcessing(true);
    payMutation.mutate({ invoiceId });
  };

  return (
    <Button
      size="sm"
      onClick={handlePayment}
      disabled={isProcessing || payMutation.isPending}
      className="bg-accent hover:bg-accent/90"
    >
      {isProcessing || payMutation.isPending ? (
        <>
          <Loader2 className="h-3 w-3 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <CreditCard className="h-3 w-3 mr-2" />
          Pay Now
        </>
      )}
    </Button>
  );
}
