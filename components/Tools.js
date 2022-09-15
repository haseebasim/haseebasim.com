import Image from "next/image";
import Section from "./Section";

export default function Tools() {
  return (
    <Section minHeight={false} reverseBg={true}>
      <p className="font-bold text-3xl  sm:text-4xl">
        Tools and technologies that I use
      </p>
      <div className="mt-24 flex flex-wrap justify-center sm:justify-start flex-row gap-x-4 sm:gap-x-12 gap-y-12">
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
      </div>
    </Section>
  );
}

const ToolCard = () => {
  return (
    <div className="relative p-2 rounded-[20px] flex flex-col  items-center bg-white bg-opacity-[0.06] w-[104px] h-[94px]">
      <Image
        src={"/images/cf.png"}
        alt="cf"
        width={48}
        height={48}
        layout="intrinsic"
      />
      <p className="text-sm break-words text-center">Cloud Formation</p>
    </div>
  );
};
