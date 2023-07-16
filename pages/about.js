import Container from "../components/container";
import AboutHero from "../components/AboutHero";
import OurStory from "../components/OurStory";
import Values from "../components/Values";
import Team from "../components/team";
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
        <Intro title="About" />
        <AboutHero />
        <OurStory />
        <Values />
        <Team />
      </Layout>
    </>
  );
}
