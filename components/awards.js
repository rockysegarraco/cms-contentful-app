export default function Awards() {
  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-2 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
            src="best-ceo-for-women-2022-small 1.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
            src="best-company-for-women-2022-small 1.svg"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
            src="Best_Workplaces_Badge 1.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
