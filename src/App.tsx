import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 selection:bg-cyan-500/30">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureGrid />
        <Benefits />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
