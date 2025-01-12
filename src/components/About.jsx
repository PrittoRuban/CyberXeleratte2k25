"use client";

import React from "react";
import { useSectionObserver } from "@/hooks/intersection-observer";
import SectionHeading from "./ui/section-heading";

export default function About() {
  useSectionObserver("about", "About");

  return (
    <section
      id="about"
      className=""
    >
      <SectionHeading>About</SectionHeading>
    </section>
  );
}
