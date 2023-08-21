import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "../components/PageTitle";
import Wrapper from "../components/Wrapper";
import _Container from "../components/_Container";
import Heading from "../components/Heading";
import Paragraphs from "../components/Paragraphs";
import Button from "../components/Button";
import _SmartLinkProducts from "../components/_SmartLinkProducts";
import Cta from "../components/Cta";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { fetchHomepage } from "../lib/api";

const features = [
  {
    name: "From Click to Cart",
    description:
      "Replace typical friction-filled paths to purchase with a single click that puts products (even recipes) directly into retailer carts.",
    href: "#",
    img: "img/cta-arrow.svg",
  },
  {
    name: "No Speed Bumps",
    description:
      "Our product engine avoids OOS conditions, 3P sellers, changing prices, etc, so your consumers enjoy a frictionless shopping experience.",
    href: "#",
    img: "img/cta-road.svg",
  },
  {
    name: "More Insights",
    description:
      "Whether or not a consumer checks out immediately, you still win. Carting triggers retailer retargeting and influences retailer recommendations/SEO.",
    href: "#",
    img: "img/cta-ribbon.svg",
  },
];

const stats = [
  {
    id: 1,
    name: "Seamlessly sidestep the current 27% OOS rates (yes, really!) with Dynamic Substitution",
    value: "27%",
    imgg: "img/cta-refresh.svg",
  },
  {
    id: 2,
    name: "Contextual bundles enjoy >2x the CTR of single-product ads!",
    value: "2x",
    imgg: "img/cta-cart.svg",
  },
];

export default function SmartLink({ pageData }) {
  return (
    <Layout>
      <Head>
        <title>
          SmartCommerce - Accelerate E-commerce from all existing touchpoints -
          SmartCommerce
        </title>
        <meta
          name="description"
          content="A FRICTIONLESS ONE-CLICK PATH TO PURCHASE THAT COLLECTS INSIGHTS ALONG THE WAY! ACCELERATE ECOMMERCE Click2Cart® from SmartCommerce helps brands dramatically accelerate ecommerce from all of their existing touchpoints, by replacing typical friction-filled paths to purchase with a single click that sends products all the way into..."
        />
      </Head>
      <Wrapper light>
        <PageTitle title="SmartLink" />
      </Wrapper>
      <Wrapper slate>
        <_Container twocolumn>
          <div className="order-last lg:order-first">
            <Heading dark>
              Bring the cart to them
              <span className="text-secondary-950">.</span>
            </Heading>
            <p className="font-bold text-secondary-950 mb-8">
              Why use Click2Cart for your ads & social media?
            </p>
            <Paragraphs dark>
              Real-time, stock-aware technology gets your products into carts
              faster and more frequently – boosting sales, increasing product
              awareness, and creating repeat customers - sorta like magic!
            </Paragraphs>
            <a href="#examples">
              <Button primary>View Examples</Button>
            </a>
          </div>
          <div className="relative w-full order-first lg:order-last">
            <img src="img/Group 3.png" className="relative" />
          </div>
        </_Container>
      </Wrapper>
      <Wrapper primary>
        <_Container onecolumn>
          <div className="order-last lg:order-first">
            <Heading light>A Shorter Path To Purchase</Heading>
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
      <div id="examples">
        <_SmartLinkProducts />
      </div>
      <Wrapper slate>
        <_Container onecolumn>
          <div className="order-last lg:order-first">
            <Heading dark>The numbers speak for themselves.</Heading>
            <Paragraphs dark>
              Using SmartCommerce has a direct effect on your bottom line (in
              the best way).{" "}
            </Paragraphs>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-2 max-w-lg mx-auto">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-normal leading-5 text-info-950">
                    <img
                      className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 mb-8"
                      src={stat.imgg}
                      alt="Reform"
                      width={200}
                      height={48}
                    />
                  </dt>
                  <dd className="text-5xl font-semibold tracking-tight text-info-950">
                    {stat.value}
                  </dd>
                  <dt className="text-sm font-normal leading-5 text-info-950">
                    {stat.name}
                  </dt>
                </div>
              ))}
            </dl>
            <div className="flex items-center justify-center gap-x-6">
              <Link href="/contact-us">
                <Button primary>Improve my numbers</Button>
              </Link>
            </div>
          </div>
        </_Container>
      </Wrapper>
      <Wrapper light>
        <_Container twocolumn>
          <div className="order-last lg:order-first">
            <Heading dark>
              MOE knows
              <span className="text-secondary-950">.</span>
            </Heading>
            <p className="font-bold text-secondary-950 mb-8">
              Why use Click2Cart for your ads & social media?
            </p>
            <Paragraphs dark>
              The SmartCommerce Master Optimization Engine (MOE for short) gives
              our clients superpowers. Up-to-the-minute technology always knows
              what’s in stock and can easily ID the best substitutes for OOS/3P
              items, driving friction out and volume up.
              <br />
              <br />
              You don’t need to send us feeds, spreadsheets, or links – it
              continuously updates 10s of millions of product-offer pairs across
              hundreds of retailers. And because it’s machine-learning enabled,
              it’s always getting smarter. We have a panel of Data Scientists to
              constantly manage all of it!
            </Paragraphs>
          </div>
          <div className="relative w-full order-first lg:order-last">
            <img src="img/cta-moe.png" className="relative" />
          </div>
        </_Container>
      </Wrapper>
      <Wrapper secondary>
        <div className="bkg-left">
          <img
            className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
            src="img/img-data.jpg"
            alt="SmartCommerce Reporting"
          />
          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            <div className="px-8 py-16 lg:col-end-2 lg:px-8 lg:py-24">
              <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-7xl">
                <Heading light>Data is your superpower</Heading>
                <Paragraphs light>
                  The SmartSuite Dashboard gives clients 24/7 access to metrics,
                  so you can meet your goals faster. Real-time data and insights
                  let you manage the live performance of your campaigns and make
                  changes to retailers, products, redirect pages, and more
                  anytime.
                </Paragraphs>
                <Link href="/reporting">
                  <Button primary>Learn more</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Cta />
      <style>{"body { background-color: #f5f5f7; }"}</style>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const pageData = await fetchHomepage();
  return {
    props: { preview, pageData },
    revalidate: 60,
  };
}
