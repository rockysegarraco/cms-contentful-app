export default function PostTitle({ children }) {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl mb-12 md:text-left leading-[3.5rem] font-bold">
      {children}
    </h1>
  );
}
