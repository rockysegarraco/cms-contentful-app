import Container from "../components/container";
import Stats from "../components/stats";
import StatsOpp from "../components/stats-opp";
import Hero from "../components/partners/Hero";
import Cta from "../components/cta";
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
        <Intro title="Careers" />
        <Hero />
        <Remote />
        <Hero />
        <Stats />
        <StatsOpp />
        <Stats />
        <StatsOpp />
        <Benefits />
        <Cta />
      </Layout>
    </>
  );
}
