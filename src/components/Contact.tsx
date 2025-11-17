import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center animate-slide-up">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            {t.contact.title} <span className="bg-gradient-primary bg-clip-text text-transparent">{t.contact.titleHighlight}</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-primary rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t.contact.email}</h4>
                  <a 
                    href="mailto:pulppor@gmail.com?subject=Tenho uma ideia, bora trabalhar juntos?"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    pulppor@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-accent/10 text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t.contact.phone}</h4>
                  <a 
                    href="https://wa.me/5543996916620"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                  >
                    +55 (43) 996916620
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t.contact.location}</h4>
                  <a 
                    href="https://www.google.com/maps/place/Londrina,+PR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Londrina - PR, Brasil
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <form className="space-y-6 p-8 rounded-2xl bg-card border border-border shadow-lg">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  {t.contact.form.name}
                </label>
                <Input
                  id="name"
                  placeholder="Leonardo Pulpor"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  {t.contact.form.email}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="pulpor@desenvolvedor.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  {t.contact.form.message}
                </label>
                <Textarea
                  id="message"
                  placeholder={t.contact.description}
                  rows={5}
                  className="w-full resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-md hover:shadow-glow"
                size="lg"
              >
                {t.contact.form.send}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
