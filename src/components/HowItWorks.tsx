import { SectionHeading } from "./ui/SectionHeading";
import { QrCode, UserPlus, Sparkles } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      title: "Scan or copy link",
      description: "Use the QR code or copy the referral link provided on this page to start.",
      icon: QrCode,
    },
    {
      title: "Create your account",
      description: "Sign up or log in to the official Kimi platform using the referral invitation.",
      icon: UserPlus,
    },
    {
      title: "Explore Kimi K3",
      description: "Begin using advanced reasoning and long-context capabilities for your tasks.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24" id="how-it-works">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="How it works" 
          subtitle="Get started in three simple steps."
          centered
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0" />
          
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center mb-6 relative z-10 shadow-xl shadow-cyan-900/10">
                  <div className="absolute inset-0 rounded-full bg-cyan-500/5 animate-pulse" />
                  <Icon className="w-10 h-10 text-cyan-400 relative z-20" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm border-4 border-slate-950">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3">{step.title}</h3>
                <p className="text-slate-400 max-w-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
