export default function Success() {
  return (
    <div className="bg-slate-50 pt-16 pb-16 lg:pt-32 lg:pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
        <div className="mx-auto mt-8 max-w-2xl sm:mt-20 pb-8 lg:pb-16 lg:pt-0 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 text-center">
            <div className="bg-primary-100 p-0 rounded-2xl">
              <img className="mb-8" src="/img/smartlink.jpg" />
              <div className="p-6">
                <h1 className="text-3xl text-info-950 font-bold">
                  SMART<span className="font-normal">LINK</span>
                </h1>
                <p className="text-dark-950 py-8">
                  For ads & social media.
                  <br />
                  <br />
                  Click2Cart links let you add one (or more) products at one (or
                  multiple) geo-relevant retailers seamlessly. Multiple UI
                  options (branded pages, curated shelves, custom bundles) fit
                  every campaign objective to drive action.
                </p>
                <p className="mb-8 text-primary-950 font-medium">
                  Tell me More
                </p>
              </div>
            </div>

            <div className="bg-primary-100 p-0 rounded-2xl">
              <img className="mb-8" src="/img/smartsite.jpg" />
              <div className="p-6">
                <h1 className="text-3xl text-info-950 font-bold">
                  SMART<span className="font-normal">SITE</span>
                </h1>
                <p className="text-dark-950 py-8">
                  For websites.
                  <br />
                  <br />
                  More carting? We’ve got you. Optimize your website with
                  one-click carting at a variety of retailers, including your
                  own DTC experience.
                </p>
                <p className="mb-8 text-primary-950 font-medium">
                  Tell me More
                </p>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
