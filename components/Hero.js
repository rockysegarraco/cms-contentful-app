import { ChevronRightIcon } from "@heroicons/react/20/solid";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import PostBody from "./Postbody";
import HeadingOne from "../components/elements/HeadingOne";
import Button from "../components/elements/Button";
import { CheckIcon } from "@heroicons/react/20/solid";

export default function Hero({ pageData }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { heroContent, heroTitle, youtube } = pageData?.fields;
  const features = [
    {
      description: "Maintain up-to-the-minute stock.",
      icon: CheckIcon,
    },
    {
      description:
        "Bypass dead ends (out-of-stocks, seasonal item changes, third-party sellers)",
      icon: CheckIcon,
    },
    {
      description:
        "Keep your e-commerce sales MOVING! Welcome to the future of commerce.",
      icon: CheckIcon,
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative isolate overflow-hidden bkg p-0 py-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 px-8 gap-16 sm:gap-16 lg:gap-16 lg:grid-cols-2">
        <div className="text-dark-950">
          <HeadingOne title={heroTitle} />
          SmartCommerce is a simple tool that transforms all of your marketing
          touchpoints into e-commerce launch points.
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
          <p className="text-info-950 font-semibold">
            Welcome to the future of commerce.{" "}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button title="Let's do this!" link="/" />
          </div>
        </div>
        <div>
          {isLoaded ? (
            <ReactPlayer width="100%" controls url={youtube} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
