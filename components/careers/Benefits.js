import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Remote First Company",
    description:
      "We are committed to the notion that great employees can and do work hard anywhere, anytime.",
    excerpt: "Because We Trust Our Employees to Get the Job Done",
    icon: CloudArrowUpIcon,
    img: "img/icon-remote.svg",
  },
  {
    name: "Healthcare",
    description:
      "We offer medical, dental, and vision coverage through a major medical plan.",
    excerpt: "Because a Healthy Employee Is a Happy Employee",
    icon: LockClosedIcon,
    img: "img/icon-health.svg",
  },
  {
    name: "401K & Profit Sharing",
    description:
      "SmartCommerce provides a 401k Plan and annual Profit Sharing with vestig after 1 year.",
    excerpt: "Because We Invest in Your Future",
    icon: ArrowPathIcon,
    img: "img/icon-profit.svg",
  },
  {
    name: "Flexible PTO",
    description:
      "We know you work hard, so enjoy your leisure time! At SmartCommerce, you aren’t limited to a certain number of vacation days. We trust you to get your work done and be a responsible team member.",
    excerpt: "Because It’s All About Balance",
    icon: FingerPrintIcon,
    img: "img/icon-vacation.svg",
  },
  {
    name: "Medical Health Focus",
    description:
      "At SmartCommerce, our employees are encouraged to bring their whole self to work. To do so, SmartCommerce provides several mental health perks including an EAP.",
    icon: FingerPrintIcon,
    img: "img/icon-mental.svg",
  },
  {
    name: "Parental Leave",
    description:
      "After one year of employment, all employees are eligible for our parental leave benefits, including 12 weeks fully paid for maternity leave and 6 weeks fully paid for paternity leave.",
    excerpt: "Because We Know That Being a Parent Is Your #1 Job",
    icon: FingerPrintIcon,
    img: "img/icon-parent.svg",
  },
];

export default function Benefits() {
  return (
    <div className="bg-slate-50 py-24">
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
                <img
                  className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 mb-8"
                  src={feature.img}
                  alt="Reform"
                  width={200}
                  height={48}
                />
                <dt className="text-2xl font-semibold leading-7 text-info-950">
                  {feature.name}
                  <div className="text-base text-dark-950">
                    {feature.excerpt}
                  </div>
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
