import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Aucun frais d'entrée",
  "Commission uniquement au succès",
  "Audit initial offert",
  "Suivi personnalisé inclus",
  "Résiliation sans pénalité",
];

const PricingSection = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-2xl text-center">
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Modèle tarifaire</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Commissionnement au succès
        </h2>
        <p className="text-muted-foreground text-sm mb-10 max-w-lg mx-auto leading-relaxed">
          Un accompagnement de haut niveau rendu accessible par une structure de coûts optimisée. Vous ne payez que lorsque nous obtenons des résultats.
        </p>

        <Card className="bg-card border-primary/20 max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-foreground text-xl">Performance-Based</CardTitle>
            <p className="text-muted-foreground text-sm">Aligné avec vos objectifs</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3 text-sm text-foreground">
                <Check size={16} strokeWidth={1.5} className="text-primary shrink-0" />
                {f}
              </div>
            ))}
            <div className="pt-4">
              <Button variant="cta" className="w-full" asChild>
                <a href="#contact">Discuter de votre projet</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PricingSection;
