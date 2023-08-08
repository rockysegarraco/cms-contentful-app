import Button from "../components/Button";

export default function Section(props) {
  const { children } = props; // Destructure 'children' from 'props'
  return (
    <div className="relative isolate overflow-hidden bg-slate-50 text-dark-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 px-8 gap-8 sm:gap-8 lg:gap-16 pt-16 pb-16 lg:pt-24 lg:pb-24">
        <div className="lg:order-first order-last">
          <h1 className="text-4xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-6xl lg:leading-[5rem] mb-8 font-bold text-info-950">
            {props.title}
            <span className="text-secondary-950">.</span>
          </h1>
          <div className="pb-8">{children}</div>
          <div className="flex">
            <a href={props.ButtonLink}>
              <Button primary>{props.ButtonTitle}</Button>
            </a>
          </div>
        </div>
        <div className="relative w-full">
          {" "}
          {/* Make the container relative */}
          <img src={props.ImageUrl} className="relative" />{" "}
          {/* Position the image at the bottom */}
        </div>
      </div>
    </div>
  );
}
