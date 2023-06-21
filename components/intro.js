import { CMS_NAME, CMS_URL } from "../lib/constants";

export default function Intro() {
  return (
    <h2 className="font-normal leading-tight mb-20 p-5 bg-white border-t shadow-sm">
      <div className="mx-auto lg:max-w-6xl sm:max-w-7xl sm:px-6 lg:px-8 px-10 sm:px-8 text-sm">
        <h1 className="text-3xl md:text-3xl font-bold md:pr-8 text-dark-950">
          Blog<span className="text-secondary-950">.</span>
        </h1>
      </div>
    </h2>
  );
}
