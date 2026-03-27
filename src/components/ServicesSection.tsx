import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSearch, Handshake, Megaphone } from "lucide-react";

const services = [
  {
    icon: FileSearch,
    title: "Audit de Contrat",
    description: "Analyse exhaustive de vos engagements contractuels. Identification des clauses abusives, manquantes ou déséquilibrées.",
  },
  {
    icon: Handshake,
    title: "Mandat de Représentation",
    description: "Négociation et représentation lors des transferts, renouvellements et résolutions de contrat. Défense de vos intérêts à chaque étape.",
  },
  {
    icon: Megaphone,
    title: "Sponsoring & Partenariats",
    description: "Mise en relation avec des marques alignées à votre image. Structuration juridique et négociation des contrats de sponsoring.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 border-t border-border">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Services</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Un accompagnement sur mesure
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {services.map((s) => (
            <Card key={s.title} className="bg-card border-border hover:border-primary/30 transition-colors duration-300">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <s.icon size={20} strokeWidth={1.5} className="text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
