import HeadingOne from "/components/elements/HeadingOne";

const stats = [
  {
    id: 1,
    name: "SmartCommerce campaigns with direct and indirect substitution saw less than 2% of items out of stock vs the 27% of out of stock of that happened on other campaigns.",
    value: "<2%",
    imgg: "img/cta-refresh.svg",
  },
  {
    id: 2,
    name: "The added context of bundles typically 1.2-2x the CTR of Single Products",
    value: "1.2 – 2x",
    imgg: "img/cta-cart.svg",
  },
];

export default function Stats() {
  return (
    <div className="bg-white py-0 lg:pt-0 lg:pb-24">
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
