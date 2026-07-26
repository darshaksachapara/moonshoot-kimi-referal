import { features } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";

export function FeatureGrid() {
  return (
    <section className="py-24 relative" id="features">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="What is Kimi K3?" 
          subtitle="A highly capable reasoning model built for deep analysis, coding, and comprehensive long-context understanding."
          centered
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div 
                key={i}
                className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-950/50 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-slate-500 mt-12 max-w-2xl mx-auto">
          Please review Kimi's official terms, availability, privacy policies, and pricing on their official website before signing up.
        </p>
      </div>
    </section>
  );
}
