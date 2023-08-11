import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "../components/PageTitle";
import Wrapper from "../components/Wrapper";
import _Container from "../components/_Container";
import Heading from "../components/Heading";
import Paragraphs from "../components/Paragraphs";
import Button from "../components/Button";
import _PageTitle from "../components/_PageTitle";
import Cta from "../components/cta";
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
    name: "Create",
    description:
      "All of your performance metrics are easily accessible in the SmartSuite Dashboard. If you need help, we’re always here (at no additional charge).",
    href: "#",
    img: "img/cta-1.svg",
  },
  {
    name: "Analyze",
    description:
      "Manage the live performance of your links and make changes to retailers, products,redirect pages, etc. This is where you learn who your audience is and what they want.",
    href: "#",
    img: "img/cta-2.svg",
  },
  {
    name: "Act",
    description:
      "Use the insights to inform your next campaign or your website. By creating a better experience for your audience, they’ll keep coming back for more. ",
    href: "#",
    img: "img/cta-3.svg",
  },
];

export default function Reporting() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`SmartCommerce Team Who We Are Your international SmartCommerce team has decades of experience in CPG eCommerce (it’s our passion), and would love the opportunity to show you what our next-gen eCommerce tools could be doing for your brand! Your SmartCommerce Team Angie Atkins Director, Implementations...`}</title>
        </Head>
        <Wrapper light>
          <PageTitle title="Reporting" />
        </Wrapper>
        <Wrapper slate>
          <_Container twocolumn>
            <div className="order-last lg:order-first">
              <Heading dark>
                Knowledge is power
                <span className="text-secondary-950">.</span>
              </Heading>
              <p className="font-bold text-secondary-950 mb-8">
                How to use comprehensive reporting in real time
              </p>
              <Paragraphs dark>
                Smartsuite empowers you with real time data and insights to sync
                your media spend with your inventory, reduce advertising waste
                and measure campaign outcomes. Every subscription comes with
                unlimited logins and unlimited support!
              </Paragraphs>
              <Link href="/request-demo">
                <Button primary>Request Demo</Button>
              </Link>
            </div>
            <div className="relative w-full order-first lg:order-last">
              <img src="img/HeroReporting.jpg" className="relative" />
            </div>
          </_Container>
        </Wrapper>
        <Wrapper primary>
          <_Container onecolumn>
            <div className="order-last lg:order-first">
              <Heading light>
                Know your audience – and give them what they want
              </Heading>
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 text-center mt-24">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="text-2xl font-normal text-white">
                      <img
                        className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 mb-8"
                        src={feature.img}
                        alt="Reform"
                        width={200}
                        height={48}
                      />
                      {feature.name}
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-white">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </_Container>
        </Wrapper>
        <Wrapper light>
          <_Container twocolumn>
            <div className="order-last lg:order-first">
              <Heading dark>You’re in control</Heading>
              <Paragraphs dark>
                The SmartSuite Dashboard gives clients 24/7 access to metrics,
                so you can meet your goals faster. Real-time data and insights
                let you manage the live performance of your campaigns and make
                changes to retailers, products, redirect pages, and more
                anytime. 
                <br />
                <br />
                Of course, we’re always here to help – clients receive unlimited
                White Glove Support. Our team of experts will work with you
                every step of the way to ensure your campaign is successful.
                (And, no, we don’t charge extra for that.)
              </Paragraphs>
            </div>
            <div className="relative w-full order-first lg:order-last">
              <img src="img/SmartSiteCaro.png" className="relative" />
            </div>
          </_Container>
        </Wrapper>
        <Wrapper slate>
          <_Container onecolumn>
            <div className="order-last lg:order-first">
              <img
                className="h-16 mx-auto mb-8"
                src="img/logo-transunion.svg"
              />
              <Heading dark>A deeper dive into you audience</Heading>
              <div className="mx-auto max-w-4xl">
                <Paragraphs dark>
                  Our partnership with TruAudience™ by TransUnion powers
                  data-driven marketing and measurement through privacy-first
                  data enrichment, audience targeting, and advanced analytics.
                  Create and segment high-quality customer and prospect
                  audiences, as well as upload to the DSPs of your choice.
                </Paragraphs>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/request-demo">
                  <Button primary>Request Demo</Button>
                </Link>
              </div>
            </div>
          </_Container>
        </Wrapper>
        <Cta />
      </Layout>
    </>
  );
}
