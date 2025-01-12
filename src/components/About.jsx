"use client";

import React from "react";
import { useSectionObserver } from "@/hooks/intersection-observer";

export default function About() {
  useSectionObserver("about", "About");

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-200 flex items-center justify-center"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4 text-gray-600">
          Welcome to the About section. Add detailed information about your
          project, team, or business here.
        </p>
      </div>
    </section>
  );
}
