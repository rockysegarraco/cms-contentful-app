import Image from "next/image";
import productPicOne from ".//../public/img/smartlink.jpg";
import productPicTwo from ".//../public/img/smartsite.jpg";
const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function _Product(props) {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-8">
        <div className="mx-auto mt-8 max-w-2xl pb-8 lg:pb-16 lg:pt-0 lg:max-w-none">
          <div class="grid-cols-1 gap-8 sm:grid md:grid-cols-2">
            <div class="mx-3 mt-6 flex flex-col rounded-lg sm:shrink-0 sm:grow sm:basis-0 text-center bg-primary-100">
              <a href="#!">
                <Image
                  loader={imageLoader}
                  class="rounded-t-lg"
                  src={productPicOne}
                  alt="Palm Springs Road"
                />
              </a>
              <div class="pb-0 pt-16">
                <h1 className="text-3xl text-info-950 font-bold">
                  <span className="font-normal">SMART</span>LINK
                </h1>
                <p className="text-dark-950 px-8 pt-8 pb-16">
                  For ads & social media
                  <br />
                  <br />
                  Click2Cart links let you add products at one (or multiple)
                  geo-relevant retailers seamlessly. Multiple UI options –
                  branded pages, curated shelves, custom bundles – fit every
                  campaign objective to drive action.
                </p>
              </div>
              <div class="mt-auto pt-0 pb-16 dark:border-neutral-600 dark:text-neutral-50">
                <a
                  href="/smartlink"
                  className="rounded-full bg-primary-950 px-8 py-4 text-md font-semibold text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Tell me more
                </a>
              </div>
            </div>
            <div class="mx-3 mt-6 flex flex-col rounded-lg sm:shrink-0 sm:grow sm:basis-0 text-center bg-primary-100">
              <a href="#!">
                <Image
                  loader={imageLoader}
                  class="rounded-t-lg"
                  src={productPicTwo}
                  alt="Palm Springs Road"
                />
              </a>
              <div class="pb-0 pt-16">
                <h1 className="text-3xl text-info-950 font-bold">
                  <span className="font-normal">SMART</span>SITE
                </h1>
                <p className="text-dark-950 px-8 pt-8 pb-16">
                  For websites
                  <br />
                  <br />
                  More carting? We’ve got you. Optimize your website with
                  one-click carting at a variety of retailers, including your
                  own DTC experience.
                </p>
              </div>
              <div class="mt-auto pt-0 pb-16 dark:border-neutral-600 dark:text-neutral-50">
                <a
                  href="/smartsite"
                  className="rounded-full bg-primary-950 px-8 py-4 text-md font-semibold text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Tell me more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
