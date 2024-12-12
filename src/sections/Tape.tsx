import StarIcon from "@/assets/icons/star.svg";
const Words = [
  "performance",
  "Accessible",
  "Secure",
  "interactable",
  "scalabe",
  "user friendly",
  "search optimized",
  "usabe",
  "Reliable",
  "usabe",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 " id="tape">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-black overflow-x-clip -rotate-3  ">
        <div className="flex justify-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_80%,transparent)] ">
          <div className="flex flex-none gap-4 py-3 items-center content-center">
            {Words.map((word) => (
              <div
                key={word}
                className="inline-flex gap-4 items-center content-center"
              >
                <span className="font-extrabold text-sm text-gray-900 uppercase ">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
