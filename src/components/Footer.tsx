import ucLogo from "@/assets/uc-logo.png";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <img src={ucLogo} alt="Talent Management Agency" className="h-6 w-6" />
        <span className="font-medium text-foreground">Talent Management Agency</span>
      </div>
      <p>© {new Date().getFullYear()} Talent Management Agency. Tous droits réservés.</p>
    </div>
  </footer>
);

export default Footer;
