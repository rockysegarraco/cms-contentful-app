import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Healthcare",
    description:
      "Replace typical friction-filled paths to purchase with a single click that puts products (even recipes) directly into retailer carts.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "401K & Profit Sharing",
    description:
      "Our product engine avoids OOS conditions, 3P sellers, changing prices, etc, so your consumers enjoy a frictionless shopping experience.",
    icon: LockClosedIcon,
  },
  {
    name: "Unlimited PTO",
    description:
      "Whether or not a consumer checks out immediately, you still win. Carting triggers retailer retargeting.",
    icon: ArrowPathIcon,
  },
  {
    name: "Mental Health Focus",
    description:
      "Replace typical friction-filled paths to purchase with a single click that puts products (even recipes) directly into retailer carts.",
    icon: FingerPrintIcon,
  },
  {
    name: "Parental Leave",
    description:
      "Our product engine avoids OOS conditions, 3P sellers, changing prices, etc, so your consumers enjoy a frictionless shopping experience.",
    icon: FingerPrintIcon,
  },
  {
    name: "Company Retreat",
    description:
      "Whether or not a consumer checks out immediately, you still win. Carting triggers retailer retargeting and influences.",
    icon: FingerPrintIcon,
  },
];

export default function Benefits() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-6xl lg:leading-[5rem]  mb-8 font-bold text-info-950">
            We’re all about <span className="text-secondary-950">you.</span>
          </h1>
          <p className="mt-2 text-dark-950">
            At SmartCommerce, we believe our most valuable asset is our people.
            The business depends on every member of our community bringing their
            best self to work every day, and we do everything possible to
            support that both inside and outside the workplace.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl text-center">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-24">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-0">
                <dt className="text-2xl font-semibold leading-7 text-info-950">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
