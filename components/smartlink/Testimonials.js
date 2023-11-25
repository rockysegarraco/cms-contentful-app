const featuredTestimonial = {
  body: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
  author: {
    name: "Brenna Goyette",
    handle: "brennagoyette",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    logoUrl: "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg",
  },
};
const testimonials = [
  [
    [
      {
        body: "Click2Cart works with the way consumers actually behave, not the way they wish they did.",
        author: {
          name: "CMO",
          handle: "Major CPG Mfr",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "This has completely changed the way we look at our marketing mix – literally everything now is a potential path to purchase.",
        author: {
          name: "Innovation Lead",
          handle: "CPG Mfr",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Using Click2Cart is a no-brainer. And your team has made it so easy!",
        author: {
          name: "Brand Manager",
          handle: "Canada Dry",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "We appreciate the work their solutions-oriented team has done for our brands and couldn’t ask for a better partner to continue to learn and innovate with.",
        author: {
          name: "Manager, Owned Platforms & CRM",
          handle: "Conagra Brands",
          imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
  return (
    <div className="relative isolate py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[4.5rem] mb-8 font-bold text-info-950">
            Don’t just take our word for it. Here’s what clients are saying...
          </h1>
        </div>
        <div className="mx-auto mt-16 grid max-w-full grid-cols-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-4 md:grid-cols-1">
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <div>
                          <div className="font-semibold text-secondary-950">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-600">{`${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-8 pt-8">
          <div className="col-span-6 xl:col-span-6 lg:col-span-8 md:col-span-2 place-content-center">
            <figure className="rounded-2xl bg-white text-sm leading-6 p-6 shadow-lg ring-1 ring-gray-900/5">
              <blockquote className="text-gray-900">
                <p>
                  “SmartCommerce has been an exceptional partner throughout our
                  implementation of SmartSite. They provided invaluable support,
                  working closely with us to ensure a successful go live. Their
                  post-implementation support and responsiveness have been
                  outstanding, with proactive monitoring and prompt issue
                  resolution. We greatly appreciate their dedication to our
                  success and their commitment to delivering a seamless
                  experience.”
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4 ">
                <div>
                  <div className="font-semibold text-secondary-950">
                    Unanimous
                  </div>
                  <div className="text-gray-600"></div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
