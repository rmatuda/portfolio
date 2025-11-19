import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faPalette, faDatabase, faRobot } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const { t } = useTranslation();
  
  const skillCategories = [
    {
      title: t('skills.backend'),
      skills: ["Python", "FastAPI"],
      icon: faServer
    },
    {
      title: t('skills.frontend'),
      skills: ["React", "JavaScript"],
      icon: faPalette
    },
    {
      title: t('skills.database'),
      skills: ["PostgreSQL", "MySQL", "SQLite"],
      icon: faDatabase
    },
    {
      title: t('skills.aiAutomation'),
      skills: ["n8n", "AI Agents", "Workflow Automation"],
      icon: faRobot
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t('skills.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('skills.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="p-6 bg-card border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={category.icon} className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="bg-primary/10 hover:bg-primary/20 text-foreground border-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
