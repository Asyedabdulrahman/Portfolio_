import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-14">
      <div className="container">
        <div
          className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10
        rounded-3xl text-center md:text-left relative overflow-hidden z-0"
        >
          <div
            className="absolute inset-0 opacity-10 -z-10 "
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col gap-8 items-center md:flex-row md:gap-16 lg:justify-between">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                let create a something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                ready to bring your next proejct to life? lets connect and
                display i can help.ready to bring your next proejct to life?
                lets connect and display i can help
              </p>
            </div>
            <div>
              <a href="https://syed-frontend-resume.tiiny.site/" target="_blank">
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
