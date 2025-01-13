"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  { language: "Namaste", color: "text-blue-500" },
  { language: "مرحبا", color: "text-green-500" },
  { language: "Merhaba", color: "text-yellow-500" },
  { language: "Salam", color: "text-red-500" },
  { language: "Sawubona", color: "text-purple-500" },
];

const Loading = ({ onLoaded }) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 300);

    const timeout = setTimeout(() => {
      onLoaded();
    }, 300 * greetings.length); // Run the animation once

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onLoaded]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 z-50"
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
  );
};

const Home = () => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const lastVisit = localStorage.getItem("hasVisited");
    const now = Date.now();

    if (!lastVisit || now - parseInt(lastVisit) > 3 * 60 * 60 * 1000) {
      setShowLoading(true);
      localStorage.setItem("hasVisited", now.toString());
    }
  }, []);

  const handleLoaded = () => {
    setShowLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {showLoading && <Loading onLoaded={handleLoaded} />}
      </AnimatePresence>
      {!showLoading && (
        <main className="flex flex-col items-center px-4 overflow-hidden">
          <h1 className="text-4xl font-bold">Welcome to My App!</h1>
          <p className="text-lg mt-2">
            This is the main content of the page, visible after the loading
            animation.
          </p>
        </main>
      )}
    </>
  );
};

export default Home;
