export default function Section({ children, id, reverseBg, minHeight = true, py = true }) {
  return (
    <section
      id={id}
      className={`section-container px-5 sm:px-10 xl:px-0 ${
        py && 'py-20 xl:py-40'
      } bg-gradient-to-b ${
        reverseBg ? 'from-accentLight to-accentDark' : 'from-accentDark to-accentLight'
      } ${minHeight && 'min-h-screen'} h-full flex items-center `}
    >
      <div className="w-full max-w-7xl mx-auto text-white">{children}</div>
    </section>
  );
}
