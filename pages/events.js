import Wrapper from "../components/Wrapper";
import _Container from "../components/_Container";
import Paragraphs from "../components/Paragraphs";
import Container from "../components/container";
import _PageTitle from "../components/_PageTitle";
import _Hero from "../components/_Hero";
import Layout from "../components/Layout";
import Clients from "../components/partners/clients";
import { fetchNewsletter } from "../lib/api";
import Head from "next/head";
import Link from "next/link";
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
          <title>
            Schedule a Meetup - Accelerate E-commerce from all existing
            touchpoints - SmartCommerce
          </title>
          <meta
            name="description"
            content="Contact us For general inquiries, please use the form below. Locations US Offices: Atlanta, GA Email:&nbsp;info@smartcommerce.co Phone:&nbsp;1-800-571-3520 Europe: Barcelona, Spain Email: infoEU@smartcommerce.co"
          />
        </Head>
        <_PageTitle title="Events" />
        <_Hero
          title="Events Title Goes Here 2024"
          ButtonTitle="Learn more about our presence"
          ButtonLink="https://apply.workable.com/smartcommerce/"
          ImageUrl="https://v1.tailwindcss.com/img/card-top.jpg"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolor sit
          amet, consectetur adipiscing elit, sed
        </_Hero>
        <div className="bg-white lg:bg-slate-50 py-0 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-3xl mb-4 font-bold text-info-950 lg:mt-0 mt-16">
              Upcoming Events
            </h1>
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 sm:grid-cols-2 mb-16">
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src="https://v1.tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Event Title</div>
                  <div className="text-dark-950 pb-2 text-sm">OCTOBER 2023</div>
                  <p class="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                  <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                    Read More
                  </div>
                </div>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src="https://v1.tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Event Title</div>
                  <div className="text-dark-950 pb-2 text-sm">OCTOBER 2023</div>
                  <p class="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                  <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                    Read More
                  </div>
                </div>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src="https://v1.tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Event Title</div>
                  <div className="text-dark-950 pb-2 text-sm">OCTOBER 2023</div>
                  <p class="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                  <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-3xl mb-4 font-bold text-info-950 lg:mt-0 mt-16">
              Past Events
            </h1>
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 sm:grid-cols-2 mb-16">
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src="https://v1.tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Event Title</div>
                  <div className="text-dark-950 pb-2 text-sm">OCTOBER 2023</div>
                  <p class="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                  <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                    Read More
                  </div>
                </div>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src="https://v1.tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Event Title</div>
                  <div className="text-dark-950 pb-2 text-sm">OCTOBER 2023</div>
                  <p class="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                  <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                    Read More
                  </div>
                </div>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src="https://v1.tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Event Title</div>
                  <div className="text-dark-950 pb-2 text-sm">OCTOBER 2023</div>
                  <p class="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                  <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
