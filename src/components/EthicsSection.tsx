import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Lock, Scale } from "lucide-react";

const values = [
  { icon: ShieldCheck, label: "Disponibilité et efficacité", desc: "Nous nous engageons à une disponibilité constante et à une réponse systématique sous 48 heures pour toute sollicitation, qu'elle soit d'ordre contractuelle, sportive ou logistique. Cette rigueur opérationnelle garantit qu'aucune opportunité de marché n'est manquée et que chaque problématique est traitée avec la célérité qu'exige le haut niveau. Notre structure est dimensionnée pour offrir un suivi personnalisé, transformant la réactivité en un levier de sécurité et de performance pour votre carrière." },
  { icon: Lock, label: "Confidentialité", desc: "Chaque donnée personnelle, détail contractuel ou axe stratégique de carrière est soumis à une méthodologie de traitement rigoureuse et cloisonnée. Cette approche garantit une étanchéité totale vis-à-vis des tiers et des structures concurrentes, sécurisant ainsi l'intégrité de vos négociations et la pérennité de votre avantage compétitif sur le marché du transfert." },
  { icon: Scale, label: "Défense de vos intérêts", desc: "Une négociation contractuelle rigoureuse visant à sécuriser et maximiser vos revenus et développement de votre image de marque auprès des sponsors. Au-delà de l'aspect financier, nous intervenons pour garantir un environnement de performance optimal au sein de votre structure (conditions d'entraînement, respect des engagements logistiques, qualité de vie), considérant que la pérennité de vos résultats sportifs est indissociable d'un cadre de travail sain et respecté." },
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
