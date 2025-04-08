"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const sections = [
  {
    title: "Voting & Social Media: A Meta-Analysis",
    text: "We analyzed 45 peer-reviewed studies on how social media affects voter behavior. This interactive report walks you through the core findings, methods, and implications.",
  },
  {
    title: "Methodology",
    text: "We conducted a systematic review across 4 databases using inclusion criteria for quantitative studies published between 2010 and 2024. Meta-regression was used to estimate the average effect sizes.",
  },
  {
    title: "Key Findings",
    text: "Social media increases voter turnout by an average of 3.2%, with stronger effects in countries with younger populations and less traditional media consumption.",
  },
  {
    title: "Subgroup Analysis",
    text: "Effects were stronger among experimental studies compared to observational ones. Platform-wise, Twitter and WhatsApp showed more influence than Facebook.",
  },
  {
    title: "Conclusion",
    text: "Social media has a statistically significant, though context-dependent, influence on voting. Regulatory frameworks and platform design are key areas for future research.",
  },
];

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-10">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ delay: index * 0.3, duration: 0.8 }}
          className="bg-white shadow rounded-2xl p-6"
        >
          <h2 className="text-2xl font-bold">{section.title}</h2>
          <p className="mt-2 text-gray-700">{section.text}</p>
        </motion.div>
      ))}
    </main>
  );
}
