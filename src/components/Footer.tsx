import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="py-8 px-4 bg-background border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Rafael Matuda. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
