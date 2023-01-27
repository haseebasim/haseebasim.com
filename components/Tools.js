import Section from './Section';

export default function Tools({ tools }) {
  return (
    <Section reverseBg={true} minHeight={false}>
      <p className="font-bold text-3xl  sm:text-4xl">Tools and technologies that I use</p>
      <div className="mt-24 flex flex-wrap justify-center mx-auto flex-row gap-x-4 sm:gap-x-12 gap-y-12">
        {tools.map((tool, index) => (
          <ToolCard key={index} tool={tool} />
        ))}
      </div>
    </Section>
  );
}

const ToolCard = ({ tool }) => {
  return (
    <div className="relative p-2 rounded-[20px] flex flex-col gap-y-2  items-center bg-white bg-opacity-[0.06] w-[104px] h-[94px]">
      <i className={`text-4xl ${tool.tag}`}></i>
      <p className="text-sm break-words text-center">{tool.name}</p>
    </div>
  );
};
