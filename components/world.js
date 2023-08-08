import HeadingOne from "../components/elements/HeadingOne";
const stats = [
  { id: 1, name: "Countries", value: "8" },
  { id: 2, name: "Teammates", value: "120" },
  { id: 3, name: "Bundles of Joy", value: "12" },
  { id: 4, name: "Brand & Agency Partners", value: "922" },
];

export default function World() {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <HeadingOne title="Welcome to our world" />
            <p className="mt-4 text-dark-950 leading-8">
              We are a globally distributed community of people living and
              working in 8 countries around the world. We love to build products
              that help our clients create magic for their consumers.
            </p>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                src="map.png"
                alt="App screenshot"
                className="mb-[-3%]"
                width={2432}
                height={1442}
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
              </div>
            </div>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-6xl font-semibold tracking-tight text-secondary-950">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
