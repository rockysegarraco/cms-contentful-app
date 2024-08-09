import { useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Wrapper from "../components/Wrapper";
import _Container from "../components/_Container";
import Heading from "../components/Heading";
import Paragraphs from "../components/Paragraphs";
import Button from "../components/Button";
import Link from "next/link";
import Clients from "../components/partners/clients";
import Intro from "../components/intro";

export default function Example() {
  return (
    <>
      <Layout>
        <Head>
          <title>
            Join forces with our partners – premium agencies, platforms, and
            media partners – for better results.
          </title>
          <meta
            name="description"
            content="Discover SmartCommerce's extensive network of partners, each skilled in leveraging Click2Cart technology to enhance your e-commerce success. From data-driven marketing agencies to innovative advertising platforms, our partners are dedicated to boosting your brand's performance across various touchpoints. Explore how collaboration can lead to impactful results for your business."
          />
        </Head>
        <Intro title="Partners" />
        <Wrapper slate>
          <_Container twocolumn>
            <div className="order-last lg:order-first">
              <Heading dark>
                Partner up for better results
                <span className="text-secondary-950">.</span>
              </Heading>
              <Paragraphs dark>
                Our wonderful partners are all well-versed when it comes to
                Click2Cart technology and know how to use it to boost the
                performance of ads, social posts, influencer blogs, websites,
                packaging, and more. Learn more about each of them below, and
                let us know if you’d like an intro. We love nothing more than
                making connections and watching your business grow!
              </Paragraphs>
              <Link href="/contact-us">
                <Button primary>Partner with us</Button>
              </Link>
            </div>
            <div className="relative w-full order-first lg:order-last">
              <img
                src="/img/HeroPartners.jpg"
                className="relative rounded-2xl w-full"
              />
            </div>
          </_Container>
        </Wrapper>
        <Wrapper light>
          <_Container onecolumn>
            <div>
              <Heading dark>Stronger Together</Heading>
              <Paragraphs dark minwidth>
                <span>
                  SmartCommerce is integrated with these premium agencies,
                  platforms, and media partners – all authorized to implement
                  Click2Cart® services.
                </span>
              </Paragraphs>
            </div>
          </_Container>
        </Wrapper>
        <Clients />
      </Layout>
    </>
  );
}
