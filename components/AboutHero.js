import { ChevronRightIcon } from "@heroicons/react/20/solid";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import PostBody from "./Postbody";
import HeadingOne from "../components/elements/HeadingOne";
import Button from "../components/elements/Button";
import { CheckIcon } from "@heroicons/react/20/solid";
import Awards from "../components/awards";

export default function AboutHero({ pageData }) {
  const [isLoaded, setIsLoaded] = useState(false);
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
    <div className="bg-slate-50 relative isolate overflow-hidden p-0 py-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 px-8 gap-16 sm:gap-16 lg:gap-16 lg:grid-cols-2">
        <div className="text-dark-950">
          <HeadingOne title="Better Together" />
          We’re a community of problem solvers passionate about helping clients
          take their sales to the next level. We develop tools that reinvent the
          way CPG products get into the hands of consumers across the globe.
          <div className="mt-10 flex items-center gap-x-6">
            <Button title="Come work with us" link="/" />
          </div>
        </div>
        <div className="w-full">
          <img src="zoom.jpg" />
        </div>
        <Awards />
      </div>
    </div>
  );
}
