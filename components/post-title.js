export default function PostTitle({ children }) {
  return (
    <h1 className="text-3xl leading-[2.25rem] lg:text-4xl lg:leading-[3rem]  mb-8 font-semibold text-dark-950">
      {children}
    </h1>
  );
}
