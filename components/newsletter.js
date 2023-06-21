export default function Newsletter() {
  return (
    <div>
      <div className="mx-auto">
        <div className="relative isolate overflow-hidden bg-primary-100 px-6 py-24 text-center shadow-sm sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl text-info-950">
            Be a SmartCookie. 
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-info-950">
            Sign up to be the first to know about new products, events, and our
            monthly newsletter.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="http://www.google.com"
              className="rounded-full bg-primary-950 px-8 py-4 text-md font-medium text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
