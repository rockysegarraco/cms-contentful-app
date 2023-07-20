import Tabs from "./tabs";

export default function Clients() {
  return (
    <div className="bg-secondary-100 py-16 sm:py-16">
      <div className="mx-auto max-w-lg mb-8 text-center">
        <small className="text-secondary-950 font-bold text-2xl">
          Filter by
        </small>
        <Tabs />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-4">
          <div className="bg-white p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <div className="text-slate-950 mt-3 text-center">
              A leading geospatial technology platform
            </div>
          </div>
          <div className="bg-white p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <div className="text-slate-950 mt-3 text-center">
              A leading geospatial technology platform
            </div>
          </div>
          <div className="bg-white  p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <div className="text-slate-950 mt-3 text-center">
              A leading geospatial technology platform
            </div>
          </div>
          <div className="bg-white  p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/laravel-logo-gray-900.svg"
              alt="Laravel"
              width={158}
              height={48}
            />
            <div className="bg-white  mt-3 text-center">
              A leading geospatial technology platform
            </div>
          </div>
          <div className="bg-white  p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <div className="bg-white  mt-3 text-center">
              A leading geospatial technology platform
            </div>
          </div>
          <div className="bg-white  p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
            <div className="bg-white  mt-3 text-center">
              A leading geospatial technology platform
            </div>
          </div>
          <div className="bg-white  p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <div className="bg-white  mt-3 text-center">
              A leading geospatial technology platform
            </div>
          </div>
          <div className="bg-white  p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/laravel-logo-gray-900.svg"
              alt="Laravel"
              width={158}
              height={48}
            />
            <div className="text-slate-950 mt-3 text-center">
              A leading geospatial technology platform
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
