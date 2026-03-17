import { motion } from "framer-motion";
import { Dumbbell, Apple, Brain } from "lucide-react";

const ease = [0.2, 0, 0, 1];

const activities = [
  {
    icon: Dumbbell,
    title: "Coaching Sportif",
    description:
      "Programmation personnalisée, biomécanique et prévention des blessures. Des séances conçues autour de votre physiologie pour des résultats mesurables.",
    features: ["Programme sur mesure", "Coaching à domicile", "Suivi régulier"],
  },
  {
    icon: Apple,
    title: "Nutrition",
    description:
      "Rééquilibrage alimentaire sans frustration. Analyse de votre situation, protocole personnalisé et menus hebdomadaires adaptés.",
    features: ["Protocole personnalisé", "Menus hebdomadaires", "Suivi métabolique"],
  },
  {
    icon: Brain,
    title: "Activité Physique Adaptée",
    description:
      "Interventions en EHPAD, résidences services et structures médico-sociales. Maintien de l'autonomie et prévention des chutes.",
    features: ["Séances en groupe", "Tous publics", "Matériel fourni"],
  },
];

const Activities = () => {
  return (
    <section id="activites" className="px-6 py-24">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <p className="font-mono-data text-sm tracking-widest uppercase text-muted-foreground mb-3">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Une approche globale de votre santé
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-card p-8 rounded-xl shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <activity.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2 tracking-tight">
                {activity.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {activity.description}
              </p>
              <ul className="space-y-2">
                {activity.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
