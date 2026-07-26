import { benefits } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export function Benefits() {
  return (
    <section className="py-24 bg-slate-900/30 border-y border-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading 
              title="Why try Kimi K3?" 
              subtitle="Discover how Kimi can assist with your workflows, from complex reasoning to simple web tasks."
              className="mb-10"
            />
            
            <div className="space-y-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-100 mb-1">{benefit.title}</h4>
                    <p className="text-slate-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-50" />
            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-slate-800 rounded-full w-3/4 animate-pulse" />
                <div className="h-4 bg-slate-800 rounded-full w-full animate-pulse" />
                <div className="h-4 bg-slate-800 rounded-full w-5/6 animate-pulse" />
                <div className="h-4 bg-slate-800 rounded-full w-4/6 animate-pulse" />
                <div className="h-32 bg-slate-800/50 rounded-xl mt-6 border border-slate-700/50 flex items-center justify-center">
                  <span className="text-slate-500 text-sm font-medium">Interactive Reasoning Interface</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
