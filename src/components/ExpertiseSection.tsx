import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gavel, Zap, Users } from "lucide-react";

const poles = [
  {
    icon: Gavel,
    title: "Pôle Juridique",
    description: "Protection contractuelle et défense des droits. Analyse approfondie de chaque clause pour sécuriser votre engagement.",
  },
  {
    icon: Zap,
    title: "Pôle Performance",
    description: "Analyse technique et coaching personnalisé. Optimisation de vos performances avec des métriques clés.",
  },
  {
    icon: Users,
    title: "Pôle Mercato",
    description: "Réseau de transfert et négociation de haut niveau. Accès à un réseau exclusif d'organisations et de partenaires.",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Expertise</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Trois pôles, une vision unifiée
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {poles.map((p) => (
            <Card key={p.title} className="bg-card border-border hover:border-primary/30 transition-colors duration-300">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <p.icon size={20} strokeWidth={1.5} className="text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
