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
            <h1 className="text-5xl md:text-6xl font-extrabold text-black dark:text-white sm:mb-8 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                CyberXelerate
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              Empowering the next generation of cybersecurity enthusiasts
              through{" "}
              <span className="text-blue-500 dark:text-green-400 font-bold">
                cutting-edge competitions
              </span>{" "}
              and{" "}
              <span className="text-indigo-500 dark:text-indigo-400 font-bold">
                unparalleled opportunities.
              </span>
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Join us in a journey to explore, compete, and excel in the
              ever-evolving world of{" "}
              <span className="bg-gradient-to-r from-blue-500 via-green-400 to-teal-300 inline-block text-transparent bg-clip-text">
                Cybersecurity Excellence.
              </span>
            </p>
          </>
        }
      >
        <Image
          src="/image.png"
          alt="hero"
          height={500}
          width={1200}
          className="mx-auto rounded-2xl object-cover h-full w-full sm:object-top shadow-lg"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
