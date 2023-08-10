export default function _Product() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-4xl leading-[3rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[5rem] mb-8 font-bold text-info-950">
            Smart solutions that boost your bottom line
          </p>
          <p className="mt-6 text-lg leading-8 text-dark-950">
            Our suite of solutions fits any campaign objective and comes with a
            convenient to use 24/7 platform and next-level client support!
            Anywhere you can use a URL, you can drive commerce.
            <br />{" "}
            <span className="font-bold text-info-950">
              It’s really that easy.
            </span>
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl pb-8 lg:pb-16 lg:pt-0 lg:max-w-none">
          <div class="grid-cols-1 gap-8 sm:grid md:grid-cols-2">
            <div class="mx-3 mt-6 flex flex-col rounded-lg sm:shrink-0 sm:grow sm:basis-0 text-center bg-primary-100">
              <a href="#!">
                <img
                  class="rounded-t-lg"
                  src="/img/smartlink.jpg"
                  alt="Palm Springs Road"
                />
              </a>
              <div class="pb-0 pt-16">
                <h1 className="text-3xl text-info-950 font-bold">
                  SMART<span className="font-normal">SITE</span>
                </h1>
                <p className="text-dark-950 px-8 pt-8 pb-16">
                  For ads & social media.
                  <br />
                  <br />
                  Click2Cart links let you add one (or more) products at one (or
                  multiple) geo-relevant retailers seamlessly. Multiple UI
                  options (branded pages, curated shelves, custom bundles) fit
                  every campaign objective to drive action.
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
            <div class="mx-3 mt-6 flex flex-col rounded-lg sm:shrink-0 sm:grow sm:basis-0 text-center bg-primary-100">
              <a href="#!">
                <img
                  class="rounded-t-lg"
                  src="/img/smartsite.jpg"
                  alt="Palm Springs Road"
                />
              </a>
              <div class="pb-0 pt-16">
                <h1 className="text-3xl text-info-950 font-bold">
                  SMART<span className="font-normal">LINK</span>
                </h1>
                <p className="text-dark-950 px-8 pt-8 pb-16">
                  For websites.
                  <br />
                  <br />
                  More carting? We’ve got you. Optimize your website with
                  one-click carting at a variety of retailers, including your
                  own DTC experience.
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
          </div>
        </div>
      </div>
    </div>
  );
}
