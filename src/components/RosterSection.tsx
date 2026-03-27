import { AspectRatio } from "@/components/ui/aspect-ratio";
import { User } from "lucide-react";

const players = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  name: `Joueur ${i + 1}`,
  role: ["Carry", "Support", "Mid", "IGL", "Flex", "Coach"][i],
  game: ["League of Legends", "Valorant", "CS2", "Valorant", "League of Legends", "Rocket League"][i],
}));

const RosterSection = () => {
  return (
    <section id="roster" className="py-20 md:py-28 border-t border-border">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Roster</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Joueurs sous mandat
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {players.map((p) => (
            <div key={p.id} className="group">
              <AspectRatio ratio={3 / 4} className="bg-secondary rounded-lg overflow-hidden border border-border group-hover:border-primary/30 transition-colors duration-300">
                <div className="flex flex-col items-center justify-center h-full gap-2">
                  <User size={32} strokeWidth={1.5} className="text-muted-foreground" />
                </div>
              </AspectRatio>
              <div className="mt-3">
                <p className="text-sm font-medium text-foreground">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.role} · {p.game}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RosterSection;
