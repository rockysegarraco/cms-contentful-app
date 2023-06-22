export default function PostTitle({ children }) {
  return (
    <h1 className="text-4xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-6xl lg:leading-[5rem]  mb-8 font-bold text-dark-950">
      {children}
    </h1>
  );
}
