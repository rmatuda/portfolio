import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8 inline-block">
            <img 
              src={profileImage} 
              alt="Rafael Matuda" 
              className="w-32 h-32 rounded-full border-4 border-primary shadow-glow mx-auto object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Rafael Matuda
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-4">
            {t('hero.role')}
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="#contact">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-5 w-5" />
                {t('hero.contact')}
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary hover:bg-primary/10"
              asChild
            >
              <a href="#projects">
                {t('hero.viewWork')}
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary hover:bg-primary/10"
              asChild
            >
              <a href="/curriculo.pdf" download="Rafael_Matuda_Curriculo.pdf">
                <FontAwesomeIcon icon={faDownload} className="mr-2 h-5 w-5" />
                {t('hero.downloadCV')}
              </a>
            </Button>
          </div>
          
          <div className="flex gap-4 justify-center">
            <a 
              href="https://github.com/rmatuda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/rafael-matuda/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rafael.matuda10@gmail.com"
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
