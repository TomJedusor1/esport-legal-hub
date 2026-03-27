import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10 max-w-3xl text-center mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground">
          Sécuriser votre carrière,{" "}
          <span className="text-primary">optimiser votre performance.</span>
        </h1>
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Talent Management Agency — l'alliance inédite du droit, de l'expérience terrain et du management de haut niveau pour les talents de l'Esport.
        </p>
        <div className="mt-10">
          <Button variant="ctaLarge" size="lg" asChild>
            <a href="#contact" className="gap-2">
              Solliciter un Audit Gratuit
              <ArrowRight size={18} strokeWidth={1.5} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
