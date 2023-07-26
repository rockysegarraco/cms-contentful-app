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
    description:
      "Bypass dead ends (out-of-stocks, seasonal item changes, third-party sellers).",
    icon: CheckIcon,
  },
  {
    description: "Requires NO feeds, spreadsheets or links from brands!",
    icon: CheckIcon,
  },
];

export default function Diffy({ pageData }) {
  return (
    <div className="relative isolate overflow-hidden p-0 py-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 px-8 gap-16 sm:gap-16 lg:gap-16 lg:grid-cols-12">
        <div className="col-span-7 text-dark-950">
          <HeadingOne title="Click2Cart® Difference" />
          Why Click2Cart? We like to think of it as behind-the-scenes magic that
          makes the carting process as simple and seamless as possible. The
          friction-free, one-click path to purchase means consumers aren’t
          distracted by competitor ads or cross-selling, and there is no waiting
          (i.e. forgetting) to check out. <br /> <br />
          And even when shoppers don’t complete a purchase, you still win
          because carting triggers retargeting (building brand awareness) and
          improves retailer-side SEO/SEM results.
        </div>
        <div className="col-span-5">
          <img src="photo.jpg" />
        </div>
      </div>
    </div>
  );
}
