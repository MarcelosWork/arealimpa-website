"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/QuoteModal";

export function FloatingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating CTA - Only visible on mobile */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <Button
          onClick={() => setOpen(true)}
          size="lg"
          className="h-14 px-6 rounded-full shadow-2xl bg-gradient-to-r from-[#2563eb] to-[#3b82f6] hover:from-[#1e40af] hover:to-[#2563eb] text-white font-semibold"
        >
          <Phone className="h-5 w-5 mr-2" />
          Pedir Orçamento
        </Button>
      </div>
      <QuoteModal open={open} onOpenChange={setOpen} />
    </>
  );
}
