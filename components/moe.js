import Button from "../components/Button";
import Link from "next/link";

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    description: "Tracks real-time (as in up-to-the-minute) stock status",
    img: "img/moe/moe-1.svg",
  },
  {
    description:
      "IDs the best substitutes for OOS items (i.e. no missed sales)",
    img: "img/moe/moe-2.svg",
  },
  {
    description: "Requires no spreadsheets, feeds, or links to get started!",
    img: "img/moe/moe-3.svg",
  },
  {
    description: "Understands variants and pricing by geography.",
    img: "img/moe/moe-4.svg",
  },
  {
    description: "Handles multiple retailer variants",
    img: "img/moe/moe-5.svg",
  },
  {
    description: "Works in any language, currency, or locale",
    img: "img/moe/moe-6.svg",
  },
  {
    description: "Handles seasonality seamlessly",
    img: "img/moe/moe-7.svg",
  },
  {
    description: "Ensures links live beyond product changes",
    img: "img/moe/moe-8.svg",
  },
];

export default function Benefits() {
  return (
    <>
      <div
        id="moe"
        className="bg-slate-50 pt-32 pb-12 lg:pt-36 lg:pb-36 bg-[url('/moe-pic.jpg')] bg-cover  bg-no-repeat "
      >
        <div className="mx-auto max-w-full px-6 lg:px-8">
          <div className="mx-auto max-w-full lg:text-center">
            <img className="mx-auto h-36 mb-4" src="moe-graphic.png" />
            <h1 className="text-4xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-6xl lg:leading-[5rem]  mb-8 font-bold text-white">
              Meet MOE - your brand's superpower
            </h1>
            <p className="mt-2 text-white mx-auto max-w-4xl">
              MOE (Master Optimization Engine) is the big brain behind the whole
              SmartCommerce operation, truly driving commerce at the speed of
              life. We like to say it gives our clients superpowers – here’s
              how:
            </p>
          </div>
          <div className="mx-auto max-w-2xl lg:max-w-7xl mt-16">
            <dl className="grid max-w-xl grid-cols-2 gap-x-8 gap-y-10 md:max-w-full lg:max-w-none md:mx-auto md:grid-cols-3 lg:grid-cols-4 lg:gap-y-24">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-0">
                  <img
                    className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 mb-8"
                    src={feature.img}
                    alt="Reform"
                    width={200}
                    height={48}
                  />
                  <dd className="mt-2 text-base leading-7 text-white lg:text-left text-center">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
