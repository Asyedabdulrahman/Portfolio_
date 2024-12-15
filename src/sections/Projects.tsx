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
import zide from "@/assets/images/zide.png"
import { useState } from "react";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";
import useMeasure from "react-use-measure";


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
                          <CheckCircleIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="gap-4 inline-flex">
                      <a href={project.link} target="_blank">
                        <button onClick={() => setOpen(true)} className="bg-white text-gray-600 rounded-lg w-full h-12 p-2 text-2xl font-semibold capitalize inline-flex items-center justify-center gap-2 mt-7 md:w-auto px-4">
                          view live site
                          <span>
                            <ArrowUpRightIcon className="size-6" />
                          </span>
                        </button>
                      </a>
                      <button onClick={() => setOpen(true)} className="bg-white text-gray-600 rounded-lg wfull h-12 p-2 text-2xl font-semibold capitalize inline-flex items-center justify-center gap-2 mt-7 md:w-auto px-4">
                        more...
                        <DragCloseDrawer open={open} setOpen={setOpen}>
                          <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                            <h2 className="text-4xl font-bold text-neutral-200">
                              Drag the handle at the top of this modal downwards 100px to close it
                            </h2>
                            <p>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                              laboriosam quos deleniti veniam est culpa quis nihil enim suscipit
                              nulla aliquid iure optio quaerat deserunt, molestias quasi facere
                              aut quidem reprehenderit maiores.
                            </p>
                            <p>
                              Laudantium corrupti neque rerum labore tempore sapiente. Quos, nobis
                              dolores. Esse fuga, cupiditate rerum soluta magni numquam nemo
                              aliquid voluptate similique deserunt!
                            </p>
                            <p>
                              Rerum inventore provident laboriosam quo facilis nisi voluptatem
                              quam maxime pariatur. Velit reiciendis quasi sit magni numquam quos
                              itaque ratione, fugit adipisci atque est, tenetur officiis explicabo
                              id molestiae aperiam? Expedita quidem inventore magni? Doloremque
                              architecto mollitia, dicta, fugit minima velit explicabo sapiente
                              beatae fugiat accusamus voluptatum, error voluptatem ab asperiores
                              quo modi possimus.
                            </p>
                            <p>
                              Sit laborum molestias ex quisquam molestiae cum fugiat praesentium!
                              Consequatur excepturi quod nemo harum laudantium accusantium nisi
                              odio?
                            </p>
                            <p>
                              Deleniti, animi maiores officiis quos eaque neque voluptas omnis
                              quia error a dolores, pariatur ad obcaecati, vitae nisi perspiciatis
                              fugiat sapiente accusantium. Magnam, a nihil soluta eos vero illo ab
                              sequi, dolores culpa, quia hic?
                            </p>
                            <p>
                              Eos in saepe dignissimos tempore. Laudantium cumque eius, et
                              distinctio illum magnam molestiae doloribus. Fugiat voluptatum
                              necessitatibus vero eligendi quae, similique non debitis qui veniam
                              praesentium rerum labore libero architecto tempore nesciunt est
                              atque animi voluptatibus. Aliquam repellendus provident tempora
                              sequi officia sint voluptates eaque minima suscipit, cum maiores
                              quos possimus. Vero ex porro asperiores voluptas voluptatibus?
                            </p>
                            <p>
                              Debitis eos aut ullam odit fuga. Numquam deleniti libero quas sunt?
                              Exercitationem earum odio aliquam necessitatibus est accusamus
                              consequuntur nisi natus dolore libero voluptatibus odit doloribus
                              laudantium iure, dicta placeat molestias porro quasi amet? Sint,
                              reiciendis tenetur distinctio eaque delectus, maiores, nihil
                              voluptas dolorem necessitatibus consequatur aliquid?
                            </p>
                            <p>
                              Sunt ex, cum culpa vel odio dicta expedita omnis amet debitis
                              inventore necessitatibus quaerat est molestias delectus. Dolorem,
                              eius? Quae, itaque ipsa incidunt nobis repellendus, sunt dolorum
                              aliquam ad culpa repudiandae impedit omnis, expedita illum voluptas
                              delectus similique ducimus saepe pariatur. Molestias similique quam
                              dolore provident doloremque maiores autem ab blanditiis voluptatum
                              dignissimos culpa sed nesciunt laboriosam, in dicta consectetur.
                            </p>
                            <p>
                              Voluptates ea, aspernatur possimus, iusto temporibus non laudantium
                              neque molestias rem tempore eligendi earum nisi dolorum asperiores
                              at rerum!
                            </p>
                            <p>
                              Eaque totam error quia, ut eius perspiciatis unde velit temporibus
                              mollitia. Aperiam ad tempora aliquam est molestias commodi
                              cupiditate quos impedit nostrum accusantium quo fugit eveniet
                              temporibus quam cumque autem porro, id ut debitis itaque et nemo
                              exercitationem voluptatibus? Aspernatur corrupti quas iusto dolores
                              nemo pariatur debitis quae dolorem! Nemo, eius? Dolorem quam nemo
                              magnam ratione deserunt aperiam. Voluptatum ipsa, molestias
                              aspernatur quas distinctio numquam qui laboriosam id ab totam
                              commodi laborum tempora error natus vitae eligendi reiciendis
                              maiores ex illo? Tempore at animi earum vitae enim sunt,
                              dignissimos, mollitia corrupti officia obcaecati error iure vero
                              repudiandae nihil magni molestias quibusdam dolorem aperiam modi.
                              Harum, fugit.
                            </p>
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
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

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












// <DragCloseDrawer open={open} setOpen={setOpen}>
//                           <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
//                             <h2 className="text-4xl font-bold text-neutral-200">
//                               Drag the handle at the top of this modal downwards 100px to close it
//                             </h2>
//                             <p>
//                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
//                               laboriosam quos deleniti veniam est culpa quis nihil enim suscipit
//                               nulla aliquid iure optio quaerat deserunt, molestias quasi facere
//                               aut quidem reprehenderit maiores.
//                             </p>
//                             <p>
//                               Laudantium corrupti neque rerum labore tempore sapiente. Quos, nobis
//                               dolores. Esse fuga, cupiditate rerum soluta magni numquam nemo
//                               aliquid voluptate similique deserunt!
//                             </p>
//                             <p>
//                               Rerum inventore provident laboriosam quo facilis nisi voluptatem
//                               quam maxime pariatur. Velit reiciendis quasi sit magni numquam quos
//                               itaque ratione, fugit adipisci atque est, tenetur officiis explicabo
//                               id molestiae aperiam? Expedita quidem inventore magni? Doloremque
//                               architecto mollitia, dicta, fugit minima velit explicabo sapiente
//                               beatae fugiat accusamus voluptatum, error voluptatem ab asperiores
//                               quo modi possimus.
//                             </p>
//                             <p>
//                               Sit laborum molestias ex quisquam molestiae cum fugiat praesentium!
//                               Consequatur excepturi quod nemo harum laudantium accusantium nisi
//                               odio?
//                             </p>
//                             <p>
//                               Deleniti, animi maiores officiis quos eaque neque voluptas omnis
//                               quia error a dolores, pariatur ad obcaecati, vitae nisi perspiciatis
//                               fugiat sapiente accusantium. Magnam, a nihil soluta eos vero illo ab
//                               sequi, dolores culpa, quia hic?
//                             </p>
//                             <p>
//                               Eos in saepe dignissimos tempore. Laudantium cumque eius, et
//                               distinctio illum magnam molestiae doloribus. Fugiat voluptatum
//                               necessitatibus vero eligendi quae, similique non debitis qui veniam
//                               praesentium rerum labore libero architecto tempore nesciunt est
//                               atque animi voluptatibus. Aliquam repellendus provident tempora
//                               sequi officia sint voluptates eaque minima suscipit, cum maiores
//                               quos possimus. Vero ex porro asperiores voluptas voluptatibus?
//                             </p>
//                             <p>
//                               Debitis eos aut ullam odit fuga. Numquam deleniti libero quas sunt?
//                               Exercitationem earum odio aliquam necessitatibus est accusamus
//                               consequuntur nisi natus dolore libero voluptatibus odit doloribus
//                               laudantium iure, dicta placeat molestias porro quasi amet? Sint,
//                               reiciendis tenetur distinctio eaque delectus, maiores, nihil
//                               voluptas dolorem necessitatibus consequatur aliquid?
//                             </p>
//                             <p>
//                               Sunt ex, cum culpa vel odio dicta expedita omnis amet debitis
//                               inventore necessitatibus quaerat est molestias delectus. Dolorem,
//                               eius? Quae, itaque ipsa incidunt nobis repellendus, sunt dolorum
//                               aliquam ad culpa repudiandae impedit omnis, expedita illum voluptas
//                               delectus similique ducimus saepe pariatur. Molestias similique quam
//                               dolore provident doloremque maiores autem ab blanditiis voluptatum
//                               dignissimos culpa sed nesciunt laboriosam, in dicta consectetur.
//                             </p>
//                             <p>
//                               Voluptates ea, aspernatur possimus, iusto temporibus non laudantium
//                               neque molestias rem tempore eligendi earum nisi dolorum asperiores
//                               at rerum!
//                             </p>
//                             <p>
//                               Eaque totam error quia, ut eius perspiciatis unde velit temporibus
//                               mollitia. Aperiam ad tempora aliquam est molestias commodi
//                               cupiditate quos impedit nostrum accusantium quo fugit eveniet
//                               temporibus quam cumque autem porro, id ut debitis itaque et nemo
//                               exercitationem voluptatibus? Aspernatur corrupti quas iusto dolores
//                               nemo pariatur debitis quae dolorem! Nemo, eius? Dolorem quam nemo
//                               magnam ratione deserunt aperiam. Voluptatum ipsa, molestias
//                               aspernatur quas distinctio numquam qui laboriosam id ab totam
//                               commodi laborum tempora error natus vitae eligendi reiciendis
//                               maiores ex illo? Tempore at animi earum vitae enim sunt,
//                               dignissimos, mollitia corrupti officia obcaecati error iure vero
//                               repudiandae nihil magni molestias quibusdam dolorem aperiam modi.
//                               Harum, fugit.
//                             </p>
//                           </div>
//                         </DragCloseDrawer>