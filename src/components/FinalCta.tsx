import { siteConfig } from "@/config/site";
import { Button } from "./ui/Button";
import { ExternalLink } from "lucide-react";

export function FinalCta() {

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to explore Kimi K3?
        </h2>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Join using the referral link and unlock advanced reasoning and contextual capabilities today.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <Button 
            size="lg" 
            className="h-14 px-10 text-lg w-full sm:w-auto"
            onClick={() => {
              window.open(siteConfig.referralUrl, "_blank", "noopener,noreferrer");
            }}
          >
            Open referral link
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg p-1">
              <img src={siteConfig.qrCodePath} alt="QR Code" className="w-full h-full object-cover rounded-md" />
            </div>
            <span className="text-sm font-medium text-slate-300">Scan or click to begin</span>
          </div>
        </div>
      </div>
    </section>
  );
}
