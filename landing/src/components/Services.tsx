"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Palette,
  Smartphone,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Develop software solutions tailored specifically for your business needs, enabling efficiency and scalability.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence & ML",
    description:
      "Integrate AI and machine learning into your business processes for data-driven insights and improved automation.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Palette,
    title: "Innovative Web Design",
    description:
      "Create aesthetically pleasing and user-friendly websites that drive engagement and enhance your brand.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Build high-performance mobile applications that connect with users on iOS and Android platforms.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    description:
      "Guide your business through digital transformation with customized strategies and expert consulting.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: ShieldCheck,
    title: "Data Security & Backup",
    description:
      "Secure your data with advanced backup solutions, ensuring continuity and protection against data loss.",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight">
            Advanced Technology Solutions
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Empowering your business with cutting-edge tech solutions tailored
            to your unique needs.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative p-8 rounded-2xl bg-white border border-border hover:border-transparent hover:shadow-xl transition-all duration-300 cursor-default"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none" />

              <div
                className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon size={28} className={service.iconColor} />
              </div>

              <h3 className="text-xl font-semibold text-text mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
