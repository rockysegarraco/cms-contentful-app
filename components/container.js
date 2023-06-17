export default function Container({ children }) {
  return (
    <div className="mx-auto max-w-5xl sm:px-6 lg:px-8 px-16 sm:px-8 mt-16 mb-16">
      {children}
    </div>
  );
}
