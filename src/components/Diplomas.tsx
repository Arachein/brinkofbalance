import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const diplomas = [
  {
    title: "Licence STAPS APAS",
    full: "Sciences et Techniques des Activités Physiques et Sportives — Activités Physiques Adaptées et Santé",
    description:
      "Formation universitaire spécialisée dans la conception et la mise en œuvre de programmes d'activités physiques adaptées aux personnes en situation de handicap, atteintes de pathologies chroniques ou en perte d'autonomie.",
  },
  {
    title: "DU Nutrition & Maladies Métaboliques",
    full: "Diplôme Universitaire en Nutrition et Maladies Métaboliques",
    description:
      "Formation complémentaire approfondie sur les liens entre alimentation, métabolisme et santé, permettant une prise en charge nutritionnelle adaptée aux pathologies métaboliques (diabète, obésité, dyslipidémies…).",
  },
];

const Diplomas = () => {
  return (
    <section id="diplomes" className="px-6 py-24">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <p className="font-mono-data text-sm tracking-widest uppercase text-muted-foreground mb-3">
            Formations & Diplômes
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Une expertise certifiée et reconnue
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {diplomas.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {d.title}
                </h3>
              </div>
              <p className="font-mono-data text-xs tracking-wide text-muted-foreground mb-3">
                {d.full}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {d.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diplomas;
