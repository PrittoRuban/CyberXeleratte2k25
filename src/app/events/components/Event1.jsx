"use client";
import { motion } from "framer-motion";

const Event1 = () => {
  return (
    <section className="relative w-full py-20 md:py-40 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br">
        {/* Background Glow */}
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#595584]"></div>

        <div className="max-w-7xl mx-auto px-4">
          {/* Top Section: Welcome, Description & Contact */}
          <div className="text-center py-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 text-transparent bg-clip-text">
                HackOff{" "}
                <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 text-transparent bg-clip-text">
                  CTF
                </span>
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4"
            >
              Engage in thrilling cyber challenges at our College Symposium's
              Capture The Flag (CTF) event! Test your hacking skills, solve
              puzzles, and decode hidden messages to capture the hidden flag.
              Join fellow tech enthusiasts for an adrenaline-fueled competition
              where strategy and wit prevail.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-800 dark:text-gray-100"
            >
              <p className="mb-2 font-semibold">Coordinators:</p>
              <p>
                📞 <span className="font-bold">Kishan Jai Soorya N</span> - 9443407479
              </p>
              <p>
                📞 <span className="font-bold">Sree Kannan A</span> - 9566027639
              </p>
            </motion.div>
          </div>

          {/* Middle Section: Event Poster & Rules and Guidelines */}
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
                src="/temp1poster.png" // Replace with your actual image path
                alt="HackOff CTF Poster"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md object-cover rounded-2xl shadow-lg dark:shadow-black/50"
              />
            </motion.div>

            {/* Rules and Guidelines */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-5 md:p-10 rounded-2xl shadow-lg dark:shadow-black/50 bg-white/30 dark:bg-black/30 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50"
            >
              <h2 className="text-2xl font-bold underline text-gray-800 dark:text-gray-200 mb-4">
                Rules and Guidelines
              </h2>
              <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-semibold">1.</span> Team Size: Maximum of 3 members per team.
                </li>
                <li>
                  <span className="font-semibold">2.</span> Duration: 1 hour 45 minutes (approx).
                </li>
                <li>
                  <span className="font-semibold">3.</span> No Flag Sharing: Any team found sharing flags will be immediately disqualified.
                </li>
                <li>
                  <span className="font-semibold">4.</span> Challenge Categories:
                  <ul className="pl-5 list-disc">
                    <li>Cryptography</li>
                    <li>Forensics</li>
                    <li>Reverse Engineering</li>
                    <li>Steganography</li>
                    <li>OSINT (Open-Source Intelligence)</li>
                    <li>Web Exploitation</li>
                    <li>Binary Exploitation</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">5.</span> Bring your own laptops/devices.
                </li>
                <li>
                  <span className="font-semibold">6.</span> Platform: CTFd.
                </li>
                <li>
                  <span className="font-semibold">7.</span> Flag Format: <code>hackoff&#123;flag&#125;</code>
                </li>
                <li>
                  <span className="font-semibold">8.</span> Style: Jeopardy.
                </li>
                <li>
                  <span className="font-semibold">9.</span> Mode: Offline (Venue: ME-302).
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Section: Register Now Button */}
          <div className="flex justify-center py-4">
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              href="#register"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-lg hover:from-teal-400 hover:to-blue-500 transition-all"
            >
              Register Now
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event1;
