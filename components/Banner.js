export default function Banners() {
  return (
    <div className="hidden lg:flex mx-auto max-w-7xl flex  relative isolate items-center gap-x-6 overflow-hidden bg-blend-lighten hover:bg-blend-darke px-6 pt-2 pb-2 sm:px-3.5 sm:before:flex-1">
      <div className="justify-end px-8">
        <p className="text-xs leading-6 text-gray-900">
          <a
            href="https://smartsuite.co/en-us/cookies/"
            className="hover:underline underline-offset-8"
          >
            SmartSuite Login
          </a>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current text-secondary-950"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          <a
            href="https://smartcommerce.wufoo.com/forms/smartcommerce-campaign-order-form/"
            className="hover:underline underline-offset-8"
          >
            Campaign Request Form
          </a>
        </p>
      </div>
    </div>
  );
}
