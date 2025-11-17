import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center animate-slide-up">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              {t.about.title}
            </h2>
            <div className="w-20 h-1 mx-auto bg-gradient-primary rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.description1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.description2}
              </p>
            </div>

            <div className="space-y-6 animate-scale-in">
              <div className="p-6 rounded-2xl bg-card border border-border shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">{t.about.yearsExperience}</h3>
                  <p className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">5+</p>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-card border border-border shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">{t.about.projectsCompleted}</h3>
                  <p className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">50+</p>
                </div>
              </div>

              {/* Book Section (below Projects Completed) */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="mb-2 text-xl font-semibold">
                  {t.about.book.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  {t.about.book.description}
                </p>
                <a
                  href="YOUR_BOOK_PURCHASE_LINK_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-primary rounded-lg hover:opacity-90 transition-opacity"
                >
                  {t.about.book.buyButton}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
