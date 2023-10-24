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
          title="Amazon unBoxed 2023"
          ButtonTitle="Learn more about our presence"
          ButtonLink="https://apply.workable.com/smartcommerce/"
          ImageUrl="https://cdn.shortpixel.ai/spai/q_lossy+w_1017+to_webp+ret_img/tinuiti.com/wp-content/uploads/2023/09/AMZ-Unboxed_Featured-Image.jpg"
        >
          Tinuiti is proud to be a platinum sponsor at this year’s Amazon Ads
          unBoxed!
        </_Hero>
        <div className="bg-white lg:bg-slate-50 py-0 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-3xl mb-4 font-bold text-info-950 lg:mt-0 mt-16">
              Upcoming Events
            </h1>
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 sm:grid-cols-2 mb-16">
              <article className="flex flex-col items-start justify-between bg-white rounded-2xl shadow-sm">
                <a href="/">
                  <div className="max-w-full rounded-2xl overflow-hidden">
                    <div className="p-6">
                      <img
                        className="mb-4"
                        src="https://cdn.shortpixel.ai/spai/q_lossy+w_379+to_webp+ret_img/tinuiti.com/wp-content/uploads/2023/08/braze-forge.png"
                      />
                      <div className="font-semibold text-xl mb-2 text-dark-950">
                        Braze Forge
                      </div>
                      <div className="text-dark-950 line-clamp-3">
                        OCTOBER 2023
                      </div>

                      <div className="pt-3 text-dark-950 text-sm">
                        Joe O’Connor, Senior Director, Strategic Marketplace
                        Services – Amazon | Tinuiti
                      </div>
                      <div className="mt-4 text-lg text-primary-950 underline underline-offset-8">
                        Read More
                      </div>
                    </div>
                  </div>
                </a>
              </article>
              <article className="flex flex-col items-start justify-between bg-white rounded-2xl shadow-sm">
                <a href="/">
                  <div className="max-w-full rounded-2xl overflow-hidden">
                    <div className="p-6">
                      <img
                        className="mb-4"
                        src="https://cdn.shortpixel.ai/spai/q_lossy+w_379+to_webp+ret_img/tinuiti.com/wp-content/uploads/2023/08/braze-forge.png"
                      />
                      <div className="font-semibold text-xl mb-2 text-dark-950">
                        Braze Forge
                      </div>
                      <div className="text-dark-950 line-clamp-3">
                        OCTOBER 2023
                      </div>

                      <div className="pt-3 text-dark-950 text-sm">
                        Joe O’Connor, Senior Director, Strategic Marketplace
                        Services – Amazon | Tinuiti
                      </div>
                      <div className="mt-4 text-lg text-primary-950 underline underline-offset-8">
                        Read More
                      </div>
                    </div>
                  </div>
                </a>
              </article>
              <article className="flex flex-col items-start justify-between bg-white rounded-2xl shadow-sm">
                <a href="/">
                  <div className="max-w-full rounded-2xl overflow-hidden">
                    <div className="p-6">
                      <img
                        className="mb-4"
                        src="https://cdn.shortpixel.ai/spai/q_lossy+w_379+to_webp+ret_img/tinuiti.com/wp-content/uploads/2023/08/braze-forge.png"
                      />
                      <div className="font-semibold text-xl mb-2 text-dark-950">
                        Braze Forge
                      </div>
                      <div className="text-dark-950 line-clamp-3">
                        OCTOBER 2023
                      </div>

                      <div className="pt-3 text-dark-950 text-sm">
                        Joe O’Connor, Senior Director, Strategic Marketplace
                        Services – Amazon | Tinuiti
                      </div>
                      <div className="mt-4 text-lg text-primary-950 underline underline-offset-8">
                        Read More
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-3xl mb-4 font-bold text-info-950 lg:mt-0 mt-16">
              Past Events
            </h1>
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 sm:grid-cols-2 mb-16">
              <article className="flex flex-col items-start justify-between bg-white rounded-2xl shadow-sm">
                <a href="/">
                  <div className="max-w-full rounded-2xl overflow-hidden">
                    <div className="p-6">
                      <img
                        className="mb-4"
                        src="https://cdn.shortpixel.ai/spai/q_lossy+w_379+to_webp+ret_img/tinuiti.com/wp-content/uploads/2023/08/braze-forge.png"
                      />
                      <div className="font-semibold text-xl mb-2 text-dark-950">
                        Braze Forge
                      </div>
                      <div className="text-dark-950 line-clamp-3">
                        OCTOBER 2023
                      </div>

                      <div className="pt-3 text-dark-950 text-sm">
                        Joe O’Connor, Senior Director, Strategic Marketplace
                        Services – Amazon | Tinuiti
                      </div>
                      <div className="mt-4 text-lg text-primary-950 underline underline-offset-8">
                        Read More
                      </div>
                    </div>
                  </div>
                </a>
              </article>
              <article className="flex flex-col items-start justify-between bg-white rounded-2xl shadow-sm">
                <a href="/">
                  <div className="max-w-full rounded-2xl overflow-hidden">
                    <div className="p-6">
                      <img
                        className="mb-4"
                        src="https://cdn.shortpixel.ai/spai/q_lossy+w_379+to_webp+ret_img/tinuiti.com/wp-content/uploads/2023/08/braze-forge.png"
                      />
                      <div className="font-semibold text-xl mb-2 text-dark-950">
                        Braze Forge
                      </div>
                      <div className="text-dark-950 line-clamp-3">
                        OCTOBER 2023
                      </div>

                      <div className="pt-3 text-dark-950 text-sm">
                        Joe O’Connor, Senior Director, Strategic Marketplace
                        Services – Amazon | Tinuiti
                      </div>
                      <div className="mt-4 text-lg text-primary-950 underline underline-offset-8">
                        Read More
                      </div>
                    </div>
                  </div>
                </a>
              </article>
              <article className="flex flex-col items-start justify-between bg-white rounded-2xl shadow-sm">
                <a href="/">
                  <div className="max-w-full rounded-2xl overflow-hidden">
                    <div className="p-6">
                      <img
                        className="mb-4"
                        src="https://cdn.shortpixel.ai/spai/q_lossy+w_379+to_webp+ret_img/tinuiti.com/wp-content/uploads/2023/08/braze-forge.png"
                      />
                      <div className="font-semibold text-xl mb-2 text-dark-950">
                        Braze Forge
                      </div>
                      <div className="text-dark-950 line-clamp-3">
                        OCTOBER 2023
                      </div>

                      <div className="pt-3 text-dark-950 text-sm">
                        Joe O’Connor, Senior Director, Strategic Marketplace
                        Services – Amazon | Tinuiti
                      </div>
                      <div className="mt-4 text-lg text-primary-950 underline underline-offset-8">
                        Read More
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
