import { useLanguage } from "@/contexts/LanguageContext";
import { Code2, Palette, Database, Cloud, Smartphone, Globe } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React.js, JavaScript, TypeScript, Tailwind CSS",
    color: "text-blue-500",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Python, JavaScript, MySQL ",
    color: "text-green-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Photoshop, Responsive Design",
    color: "text-purple-500",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Vercel, Supabase, Firebase",
    color: "text-orange-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Progressive Web Apps",
    color: "text-pink-500",
  },
  {
    icon: Globe,
    title: "Web Performance",
    description: "SEO, Optimization, Accessibility",
    color: "text-cyan-500",
  },
];

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center animate-slide-up">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            {t.skills.title} <span className="bg-gradient-primary bg-clip-text text-transparent">{t.skills.titleHighlight}</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-primary rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.skills.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 ${skill.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
