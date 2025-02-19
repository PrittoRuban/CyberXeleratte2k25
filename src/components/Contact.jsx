import { HoverEffect } from "@/components/ui/card-hover-effect";
import SectionHeading from "./ui/section-heading";
import { useSectionObserver } from "@/hooks/intersection-observer";

export default function Contact() {
  useSectionObserver("contact", "Contact");
  return (
    <section id="contact" className="relative max-w-5xl mx-auto px-8 mb-12 backdrop-blur-sm">

      <SectionHeading>Contact</SectionHeading>
      <HoverEffect items={contacts} className="gap-6" />
    </section>
  );
}

export const contacts = [
  {
    title: "Head Of Department CSE (Cyber Security)",
    details: [{ name: "Dr. Udhaya Sankar S M", phone: "" }],
  },
  {
    title: "Faculty Coordinator - Associate Professor",
    details: [
      { name: "Dr. Dharini N", phone: "" },
    ],
  },
  {
    title: "Student Coordinators",
    details: [
      { name: "Mr. Aswanth Babu", phone: "+91 91509 08828" },
    ],
  },
];
