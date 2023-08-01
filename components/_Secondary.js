export default function _Secondary({ children }) {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-r from-secondary-950 to-secondary-dark-accent">
      <div className="px-8 py-16 sm:px-6 sm:py-32 lg:px-8">{children}</div>
    </div>
  );
}
