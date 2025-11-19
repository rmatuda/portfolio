import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            RM
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {t('nav.about')}
            </a>
            <a
              href="#skills"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {t('nav.skills')}
            </a>
            <a
              href="#projects"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {t('nav.projects')}
            </a>
            <a
              href="#contact"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {t('nav.contact')}
            </a>
            <LanguageToggle />
          </nav>

          <div className="md:hidden">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
