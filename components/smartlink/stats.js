import HeadingOne from "/components/elements/HeadingOne";

const stats = [
  {
    id: 1,
    name: "Increased revenue due to products carted in the last 12 months.",
    value: "30%",
    imgg: "4.svg",
  },
  {
    id: 2,
    name: "Amount of additional products carted in the last 12 months.",
    value: "3x",
    imgg: "5.svg",
  },
];

export default function Stats() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <HeadingOne title="The numbers speak for themselves" />
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Using SmartCommerce has a direct effect on your bottom line (in
              the best way). 
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-2 max-w-lg mx-auto">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-normal leading-5 text-info-950">
                  <img
                    className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 mb-8"
                    src={stat.imgg}
                    alt="Reform"
                    width={200}
                    height={48}
                  />
                </dt>
                <dd className="text-5xl font-semibold tracking-tight text-info-950">
                  {stat.value}
                </dd>
                <dt className="text-sm font-normal leading-5 text-info-950">
                  {stat.name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
