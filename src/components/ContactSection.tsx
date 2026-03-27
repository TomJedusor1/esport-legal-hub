import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, type FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const newErrors: Record<string, string> = {};

    if (!form.get("pseudo")) newErrors.pseudo = "Ce champ est requis.";
    if (!form.get("team")) newErrors.team = "Ce champ est requis.";
    if (!form.get("situation")) newErrors.situation = "Veuillez sélectionner une option.";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    toast({
      title: "Demande envoyée",
      description: "Nous vous recontacterons sous 48h.",
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-lg">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Démarrer votre audit
          </h2>
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Formulaire de contact</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="pseudo" className="text-foreground text-sm">Pseudo / Nom</Label>
                <Input id="pseudo" name="pseudo" placeholder="Votre pseudo ou nom" className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
                {errors.pseudo && <p className="text-xs text-destructive">{errors.pseudo}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="team" className="text-foreground text-sm">Équipe actuelle</Label>
                <Input id="team" name="team" placeholder="Nom de l'organisation" className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
                {errors.team && <p className="text-xs text-destructive">{errors.team}</p>}
              </div>

              <div className="space-y-2">
                <Label className="text-foreground text-sm">Situation contractuelle</Label>
                <Select name="situation">
                  <SelectTrigger className="bg-secondary border-border text-foreground">
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-contract">Sous contrat</SelectItem>
                    <SelectItem value="free-agent">Agent libre</SelectItem>
                    <SelectItem value="in-negotiation">En négociation</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectContent>
                </Select>
                {errors.situation && <p className="text-xs text-destructive">{errors.situation}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground text-sm">Objet de votre demande</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez brièvement la nature de votre demande (audit contractuel, recherche d'opportunités, accompagnement juridique…)"
                  rows={4}
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              <Button type="submit" variant="cta" className="w-full">
                Envoyer ma demande
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
