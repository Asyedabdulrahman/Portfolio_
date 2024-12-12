export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase text-center font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif md:text-5xl text-3xl text-center mt-6">
        {title}
      </h2>
      <p className="text-white/60 md:text-lg text-center mt-4 mx-auto max-w-md lg:text-xl">
        {description}
      </p>
    </>
  );
};
