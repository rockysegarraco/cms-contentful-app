export default function _Primary({ children }) {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-r from-info-950 to-dark-accent">
      <div className="px-8 py-16 sm:px-6 sm:py-32">{children}</div>
    </div>
  );
}
