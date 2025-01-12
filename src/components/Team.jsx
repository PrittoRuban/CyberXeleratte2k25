"use client";

import React from "react";
import { useSectionObserver } from "@/hooks/intersection-observer";
import SectionHeading from "./ui/section-heading";

export default function Team() {
  useSectionObserver("team", "Team");

  return (
    <section
      id="team"
      className=""
    >
      <SectionHeading>Team</SectionHeading>
    </section>
  );
}
