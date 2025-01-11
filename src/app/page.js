"use client";
import { ContainerScrollAnimation } from "@/components/ContainerScrollAnimation";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <ContainerScrollAnimation />
      Hello
    </div>
  );
}
