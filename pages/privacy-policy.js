import { useState } from "react";
import Wrapper from "../components/Wrapper";
import _Container from "../components/_Container";
import Heading from "../components/Heading";
import Paragraphs from "../components/Paragraphs";
import Button from "../components/Button";
import Values from "../components/Values";
import Link from "next/link";

import _PageTitle from "../components/_PageTitle";
import _Hero from "../components/_Hero";
import _Primary from "../components/_Primary";
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

const features = [
  {
    name: "No cost to Retailers",
    description:
      "SmartCommerce is entirely brand-supported, meaning we do not charge retailers to be in our network, or to receive orders. ",
    href: "#",
    img: "img/icon-pig.svg",
  },
  {
    name: "Heighten visibility",
    description:
      "Become a place to purchase at the exact moment of consumer interest.",
    href: "#",
    img: "img/icon-eye.svg",
  },
  {
    name: "Expand your reach",
    description:
      "Click2Cart® has access to millions of consumer and sends them to Retailers",
    href: "#",
    img: "img/icon-world.svg",
  },
];

export default function Example() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`SmartCommerce Team Who We Are Your international SmartCommerce team has decades of experience in CPG eCommerce (it’s our passion), and would love the opportunity to show you what our next-gen eCommerce tools could be doing for your brand! Your SmartCommerce Team Angie Atkins Director, Implementations...`}</title>
        </Head>
        <_PageTitle title="Privacy Policy" />
        <Wrapper light>
          <_Container onecolumn>
            <div className="text-left">
              <Paragraphs dark>TBD</Paragraphs>
            </div>
          </_Container>
        </Wrapper>
      </Layout>
    </>
  );
}
