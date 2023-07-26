import { ChevronRightIcon } from "@heroicons/react/20/solid";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import HeadingOne from "/components/elements/HeadingOne";
import Button from "/components/elements/Button";
import { CheckIcon } from "@heroicons/react/20/solid";

export default function Diff({ pageData }) {
  return (
    <div className="relative isolate overflow-hidden p-0 py-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 px-8 gap-16 sm:gap-16 lg:gap-16 lg:grid-cols-12">
        <div className="col-span-8 text-dark-950">
          <HeadingOne title="Click2Cart® Difference" />
          <p>
            Why SmartCommerce? We like to think of it as behind-the-scenes magic
            that makes the carting process as simple and seamless as possible.
            The friction-free, one-click path to purchase means consumers aren’t
            distracted by competitor ads or cross-selling, and there is no
            waiting (i.e. forgetting) to check out. <br />
            <br />
            And even when shoppers don’t complete a purchase, you still win
            because carting triggers retargeting (building brand awareness) and
            improves retailer-side SEO/SEM results.
          </p>
        </div>
        <div className="col-span-4">
          <img src="photo.jpg" />
        </div>
      </div>
    </div>
  );
}
