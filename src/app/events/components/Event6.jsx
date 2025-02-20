"use client";
import { motion } from "framer-motion";

const ThinkTankTussle = () => {
  return (
    <section className="relative w-full py-20 md:py-40 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br">
        {/* Background Glow */}
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#595584]"></div>

        <div className="max-w-7xl mx-auto px-4">
          {/* Top Section: Title & Description */}
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
              Think Tank Tussle
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 font-mono"
            >
              Non-technical event packed with thrilling challenges and
              brain-teasing fun! Think Tank Tussle tests your quick thinking
              through two engaging rounds.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-md md:text-lg text-gray-700 dark:text-gray-300 font-mono"
            >
              <span className="font-bold">
                Round 1 – The Brainstorm Battle:
              </span>{" "}
              Dive into mini-games like puzzles, quizzes, find-the-object, and
              movie buffs.
              <br />
              <span className="font-bold">
                Round 2 – The Ultimate Memory Showdown:
              </span>{" "}
              Face intense memory challenges to be crowned the ultimate Think
              Tank Champion!
            </motion.p>
          </div>

          {/* Middle Section: Poster & Rules/Gameplay */}
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
                src="/think-poster.jpg" // Replace with your actual poster image path
                alt="Think Tank Tussle Poster"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md object-cover rounded-2xl shadow-lg dark:shadow-black/50"
              />
            </motion.div>

            {/* Rules and Gameplay */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-5 md:p-10 rounded-2xl shadow-lg dark:shadow-black/50 bg-white/30 dark:bg-black/30 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 font-mono"
            >
              <h2 className="text-2xl font-bold underline text-gray-800 dark:text-gray-200 mb-4">
                Rules &amp; Gameplay
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-3">
                {/* Round 1 */}
                <div>
                  <p className="font-semibold">
                    Round 1 – The Brainstorm Battle:
                  </p>
                  <ul className="list-disc ml-6">
                    <li>
                      Pick a random card from a mystery bowl to get assigned a
                      mini-game.
                    </li>
                    <li>Answer five questions, each with a 45-second limit.</li>
                    <li>Top performers advance to the final round.</li>
                  </ul>
                </div>
                {/* Round 2 */}
                <div>
                  <p className="font-semibold">
                    Round 2 – The Ultimate Memory Showdown:
                  </p>
                  <ul className="list-disc ml-6">
                    <li>View a series of images for a short duration.</li>
                    <li>
                      After one minute, recall and rearrange the images in
                      order.
                    </li>
                    <li>
                      The player with the sharpest memory wins the championship.
                    </li>
                  </ul>
                </div>

                <br />
                <br />
                <div className="">
                  <ul>
                    <li className="text-lg font-semibold text-red-600 dark:text-red-400">
                      Win exciting cash prizes and bragging rights by showcasing
                      your intellect and memory skills.{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Details */}
          {/* <div className="text-center py-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-gray-100"
            >
              Student Event Coordinators
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 dark:text-gray-300"
            >
              E.P. VishnuSudarsan (9150247330)
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 dark:text-gray-300"
            >
              R.M. Kalandhi (7418028321)
            </motion.p>
          </div> */}

          {/* Register Now Button */}
          <div className="flex justify-center py-4">
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              href="https://docs.google.com/forms/d/e/1FAIpQLSd3BuNpvu_mZl0UP0aI3iYzQtqy6ygCo_gNTVwj8L1rNOdjxg/viewform"
              target="_blank"
              rel="noopener noreferrer"
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

export default ThinkTankTussle;
