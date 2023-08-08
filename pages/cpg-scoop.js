import _PageTitle from "../components/_PageTitle";
import _Hero from "../components/_Hero";
import _cpg from "../components/_cpg";
import Host from "../components/Host";
import Testimonials from "../components/careers/testimonials";
import TestimonialsTwo from "../components/careers/testimonialsTwo";
import TestimonialsThree from "../components/careers/testimonialsThree";
import GetToKnow from "../components/careers/getoknow";
import Stats from "../components/stats";
import StatsOpp from "../components/stats-opp";
import CareerHero from "../components/CareerHero";
import Cta from "../components/careers/cta";
import Clients from "../components/partners/clients";
import Remote from "../components/careers/remote";
import Benefits from "../components/careers/Benefits";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { fetchNewsletter } from "../lib/api";
import Head from "next/head";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Reporting() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`SmartCommerce Team Who We Are Your international SmartCommerce team has decades of experience in CPG eCommerce (it’s our passion), and would love the opportunity to show you what our next-gen eCommerce tools could be doing for your brand! Your SmartCommerce Team Angie Atkins Director, Implementations...`}</title>
        </Head>
        <_PageTitle title="CPG Scoop Podcast" />
        <_Hero
          title="The CPG Scoop Podcast"
          ButtonTitle="See more CPG Scoop"
          ButtonLink="/"
          ImageUrl="img/HeroScoop.png"
        >
          {" "}
          <p className="font-bold text-secondary-950 mb-8">
            How to use comprehensive reporting in real time
          </p>
          Discover what’s new and next in CPG commerce and marketing with hosts
          Jennifer Silverberg, CEO of SmartCommerce, and Risa Crandall, SVP CPG
          Strategy + Sales at Aki Technologies.
        </_Hero>
        <_cpg />
        <Host />
        <div className="mx-auto max-w-7xl py-8 lg:py-16 px-8">
          <div className="relative isolate overflow-hidden bg-primary-100 px-6 py-24 sm:px-16 text-center shadow-sm rounded-3xl ">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl text-info-950">
              Want to be a guest?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-info-950">
              Contact Risa and Jennifer to see if you can be the next guest!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://smartcommerce.us20.list-manage.com/subscribe?u=5d71f8753fa72eab4b72788c2&id=8a974f182a%20"
                className="rounded-full bg-primary-950 px-8 py-4 text-md font-medium text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
