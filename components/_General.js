export default function _Primary({ children }) {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-8 py-16 sm:px-6 sm:py-32">
        {children}
      </div>
    </div>
  );
}
