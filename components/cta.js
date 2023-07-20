export default function Cta() {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl leading-[3rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[4.5rem]  mb-8 font-bold text-info-950">
            We’ve got you – always<span className="text-secondary-950">.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            No matter what you need help with, our team of experts will work
            with you every step of the way to ensure you’re set up for success.
            (And, no, we don’t charge extra for that.)
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact-us"
              className="rounded-full bg-primary-950 px-8 py-4 text-md font-medium text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Yes, please!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
