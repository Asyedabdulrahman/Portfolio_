export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 pt-4 w-screen max-w-screen overflow-x-hidden z-10">
      <nav className="flex flex-wrap gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#heroSection" className="nav-items max-w-xs truncate">
          Home
        </a>
        <a href="#project" className="nav-items max-w-xs truncate">
          Project
        </a>
        <a href="#about" className="nav-items max-w-xs truncate">
          About
        </a>
        <a
          href="#footerOrContacts"
          className="nav-items bg-white rounded-3xl text-gray-900 hover:bg-white/70 hover:text-gray-900 max-w-xs truncate"
        >
          Contacts
        </a>
      </nav>
    </div>
  );
};

// import TapeSection from "@/sections/Tape";

// export const Headers = () => {
//   return (
//     <div className="flex justify-center items-center fixed top-3 pt-4 w-full z-10 ">
//       <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
//         <a href="#heroSection" className="nav-items">
//           Home
//         </a>
//         <a href="#project" className="nav-items">
//           Project
//         </a>
//         <a href="#about" className="nav-items">
//           About
//         </a>
//         <a
//           href="#footerOrContacts"
//           className="nav-items bg-white rounded-3xl text-gray-900 hover:bg-white/70 hover:text-gray-900"
//         >
//           Contacts
//         </a>
//       </nav>
//     </div>
//   );
// };
