import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload } from "lucide-react";
import { useState, useCallback, type FormEvent, type DragEvent } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleDrag = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  }, []);

  const handleDrop = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file?.type === "application/pdf") {
      setFileName(file.name);
      setErrors((prev) => ({ ...prev, file: "" }));
    }
  }, []);

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

              {/* Drop zone */}
              <div className="space-y-2">
                <Label className="text-foreground text-sm">Contrat (PDF)</Label>
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
                    dragActive ? "border-primary bg-primary/5" : "border-border"
                  }`}
                  onClick={() => {
                    const input = document.createElement("input");
                    input.type = "file";
                    input.accept = ".pdf";
                    input.onchange = (e) => {
                      const file = (e.target as HTMLInputElement).files?.[0];
                      if (file) setFileName(file.name);
                    };
                    input.click();
                  }}
                >
                  <Upload size={24} strokeWidth={1.5} className="mx-auto text-muted-foreground mb-2" />
                  {fileName ? (
                    <p className="text-sm text-foreground">{fileName}</p>
                  ) : (
                    <p className="text-sm text-muted-foreground">Glissez votre contrat ici ou cliquez pour parcourir</p>
                  )}
                </div>
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
