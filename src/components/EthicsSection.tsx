import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Lock, Scale } from "lucide-react";

const values = [
  { icon: ShieldCheck, label: "Transparence totale", desc: "Chaque étape de notre processus vous est communiquée en temps réel." },
  { icon: Lock, label: "Confidentialité", desc: "Vos données et vos contrats sont protégés par un cadre strict de sécurité." },
  { icon: Scale, label: "Défense de vos intérêts", desc: "Nos pratiques respectent les standards éthiques les plus exigeants du secteur." },
];

const EthicsSection = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-primary/40 text-primary mb-4">
            Engagement
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Notre charte éthique
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.label} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon size={22} strokeWidth={1.5} className="text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{v.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EthicsSection;
