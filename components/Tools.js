import Image from "next/image";

export default function Tools() {
  return (
    <section className="bg-gradient-to-b pt-40 pb-20 from-accentLight to-accentDark w-full">
      <div className="w-full mx-auto text-white max-w-7xl h-full min-h-screen">
        <p className="font-bold text-4xl">Tools and technologies that I use</p>
        <div className="mt-24 flex flex-wrap flex-row  gap-x-12 gap-y-12">
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
      </div>
    </section>
  );
}

const ToolCard = () => {
  return (
    <div className="relative p-2 rounded-[20px] flex flex-col  items-center bg-white bg-opacity-[0.06] w-[114px] h-[104px]">
      <Image
        src={"/images/cf.png"}
        alt="cf"
        width={64}
        height={64}
        layout="intrinsic"
      />
      <p className="text-sm break-words text-center">Cloud Formation</p>
    </div>
  );
};
