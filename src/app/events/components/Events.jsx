"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // For animations
import { PinContainer } from "@/components/ui/3d-pin";
import { useSectionObserver } from "@/hooks/intersection-observer";
import SectionHeading from "@/components/ui/section-heading";

export default function Events() {
  const router = useRouter();
  useSectionObserver("events", "Events");

  const navigateToEvent = (eventId) => {
    router.push(`/events/${eventId}`);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative h-full w-full py-32">
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#595584]"></div>
      <SectionHeading> Technical Events </SectionHeading>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-16 place-items-center py-12 mb-12">
          {/* Event 1 */}
          <motion.div
            onClick={() => navigateToEvent("1")}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <PinContainer title="/events/projectxplosion">
              <div className="flex flex-col p-6 bg-gray-50 dark:bg-gray-900 shadow-xl rounded-lg transition-all w-[21rem] h-[21rem] space-y-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  ProjectXplosion
                </h3>
                <p className="text-base text-slate-500 dark:text-gray-400">
                  Showcase your innovative ideas where creativity meets
                  technology. Present your projects across various domains,
                  compete with the best, and win exciting cash prizes!
                </p>
                <div className="flex-1 w-full rounded-lg overflow-hidden bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <img
                    src="/temp3.png"
                    alt="Event Banner"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </PinContainer>
          </motion.div>
          {/* Event 2 */}
          <motion.div
            onClick={() => navigateToEvent("2")}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <PinContainer title="/events/hackoff-ctf">
              <div className="flex flex-col p-6 bg-gray-50 dark:bg-gray-900 shadow-xl rounded-lg transition-all w-[21rem] h-[21rem] space-y-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  HACKOFF CTF
                </h3>
                <p className="text-base text-slate-500 dark:text-gray-400">
                  Engage in thrilling cyber challenges at Capture The Flag (CTF)
                  event! Test your hacking skills, solve puzzles, and decode
                  hidden messages to capture the hidden flag.
                </p>
                <div className="flex-1 w-full rounded-lg overflow-hidden bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500">
                  <img
                    src="/temp2.png"
                    alt="Event Banner"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </PinContainer>
          </motion.div>
          {/* Event 3 */}
          <motion.div
            onClick={() => navigateToEvent("3")}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <PinContainer title="/events/code-sprint-odyssey">
              <div className="flex flex-col p-6 bg-gray-50 dark:bg-gray-900 shadow-xl rounded-lg transition-all w-[21rem] h-[21rem] space-y-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  CodeSprint Odyssey
                </h3>
                <p className="text-base text-slate-500 dark:text-gray-400">
                  In this fast-paced event, teams of three will take turns at
                  the keyboard—switching every 5 minutes—to tackle coding
                  challenges.
                </p>
                <div className="flex-1 w-full rounded-lg overflow-hidden bg-gradient-to-br from-red-500 via-pink-500 to-purple-500">
                  <img
                    src="/temp5.png"
                    alt="Event Banner"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </PinContainer>
          </motion.div>
          {/* Event 4 */}
          <motion.div
            onClick={() => navigateToEvent("4")}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <PinContainer title="/events/hack-off">
              <div className="flex flex-col p-6 bg-gray-50 dark:bg-gray-900 shadow-xl rounded-lg transition-all w-[21rem] h-[21rem] space-y-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  Hack-Off
                </h3>
                <p className="text-base text-slate-500 dark:text-gray-400">
                  Technical event on 5 February 2024.
                </p>
                <div className="flex-1 w-full rounded-lg overflow-hidden bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500">
                  <img
                    src="/temp4.png"
                    alt="Event Banner"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </PinContainer>
          </motion.div>
          {/* Event 5 */}
          <motion.div
            onClick={() => navigateToEvent("5")}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <PinContainer title="/events/cyber-heist">
              <div className="flex flex-col p-6 bg-gray-50 dark:bg-gray-900 shadow-xl rounded-lg transition-all w-[21rem] h-[21rem] space-y-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  Cyber-Heist
                </h3>
                <p className="text-base text-slate-500 dark:text-gray-400">
                  Non-Technical event on 5 February 2024.
                </p>
                <div className="flex-1 w-full rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500">
                  <img
                    src="/temp3.png"
                    alt="Event Banner"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </PinContainer>
          </motion.div>
        </div>

        {/* Non-Technical Events */}
        <SectionHeading> Non-Technical Events </SectionHeading>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-16 place-items-center py-12">
            {/* Event 6 */}
            <motion.div
              onClick={() => navigateToEvent("6")}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <PinContainer title="/events/bio-scope">
                <div className="flex flex-col p-6 bg-gray-50 dark:bg-gray-900 shadow-xl rounded-lg transition-all w-[21rem] h-[21rem] space-y-4">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                    Bio-Scope
                  </h3>
                  <p className="text-base text-slate-500 dark:text-gray-400">
                    Non-Technical event on 5 February 2024.
                  </p>
                  <div className="flex-1 w-full rounded-lg overflow-hidden bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500">
                    <img
                      src="/temp6.png"
                      alt="Event Banner"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </PinContainer>
            </motion.div>

            {/* Event 7 */}
            <motion.div
              onClick={() => navigateToEvent("7")}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              {" "}
              <PinContainer title="/events/dumb-bugs">
                {" "}
                <div className="flex flex-col p-6 bg-gray-50 dark:bg-gray-900 shadow-xl rounded-lg transition-all w-[21rem] h-[21rem] space-y-4">
                  {" "}
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                    {" "}
                    Dumb Bugs{" "}
                  </h3>{" "}
                  <p className="text-base text-slate-500 dark:text-gray-400">
                    {" "}
                    Technical event on 5 February 2024.{" "}
                  </p>{" "}
                  <div className="flex-1 w-full rounded-lg overflow-hidden bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500">
                    {" "}
                    <img
                      src="/temp7.png"
                      alt="Event Banner"
                      className="object-cover w-full h-full"
                    />{" "}
                  </div>{" "}
                </div>{" "}
              </PinContainer>{" "}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
