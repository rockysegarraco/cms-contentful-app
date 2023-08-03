const stats = [
  {
    id: 1,
    name: "Dollar value of products carted in the last 12 months.",
    value: "$3B+",
  },
  {
    id: 2,
    name: "Number of products carted in the last 12 months",
    value: "93M+",
  },
];

export default function Stats() {
  return (
    <div className="relative bg-slate-50">
      <img
        className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
        src="photo.jpg"
        alt=""
      />
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <p className="text-4xl leading-[3rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[4.5rem]  mb-8 font-bold text-info-950">
              The truth is in the numbers
              <span className="text-secondary-950">.</span>
            </p>
            <p className="mt-6 text-lg leading-8 text-dark-950">
              It just works – across all categories and verticals, from display
              ads to QR codes, at ALL major points of intent.
            </p>
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                <dt className="text-sm leading-6 text-dark-950">
                  Dollar value of products carted in the last 12 months.
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-info-950">
                  $3B<span className="text-secondary-950">+</span>
                </dd>
              </div>
              <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                <dt className="text-sm leading-6 text-dark-950">
                  Number of products carted in the last 12 months
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-info-950">
                  93M<span className="text-secondary-950">+</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
