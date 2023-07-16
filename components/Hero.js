import { ChevronRightIcon } from "@heroicons/react/20/solid";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import PostBody from "./Postbody";
import HeadingOne from "../components/elements/HeadingOne";
import Button from "../components/elements/Button";

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
          <HeadingOne title={heroTitle} />
          <PostBody content={heroContent} />
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
