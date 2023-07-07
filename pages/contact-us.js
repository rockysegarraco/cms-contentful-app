import Container from "../components/container";
import Layout from "../components/layout";
import { fetchNewsletter } from "../lib/api";
import Head from "next/head";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Example() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Contact us For general inquiries, please use the form below. Locations US Offices: Atlanta, GA Email:&nbsp;info@smartcommerce.co Phone:&nbsp;1-800-571-3520 Europe: Barcelona, Spain Email: infoEU@smartcommerce.co`}</title>
        </Head>
        <h2 className="font-normal leading-tight mb-20 p-5 bg-white border-t shadow-sm">
          <div className="mx-auto lg:max-w-7xl sm:max-w-7xl sm:px-6 lg:px-8 px-10 sm:px-8 text-sm">
            <h1 className="text-3xl md:text-3xl font-bold md:pr-8 text-dark-950">
              Contact<span className="text-secondary-950">.</span>
            </h1>
          </div>
        </h2>
        <Container>
          <style>{"body { background-color: #f5f5f7; }"}</style>
          <div className="relative isolate">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
              <div className="relative pb-20 sm:pt-0 lg:static">
                <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                  <h2 className="text-3xl font-bold text-info-950">
                    Get in touch
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-dark-950">
                    If you’d prefer to talk about Workable with a real human,
                    just call us. We’re friendly and available on the phone:
                  </p>
                  <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Address</span>
                        <BuildingOffice2Icon
                          className="h-7 w-6 text-secondary-950"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd>
                        <span className="font-bold">Atlanta, USA</span>
                        <br />
                        75 5th Street NW, Suite 2000
                        <br />
                        Atlanta, Georgia 30308
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Address</span>
                        <BuildingOffice2Icon
                          className="h-7 w-6 text-secondary-950"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd>
                        <span className="font-bold">Minneapolis, USA</span>
                        <br />
                        212 Third Ave North, Suite 352
                        <br />
                        Minneapolis, MN 55401
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Telephone</span>
                        <PhoneIcon
                          className="h-7 w-6 text-secondary-950"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd>
                        <a
                          className="hover:text-gray-900"
                          href="tel:+1 (555) 234-5678"
                        >
                          +1 (800) 571-3520
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Email</span>
                        <EnvelopeIcon
                          className="h-7 w-6 text-secondary-950"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd>
                        <a
                          className="hover:text-gray-900"
                          href="mailto:info@smartcommerce.co"
                        >
                          info@smartcommerce.co
                        </a>
                      </dd>
                    </div>
                  </dl>
                  <hr className="my-8" />
                  <h2 className="text-xl text-dark-950 font-bold">Europe</h2>
                  <h3 className="text-lg text-dark-950 pt-0">
                    Barcelona, Spain
                  </h3>
                  <dl className="mt-4 space-y-4 text-base leading-7 text-gray-600">
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Email</span>
                        <EnvelopeIcon
                          className="h-7 w-6 text-secondary-950"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd>
                        <a
                          className="hover:text-gray-900"
                          href="mailto:infoeu@smartcommerce.co"
                        >
                          infoeu@smartcommerce.co
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <form
                action="#"
                method="POST"
                className="sm:pb-32 lg:px-8 lg:py-24"
              >
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg text-dark-950">
                  <h3 className="mb-10 leading-8 font-bold">
                    For general inquiries, please use the form below.
                  </h3>
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Phone number
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="tel"
                          name="phone-number"
                          id="phone-number"
                          autoComplete="tel"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Message
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <a
                      href="#"
                      className="rounded-full bg-primary-950 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Submit
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
