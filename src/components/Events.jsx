"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { PinContainer } from "@/components/ui/3d-pin";
import { useSectionObserver } from "@/hooks/intersection-observer";
import SectionHeading from "./ui/section-heading";
import { Button } from "./ui/moving-border";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 place-items-center py-20">
          <div onClick={() => navigateToEvent("1")}>
            <PinContainer title="/events/cipher-dexterity">
              <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 lg:w-[23rem] lg:h-[23rem] w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base ">
                  Cipher Dexterity
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    Technical event on 5 February 2024.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mb-2 mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <img src="/temp3.png"></img>
                </div>
              </div>
            </PinContainer>
          </div>
          <div onClick={() => navigateToEvent("2")}>
            <PinContainer title="/events/cipher-dexterity">
              <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 lg:w-[23rem] lg:h-[23rem] w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base ">
                  Cipher Dexterity
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    Technical event on 5 February 2024.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mb-2 mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <img src="/temp3.png"></img>
                </div>
              </div>
            </PinContainer>
          </div>
          <div onClick={() => navigateToEvent("3")}>
            <PinContainer title="/events/cipher-dexterity">
              <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 lg:w-[23rem] lg:h-[23rem] w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base ">
                  Cipher Dexterity
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    Technical event on 5 February 2024.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mb-2 mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <img src="/temp3.png"></img>
                </div>
              </div>
            </PinContainer>
          </div>
        </div>
        <div
          className="flex justify-center items-center mt-8"
          onClick={() => router.push("/events")}
        >
          <button
            className="px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl font-semibold 
               text-white bg-gradient-to-r from-blue-500 to-teal-400 
               rounded-full shadow-lg 
               hover:from-teal-400 hover:to-blue-500 
               transition-all transform hover:scale-105 
               dark:from-teal-400 dark:to-blue-500 
               dark:hover:from-blue-500 dark:hover:to-teal-400"
            style={{ borderRadius: "2rem" }}
          >
            View All Events →
          </button>
        </div>
      </div>
    </section>
  );
}
