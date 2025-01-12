"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Countdown from "./ui/Timer";

export function ContainerScrollAnimation() {
  return (
    <div className="flex flex-col overflow-hidden mt-8">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-5xl md:text-6xl font-bold sm:font-extrabold mb-3 text-black dark:text-white sm:mb-5 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text">
                Cyber
                <span className="text-6xl md:text-7xl bg-gradient-to-r font-bold from-indigo-400 via-green-500 to-blue-600 text-transparent bg-clip-text">
                  X
                </span>
                elerate
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
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 sm:mb-8">
              Join us in a journey to explore, compete, and excel in the
              ever-evolving world of{" "}
              <span className="bg-gradient-to-r from-blue-500 via-green-400 to-teal-300 inline-block sm:mb-8  text-transparent bg-clip-text ">
                Cybersecurity Excellence.
              </span>
            </p>
          </>
        }
      >
        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8">
          <Countdown />
          <Image
            src="/kali.png"
            alt="hero"
            height={820}
            width={1200}
            className="rounded-2xl object-cover sm:object-top shadow-lg"
            draggable={false}
          />
          <p className="text-lg font-bold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Let&apos;s get started! Happy Hacking
            </span>
            <span className="text-2xl">🧑‍💻</span>
          </p>
        </div>
      </ContainerScroll>
    </div>
  );
}
