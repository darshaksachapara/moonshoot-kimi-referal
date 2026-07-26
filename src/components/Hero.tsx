import { ReferralCard } from "./ReferralCard";
import { siteConfig } from "@/config/site";
import { Button } from "./ui/Button";
import { CopyButton } from "./ui/CopyButton";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const hasValidReferralUrl = siteConfig.referralUrl && !siteConfig.referralUrl.includes("PASTE_MY_KIMI_REFERRAL_LINK_HERE");

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden" id="overview">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-8 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-300 w-fit text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Explore next-generation AI</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Build, reason, and create with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Kimi K3</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
              Experience a highly capable reasoning model designed for long-context work, coding, and deep analysis. Join through the referral link to begin your journey.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto min-w-[200px]"
                disabled={!hasValidReferralUrl}
                onClick={() => {
                  if (hasValidReferralUrl) {
                    window.open(siteConfig.referralUrl, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                Get started with Kimi
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <CopyButton 
                value={siteConfig.referralUrl} 
                className="w-full sm:w-auto h-14 px-8 border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-base"
                disabled={!hasValidReferralUrl}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <ReferralCard />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
