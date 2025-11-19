import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faCode, faBrain } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('about.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-card border-border hover:shadow-glow transition-all duration-300 group">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={faGraduationCap} className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.education')}</h3>
            <p className="text-muted-foreground">
              {t('about.educationDesc')}
            </p>
          </Card>
          
          <Card className="p-6 bg-card border-border hover:shadow-glow transition-all duration-300 group">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={faCode} className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.fullstack')}</h3>
            <p className="text-muted-foreground">
              {t('about.fullstackDesc')}
            </p>
          </Card>
          
          <Card className="p-6 bg-card border-border hover:shadow-glow transition-all duration-300 group">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={faBrain} className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.aiAutomation')}</h3>
            <p className="text-muted-foreground">
              {t('about.aiAutomationDesc')}
            </p>
          </Card>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground/90 leading-relaxed">
            {t('about.mainDescription')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
