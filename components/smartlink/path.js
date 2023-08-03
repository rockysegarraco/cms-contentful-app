import {
  CubeIcon,
  UserGroupIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Just. One. Clicks.",
    description:
      "Replace typical friction-filled paths to purchase with a single click that puts products directly into retailer carts.",
    href: "#",
    icon: CubeIcon,
    img: "1.svg",
  },
  {
    name: "No Speed bumps",
    description:
      "Our product engine avoids OOS conditions, 3P sellers, changing prices, etc, so your consumers enjoy a frictionless shopping experience.",
    href: "#",
    icon: ShoppingCartIcon,
    img: "2.svg",
  },
  {
    name: "More Insights",
    description:
      "Whether or not a consumer checks out immediately, you still win. Carting triggers retailer retargeting and influences retailer recommendations/SEO.",
    href: "#",
    icon: UserGroupIcon,
    img: "3.svg",
  },
];

export default function Path() {
  return (
    <div className="bg-gradient-to-r from-info-950 to-dark-accent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:mx-0 text-center">
          <h2 className="text-4xl leading-[3rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[5rem]  mb-8 font-bold text-white">
            A Shorter Path To Purchase
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 text-center">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-2xl font-normal text-white">
                  <img
                    className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 mb-8"
                    src={feature.img}
                    alt="Reform"
                    width={200}
                    height={48}
                  />
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-white">
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
