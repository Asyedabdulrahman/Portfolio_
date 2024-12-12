// import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

// const footerLink = [
//   {
//     title: "LinkedIn",
//     href: "https://www.linkedin.com/in/syedabdulrahman33/",
//   },
//   {
//     title: "Github",
//     href: "https://github.com/Asyedabdulrahman",
//   },
//   {
//     title: "LeetCode",
//     href: "https://leetcode.com/u/rahman33/",
//   },
//   {
//     title: "Vercel",
//     href: "https://vercel.com/syedabdulrahman3",
//   },
// ];

// export const Footer = () => {
//   return (
//     <footer className="relative overflow-x-clip" id="footerOrContacts">
//       <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
//       <div className="container">
//         <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
//           <div className="text-white/40">&copy; 2024. All right Reserved</div>
//           <nav className="flex flex-col items-center gap-4 md:flex-row">
//             {footerLink.map((link) => (
//               <div key={link.title}>
//                 <a
//                   href={link.href}
//                   target="_blank"
//                   className="inline-flex items-center gap-1.5"
//                 >
//                   <button>{link.title}</button>
//                   <ArrowUpRightIcon className="size-4" />
//                 </a>
//               </div>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </footer>
//   );
// };

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLink = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/syedabdulrahman33/",
  },
  {
    title: "Github",
    href: "https://github.com/Asyedabdulrahman",
  },
  {
    title: "LeetCode",
    href: "https://leetcode.com/u/rahman33/",
  },
  {
    title: "Vercel",
    href: "https://vercel.com/syedabdulrahman3",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip" id="footerOrContacts">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All right Reserved</div>
          <nav className="flex flex-col items-center gap-4 md:flex-row">
            {footerLink.map((link) => (
              <div key={link.title}>
                <a
                  href={link.href}
                  target="_blank"
                  className="inline-flex items-center gap-1.5"
                >
                  <span className="font-semibold">{link.title}</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
