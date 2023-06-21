import { ChevronRightIcon } from "@heroicons/react/20/solid";
import ReactPlayer from "react-player";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white bkg p-0 py-16 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 px-8 gap-16 lg:grid-cols-2">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-6xl mb-12 md:text-left sm:leading-[5rem] lg:leading-[5rem] leading-[3.5rem] font-bold text-info-950">
            Make everything shoppable
            <span className="text-secondary-950">.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            SmartCommerce is a simple tool that transforms all of your marketing
            touchpoins into e-commerce launch points.
            <br />
            <br />
            Our Master Product Engine maintains up-to-the-minute stock status at
            the store level. Letting you bypass dead-ends like out-of-stocks,
            seasonal product changes and third-part sellers, to keep your
            e-commerce sales moving!
            <br />
            <br />
            <span className="font-semibold text-info-950">
              Welcome to the future of commerce.
            </span>
          </p>
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
          <div>
            <ReactPlayer
              width="100%"
              controls
              url="https://vimeo.com/3155182"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
