import _PageTitle from "../components/_PageTitle";
import _Hero from "../components/_Hero";
import Container from "../components/container";
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
          ImageUrl="img/SmartSiteHeroImage.jpg"
        >
          {" "}
          <p className="font-bold text-secondary-950 mb-8">
            How to use comprehensive reporting in real time
          </p>
          Discover what’s new and next in CPG commerce and marketing with hosts
          Jennifer Silverberg, CEO of SmartCommerce, and Risa Crandall, SVP CPG
          Strategy + Sales at Aki Technologies.
        </_Hero>
      </Layout>
    </>
  );
}
