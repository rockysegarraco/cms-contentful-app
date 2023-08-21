import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import HeadingOne from "../components/elements/HeadingOne";
import Wrapper from "../components/Wrapper";

const faqs = [
  {
    question: "Teamwork makes the dream work.",
    answer:
      "We succeed by supporting one another: We communicate openly, treat each other kindly, and work with integrity.",
  },
  {
    question: "We’ve got your back. ",
    answer:
      "We seek to understand the feelings and needs of others and act in their best interest. We have each others' backs, always.",
  },
  {
    question: "Yes, we can!",
    answer:
      "Every day, in every way, we look for ways to say “yes” to clients and coworkers, even when there isn’t an easy answer. And we live for creative, new ideas.",
  },
  {
    question: "Think outside the box (or better yet, recycle that box!)",
    answer:
      "We are resourceful problem-solvers not afraid to forge new paths and try new things that may benefit our clients or their customers.",
  },
  {
    question: "Partners-First",
    answer:
      "Every brand, agency, or retailer we engage with is treated as our partner – their success is our success.",
  },
  // More questions...
];

export default function Values() {
  return (
    <Wrapper>
      <div className="mx-auto max-w-7xl px-8 py-16 sm:py-16 lg:px-8 lg:pt-24 lg:pb-24">
        <div className="mx-auto max-w-4xl divide-gray-900/10">
          <h6 className="text-secondary-950 font-semibold leading-7">
            CULTURE
          </h6>
          <HeadingOne title="Our Company Values" />
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-8 text-info-950 text-xl">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center text-secondary-950">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600 bg-gray-100 p-10">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </Wrapper>
  );
}
