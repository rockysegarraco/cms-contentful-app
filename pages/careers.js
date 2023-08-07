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

export default function Example() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`SmartCommerce Team Who We Are Your international SmartCommerce team has decades of experience in CPG eCommerce (it’s our passion), and would love the opportunity to show you what our next-gen eCommerce tools could be doing for your brand! Your SmartCommerce Team Angie Atkins Director, Implementations...`}</title>
        </Head>
        <_PageTitle title="Careers" />
        <_Hero
          title="Create a career
          that just clicks"
          ButtonTitle="See open positions"
          ButtonLink="/"
          ImageUrl="img/career-1.jpg"
        >
          At our core, SmartCommerce helps brands build their success stories.
          And we don’t stop there – that pertains to our employees too! We
          believe that with the right support, you can work, learn, and grow –
          all while having fun.
        </_Hero>
        <Remote />
        <GetToKnow />
        <Testimonials />
        <TestimonialsTwo />
        <TestimonialsThree />
        <Benefits />
        <Cta />
      </Layout>
    </>
  );
}