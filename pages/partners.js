import Container from "../components/container";
import Hero from "../components/partners/Hero";
import Clients from "../components/partners/clients";
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
          <title>
            Partners - SmartCommerce - Accelerate E-commerce from all existing
            touchpoints - SmartCommerce
          </title>
          <meta
            name="description"
            content="SmartCommerce is integrated with the following premium agency, platform, and other media partners, who are authorized to implement Click2Cart® services."
          />
        </Head>
        <Intro title="Partners" />
        <Hero />
        <Clients />
      </Layout>
    </>
  );
}
