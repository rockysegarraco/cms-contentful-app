export default function _FullImage() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-3xl">
              <div className="">
                <h1 className="text-4xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-6xl lg:leading-[5rem]  mb-8 font-bold text-info-950">
                  Knowledge is power
                  <span className="text-secondary-950">.</span>
                </h1>
                <div className="pb-8">
                  Smartsuite empowers you with real time data and insights to
                  sync your media spend with your inventory, reduce advertising
                  waste and measure campaign outcomes. Every subscription comes
                  with unlimited logins and unlimited support!
                </div>
              </div>
            </div>
          </div>
          <img
            src="img/HeroReporting.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
