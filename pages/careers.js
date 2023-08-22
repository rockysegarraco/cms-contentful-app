import _PageTitle from "../components/_PageTitle";
import _Hero from "../components/_Hero";
import Testimonials from "../components/careers/testimonials";
import TestimonialsTwo from "../components/careers/testimonialsTwo";
import TestimonialsThree from "../components/careers/testimonialsThree";
import GetToKnow from "../components/careers/getoknow";
import Stats from "../components/stats";
import StatsOpp from "../components/stats-opp";
import CareerHero from "../components/CareerHero";
import Cta from "../components/careers/Cta";
import Clients from "../components/partners/clients";
import Remote from "../components/careers/remote";
import Benefits from "../components/careers/Benefits";
import Intro from "../components/intro";
import Layout from "../components/Layout";
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
          <title>
            SmartCommerce - Accelerate E-commerce from all existing touchpoints
            - SmartCommerce
          </title>
          <meta
            name="description"
            content="A FRICTIONLESS ONE-CLICK PATH TO PURCHASE THAT COLLECTS INSIGHTS ALONG THE WAY! ACCELERATE ECOMMERCE Click2Cart® from SmartCommerce helps brands dramatically accelerate ecommerce from all of their existing touchpoints, by replacing typical friction-filled paths to purchase with a single click that sends products all the way into..."
          />
        </Head>
        <_PageTitle title="Careers" />
        <_Hero
          title="Create a career
          that just clicks"
          ButtonTitle="See open positions"
          ButtonLink="https://apply.workable.com/smartcommerce/"
          ImageUrl="img/career-1.png"
        >
          At our core, SmartCommerce helps brands build their success stories.
          And we don’t stop there – that pertains to our employees too! We
          believe that with the right support, you can work, learn, and grow –
          all while having fun.
        </_Hero>
        <Remote />
        <GetToKnow />
        <Testimonials />
        <Benefits />
        <div id="open">
          <Cta />
        </div>
      </Layout>
    </>
  );
}
