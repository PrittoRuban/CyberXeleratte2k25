"use client";
import { motion } from "framer-motion";

const Event1 = () => {
  return (
    <section className="relative h-full w-full py-40 backdrop-blur-sm">
      <div className="md:p-10 min-h-screen flex items-center bg-gradient-to-br">
        {/* Background Glow */}
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#595584]"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section: Poster Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="/temp1poster.png" // Replace with the actual path to your poster image
              alt="Dumb Bugs Poster"
              className="w-full max-w-lg rounded-2xl shadow-lg dark:shadow-black/50"
            />
          </motion.div>

          {/* Right Section: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            viewport={{ once: true }}
            className="p-5 md:p-10 rounded-2xl shadow-lg dark:shadow-black/50 text-gray-900 dark:text-gray-100 flex flex-col justify-center w-full bg-white/30 dark:bg-black/30 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50"

          >
            {/* Event Title */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold sm:font-extrabold mb-5 leading-tight"
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
                Dumb{" "}
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
                  Bugs
                </span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300"
            >
              Join us at Cyber-X-elerate for a thrilling debugging competition
              that tests your problem-solving skills with real-world challenges.
            </motion.p>

            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 text-gray-800 dark:text-gray-300"
            >
              <p>
                📅{" "}
                <span className="font-bold text-gray-900 dark:text-gray-50">
                  5th February 2024
                </span>
              </p>
              <p>
                ⏰{" "}
                <span className="font-bold text-gray-900 dark:text-gray-50">
                  10:30 AM
                </span>
              </p>
              <p>
                🏆{" "}
                <span className="font-bold text-gray-900 dark:text-gray-50">
                  Win exciting prizes!
                </span>
              </p>
            </motion.div>

            {/* Rules Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 space-y-4"
            >
              <h2 className="text-2xl font-bold underline text-gray-800 dark:text-gray-200">
                Rules
              </h2>
              <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-semibold">1.</span> Participation is
                  individual.
                </li>
                <li>
                  <span className="font-semibold">2.</span> Challenges will
                  cover multiple programming languages.
                </li>
                <li>
                  <span className="font-semibold">3.</span> Scoring will be
                  based on accuracy, efficiency, and debugging quality.
                </li>
                <li>
                  <span className="font-semibold">4.</span> Solve a total of 5
                  problems: 3 easy, 1 medium, and 1 difficult.
                </li>
                <li>
                  <span className="font-semibold">5.</span> Formal dress code is
                  mandatory.
                </li>
              </ul>
            </motion.div>

            {/* Register Now Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut" }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a
                href="#register"
                className="inline-block px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-lg hover:from-teal-400 hover:to-blue-500 transition-all dark:from-teal-400 dark:to-blue-500 dark:hover:from-blue-500 dark:hover:to-teal-400"
              >
                Register Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Event1;
