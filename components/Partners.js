import React from "react";
import ReactDOM from "react-dom";

export default function Partners() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-1 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="img/brands/huggies.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="img/brands/_kimberly.svg"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="img/brands/clorox.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="img/brands/_nestle.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="img/brands/barilla.svg"
            alt="Statamic"
            width={158}
            height={48}
          />
          <img
            className="col-span-2  max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="img/brands/microsoft.svg"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
