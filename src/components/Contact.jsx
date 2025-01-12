"use client";

import React from "react";
import { useSectionObserver } from "@/hooks/intersection-observer";
import SectionHeading from "./ui/section-heading";

export default function Contact() {
  useSectionObserver("contact", "Contact");

  return (
    <section
      id="contact"
      className=""
    >
      <SectionHeading>Contact</SectionHeading>
    </section>
  );
}
