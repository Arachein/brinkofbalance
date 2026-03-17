import { motion } from "framer-motion";
import { Dumbbell, Apple, Brain } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const activities = [
  {
    icon: Dumbbell,
    title: "Coaching Sportif",
    tagline: "Pour plus d'énergie au quotidien.",
    description:
      "Programmation personnalisée, biomécanique et prévention des blessures. Des séances conçues autour de votre physiologie pour des résultats mesurables.",
    features: ["Programme sur mesure", "Coaching à domicile", "Suivi régulier"],
  },
  {
    icon: Apple,
    title: "Nutrition",
    tagline: "Être plus à l'aise dans son corps.",
    description:
      "Rééquilibrage alimentaire sans frustration. Analyse de votre situation, protocole personnalisé et menus hebdomadaires adaptés.",
    features: ["Protocole personnalisé", "Menus hebdomadaires", "Suivi métabolique"],
  },
  {
    icon: Brain,
    title: "Activité Physique Adaptée",
    tagline: "Votre corps est votre meilleur allié.",
    description:
      "Interventions en EHPAD, résidences services et structures médico-sociales. Maintien de l'autonomie et prévention des chutes.",
    features: ["Séances en groupe", "Tous publics", "Matériel fourni"],
  },
];

const ActivityCard = ({ activity, delay }: { activity: typeof activities[number]; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease, delay }}
    whileHover={{ y: -4 }}
    className="bg-card p-8 rounded-xl shadow-card transition-shadow hover:shadow-card-hover"
  >
    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
      <activity.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-semibold mb-1 tracking-tight">{activity.title}</h3>
    <p className="text-sm font-medium text-primary mb-3">{activity.tagline}</p>
    <p className="text-muted-foreground leading-relaxed mb-6">{activity.description}</p>
    <ul className="space-y-2">
      {activity.features.map((feature) => (
        <li key={feature} className="flex items-center gap-2 text-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
          <span className="text-foreground/80">{feature}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

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
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
            Une approche globale de votre santé
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-6"
        >
          <p className="font-mono-data text-sm tracking-widest uppercase text-muted-foreground mb-3">
            Particuliers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {activities.filter((_, i) => i < 2).map((activity, i) => (
            <ActivityCard key={activity.title} activity={activity} delay={i * 0.05} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-6"
        >
          <p className="font-mono-data text-sm tracking-widest uppercase text-muted-foreground mb-3">
            Professionnels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 max-w-xl gap-6">
          {activities.filter((_, i) => i === 2).map((activity, i) => (
            <ActivityCard key={activity.title} activity={activity} delay={i * 0.05} />
          ))}
        </div>

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
              <h3 className="text-xl font-semibold mb-1 tracking-tight">
                {activity.title}
              </h3>
              <p className="text-sm font-medium text-primary mb-3">
                {activity.tagline}
              </p>
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
