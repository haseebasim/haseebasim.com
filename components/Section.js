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
      className={`section-container p-5 sm:p-10 bg-gradient-to-b ${
        reverseBg
          ? "from-accentLight to-accentDark"
          : "from-accentDark to-accentLight"
      } ${minHeight && "min-h-screen"} h-full flex items-center `}
    >
      <div className={`w-full max-w-7xl mx-auto text-white`}>{children}</div>
    </section>
  );
}
