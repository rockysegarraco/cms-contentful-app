import { ChevronRightIcon } from "@heroicons/react/20/solid";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import HeadingOne from "/components/elements/HeadingOne";
import Button from "/components/elements/Button";
import { CheckIcon } from "@heroicons/react/20/solid";

export default function Hero({ pageData }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative isolate overflow-hidden bkg p-0 py-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 px-8 gap-16 sm:gap-16 lg:gap-16 lg:grid-cols-2">
        <div className="text-dark-950">
          <HeadingOne title="Create some magic" />
          <p className="text-info-950 font-semibold mb-3">
            Why use Click2Cart for your ads & social media? 
          </p>
          Our real-time, stock-aware technology gets your products into carts
          faster and more frequently – boosting sales, increasing product
          awareness, and creating repeat customers - just like magic!
          <div className="mt-10 flex items-center gap-x-6">
            <Button title="Let's do this!" link="/" />
          </div>
        </div>
        <div>
          <ReactPlayer
            width="100%"
            controls
            url="https://www.youtube.com/watch?v=o5F8MOz_IDw"
          />
        </div>
      </div>
    </div>
  );
}
