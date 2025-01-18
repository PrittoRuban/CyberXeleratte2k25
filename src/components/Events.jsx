"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { PinContainer } from "@/components/ui/3d-pin";
import { useSectionObserver } from "@/hooks/intersection-observer";
import SectionHeading from "./ui/section-heading";
import { motion } from "framer-motion";

export default function Events() {
  const router = useRouter();
  useSectionObserver("events", "Events");

  const navigateToEvent = (eventId) => {
    router.push(`/events/${eventId}`);
  };

  return (
    <section id="events" className="relative h-full w-full py-20 md:py-24">
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#595584] "></div>
      <SectionHeading> Events </SectionHeading>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12 place-items-center py-20">
          <motion.div
            onClick={() => navigateToEvent("1")}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <PinContainer title="/events/cipher-dexterity">
              <div className="flex flex-col p-6 bg-gray-50 dark:bg-gray-900 shadow-xl rounded-lg transition-all w-[21rem] h-[21rem] space-y-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  Cipher Dexterity
                </h3>
                <p className="text-base text-slate-500 dark:text-gray-400">
                  Technical event on 5 February 2024.
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
            <PinContainer title="/events/code-challenge">
              <div className="flex flex-col p-6 bg-gray-50 dark:bg-gray-900 shadow-xl rounded-lg transition-all w-[21rem] h-[21rem] space-y-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  Code Challenge
                </h3>
                <p className="text-base text-slate-500 dark:text-gray-400">
                  Competitive coding on 10 February 2024.
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
            <PinContainer title="/events/design-sprint">
              <div className="flex flex-col p-6 bg-gray-50 dark:bg-gray-900 shadow-xl rounded-lg transition-all w-[21rem] h-[21rem] space-y-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  Design Sprint
                </h3>
                <p className="text-base text-slate-500 dark:text-gray-400">
                  UI/UX workshop on 15 February 2024.
                </p>
                <div className="flex-1 w-full rounded-lg overflow-hidden bg-gradient-to-br from-red-500 via-pink-500 to-purple-500">
                  <img
                    src="/temp1.png"
                    alt="Event Banner"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </PinContainer>
          </motion.div>
        </div>
        <div
          className="flex justify-center items-center mt-8"
          onClick={() => router.push("/events")}
        >
          <button
            className="px-6 py-3 sm:px-8 sm:py-4 text-md sm:text-lg font-semibold 
               text-white bg-gradient-to-r from-blue-500 to-teal-400 
               rounded-full shadow-lg 
               hover:from-teal-400 hover:to-blue-500 
               transition-all transform hover:scale-105 
               dark:from-teal-400 dark:to-blue-500 
               dark:hover:from-blue-500 dark:hover:to-teal-400"
            style={{ borderRadius: "3rem" }}
          >
            View All Events →
          </button>
        </div>
      </div>
    </section>
  );
}
