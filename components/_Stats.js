export default function _Stats(props) {
  const { children } = props; // Destructure 'children' from 'props'

  return (
    <div className="relative bg-slate-50">
      <img
        className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
        src={props.ImageUrl}
        alt={props.alt}
      />
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <p className="text-4xl leading-[3rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-4xl lg:leading-[3rem]  mb-8 font-bold text-info-950">
              {props.title}
            </p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
