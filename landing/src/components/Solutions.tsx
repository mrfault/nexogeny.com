"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const solutions = [
  "Custom software solutions for enterprise and startups",
  "AI-powered automation and intelligent data processing",
  "Responsive web applications with modern frameworks",
  "Cross-platform mobile apps for iOS and Android",
  "Cloud infrastructure and DevOps consulting",
  "End-to-end digital transformation strategies",
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Solutions
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight">
              Tailored Solutions for{" "}
              <span className="text-primary">Every Business</span>
            </h2>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              Nexogeny offers customized, high-impact solutions tailored to the
              unique needs of a wide range of businesses. Whether it&apos;s helping
              startups launch with confidence or supporting their growth as they
              scale, we provide specialized services designed to empower our
              clients to lead in innovation.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-primary text-white hover:bg-primary-dark transition-colors duration-200 cursor-pointer group"
            >
              Start Your Project
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-2xl" />
            <div className="relative bg-background rounded-2xl border border-border p-8 lg:p-10">
              <h3 className="text-lg font-semibold text-text mb-6">
                What We Deliver
              </h3>
              <ul className="space-y-5">
                {solutions.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={22}
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    <span className="text-text-secondary leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
