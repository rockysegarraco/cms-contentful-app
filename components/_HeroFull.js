export default function _HeroFull(props) {
  const { children } = props; // Destructure 'children' from 'props'

  // Rest of the code remains unchanged
  return (
    <div className="relative isolate overflow-hidden bg-white text-dark-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 px-8 lg:gap-16 gap-8">
        <div className="pt-0 pb-16 lg:pt-24 lg:pb-24 lg:order-first order-last">
          <h1 className="text-4xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-6xl lg:leading-[5rem] mb-8 font-bold text-info-950">
            {props.title}
            <span className="text-secondary-950">.</span>
          </h1>
          <div className="pb-8">{children}</div>
          <div className="flex">
            <a
              href={props.ButtonLink}
              className="rounded-full bg-primary-950 px-8 py-4 text-md font-semibold text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {props.ButtonTitle}
            </a>
          </div>
        </div>
        <div className="relative w-full mt-10">
          {" "}
          {/* Make the container relative */}
          <img
            src={props.ImageUrl}
            className="relative lg:absolute bottom-0 lg:order-last order-first"
          />{" "}
          {/* Position the image at the bottom */}
        </div>
      </div>
    </div>
  );
}
