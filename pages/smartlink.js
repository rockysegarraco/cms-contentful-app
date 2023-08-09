import _PageTitle from "../components/_PageTitle";
import Section from "../components/Section";
import _Hero from "../components/_Hero";
import _Primary from "../components/_Primary";
import _SmartLinkProducts from "../components/_SmartLinkProducts";
import _Secondary from "../components/_Secondary";
import _General from "../components/_General";
import _Stats from "../components/_Stats";
import Layout from "../components/layout";
import SmartLinkHero from "../components/smartlink/SmartLinkHero";
import Brands from "../components/brands";
import Stats from "../components/smartlink/stats";
import Diff from "/components/smartlink/Diff";
import Path from "../components/smartlink/path";
import Testimonials from "../components/smartlink/testimonials";
import Cta from "../components/cta";
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

export default function SmartLink({ pageData }) {
  return (
    <>
      <div>
        <Layout>
          <Head>
            <title>
              SmartCommerce - Accelerate E-commerce from all existing
              touchpoints - SmartCommerce
            </title>
          </Head>
          <_PageTitle title="SmartLink" />
          <Section
            title="Bring the cart to them"
            ButtonTitle="Request Demo"
            ButtonLink="/request-demo"
            ImageUrl="img/Group 3.png"
          >
            <p className="font-bold text-secondary-950 mb-8">
              Why use Click2Cart for your ads & social media? 
            </p>
            Real-time, stock-aware technology gets your products into carts
            faster and more frequently – boosting sales, increasing product
            awareness, and creating repeat customers - sorta like magic!
          </Section>
          <_Primary>
            <div className="mx-auto max-w-7xl lg:mx-0 text-center">
              <h2 className="text-4xl leading-[3rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[5rem]  mb-8 font-bold text-white">
                A Shorter Path To Purchase
              </h2>
            </div>
            <div className="mx-auto mt-16 max-w-xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 text-center">
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
          </_Primary>
          <_SmartLinkProducts />
          <Stats />
          <_General>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 sm:gap-16 lg:gap-16 lg:grid-cols-12">
              <div className="col-span-6 lg:col-span-8">
                <h1 className="text-3xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[5rem]  mb-8 font-bold text-info-950">
                  MOE knows.
                </h1>
                <p className="pb-0">
                  The SmartCommerce Master Optimization Engine (MOE for short)
                  gives our clients superpowers. Up-to-the-minute technology
                  always knows what’s in stock and can easily ID the best
                  substitutes for OOS/3P items, driving friction out and volume
                  up.
                  <br />
                  <br />
                  You don’t need to send us feeds, spreadsheets, or links – it
                  continuously updates 10s of millions of Product-Offer pairs
                  across hundreds of retailers. And because it’s
                  machine-learning enabled, it’s always getting smarter. We have
                  a panel of Data Scientists to constantly manage all of it!
                </p>
              </div>
              <div className="col-span-6 lg:col-span-4">
                <img src="img/cta-moe.jpg" />
              </div>
            </div>
          </_General>
          <_Secondary>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 sm:gap-16 lg:gap-16 lg:grid-cols-12">
              <div className="col-span-6 lg:col-span-7 text-white">
                <h1 className="text-3xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[5rem] mb-8 font-bold text-white">
                  Data is your superpower
                </h1>
                <p className="pb-0">
                  The SmartSuite Dashboard gives clients 24/7 access to metrics,
                  so you can meet your goals faster. Real-time data and insights
                  let you manage the live performance of your campaigns and make
                  changes to retailers, products, redirect pages, and more
                  anytime.
                </p>
                <div className="flex py-8">
                  <a
                    href="/reporting"
                    className="rounded-full bg-primary-950 px-8 py-4 text-md font-semibold text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="col-span-6 lg:col-span-5">
                <img src="img/img-data.png" />
              </div>
            </div>
          </_Secondary>
          <_Stats
            title="Don’t just take our word for it. Here’s what clients are saying…"
            ImageUrl="img/cta-testimonials.jpg"
            alt="Smart Commerce"
          >
            “Click2Cart works with the way consumers actually behave, not the
            way they wish they did.” <br />
            <br />– CMO, Major CPG Mfr
          </_Stats>
          <Cta />
          <style>{"body { background-color: #f5f5f7; }"}</style>
        </Layout>
      </div>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const pageData = await fetchHomepage();
  return {
    props: { preview, pageData },
    revalidate: 60,
  };
}
