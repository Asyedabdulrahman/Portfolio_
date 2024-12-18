"use client"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import TinImage from "@/assets/images/3D-Tin.png"


export const MiscProject = () => {
    const portfolioProjects = [
        {
            company: "Dec",
            year: "2024",
            title: "3D Tin Rotation",
            results: [
                {
                    title: "Tested my CSS Skill after what i've Learned."
                },
                { title: "Seamless 3D Hover Animation on Mouse Interaction with Tin" }
            ],
            link: "https://3-d-tin-rotation.vercel.app/",
            image: TinImage
        },

    ]

    return (
        <section className="pb-16 lg:py-24" id="project">
            <div className="container flex justify-center">
                <div className="">
                    <SectionHeader
                        eyebrow="Real world projects and Implementation"
                        title=" Misc. Projects"
                        description="Go to the one that amazed you."
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
                                            src={project?.image}
                                            alt={project?.title}
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
}