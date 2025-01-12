"use client";

import React from "react";
import { useSectionObserver } from "@/hooks/intersection-observer";
import SectionHeading from "./ui/section-heading";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export default function About() {
  useSectionObserver("about", "CyberXelerate-2k24");

  return (
    <section
      id="about"
      className="relative py-16 text-white "
    >
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 "
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight"
          >
            Ignite Your Cybersecurity Passion
          </motion.h1>

          {/* Intro Paragraph */}
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300"
          >
            Join us for the{" "}
            <span className="font-bold text-white">
              CyberXelerate-2k24 Symposium
            </span>
            , organized by the{" "}
            <span className="font-bold text-white">
              Department of CSE (Cyber Security)
            </span>{" "}
            at{" "}
            <span className="font-bold text-white">
              R.M.K. College of Engineering and Technology
            </span>
            . This thrilling event is packed with exciting competitions designed
            to challenge your skills and knowledge in the dynamic world of{" "}
            <span className="font-bold text-white">cybersecurity</span>.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="mt-8"
          >
            <ul className="space-y-4 md:space-y-3">
              {[
                {
                  text: "No Registration Fees",
                  description: "Participate at absolutely no cost.",
                },
                {
                  text: "Exciting Cash Prizes",
                  description:
                    "Showcase your cybersecurity expertise and win big.",
                },
                {
                  text: "Complimentary Food",
                  description:
                    "Enjoy free meals while you dive into the challenges.",
                },
                {
                  text: "Professional Atmosphere",
                  description:
                    "Dress formally and connect with industry experts.",
                },
                {
                  text: "Transport Facilities",
                  description:
                    "Convenient transport provided, with routes updated via WhatsApp.",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-4"
                >
                  <span className="text-blue-400 font-semibold">➤</span>
                  <span className="text-gray-300 text-sm sm:text-base md:text-lg">
                    <span className="font-bold text-white">{item.text}</span>:{" "}
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="mt-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-300">
              Event Details
            </h2>
            <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg">
              📅 <span className="font-bold text-white">Date</span>: February 5,
              2024 <br />
              📍 <span className="font-bold text-white">Location</span>: R.M.K.
              College of Engineering and Technology, Tamil Nadu
            </p>
          </motion.div>

          {/* Register Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
            className="mt-8"
          >
            <a
              href="#register"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-lg hover:from-teal-400 hover:to-blue-500 transition-all"
            >
              Register Now
            </a>
          </motion.div>
        </motion.div>
      </LampContainer>
    </section>
  );
}
