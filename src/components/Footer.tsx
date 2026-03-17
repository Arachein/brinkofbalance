const Footer = () => {
  return (
    <footer className="px-6 py-12 border-t border-border">
      <div className="container max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold tracking-tight">Brink of Balance</p>
          <p className="text-sm text-muted-foreground">
            Sylvain Godet — Coach Sport Santé & Nutrition
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="tel:+33783604139" className="hover:text-foreground transition-colors">
            07 83 60 41 39
          </a>
          <a href="mailto:godet.sylvain.apa@gmail.com" className="hover:text-foreground transition-colors">
            Email
          </a>
          <a href="https://wa.me/33783604139" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
