"use client";
import youtubeimage from "@/assets/images/youtube-image.png";
import eCommerce from "@/assets/images/eCommerce.png";
import lms from "@/assets/images/LMS.png";
import netflix from "@/assets/images/netflix.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import zide from "@/assets/images/zide.png";
import { useState } from "react";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";
import useMeasure from "react-use-measure";

const detailofProject = [
  {
    heading: "zIDE ZOHO Ecosystem Based Online Extension",
    moreDetails: `
    Key Features of zIDE <br /><br />
    ✅ AI-Powered Optimization: Leveraging the power of Gemini AI, zIDE provides real-time code enhancements. From syntax corrections to advanced optimization suggestions, Gemini AI ensures developers write cleaner, more efficient code with ease.<br /><br />
    ✅ Integrated Zoho Cliq Bot: Bringing coding interactions directly into Zoho Cliq, our bot acts as a coding assistant, bridging communication and code execution. Developers can write, test, and debug code without leaving their workspace.<br /><br />
    ✅ Deluge Code Integration: Built to seamlessly harness the capabilities of Zoho’s ecosystem, zIDE integrates Deluge scripting to unlock advanced automation and customization for developers. This allows businesses to streamline workflows and scale effortlessly
  `,
  },
  {
    heading: "LAMA E-Commerce",
    moreDetails: ` Project Overview
LAMA E-Commerce is an innovative online shopping platform designed to provide an enhanced user experience while optimizing performance. Built with modern technologies, this platform focuses on improving accessibility, user interface (UI) design, and backend speed to offer a seamless and fast online shopping experience. <br /><br />

<strong>Key Features </strong>
<br><br />

✅ Enhanced User Experience: The platform focuses on improving user interaction through an intuitive and responsive design, ensuring that users have a smooth shopping experience across all devices.<br /><br />

✅ Performance Optimization: By optimizing key performance metrics like Largest Contentful Paint (LCP), we've reduced load times significantly. LCP has been cut down from 3s to 1.5s, improving the site's speed and making it highly responsive for users.<br /><br />

✅ SEO Optimization: LAMA E-Commerce achieved a 100% score in SEO, ensuring that the website ranks well on search engines and remains highly discoverable. This ensures increased visibility and higher traffic.<br /><br />

✅ User-Centric Design: The platform's design is based on real-world user behavior and industry best practices. It’s focused on reducing friction and providing a quick, hassle-free checkout process.<br /><br />

Why LAMA E-Commerce Stands Out <br /><br />
🚀 Fast & Efficient: With a focus on performance, LAMA E-Commerce ensures that users don’t have to wait for long loading times, making shopping a quick and enjoyable experience.<br /><br />

🔎 SEO-Driven Strategy: The platform is designed with SEO optimization in mind, resulting in better rankings, higher visibility, and more traffic, which ultimately boosts sales and user engagement.<br /><br />

💻 User Experience First: LAMA is designed for real-world shoppers. From a mobile-friendly UI to rapid page load speeds, it ensures that customers enjoy a seamless experience, whether they are browsing or making a purchase.
`,
  },
  {
    heading: "LAMA E-Commerce",
    moreDetails: `
     Learning Management System (LMS)<br /><br />
The Learning Management System (LMS) is a comprehensive platform designed to manage, deliver, and track educational content. Built with a focus on speed, accessibility, and user experience, LMS serves as a robust solution for educational institutions, organizations, and individuals to streamline the learning process. Whether it's for employees, students, or trainers, the system provides tools for organizing courses, managing learner progress, and delivering a personalized learning experience.<br /><br />

Key Features:<br /><br />
✅ Fast Initial Load (FCP: 1.2s): The platform is optimized for quick loading, ensuring that users spend minimal time waiting for pages to load, providing a smooth and efficient experience from the moment they land on the platform.<br /><br />

✅ Excellent Layout Stability (CLS: 0.01): With optimized layout rendering and a mobile-first approach, the system maintains stability during page loads, minimizing layout shifts and improving the user experience, especially on mobile devices.<br /><br />

✅ Course Management: LMS offers a user-friendly interface for educators and administrators to create, manage, and organize courses with ease. It includes features for uploading course materials, setting quizzes, and tracking student progress.<br /><br />

✅ Interactive Learning Features: The system includes tools for live discussions, interactive quizzes, and assessments, making learning more engaging and effective for students.<br /><br />

✅ Progress Tracking: Learners can track their progress in real time, helping them stay motivated and on top of their studies. The platform provides insights into completion rates, quiz performance, and overall course achievements.<br /><br />

✅ Responsive Design: Whether accessed on desktop, tablet, or mobile devices, LMS provides an optimized, responsive experience, ensuring users can learn anytime, anywhere, with minimal friction.<br /><br />

✅ Seamless Integration: LMS integrates easily with other tools and platforms, allowing for seamless data synchronization and external integrations, enhancing its utility and flexibility for various learning environments.<br /><br />

Why LMS Stands Out:<br /><br />
🚀 Speed & Performance: With optimized loading times and a lightweight structure, LMS delivers fast content delivery, keeping learners engaged without interruptions.<br /><br />

🔎 Focus on Learning: The platform is designed to reduce distractions, allowing users to focus solely on learning. With an easy-to-navigate interface, learners can access course content without any hassle.<br /><br />

💻 Scalable and Flexible: LMS is designed to grow with your needs, whether you're an individual learner or part of an educational institution. It supports a wide range of courses and learners, providing a scalable solution for all.<br /><br />

📈 Engaging and Interactive: By integrating interactive tools and progress tracking, LMS keeps learners motivated and engaged throughout their learning journey, driving better results and satisfaction.`,
  },
  {
    heading: "NETFLIX GPT",
    moreDetails: ` Netflix GPT<br /><br />
Netflix GPT is a cutting-edge web application that uses artificial intelligence to enhance the user experience on the Netflix platform. By leveraging GPT-based technology, Netflix GPT offers users personalized movie and TV show recommendations, content summaries, and improved search functionality. It aims to provide a smarter and more efficient way for users to explore and discover content tailored to their preferences, making their Netflix experience even more enjoyable.<br /><br />

Key Features:<br /><br />
✅ Personalized Content Recommendations: Using advanced AI algorithms, Netflix GPT analyzes user preferences, watching history, and popular content to recommend movies and TV shows that align with individual tastes, ensuring a more customized and engaging experience.<br /><br />

✅ AI-Powered Content Summaries: The platform integrates GPT to provide concise and insightful summaries of movies and shows. Whether you're deciding what to watch next or need a quick refresher, the AI summarizes key plot points, making it easier to decide which content to engage with.<br /><br />

✅ Improved Search Functionality: Netflix GPT optimizes the search feature by offering smart search suggestions. Users can find content based on genre, mood, or even specific themes, and the AI helps refine results to match their needs more accurately.<br /><br />

✅ Real-Time Interaction: With GPT-based chatbot features, users can interact with Netflix GPT in real-time, asking questions about content, requesting recommendations, or getting more information about specific shows and movies. It transforms the traditional Netflix browsing experience into an interactive one.<br /><br />

✅ Seamless Integration: Built on top of the existing Netflix ecosystem, Netflix GPT integrates smoothly without disrupting the overall user experience. It enhances Netflix's features by adding an extra layer of intelligence, providing users with a next-level browsing and viewing experience.<br /><br />

✅ Quick Load Time & Performance: The platform ensures that its AI-powered features, like recommendations and summaries, load quickly with minimal latency, providing a seamless experience without lag or unnecessary delays.<br /><br />

Why Netflix GPT Stands Out:<br /><br />
🚀 AI-Powered Experience: Netflix GPT takes the traditional Netflix experience to new heights by adding AI-powered features that anticipate user needs, making content discovery more intuitive, personalized, and enjoyable.<br /><br />

🔎 Smarter Recommendations: By utilizing user data and AI, Netflix GPT offers smarter, more accurate movie and TV show recommendations, ensuring that users always have something new and exciting to watch.<br /><br />

💬 Interactive & Engaging: Netflix GPT transforms the way users interact with the platform. The AI-powered chatbot allows for a more engaging experience, letting users ask questions and get personalized responses in real time.<br /><br />

💻 Optimized Performance: Designed to deliver high performance, Netflix GPT ensures fast, smooth navigation without slowing down the browsing experience, enhancing overall user satisfaction.`,
  },
  {
    heading: "MyTube Video Sharing Platform",
    moreDetails: `
MyTube is a video streaming web application built using React, Tailwind CSS, and the YouTube API. It provides users with a smooth, ad-free video watching experience, offering high-quality video streaming, live chat, and interactive features like comments.<br /><br />

Key Features:<br /><br />
✅ Video Streaming via YouTube API: Integrated the YouTube API to stream high-quality videos without interruptions. Users can watch videos in various qualities, ranging from 720p to 4K, ensuring an exceptional viewing experience.<br /><br />

✅ Live Chat: MyTube features live chat, allowing viewers to interact with each other in real-time while watching videos. This fosters engagement and communication among users.<br /><br />

✅ Comment Section: Users can leave comments on videos, engaging directly with the content creator and other viewers, making the platform more interactive and community-oriented.<br /><br />

✅ Ad-Free Streaming: Unlike traditional platforms, MyTube offers ad-free video streaming, providing users with uninterrupted, high-quality content.<br /><br />

✅ Responsive Design: Designed with Tailwind CSS, MyTube ensures a responsive and intuitive interface that adapts to various devices, providing an optimal viewing experience on both mobile and desktop platforms.<br /><br />

Technologies Used:<br /><br />
HTML & Tailwind CSS: For building a modern and responsive UI.
JavaScript ES6 & React: To create a dynamic and interactive frontend.
RTK (Redux Toolkit): For efficient state management.
React Router: To handle navigation across different pages of the application.
YouTube API: To stream high-quality videos and manage video content.<br /><br />
Why MyTube Stands Out:<br /><br />
🚀 Ad-Free Video Streaming: MyTube provides a unique ad-free experience, allowing users to enjoy videos without interruptions, unlike other platforms.<br /><br />

💬 Real-Time Interaction: The live chat feature enables users to interact with each other and the content creator, enhancing the overall experience.<br /><br />

📱 Mobile-First Design: Built with Tailwind CSS, MyTube is designed to work seamlessly on mobile devices, ensuring that users can enjoy high-quality video streaming on the go.<br /><br />

🎥 High-Quality Streaming: Thanks to the integration of the YouTube API, MyTube offers high-quality video streaming with minimal buffering, ensuring a premium viewing experience.

`,
  },
];

const portfolioProjects = [
  {
    company: "Dec",
    year: "2024",
    title: "zIDE",
    results: [
      { title: "ZOHO Hackathon: zIDE - IDE for Zoho ecosystem." },
      { title: "AI-Powered: Enhances code and optimizes uploaded files." },
      { title: "Productive: Boosts developer productivity" },
    ],
    link: "https://z-ide.vercel.app/",
    image: zide,
  },
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
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <section className="pb-16 lg:py-24 z-30" id="project ">
      <div className="container flex justify-center">
        <div className="">
          <SectionHeader
            eyebrow="Real world project"
            title=" Featured Projects"
            description="See how i transformed real world experience into digital experience"
          />
          <div className="flex flex-col mt-10 gap-20 md:mt-20 ">
            {portfolioProjects.map((project, Index) => (
              <Card
                key={project.title}
                className="px-8 pt-8 pb-0 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{
                  top: `calc(84px + ${Index * 40}px`,
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
                          <CheckCircleIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-4">
                      <div className="">
                        <a href={project.link} target="_blank">
                          <button className="bg-white text-gray-600 rounded-lg w-full h-12 p-2 text-lg sm:text-xl md:text-2xl font-semibold capitalize inline-flex items-center justify-center gap-2 mt-7 md:w-auto px-4 shrink-0 whitespace-nowrap break-words overflow-hidden">
                            view live site
                            <span>
                              <ArrowUpRightIcon className="size-6" />
                            </span>
                          </button>
                        </a>
                      </div>
                      

                      <button
                        onClick={() => {
                          setOpen(true), handleClick(Index);
                        }}
                        className="bg-white text-gray-600 rounded-lg  h-12 p-2 text-2xl font-semibold capitalize inline-flex items-center justify-center gap-2 mt-7 md:w-auto px-4"
                      >
                        more...
                        <DragCloseDrawer open={open} setOpen={setOpen}>
                          <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                            {open && selectedIndex !== null && (
                              <>
                                <h2 className="text-4xl font-bold text-neutral-200">
                                  {detailofProject[selectedIndex]?.heading}
                                </h2>
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      detailofProject[selectedIndex]
                                        ?.moreDetails,
                                  }}
                                />
                              </>
                            )}
                          </div>
                        </DragCloseDrawer>
                      </button>
                    </div>
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

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();
  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    const yStart = typeof y.get() === "number" ? y.get() : 0;
    await animate(scope.current, {
      opacity: [1, 0],
    });
    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
