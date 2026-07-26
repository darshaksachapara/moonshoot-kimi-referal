import { siteConfig } from "@/config/site";
import { Button } from "./ui/Button";
import { CopyButton } from "./ui/CopyButton";
import { ExternalLink } from "lucide-react";

export function ReferralCard() {

  return (
    <div id="referral" className="relative group rounded-3xl p-1 max-w-sm mx-auto w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-indigo-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50" />
      <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-[1.4rem] p-6 sm:p-8 flex flex-col items-center text-center shadow-2xl">
        
        <div className="mb-6 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative w-48 h-48 bg-white p-3 rounded-2xl shadow-inner mx-auto">
            <img 
              src={siteConfig.qrCodePath} 
              alt="QR code for the Kimi K3 referral link" 
              className="w-full h-full object-contain rounded-xl"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-sm font-medium text-slate-300">
            Scan to open your referral invitation
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="flex items-center gap-2 p-2 bg-slate-950/50 border border-slate-800 rounded-xl overflow-hidden">
            <div className="flex-1 truncate text-left pl-2 text-sm text-slate-400 select-all">
              {siteConfig.referralUrl}
            </div>
            <CopyButton value={siteConfig.referralUrl} />
          </div>

          <Button 
            className="w-full text-base font-semibold h-12"
            onClick={() => {
              window.open(siteConfig.referralUrl, "_blank", "noopener,noreferrer");
            }}
          >
            Sign up now
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>

          <p className="text-xs text-slate-500 mt-2">
            You will be redirected to Kimi to continue.
          </p>
        </div>

      </div>
    </div>
  );
}
