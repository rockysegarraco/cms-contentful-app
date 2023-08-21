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
            Partners - SmartCommerce - Accelerate E-commerce from all existing
            touchpoints - SmartCommerce
          </title>
          <meta
            name="description"
            content="SmartCommerce is integrated with the following premium agency, platform, and other media partners, who are authorized to implement Click2Cart® services."
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
                SmartCommerce partners are well-versed in putting Click2Cart to
                work on your ads, social media, influencer sites, websites,
                packaging, and more! Take a look at the short intros below, and
                please let us know if we could make an introduction IRL to help
                grow your brand!
              </Paragraphs>
              <Link href="/contact-us">
                <Button primary>Partner with us</Button>
              </Link>
            </div>
            <div className="relative w-full order-first lg:order-last">
              <img
                src="img/HeroPartners.jpg"
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
                  platforms, and media partners – all authorize to implement
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
