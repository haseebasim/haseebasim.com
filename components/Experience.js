/* eslint-disable react/no-unescaped-entities */
export default function Experience() {
  return (
    <section className="bg-gradient-to-b pt-40 pb-20 from-accentDark to-accentLight w-full">
      <div className="text-white w-full max-w-7xl h-full min-h-screen mx-auto">
        <p className="mb-5 font-bold text-4xl">Experience</p>
        <p className="text-2xl">Where I've worked</p>
        <div className="mt-[130px] flex gap-x-5 items-start mx-auto w-[74.6vw]">
          <div>
            <Tab active={true} company={"Upwork"} />
            <Tab active={false} company={"RipeSeed"} />
            <Tab active={false} company={"Robor"} />
            <Tab active={false} company={"Easy Paisa"} />
            <Tab active={false} company={"Hactric Solution"} />
          </div>
          <div className="pt-1">
            <TabSection />
          </div>
        </div>
      </div>
    </section>
  );
}

const Tab = ({ active, company }) => {
  return (
    <div
      className={`h-[60px] text-xl flex items-center w-[300px] border-l-[5px] ${
        active ? "border-primary" : "border-white"
      } `}
    >
      <span className="ml-4">{company}</span>
    </div>
  );
};

const TabSection = () => {
  return (
    <div className="text-xl">
      <div className="mt-2.5">
        <p className="text-primary">
          Full Stack Developer @ <span className="font-bold">Upwork</span>
        </p>
        <p>Dec 2020 - Present</p>
      </div>
      <ul className="mt-7 flex flex-col gap-y-4 list-outside list-disc pl-5">
        <li className="text-primary ">
          <span className="text-white">
            Write modern, performant, maintainable code for a diverse array of
            client and internal projects
          </span>
        </li>
        <li className="text-primary ">
          <span className="text-white">
            Work with a variety of different languages, platforms, frameworks,
            and content management systems such as JavaScript, TypeScript,
            Gatsby, React, Craft, WordPress, Prismic, and Netlify
          </span>
        </li>
        <li className="text-primary ">
          <span className="text-white">
            Work with a variety of different languages, platforms, frameworks,
            and content management systems such as JavaScript, TypeScript,
            Gatsby, React, Craft, WordPress, Prismic, and Netlify
          </span>
        </li>
      </ul>
    </div>
  );
};
