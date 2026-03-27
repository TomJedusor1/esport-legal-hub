import ucLogo from "@/assets/uc-logo.png";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Shield size={18} strokeWidth={1.5} className="text-primary" />
        <span className="font-medium text-foreground">UC Esport Agency</span>
      </div>
      <p>© {new Date().getFullYear()} Ultimate Championship Esport Agency. Tous droits réservés.</p>
    </div>
  </footer>
);

export default Footer;
