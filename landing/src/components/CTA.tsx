"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#2563EB] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Empowering Innovation,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-orange-300">
              Shaping the Future Together
            </span>
          </h2>
          <p className="mt-6 text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            At Nexogeny, we combine creativity and technology to shape the
            future. With passion and commitment, we approach every project,
            advancing together with our clients towards shared goals.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-accent text-white hover:bg-accent-dark transition-colors duration-200 cursor-pointer group"
            >
              Get in Touch
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-200 cursor-pointer"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
