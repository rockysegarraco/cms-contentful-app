export default function _Center(props) {
  const { children } = props; // Destructure 'children' from 'props'
  return (
    <div className={[props.className]}>
      <div className="px-8 py-16 sm:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <img className="h-16 mx-auto mb-8" src={props.ImageUrl} />
          <h2 className="text-4xl leading-[3rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[4.5rem]  mb-8 font-bold text-info-950">
            {props.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            {children}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={props.ButtonLink}
              className="rounded-full bg-primary-950 px-8 py-4 text-md font-medium text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {props.ButtonTitle}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
