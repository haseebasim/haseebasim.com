export default function Section({
  children,
  id,
  reverseBg,
  minHeight = true,
  pt = true,
}) {
  return (
    <section
      id={id}
      className={`px-5 sm:px-10 xl:px-0 bg-gradient-to-b ${pt && "pt-24"} w-full ${
        reverseBg
          ? "from-accentLight to-accentDark"
          : "from-accentDark to-accentLight"
      }`}
    >
      <div
        className={`${
          minHeight && "min-h-screen"
        } w-full h-full max-w-7xl mx-auto text-white`}
      >
        {children}
      </div>
    </section>
  );
}
