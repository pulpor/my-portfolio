import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useRef, useEffect } from "react";
import FloatingIcons from "./FloatingIcons";
import me from '../assets/pizzaWhiteFundo.png';
import signatureWhite from '../assets/assignature_white.png';
import signatureBlack from '../assets/assignature_black.png';

const Hero = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [isFlipped, setIsFlipped] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const createConfetti = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colors = ['#7b5cff', '#b3c7ff', '#5c86ff', '#a78bfa', '#c4b5fd'];
    const particles: any[] = [];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: x + (Math.random() - 0.5) * 100,
        y,
        vx: (Math.random() - 0.5) * 12,
        vy: Math.random() * -12 - 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 6 + 3,
        gravity: 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
      });
    }

    // Add particles to existing animation loop instead of creating new one
    if (!canvas.dataset.animating) {
      canvas.dataset.animating = 'true';
      const allParticles: any[] = [...particles];

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        allParticles.forEach((p, index) => {
          p.vy += p.gravity;
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.98;
          p.rotation += p.rotationSpeed;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();

          if (p.y > canvas.height) {
            allParticles.splice(index, 1);
          }
        });

        if (allParticles.length > 0) {
          requestAnimationFrame(animate);
        } else {
          canvas.dataset.animating = '';
        }
      };

      animate();
    } else {
      // Add to existing animation
      const existingParticles = (canvas as any).particles || [];
      (canvas as any).particles = [...existingParticles, ...particles];
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Confetti Canvas */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 pointer-events-none z-50"
      />
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Photo with blob */}
          <div className="relative animate-fade-in order-2 md:order-1">
            <div 
              className="relative w-80 h-80 mx-auto [perspective:1000px] cursor-pointer"
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
            >
              {/* Floating icons around blob */}
              <FloatingIcons mode="circular" />
              
              {/* Card flip container */}
              <div 
                className="relative w-full h-full [transform-style:preserve-3d]"
                style={{ 
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  transition: 'transform 1.5s ease-in-out'
                }}
              >
                {/* Front - Profile photo */}
                <div className="absolute inset-0 [backface-visibility:hidden] z-10">
                  {/* Blob background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-[60%_40%_30%_70%/60%_30%_70%_40%]" />
                  
                  {/* Profile photo */}
                  <div className="absolute inset-0 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <img src={me} alt="it's me, leonardo" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Back - Advantages */}
                <div 
                  className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] z-10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-accent rounded-[60%_40%_30%_70%/60%_30%_70%_40%] flex items-center justify-center px-10 py-8 shadow-2xl">
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full animate-pulse"></div>
                      
                      <div className="relative text-left space-y-2.5">
                        <h3 className="text-lg font-black text-white mb-4 text-center tracking-tight drop-shadow-lg">
                          {t.hero.cardTitle}
                        </h3>
                        <div className="space-y-2.5 text-white/95">
                          <p className="text-xs font-medium leading-relaxed hover:text-white hover:scale-105 transition-all duration-300">
                            {t.hero.advantage1}
                          </p>
                          <p className="text-xs font-medium leading-relaxed hover:text-white hover:scale-105 transition-all duration-300">
                             {t.hero.advantage2}
                          </p>
                          <p className="text-xs font-medium leading-relaxed hover:text-white hover:scale-105 transition-all duration-300">
                            {t.hero.advantage3}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="text-right mt-12 mr-8">
              <img 
                src={theme === "dark" ? signatureWhite : signatureBlack} 
                alt="Pulpor signature" 
                className="h-16 ml-auto"
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="text-center md:text-left animate-slide-up order-1 md:order-2">
            <div className="mb-6 inline-block">
              <button 
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  createConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
                }}
                className="px-4 py-2 text-sm font-medium rounded-full text-primary border border-primary/20 cursor-pointer hover:bg-primary/10 hover:border-primary/30 hover:scale-105 transition-all duration-300 ease-out"
              >
                {t.hero.badge}
              </button>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {t.hero.title1}
              </span>
              <br />
              <span className="text-foreground">
                {t.hero.title2}
              </span>
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-8">
              <Button 
                size="lg" 
                className="group bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg hover:shadow-glow text-base px-8"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.hero.viewWork}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 text-base px-8"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.hero.getInTouch}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/pulpor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pulpor/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:pulppor@gmail.com"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
