import React from "react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 py-12">
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-6">
        <p className="text-sm font-medium text-slate-300 max-w-lg leading-relaxed">
          Independent referral page — not an official Moonshot AI or Kimi website.
        </p>
        
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <span>&copy; {currentYear}</span>
          {siteConfig.referralUrl && (
            <a 
              href={siteConfig.referralUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Referral link
            </a>
          )}
          <a 
            href="#top" 
            onClick={scrollToTop}
            className="hover:text-slate-300 transition-colors"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
