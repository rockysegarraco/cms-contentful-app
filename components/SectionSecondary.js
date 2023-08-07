import Button from "../components/Button";

export default function SectionSecondary(props) {
  const { children } = props; // Destructure 'children' from 'props'
  return (
    <div className="relative isolate overflow-hidden text-dark-950 text-center bg-gradient-to-r from-secondary-950 to-secondary-dark-accent">
      <div className="mx-auto grid max-w-6xl grid-cols-1 px-8 gap-16 sm:gap-16 lg:gap-16 pt-16 pb-16 lg:pt-24 lg:pb-24">
        <div className="lg:order-first order-last">
          <h1 className="text-4xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-6xl lg:leading-[5rem] mb-8 font-bold text-white">
            {props.title}
          </h1>
          <div className="text-white">{children}</div>
        </div>
      </div>
    </div>
  );
}
