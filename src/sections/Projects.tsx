"use client";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import youtubeimage from "@/assets/images/youtube-image.png";
import eCommerce from "@/assets/images/eCommerce.png";
import lms from "@/assets/images/LMS.png";
import netflix from "@/assets/images/netflix.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "August",
    year: "2024",
    title: "LAMA E-Commerce",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "LCP improvement: Reduced from 3s to 1.5s." },
      { title: "Acheived 100% on SEO" },
    ],
    link: "https://ecommerce-inky-pi.vercel.app/",
    image: eCommerce,
  },
  {
    company: "April",
    year: "2024",
    title: "Learning Management System",
    results: [
      { title: "Fast Initial Load FCP: 1.2s" },
      { title: "Excellent Layout Stability CLS: 0.01" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://learning-management-system-beryl.vercel.app/courses",
    image: lms,
  },
  {
    company: "February",
    year: "2024",
    title: "Netflix GPT",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://netflix-gpt-six-bice.vercel.app/",
    image: netflix,
  },
  {
    company: "February",
    year: "2024",
    title: "MyTube",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtube-clone-syedabdulrahman3.vercel.app/",
    image: youtubeimage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="project">
      <div className="container flex justify-center">
        <div className="">
          <SectionHeader
            eyebrow="Real world project"
            title=" Featured Projects"
            description="See how i transformed real world experience into digital experience"
          />
          <div className="flex flex-col mt-10 gap-20 md:mt-20 ">
            {portfolioProjects.map((project, projectIndex) => (
              <Card
                key={project.title}
                className="px-8 pt-8 pb-0 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{
                  top: `calc(84px + ${projectIndex * 40}px`,
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-emerald-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      {" "}
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year} </span>
                    </div>
                    <h3 className="text-white font-serif mt-2 font-bold text-2xl md:text-4xl md:mt-4">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 " />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-6">
                      {project.results.map((result) => (
                        <li
                          key={result.title}
                          className="flex gap-2 text-white/50 md:text-base"
                        >
                          <CheckCircleIcon classname="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={project.link} target="_blank">
                      <button className="bg-white text-gray-600 rounded-lg w-full h-12 p-2 text-2xl font-semibold capitalize inline-flex items-center justify-center gap-2 mt-7 md:w-auto px-4">
                        view live site
                        <span>
                          <ArrowUpRightIcon className="size-6" />
                        </span>
                      </button>
                    </a>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 mx-auto md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none lg:rounded-tl-lg md:rounded-t-lg"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
