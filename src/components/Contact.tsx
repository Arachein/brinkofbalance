import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";

const ease = [0.2, 0, 0, 1] as const;

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    
    // Open mailto with pre-filled content
    window.location.href = `mailto:godet.sylvain.apa@gmail.com?subject=Contact depuis le site - ${name}&body=${encodeURIComponent(message)}%0A%0AEmail: ${email}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="font-mono-data text-sm tracking-widest uppercase text-muted-foreground mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
              Prenons rendez-vous
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Votre coach sport santé & nutrition — <span className="font-semibold text-foreground">Sylvain GODET</span>.
              Diplômé en coaching sportif et conseiller en nutrition.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+33783604139"
                className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Téléphone</p>
                  <p className="font-mono-data text-sm">07 83 60 41 39</p>
                </div>
              </a>
              <a
                href="https://wa.me/33783604139"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-mono-data text-sm">Envoyer un message</p>
                </div>
              </a>
              <a
                href="mailto:godet.sylvain.apa@gmail.com"
                className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-mono-data text-sm">godet.sylvain.apa@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="bg-card p-8 rounded-xl shadow-card space-y-5"
          >
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder="Votre nom"
                className="w-full px-4 py-3 rounded-lg bg-background border-0 ring-1 ring-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="Votre email"
                className="w-full px-4 py-3 rounded-lg bg-background border-0 ring-1 ring-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Votre téléphone (optionnel)"
                className="w-full px-4 py-3 rounded-lg bg-background border-0 ring-1 ring-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
              />
            </div>
            <div>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Décrivez votre projet ou vos objectifs..."
                className="w-full px-4 py-3 rounded-lg bg-background border-0 ring-1 ring-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-6 py-3.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              {sent ? "✓ Message préparé" : "Envoyer un message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
