import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export function AffiliateDisclaimer() {
  return (
    <Alert className="bg-primary/5 border-primary/20 mb-8">
      <Info className="h-4 w-4 text-primary" />
      <AlertTitle className="text-primary font-semibold">Affiliate Disclosure</AlertTitle>
      <AlertDescription className="text-sm text-muted-foreground">
        We are a participant in the WishUp Affiliate Program. When you sign up for WishUp's virtual assistant services through our links, 
        we may earn a commission at no additional cost to you. This helps support our content while ensuring you get access to top 0.1% 
        virtual assistant talent at the best available prices. We maintain complete editorial independence, and our recommendations are 
        based on thorough research and firsthand experience with WishUp's services.
      </AlertDescription>
    </Alert>
  );
}