"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { PinContainer } from "@/components/ui/3d-pin";
import { useSectionObserver } from "@/hooks/intersection-observer";
import SectionHeading from "./ui/section-heading";

export default function Events() {
  const router = useRouter();
  useSectionObserver("events", "Events");

  const navigateToEvent = (eventId) => {
    router.push(`/events/${eventId}`);
  };

  return (
    <section id="events" className="relative h-full w-full py-20">
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#595584]"></div>
      <SectionHeading> Events </SectionHeading>
      <div className="w-full h-full py-20 flex flex-col md:flex-row flex-wrap justify-center items-center gap-20 md:gap-12 ">
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
    </section>
  );
}
