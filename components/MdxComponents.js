export const Heading = {
  H1: ({ children }) => (
    <h1 className="text-2xl font-bold border-b-primary border-b w-fit">{children}</h1>
  ),
  H2: ({ children }) => (
    <h2 className="text-xl border-b-primary border-b w-fit font-bold">{children}</h2>
  )
};

export const Para = ({ children }) => {
  return <p className="my-4 text-base">{children}</p>;
};
