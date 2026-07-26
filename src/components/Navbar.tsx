import { siteConfig } from "@/config/site";
import { Button } from "./ui/Button";

export function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-slate-950/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              K
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-100">Kimi K3</span>
          </button>
          <div className="hidden md:flex items-center px-2.5 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-medium text-slate-300">
            Independent referral page
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#overview" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Overview</a>
          <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">How it works</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            variant="primary" 
            size="sm" 
            className="hidden sm:inline-flex"
            onClick={() => {
              if (siteConfig.referralUrl) {
                window.open(siteConfig.referralUrl, "_blank", "noopener,noreferrer");
              } else {
                window.location.hash = "#referral";
              }
            }}
          >
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
}
