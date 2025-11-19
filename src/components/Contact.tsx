import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <Card className="p-8 md:p-12 bg-card border-border shadow-card">
          <div className="text-center space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">{t('contact.letsConnect')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('contact.description')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                asChild
              >
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rafael.matuda10@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-5 w-5" />
                  rafael.matuda10@gmail.com
                </a>
              </Button>
            </div>
            
            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">{t('contact.findMe')}</p>
              <div className="flex gap-4 justify-center">
                <a 
                  href="https://github.com/rmatuda" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-background hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rafael-matuda/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-background hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
                </a>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rafael.matuda10@gmail.com"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-background hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
