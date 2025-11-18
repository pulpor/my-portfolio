import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ScrollToTop = () => {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!("IntersectionObserver" in window)) {
        setVisible((window as Window).scrollY > 200);
      }
    };

    const hero = document.getElementById("hero");

    let observer: IntersectionObserver | null = null;
    if (hero && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          const heroVisible = entry.isIntersecting && entry.intersectionRatio > 0.2;
          setVisible(!heroVisible && window.scrollY > 80);
        },
        { root: null, threshold: [0, 0.2, 0.5, 1] }
      );
      observer.observe(hero);
    } else {
      // Fallback if hero not found or observer not supported
      onScroll();
      window.addEventListener("scroll", onScroll);
    }

    return () => {
      if (observer && hero) observer.unobserve(hero);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const label = language === "pt" ? "Voltar ao topo" : "Back to top";

  return (
    <button
      aria-label={label}
      title={label}
      onClick={handleClick}
      className={`fixed z-50 right-5 bottom-5 md:right-8 md:bottom-8 h-12 w-12 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 focus:ring-offset-background
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        bg-gradient-to-br from-primary to-accent text-white hover:opacity-90`}
    >
      <ArrowUp className="mx-auto h-5 w-5" />
    </button>
  );
};

export default ScrollToTop;
