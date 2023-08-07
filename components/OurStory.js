import { useState } from "react";
import { Dialog } from "@headlessui/react";
import HeadingLight from "../components/elements/HeadingLight";
import Button from "../components/elements/Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function OurStory() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <main>
        <div className="relative isolate">
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          ></div>
          <div className="overflow-hidden bg-info-950">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="img/pic-about-2.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="img/pic-about-3.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="pic-3.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="img/pic-about-1.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="jenn-pic.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <HeadingLight title="Our Story" className="text-white" />
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none text-white">
                    SmartCommerce is in the business of making the complex
                    simple. We believe in tackling the hard work it takes to
                    turn complicated processes into something super-easy for our
                    clients and consumers to use. 
                    <br />
                    <br />
                    Creating this magic takes a whole team, one with decades of
                    experience in the CPG category.  Our CEO Jennifer Silverberg
                    and the founding members were pioneers in the where-to-buy
                    space. For years, they worked together at Channel
                    Intelligence, one of the world’s leading commerce technology
                    partners that was acquired by Google in 2013 (and still
                    powers Google Shopping today).
                    <br />
                    <br />
                       What the team learned was that while the where-to-buy
                    solutions worked really well for some categories, CPG brands
                    were often left out in the cold. In 2016, SmartCommerce was
                    born, and the team got to work developing technology that
                    made it easier for shoppers to directly cart fast-moving
                    consumer goods, creating more conversions for CPG brands.
                    Being one of the first movers in the add-to-cart space, we
                    were primed and ready when the pandemic hit, and CPG
                    shopping behavior shifted more online. 
                    <br />
                    <br />
                    SmartCommerce has continued to grow since 2016.  In 2022,
                    the company acquired Myxx and Basketful, expanding our
                    contextual commerce capabilities with recipe solutions. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
