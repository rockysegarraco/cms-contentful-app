export default function Cta() {
  return (
    <div className="bg-white">
      <div className="px-6 py-16 lg:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl leading-[3rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[4.5rem]  mb-8 font-bold text-info-950">
            Join our community.<span className="text-secondary-950">.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            We’re committed to building a diverse team and a work environment
            that’s inclusive of people of all backgrounds. Get to know the
            wonderful community of people who are helping our clients create
            magic all day, every day.
          </p>
          <div className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-600 py-8">
            EMBED GOES HERE
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Applicants requiring reasonable accommodation for any part of the
            application and hiring process can contact us directly by telephone
            at 800-571-3520 or by emailing hr@smartcommerce.co.{" "}
            <a className="text-secondary-950" href="">
              Click here for the EEOC Statement
            </a>
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-full bg-primary-950 px-8 py-4 text-md font-medium text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Apply now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
