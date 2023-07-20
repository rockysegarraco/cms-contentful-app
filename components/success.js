export default function Success() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-4xl leading-[3rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[5rem] mb-8 font-bold text-info-950">
            Your Bottom Line Is Always Top Of Mind
          </p>
          <p className="mt-6 text-lg leading-8 text-dark-950">
            Our suite of solutions fits any campaign objective and comes with a
            convenient to use 24/7 platform, as well as next-level client
            support! Anywhere you can use a URL, you can drive commerce.
            <br />{" "}
            <span className="font-bold text-info-950">
              It’s really that easy.
            </span>
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 text-center">
            <div className="bg-secondary-100 p-6 rounded-2xl">
              <img className="mb-8" src="/column_space.jpg" />
              <h1 className="text-3xl text-info-950 font-bold">
                SMART<span className="font-normal">LINK</span>
              </h1>
              <p className="text-dark-950 py-8">
                Shoppable links let you add one (or more) products at one (or
                multiple) geo-relevant retailers seamlessly. Anywhere you can
                use a URL is a shoppable moment. 
              </p>
              <p className="mb-8 text-primary-950 font-medium">Tell me More</p>
            </div>
            <div className="bg-success-100 p-6 rounded-2xl">
              <img className="mb-8" src="/column_space_one.jpg" />
              <h1 className="text-3xl text-info-950 font-bold">
                SMART<span className="font-normal">SITE</span>
              </h1>
              <p className="text-dark-950 py-8">
                More carting? We’ve got you. Optimize your website with
                one-click carting at a variety of retailers, including your own
                DTC experience.
              </p>
              <p className="mb-8 text-primary-950 font-medium">Tell me More</p>
            </div>
            <div className="bg-primary-100 p-6 rounded-2xl">
              <img className="mb-8" src="/column_space_three.jpg" />
              <h1 className="text-3xl text-info-950 font-bold">
                SMART<span className="font-normal">SUITE</span>
              </h1>
              <p className="text-dark-950 py-8">
                View and manage your product catalog and ecommerce activity to
                make smarter choices over time, driving your bottom line.
              </p>
              <p className="mb-8 text-primary-950 font-medium">Tell me More</p>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
