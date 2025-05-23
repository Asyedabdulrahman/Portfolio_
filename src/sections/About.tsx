"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import chennaiImage from "@/assets/images/Screenshot (319).png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion, useDragControls } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "html",
    iconType: HTMLIcon,
  },
  {
    title: "css3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "chrome",
    iconType: ChromeIcon,
  },
  {
    title: "github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Leetcode",
    emoji: "🎨",
    left: "5%",
    top: "0%",
    link: "https://leetcode.com/u/rahman33/"
  },
  {
    title: "LinkedIn",
    emoji: "📸",
    left: "50%",
    top: "5%",
    link: "https://www.linkedin.com/in/syedabdulrahman33/"
  },
  {
    title: "Github",
    emoji: "🎯",
    left: "20%",
    top: "35%",
    link: "https://github.com/Asyedabdulrahman"
  },
  {
    title: "Vercel",
    emoji: "🏃‍♀️",
    left: "55%",
    top: "48%",
    link: "https://vercel.com/syedabdulrahman3"
  },

];

export const AboutSection = () => {
  // const controls = useDragControls();
  const constraintRef = useRef(null);

  return (
    <div className="py-20 lg:py-28 overflow-x-clip" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A glimpse into my world"
          description="Learn more ."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My reads"
                description="explore the books shaping ny perspective"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="bookimage" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="my Toolbox"
                description="explore the books shaping my perspective"
                className=""
              />
              <ToolboxItems
                toolboxItems={toolboxItems}
                className=""
                itemsWrapperClassName=""
              />
              <ToolboxItems
                toolboxItems={toolboxItems}
                className=""
                itemsWrapperClassName=""
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Dev Ecosystem & Tech Stack Tools"
                description="Click to know more About Me ⬇️"
                className="px-6 py-6 "
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobbie) => (
                  <button
                    key={hobbie.title}
                    className="inline-flex items-center gap-2 px-8 py-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full  absolute "
                    style={{
                      left: hobbie.left,
                      top: hobbie.top,
                    }}
                    onClick={() => window.open(hobbie.link, "_blank")}
                  >
                    <span className="font-medium text-2xl text-gray-950">
                      {hobbie.title}
                    </span>
                    <span>{hobbie.emoji}</span>
                  </button>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative  md:col-span-2 lg:col-span-1">
              <Image
                src={chennaiImage}
                alt="mapImage"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 size-20  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-300 to-sky-400 -z-10"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <Image
                  src={smileMemoji}
                  alt="SmilememoImage"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
