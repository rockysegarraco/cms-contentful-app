import {
  CubeIcon,
  UserGroupIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Thought Leaders",
    description:
      "SmartCommerce was founded by folks who developed a product engine sold to Google, which still drives Google Shopping today. And they didn’t stop there.",
    href: "#",
    icon: CubeIcon,
  },
  {
    name: "Forward Thinkers",
    description:
      "To be a true game-changer, we knew our solution had to be stock-aware and geo-relevant – as fast and easy as dropping physical products into actual carts in-store. So that’s what we built.",
    href: "#",
    icon: ShoppingCartIcon,
  },
  {
    name: "Dynamic Markers",
    description:
      "In the era of MeCommerce, converting consumer interest at the moment of inspiration is key. Our solutions are there – in that moment – getting your products into carts, collecting data, and driving commerce.",
    href: "#",
    icon: UserGroupIcon,
  },
];

export default function Short() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:mx-0 text-center">
          <h2 className="text-4xl leading-[3rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[5rem]  mb-8 font-bold text-info-950">
            Your shortcut to success
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Other ecommerce solutions that drop shoppers on a PDP (product
            detail page) can lose up to 98% of consumers on their path to
            purchase.  SmartCommerce gets products into carts, driving more
            sales, insights, and future marketing efforts.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-2xl font-bold text-info-950">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center">
                    <feature.icon
                      className="h-16 w-16 text-secondary-950"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
