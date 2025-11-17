import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import market from '../assets/projects/market.png'

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: market,
    category: "Web"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team workflows, and productivity insights.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    category: "Web"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio showcase with animations, dark mode, and optimized performance for creative professionals.",
    tags: ["React", "Framer Motion", "Vite", "CSS"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    category: "Design"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics with beautiful charts, data visualization, and export features.",
    tags: ["React", "Chart.js", "API Integration", "Redux"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    category: "Web"
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and real-time transactions.",
    tags: ["React Native", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    category: "Mobile"
  },
  {
    title: "AI Chatbot",
    description: "Intelligent chatbot with natural language processing and context-aware responses.",
    tags: ["Python", "TensorFlow", "NLP", "API"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    category: "AI"
  },
  {
    title: "Fitness Tracker",
    description: "Track workouts, nutrition, and progress with personalized recommendations.",
    tags: ["React Native", "Firebase", "Charts"],
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
    category: "Mobile"
  },
  {
    title: "CRM System",
    description: "Customer relationship management system with pipeline tracking and automated workflows.",
    tags: ["Vue.js", "Laravel", "MySQL"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    category: "Web"
  },
  {
    title: "Weather App",
    description: "Beautiful weather application with forecasts, maps, and severe weather alerts.",
    tags: ["React", "Weather API", "Geolocation"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    category: "Web"
  },
];

const Projects = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const categories = ["All", "Web", "Mobile", "Design", "AI"];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);
  
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const displayedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to page 1 when changing category
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= 7) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }
      
      // Show pages around current page
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      
      // Always show last page
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <section id="projects" className="py-24 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center animate-slide-up">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            {t.projects.title} <span className="bg-gradient-primary bg-clip-text text-transparent">{t.projects.titleHighlight}</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-primary rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.projects.description}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-primary text-white shadow-lg scale-105"
                  : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    project.image === market 
                      ? "object-top group-hover:animate-scroll-preview" 
                      : "group-hover:scale-110"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-60" />
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-white">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="mb-2 text-xl font-bold line-clamp-1">{project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 5).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="px-2 py-1 text-xs font-medium text-muted-foreground">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 text-xs">
                    <Github className="mr-1 h-3 w-3" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary hover:opacity-90 text-xs">
                    <ExternalLink className="mr-1 h-3 w-3" />
                    View
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination - Google Style */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            {/* Previous Button */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentPage === 1
                  ? "text-muted-foreground cursor-not-allowed opacity-50"
                  : "text-primary hover:bg-primary/10"
              }`}
            >
              ← Anterior
            </button>

            {/* Page Numbers */}
            <div className="flex gap-1">
              {getPageNumbers().map((page, index) => (
                page === '...' ? (
                  <span key={`ellipsis-${index}`} className="px-3 py-2 text-muted-foreground">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => goToPage(page as number)}
                    className={`min-w-[40px] h-10 rounded-lg font-medium transition-all ${
                      currentPage === page
                        ? "bg-gradient-primary text-white shadow-lg scale-110"
                        : "bg-card border border-border text-foreground hover:border-primary hover:text-primary hover:scale-105"
                    }`}
                  >
                    {page}
                  </button>
                )
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentPage === totalPages
                  ? "text-muted-foreground cursor-not-allowed opacity-50"
                  : "text-primary hover:bg-primary/10"
              }`}
            >
              Próximo →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
