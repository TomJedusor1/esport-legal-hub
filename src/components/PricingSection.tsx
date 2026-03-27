import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Scale, Gamepad2, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const poles = [
  {
    icon: Scale,
    title: "Engagement et contrat",
    items: [
      "Relecture & analyse de contrat",
      "Représentation ",
      "Négociation contractuelle",
      "Gestion de crise & litiges",
      "Veille réglementaire esport",
      "Optimisation du sponsoring",
    ],
  },
  {
    icon: Gamepad2,
    title: "Développement de carrière",
    items: [
      "Accompagnement par un ancien joueur pro",
      "Préparation mentale",
      "Gestion de crise",
      "Personal branding",
      "Orientation stratégique",
    ],
  },
  {
    icon: Target,
    title: "Mercato & Image",
    items: [
      "Identification d'opportunités",
      "Création d'opportunités de transfert",
      "Conseil d'orientation de carrière",
      "Construction de l'image du joueur",
      "Personal branding & visibilité",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Modèle tarifaire</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Représentation d'agent de joueur
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">
            Un accompagnement de haut niveau rendu accessible par une structure de coûts alignée sur vos résultats. Vous ne payez que sur ce que vous gagnez.
          </p>
        </div>

        {/* Tarif principal */}
        <Card className="bg-card border-primary/30 max-w-lg mx-auto mb-16">
          <CardHeader className="text-center pb-2">
            <Badge variant="outline" className="w-fit mx-auto mb-3 border-primary/40 text-primary text-xs">
              Commission au succès
            </Badge>
            <CardTitle className="text-foreground text-3xl md:text-4xl font-bold">
              5 % – 15 %
            </CardTitle>
            <p className="text-muted-foreground text-sm mt-2">
              de la rémunération mensuelle brute du joueur
            </p>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
              {[
                "Facturation mensuelle",
                "Montants hors taxes",
                "Aucun frais d'entrée",
                "Résiliation sans pénalité",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check size={14} strokeWidth={1.5} className="text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Button variant="cta" className="w-full" asChild>
                <a href="#contact">Discuter de votre projet</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Détail de l'offre */}
        <div className="text-center mb-10">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Notre offre</h3>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Tout ce qui est inclus dans votre mandat de représentation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {poles.map((pole) => (
            <Card key={pole.title} className="bg-card border-border hover:border-primary/30 transition-colors duration-300">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <pole.icon size={20} strokeWidth={1.5} className="text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">{pole.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2.5">
                {pole.items.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check size={14} strokeWidth={1.5} className="text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
