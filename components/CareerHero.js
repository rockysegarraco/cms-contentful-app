import { ChevronRightIcon } from "@heroicons/react/20/solid";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import PostBody from "./Postbody";
import HeadingOne from "../components/elements/HeadingOne";
import Button from "../components/elements/Button";
import { CheckIcon } from "@heroicons/react/20/solid";
import Awards from "../components/awards";

export default function CareerHero({ pageData }) {
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
          <HeadingOne title="Create a career that just clicks" />
          SmartCommerce is an empathy-first organization, where our home
          families, our co-workers, and our clients are our top priorities.
          Check out our openings if you are interested in joining our community
          of 75+ smart, passionate and innovative problem solvers!
          <div className="mt-10 flex items-center gap-x-6">
            <Button title="See all open positions" link="/" />
          </div>
        </div>
        <div className="w-full">
          <img src="career-1.jpg" />
        </div>
      </div>
    </div>
  );
}
