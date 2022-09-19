import Section from "./Section";

/* eslint-disable react/no-unescaped-entities */
export default function Experience() {
  return (
    <Section minHeight={false}>
      <div className="lg:py-20 xl:py-24">
        <p className="mb-5 font-bold text-3xl sm:text-4xl">Experience</p>
        <p className="text-xl sm:text-2xl">Where I've worked</p>
        <div className="mt-10 lg:mt-[100px] flex lg:flex-row w-full flex-col lg:gap-x-20 gap-y-5 items-start mx-auto xl:w-5/6 ">
          <div className="flex flex-row lg:flex-col overflow-x-scroll w-full lg:w-auto lg:overflow-hidden">
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
    </Section>
  );
}

const Tab = ({ active, company }) => {
  return (
    <div
      className={`border-b-2 lg:border-b-0 lg:border-l-2 flex justify-center lg:justify-start items-end lg:items-center w-full min-w-[120px] lg:w-[300px] lg:pl-5 h-[60px] text-xl  text-center ${
        active ? "border-primary" : "border-white"
      } `}
    >
      <span className="lg:ml-4">{company}</span>
    </div>
  );
};

const TabSection = () => {
  return (
    <div className="text-lg sm:text-xl">
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
