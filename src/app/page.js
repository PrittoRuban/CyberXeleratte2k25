"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "@/components/About";
import { ContainerScrollAnimation } from "@/components/ContainerScrollAnimation";
import Events from "@/components/Events";
import Header from "@/components/Header";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/ui/section-divider";

const greetings = [
  { language: "Hello", color: "text-red-500" },
  { language: "Hola", color: "text-yellow-500" },
  { language: "Bonjour", color: "text-blue-500" },
  { language: "Ciao", color: "text-green-500" },
  { language: "こんにちは", color: "text-purple-500" },
  { language: "안녕하세요", color: "text-pink-500" },
  { language: "你好", color: "text-teal-500" },
  { language: "Здравствуйте", color: "text-orange-500" },
  { language: "Olá", color: "text-indigo-500" },
  { language: "Hallo", color: "text-gray-500" },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    // Check if the animation should be shown (after 3 hours or first visit)
    if (!lastVisit || now - parseInt(lastVisit, 10) > 3 * 60 * 60 * 1000) {
      setIsLoading(true);
      localStorage.setItem("lastVisit", now.toString());
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      // Cycle through greetings during loading
      const interval = setInterval(() => {
        setCurrentGreeting((prev) => (prev + 1) % greetings.length);
      }, 400);

      // Simulate background loading (adjust timing if needed)
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 4000); // Adjust to match loading requirements

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          // Loading Screen with Animated Greetings and Mirrored Background
          <motion.div
            key="loading-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-gray-700 bg-opacity-50 backdrop-filter backdrop-blur-lg"
          >
            <motion.div
              key={currentGreeting}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className={`text-3xl font-bold ${greetings[currentGreeting].color}`}
            >
              {greetings[currentGreeting].language}
            </motion.div>
          </motion.div>
        ) : (
          // Main Content
          <main className="flex flex-col items-center px-4 overflow-hidden">
            <Header />
            <ContainerScrollAnimation />
            <SectionDivider />
            <About />
            <Events />
            <Team />
            <SectionDivider />
            <Contact />
            <Footer />
          </main>
        )}
      </AnimatePresence>
    </>
  );
}
