import React from "react";
import Link from "next/link";
import PageTitle from "../components/PageTitle";
import Wrapper from "../components/Wrapper";
import _Container from "../components/_Container";
import Heading from "../components/Heading";
import Paragraphs from "../components/Paragraphs";
import Button from "../components/Button";
import _PageTitle from "../components/_PageTitle";
import _cpg from "../components/_cpg";
import Host from "../components/Host";
import Layout from "../components/Layout";
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
          <title>
            SmartCommerce - Accelerate E-commerce from all existing touchpoints
            - SmartCommerce
          </title>
          <meta
            name="description"
            content="A FRICTIONLESS ONE-CLICK PATH TO PURCHASE THAT COLLECTS INSIGHTS ALONG THE WAY! ACCELERATE ECOMMERCE Click2Cart® from SmartCommerce helps brands dramatically accelerate ecommerce from all of their existing touchpoints, by replacing typical friction-filled paths to purchase with a single click that sends products all the way into..."
          />
        </Head>
        <Wrapper light>
          <PageTitle title="CPG Scoop Podcast" />
        </Wrapper>
        <Wrapper slate>
          <_Container twocolumn>
            <div className="order-last lg:order-first">
              <Heading dark>
                The CPG Scoop Podcast
                <span className="text-secondary-950">.</span>
              </Heading>
              <p className="font-bold text-secondary-950 mb-8">
                How to use comprehensive reporting in real time
              </p>
              <Paragraphs dark>
                Discover what’s new and next in CPG commerce and marketing with
                hosts Jennifer Silverberg, CEO of SmartCommerce, and Risa
                Crandall, SVP CPG Strategy + Sales at Aki Technologies.
              </Paragraphs>
              <Link href="https://www.cpgscoop.com/">
                <Button primary>See more CPG Scoop</Button>
              </Link>
            </div>
            <div className="relative w-full order-first lg:order-last">
              <img src="img/HeroScoop.png" className="relative" />
            </div>
          </_Container>
        </Wrapper>
        <Wrapper light>
          <_Container onecolumn>
            <Heading dark>See what’s new</Heading>
            <_cpg />
          </_Container>
        </Wrapper>
        <Wrapper slate>
          <_Container onecolumn>
            <Heading dark>About the hosts</Heading>
            <Host />
          </_Container>
        </Wrapper>
        <Wrapper light>
          <_Container onecolumn>
            <div className="relative isolate overflow-hidden bg-primary-100 px-6 py-24 sm:px-16 text-center shadow-sm rounded-3xl ">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl text-info-950">
                Want to be a guest?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-info-950">
                Contact Risa and Jennifer to see if you can join the
                conversation!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://www.cpgscoop.com/"
                  className="rounded-full bg-primary-950 px-8 py-4 text-md font-medium text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Subscribe Now
                </a>
              </div>
            </div>
          </_Container>
        </Wrapper>
      </Layout>
    </>
  );
}
