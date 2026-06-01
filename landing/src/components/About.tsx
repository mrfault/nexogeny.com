"use client";

import { motion } from "framer-motion";
import { Target, Users, Globe, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Empowering emerging startups through innovative technology solutions.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Founded in the USA with a strategic focus on the Azerbaijan market.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Tailored solutions meeting unique challenges and ambitions of each client.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Leveraging the latest advancements in AI, software, and design.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              About Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight">
              Transforming Ideas Into{" "}
              <span className="text-primary">Digital Reality</span>
            </h2>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              At Nexogeny, our core mission is to empower emerging startups and
              forward-thinking businesses through innovative technology
              solutions. Founded in the USA, we bring a global perspective to our
              work, with a strategic focus on the Azerbaijan market and a
              commitment to driving digital transformation in diverse industries.
            </p>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              We believe in the transformative power of technology to unlock new
              possibilities and fuel growth. By leveraging the latest
              advancements in software development, artificial intelligence, web
              design, and mobile applications, we help startups and established
              companies alike to navigate the complexities of the modern business
              landscape.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
