import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ease = [0.2, 0, 0, 1];

const plans = [
  {
    label: "Particuliers",
    title: "Accompagnement Nutrition",
    price: "70",
    unit: "€",
    description: "RDV initial + livraison du protocole",
    features: [
      "Analyse complète de votre situation",
      "Plan personnalisé détaillé",
      "Objectifs, contraintes et préférences",
    ],
  },
  {
    label: "Particuliers",
    title: "Coaching & Suivi",
    price: "50",
    unit: "€ / acte",
    description: "Coaching à domicile, programme sportif, menus",
    features: [
      "Coaching sportif à domicile",
      "Programme sur mesure",
      "Menus hebdomadaires",
      "Ajustements continus",
    ],
    highlighted: true,
  },
  {
    label: "Professionnels",
    title: "Intervention APA",
    price: "50",
    unit: "€ / heure",
    description: "Séances en établissement de santé",
    features: [
      "Séances d'1 heure, jusqu'à 15 participants",
      "Matériel entièrement fourni",
      "Tous publics y compris UVP",
      "Sans frais de déplacement (2h min.)",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="tarifs" className="px-6 py-24">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <p className="font-mono-data text-sm tracking-widest uppercase text-muted-foreground mb-3">
            Tarifs
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Des formules claires, sans surprise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
              className={`relative bg-card p-8 rounded-xl shadow-card flex flex-col ${
                plan.highlighted ? "ring-2 ring-primary" : ""
              }`}
            >
              <p className="font-mono-data text-xs tracking-widest uppercase text-muted-foreground mb-4">
                {plan.label}
              </p>
              <h3 className="text-lg font-semibold tracking-tight mb-1">
                {plan.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="font-mono-data text-4xl font-semibold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground ml-1 text-sm">{plan.unit}</span>
              </div>
              <ul className="space-y-3 mt-auto">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Chaque accompagnement est adapté à vos besoins. Possibilité d'ajustement tarifaire selon la fréquence et la durée d'engagement.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
