export default function Brand() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-r from-info-950 to-dark-accent">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl lg:max-w-6xl text-center">
          <h2 className="text-4xl leading-[3rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[5rem]  mb-8 font-bold text-white">
            Trusted by leading consumer brands across the globe
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Major players leverage SmartCommerce to reach consumers across
            categories – grocery, wellness, beauty, pet, electronics, and more.
          </p>
          <div className="mx-auto max-w-7xl lg:max-w-7xl  mt-16 grid grid-cols-4 items-center gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-0 lg:mx-0 lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="brands/_abbott.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="brands/_boston.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="brands/_png.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="brands/_kimberly.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="brands/_nestle.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
