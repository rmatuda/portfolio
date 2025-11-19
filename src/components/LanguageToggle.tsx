import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt-BR' ? 'en' : 'pt-BR';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2 bg-background/50 backdrop-blur-sm hover:bg-primary/20"
    >
      <FontAwesomeIcon icon={faLanguage} className="h-4 w-4" />
      {i18n.language === 'pt-BR' ? 'EN' : 'PT'}
    </Button>
  );
};

export default LanguageToggle;
