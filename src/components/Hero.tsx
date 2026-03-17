import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-24">
      <div className="container max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="font-mono-data text-sm tracking-widest uppercase text-muted-foreground mb-6"
        >
          Coach Sport Santé & Nutrition
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.05 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6"
        >
          L'équilibre n'est pas un état,{" "}
          <span className="text-primary">c'est une discipline.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Avec plus de 10 ans d'expérience, je vous accompagne avec une approche simple, 
          scientifique et adaptée pour faire de votre corps un allié fiable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium text-base hover:opacity-90 transition-opacity"
          >
            Réserver un bilan initial
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#activites"
            className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-medium text-base hover:bg-muted transition-colors"
          >
            Découvrir les services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 flex items-center justify-center gap-8 text-muted-foreground"
        >
          <div className="text-center">
            <p className="font-mono-data text-2xl font-semibold text-foreground">10+</p>
            <p className="text-sm">ans d'expérience</p>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <p className="font-mono-data text-2xl font-semibold text-foreground">12+</p>
            <p className="text-sm">établissements</p>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <p className="font-mono-data text-2xl font-semibold text-foreground">STAPS</p>
            <p className="text-sm">Licence APAS</p>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <p className="font-mono-data text-2xl font-semibold text-foreground">DU</p>
            <p className="text-sm">Nutrition</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
