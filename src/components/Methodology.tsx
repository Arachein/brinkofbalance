import { motion } from "framer-motion";

const ease = [0.2, 0, 0, 1];

const steps = [
  {
    number: "01",
    title: "Rendez-vous initial",
    description:
      "Analyse complète de votre situation : besoins, objectifs, contraintes et préférences.",
  },
  {
    number: "02",
    title: "Livraison du protocole",
    description:
      "Présentation et explication détaillée de votre plan personnalisé.",
  },
  {
    number: "03",
    title: "Suivi et ajustements",
    description:
      "Mise en place d'actions supplémentaires selon vos besoins : coaching, menus hebdomadaires, etc.",
  },
];

const Methodology = () => {
  return (
    <section className="px-6 py-24 bg-muted/50">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <p className="font-mono-data text-sm tracking-widest uppercase text-muted-foreground mb-3">
            Méthodologie
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Un processus structuré, des résultats durables
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
            >
              <p className="font-mono-data text-5xl font-semibold text-primary/15 mb-4">
                {step.number}
              </p>
              <h3 className="text-lg font-semibold tracking-tight mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
