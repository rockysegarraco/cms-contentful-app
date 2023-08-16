export default function _Primary(props) {
  const { children } = props; // Destructure 'children' from 'props'
  return (
    <div className={[props.className]}>
      <div className="mx-auto max-w-7xl px-8 py-16 sm:px-6 sm:py-32">
        {children}
      </div>
    </div>
  );
}
