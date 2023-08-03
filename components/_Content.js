import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    description: " Is 95%+ hands-free (removes human error)",
    icon: CheckIcon,
  },
  {
    description: "Is always getting smarter: Machine-learning enabled",
    icon: CheckIcon,
  },
  {
    description: "Requires NO feeds, spreadsheets or links from brands!",
    icon: CheckIcon,
  },
];

export default function _Content(props) {
  return (
    <div className="overflow-hidden bg-white pt-0 pb-16 lg:pt-0 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-0 lg:pt-0">
            <div className="lg:max-w-3xl">
              <h1 className="text-4xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-6xl lg:leading-[5rem]  mb-8 font-bold text-info-950">
                {props.title}
              </h1>
              <p className="leading-8 text-gray-600">
                The SmartCommerce Master Optimization Engine <br /> (MOE for
                short):
              </p>
              <dl className="mt-8 max-w-xl text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-secondary-950"
                        aria-hidden="true"
                      />
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <p className="py-8 leading-8 text-gray-600">
                Creating and maintaining the connection between products and
                retailers requires sophisticated data analytics. Our
                up-to-the-minute technology always knows what’s in stock and can
                ID the best substitutes for OOS/3P items.
                <br /> <br /> It continuously updates 10s of millions of
                product-offer pairs across hundreds of retailers. And don’t
                worry, you don’t need to do a thing: We have a panel of Data
                Scientists to constantly manage all of it!
              </p>
              <div className="flex">
                <a
                  href={props.ButtonLink}
                  className="rounded-full bg-primary-950 px-8 py-4 text-md font-semibold text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {props.ButtonTitle}
                </a>
              </div>
            </div>
          </div>
          <img
            src={props.ImageUrl}
            alt="Product screenshot"
            className="w-[38rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
