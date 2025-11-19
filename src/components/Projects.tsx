import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      title: t('projects.republicaFacil.title'),
      description: t('projects.republicaFacil.description'),
      tags: ["React", "Python", "FastAPI", "PostgreSQL"],
      githubUrl: "https://github.com/orgs/Republica-Facil/repositories",
    },
    {
      title: t('projects.licitaNow.title'),
      description: t('projects.licitaNow.description'),
      tags: ["Python", "Django", "Web Scraping", "Data Analysis"],
      githubUrl: "https://github.com/unb-mds/2024-1-Squad-10",
    },
    {
      title: t('projects.microData.title'),
      description: t('projects.microData.description'),
      tags: ["Python", "FastAPI", "MySQL", "Data Management"],
      githubUrl: "https://github.com/rmatuda/2024.2-T03-MicroData",
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t('projects.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('projects.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="p-8 bg-card border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-foreground border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="default"
                  className="bg-gradient-primary hover:shadow-glow"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="mr-2 h-4 w-4" />
                    {t('projects.viewOnGithub')}
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-primary hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/rmatuda" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2 h-4 w-4" />
              {t('projects.viewAllProjects')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
