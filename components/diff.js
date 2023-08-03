import { ChevronRightIcon } from "@heroicons/react/20/solid";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import PostBody from "./Postbody";
import HeadingOne from "../components/elements/HeadingOne";
import Button from "../components/elements/Button";
import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    description: "Is 95%+ hands-free (removes human error)",
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

export default function Diff({ pageData }) {
  return (
    <div className="relative isolate overflow-hidden p-0 py-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 px-8 gap-16 sm:gap-16 lg:gap-16 lg:grid-cols-12">
        <div className="col-span-8 text-dark-950">
          <HeadingOne title="The Difference is Data" />
          The SmartCommerce Master Optimization Engine (MOE for short):
          <dl className="mt-10 max-w-xl text-base leading-7 text-gray-600 lg:max-w-none">
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
          <br />
          <p>
            Creating and maintaining the connection between products and
            retailers requires sophisticated data analytics. Our
            up-to-the-minute technology always knows what’s in stock and can ID
            the best substitutes for OOS/3P items. It continuously updates 10s
            of millions of product-offer pairs across hundreds of retailers. And
            don’t worry, you don’t need to do a thing: We have a panel of Data
            Scientists to constantly manage all of it!
          </p>
          <br />
          <p>
            View and manage your product catalog and ecommerce activity to make
            smarter choices over time, driving your bottom line.
          </p>
        </div>
        <div className="col-span-4">
          <img src="photo.jpg" />
        </div>
      </div>
    </div>
  );
}
