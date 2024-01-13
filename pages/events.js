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
import Heading from "../components/Heading";
import Button from "../components/Button";
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
            Events - Accelerate E-commerce from all existing touchpoints -
            SmartCommerce
          </title>
          <meta
            name="description"
            content="Want to connect at one of these events? Email:&nbsp;info@smartcommerce.co Phone:&nbsp;1-800-571-3520 Europe: Barcelona, Spain Email: infoEU@smartcommerce.co"
          />
        </Head>
        <_PageTitle title="Events" />
        <div className="bg-white lg:bg-slate-50 py-0 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 sm:grid-cols-2 mb-16">
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src="img/events/adweek.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-info-950">
                    Adweek Commerceweek
                  </div>
                  <div className="text-dark-950 pb-2 text-sm font-semibold">
                    February 28-29, 2023
                    <br />
                    New York, New York
                  </div>
                  <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                    <Link
                      href="https://event.adweek.com/commerceweek-2024/4441255?ref=adwp2_branded&utm_source=google&utm_medium=cpc&utm_campaign=Commerceweek2024&utm_content=P2_branded&gad_source=1&gclid=CjwKCAiA44OtBhAOEiwAj4gpOS93BVoGMZxb_3MdlNBZqDYmKDxZvLP0HLRdiYX_n6WcVi2w2jJZjhoC3Q0QAvD_BwE"
                      className="py-4 text-base text-primary-950 underline underline-offset-8"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src="img/events/shop-talk.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-info-950">
                    Shoptalk
                  </div>
                  <div className="text-dark-950 pb-2 text-sm font-semibold">
                    March 17 - 20, 2023
                    <br />
                    Mandalay Bay, Las Vegas
                  </div>
                  <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                    <Link
                      href="https://shoptalk.com/us"
                      className="py-4 text-base text-primary-950 underline underline-offset-8"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src="img/events/grocery-shop.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-info-950">
                    Groceryshop
                  </div>
                  <div className="text-dark-950 pb-2 text-sm font-semibold">
                    October 7-9, 2024
                    <br />
                    Mandalay Bay, Las Vegas
                  </div>
                  <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                    <Link
                      href="https://groceryshop.com/"
                      className="py-4 text-base text-primary-950 underline underline-offset-8"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto grid pb-8 lg:py-0">
              <div className="relative isolate overflow-hidden bg-primary-100 px-6 py-8 text-center shadow-sm sm:rounded-3xl sm:px-16">
                <h2 className="py-4 text-2xl leading-[2rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-4xl lg:leading-[4.5rem] mb-0 font-bold text-info-950">
                  Want to connect at one of these events?
                </h2>
                <div className="mt-0 flex items-center justify-center gap-x-6">
                  <a
                    href="https://www.smartcommerce.com/meetupform"
                    className="rounded-full bg-primary-950 px-8 py-4 text-md font-medium text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{"body { background-color: #f8fafc; }"}</style>
      </Layout>
    </>
  );
}
