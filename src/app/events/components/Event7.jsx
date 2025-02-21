"use client";
import { motion } from "framer-motion";

const Pencilvania = () => {
  return (
    <section className="relative w-full py-20 md:py-40 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br">
        {/* Background Glow */}
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem]
                     h-[31.25rem] w-[50rem] rounded-full blur-[10rem] 
                     sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] 
                     xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#595584]"
        ></div>

        <div className="max-w-7xl mx-auto px-4">
          {/* Top Section: Welcome & Description */}
          <div className="text-center py-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
                Pencilvania!
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 font-mono"
            >
              A rapid-fire team game where drawing talent and rapid intellect
              meet!
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-md md:text-lg text-gray-700 dark:text-gray-300 font-mono"
            >
              Teams draw two randomly chosen words each round—no words, no
              letters, all imagination—while teammates compete under the clock
              to decipher them. With every round, challenges mount and
              difficulty increase, testing creativity and collaboration to the
              max! Draw, guess, and become the Pencilvania champion!
            </motion.p>
          </div>

          {/* Middle Section: Event Poster & Rules & Guidelines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start py-8">
            {/* Event Poster */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src="/pencil-poster.jpg" // Replace with your actual poster image path
                alt="Pencilvania Poster"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md object-cover rounded-2xl shadow-lg dark:shadow-black/50"
              />
            </motion.div>

            {/* Rules & Guidelines */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-5 md:p-10 rounded-2xl shadow-lg dark:shadow-black/50 
                         bg-white/30 dark:bg-black/30 backdrop-blur-md 
                         border border-gray-200/50 dark:border-gray-800/50 font-mono"
            >
              <h2 className="text-2xl font-bold underline text-gray-800 dark:text-gray-200 mb-4">
                Rules &amp; Guidelines
              </h2>
              <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-semibold">Team Composition:</span> Each
                  team must have 2 to 3 members.
                </li>
                <li>
                  <span className="font-semibold">
                    Event Timing &amp; Date:
                  </span>{" "}
                  17.03.2025 &amp; 10:30 AM – 12:30 PM
                </li>
                <li>
                  <span className="font-semibold">Duration per Team:</span> 10
                  mins (approx.)
                </li>
                <li>
                  <span className="font-semibold">Game Format:</span> The event
                  consists of 3 rounds with increasing difficulty. In each
                  round, one team member picks 2 cards, each containing a word,
                  and sketches them while teammates guess.
                </li>
                <li>
                  <span className="font-semibold">Time Limits per Round:</span>
                  <ul className="list-disc ml-6">
                    <li>
                      <span className="font-semibold">Round 1 (Easy):</span> 60
                      seconds
                    </li>
                    <li>
                      <span className="font-semibold">Round 2 (Medium):</span>{" "}
                      120 seconds
                    </li>
                    <li>
                      <span className="font-semibold">Round 3 (Hard):</span> 180
                      seconds
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Restrictions:</span> No
                  letters, numbers, or symbols in the drawings. No verbal or
                  non-verbal hints. A different team member must draw in each
                  round.
                </li>
                <li>
                  <span className="font-semibold">Winning Criteria:</span> The
                  team with the most correctly guessed words across all rounds
                  in minimum time wins.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Faculty Coordinators */}
          {/* <div className="text-center py-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-gray-100"
            >
              Student Coordinators
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 dark:text-gray-300"
            >
            </motion.p>
          </div> */}

          {/* Register Now Button */}
          <div className="flex justify-center py-4">
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              href="https://docs.google.com/forms/d/e/1FAIpQLSfMI6C9CLEy4SZB-wRHT1N78vHTuUAP2Zxx8ODkkWCNKpkSig/viewform"
              target="_blank"
              rel="noreferrer noopener"
              className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-lg"
            >
              Register Now
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pencilvania;
