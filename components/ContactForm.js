export function ContactForm() {
  return (
    <form className="flex flex-col gap-y-8 w-full">
      <Input type={"text"} label={"name"} />
      <Input type={"email"} label={"email"} />
      <Input type={"textarea"} label={"message"} textArea={true} />
      <button className="h-[50px] w-60 bg-white rounded text-black">Submit</button>
    </form>
  );
}

const Input = ({ type, label, classes, textArea = false }) => {
  return (
    <div className="w-full">
      <p className="text-xl capitalize font-semibold">{label}</p>
      {textArea ? (
        <textarea className="border-white p-2 w-full border-2 bg-transparent text-white px-2 h-40"></textarea>
      ) : (
        <input
          type={type}
          name={label}
          className={`border-white w-full border-2 bg-transparent text-white px-2 h-10 ${classes}`}
        />
      )}
    </div>
  );
};
