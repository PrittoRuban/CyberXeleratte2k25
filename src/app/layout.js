import { Capriola } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import AudioToggle from "@/components/AudioToggle";

const geistSans = Capriola({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const geistMono = Capriola({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "CyberXelerate 2k25",
  description:
    "The CyberXelerate-2k24 symposium at RMK College of Engineering and Technology offers a range of technical and non-technical competitions, including paper presentations, coding challenges, and penetration testing. Participants can attend without registration fees and have the chance to win cash prizes1. The event promises a professional atmosphere with a formal dress code and complimentary food.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ParticlesBackground />
        <AudioToggle src="/Remember-The-Name.mp3" />
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#423d3d]"></div>
        {/** <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> **/}
        <div className="relative  z-20">{children}</div>
      </body>
    </html>
  );
}
