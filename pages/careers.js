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
            We're a team of go-getters who wake up excited about helping clients
            take their sales to the next level.
          </title>
          <meta
            name="description"
            content="Explore exciting career opportunities at SmartCommerce, a remote-first company dedicated to employee well-being and professional growth. Join our diverse team and enjoy flexible work arrangements, comprehensive healthcare, generous parental leave, and a culture that values your contributions. Discover how you can thrive in a supportive environment where your career can truly click."
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
