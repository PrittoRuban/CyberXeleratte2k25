"use client";

import React from "react";
import { useSectionObserver } from "@/hooks/intersection-observer";
import SectionHeading from "./ui/section-heading";

export default function Events() {
  useSectionObserver("events", "Events");

  return (
    <section
      id="events"
      className=""
    >
      <SectionHeading>Events</SectionHeading>
    </section>
  );
}
