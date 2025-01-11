"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function ContainerScrollAnimation() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white sm:mb-7">
              At{" "}
              <span className="text-red-600 font-extrabold ">
                CyberXelerate' 2k25
              </span>
              <br />
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] mt-1 leading-none font-bold">
                Cybersecurity Innovations
              </span>
            </h1>
          </>
        }
      >
        <Image
          src='/image.png'
          alt="hero"
          height={420}
          width={1000}
          className="mx-auto rounded-2xl object-cover h-full w-full ml-6 sm:ml-0 sm:object-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
