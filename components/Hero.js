import { ChevronRightIcon } from "@heroicons/react/20/solid";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import PostBody from "./Postbody";

export default function Hero({ pageData }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { heroContent, heroTitle, youtube } = pageData?.fields;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative isolate overflow-hidden bkg p-0 py-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 px-8 gap-16 sm:gap-16 lg:gap-16 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-6xl lg:leading-[5rem]  mb-8 font-bold text-info-950">
            {heroTitle}
            <span className="text-secondary-950">.</span>
          </h1>
          <PostBody content={heroContent} />
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="http://www.google.com"
              className="rounded-full bg-primary-950 px-8 py-4 text-md font-medium text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Let's do this!
            </a>
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
