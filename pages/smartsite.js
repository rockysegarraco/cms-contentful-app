import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import Wrapper from "../components/Wrapper";
import _Container from "../components/_Container";
import Heading from "../components/Heading";
import Paragraphs from "../components/Paragraphs";
import Cta from "../components/Cta";
import Button from "../components/Button";
import { CMS_NAME } from "../lib/constants";
import { fetchHomepage } from "../lib/api";

const features = [
  {
    name: "Support multiple retailers",
    description:
      "Replace typical friction-filled paths to purchase with a single click that puts products (even recipes) directly into retailer carts.",
    href: "#",
    img: "img/cta-shop.svg",
  },
  {
    name: "Let the consumer choose",
    description:
      "Our product engine easily sidesteps OOS conditions, 3P sellers, changing prices, etc, so your consumers enjoy a frictionless shopping experience.",
    href: "#",
    img: "img/cta-barcode.svg",
  },
  {
    name: "More Insights",
    description:
      "Whether or not a consumer checks out immediately, you still win. Carting triggers retailer retargeting and influences retailer recommendations/SEO.",
    href: "#",
    img: "img/cta-sight.svg",
  },
];

export default function SmartSite({ pageData }) {
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
          <PageTitle title="SmartSite" />
        </Wrapper>
        <Wrapper slate>
          <_Container twocolumn>
            <div className="order-last lg:order-first">
              <Heading dark>
                Go From Driving Awareness To Driving ACTION
                <span className="text-secondary-950">.</span>
              </Heading>
              <p className="font-bold text-secondary-950 mb-8">
                Why use SmartSite for your website?
              </p>
              <Paragraphs dark>
                Easy-to-implement solutions let consumers add products to their
                carts from the retailer of their choice at any touchpoint on
                your website, making every moment a shoppable one.
              </Paragraphs>
              <Link href="/request-demo">
                <Button primary>Request Demo</Button>
              </Link>
            </div>
            <div className="relative w-full order-first lg:order-last">
              <img src="img/HeroSmartSite.png" className="relative" />
            </div>
          </_Container>
        </Wrapper>
        <Wrapper primary>
          <_Container onecolumn>
            <div className="order-last lg:order-first">
              <Heading light>Multi-solutions for multi-channels</Heading>
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
              <Heading dark>Carousels & SmartButtons</Heading>
              <Paragraphs dark>
                Easy-to-implement Click2Cart code drives commerce from websites,
                brand.com pages, influencer pages, and more. Smartsite Carousels
                bring the retailer cart onto your page, so ecommerce is just one
                click away.
                <br />
                <br />
                Carousels render via brand rules to show geographically-relevant
                retailers with the your brand in stock - and to let consumers
                save items to cart in a single click! SmartButtons let shoppers
                choose the retailer in two clicks (1 to open, 1 to select), for
                pages with multiple products or limited space.
              </Paragraphs>
            </div>
            <div className="relative w-full order-first lg:order-last">
              <img
                src="img/SmartSiteCaro.jpg"
                className="relative rounded-xl"
              />
            </div>
          </_Container>
        </Wrapper>
        <Wrapper slate>
          <_Container twocolumn>
            <div className="order-last lg:order-last">
              <Heading dark>SmartShop</Heading>
              <Paragraphs dark>
                While recipes are a perfect fit for SmartShops, they work
                brilliantly for ANYTHING that sells better when contextually
                bundled (think skincare regimens, DIY kits, party packs, etc).
                It allows consumers to choose among products and select
                variants, while dynamically showing relevant local retailers.
              </Paragraphs>
            </div>
            <div className="relative w-full order-first lg:order-first">
              <img src="img/img-smartshop.png" className="relative" />
            </div>
          </_Container>
        </Wrapper>
        <Wrapper light>
          <_Container twocolumn>
            <div className="order-last lg:order-first">
              <Heading dark>Product Locators</Heading>
              <Paragraphs dark>
                Optimize your site for omni-channel shopping and boost brand
                discovery. With unmatched coverage and no dead-ends, this is a
                no-brainer.
              </Paragraphs>
            </div>
            <div className="relative w-full order-first lg:order-last">
              <img src="img/img-productlocator.png" className="relative" />
            </div>
          </_Container>
        </Wrapper>
        <Wrapper slate>
          <div className="bkg-magic">
            <_Container one column>
              <div className="mx-auto max-w-4xl text-center">
                <Heading dark>
                  Click2Cart<span className="font-normal">®</span> difference
                </Heading>
                <Paragraphs dark>
                  We like to think of it as behind-the-scenes magic.
                  Friction-free, one-click carting means consumers aren’t
                  distracted by competitor ads or cross-selling, and there’s no
                  waiting (i.e. forgetting) to check out. <br /> <br />
                  And even when shoppers don’t complete a purchase, you still
                  win because carting triggers retargeting and improves
                  retailer-side SEO/SEM results.
                </Paragraphs>
              </div>
            </_Container>
          </div>
        </Wrapper>
        <Wrapper secondary>
          <div className="bkg-left">
            <img
              className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
              src="img/img-reporting-super.jpg"
              alt="SmartCommerce Reporting"
            />
            <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
              <div className="px-8 py-16 lg:col-end-2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-7xl">
                  <Heading light>Data is your superpower</Heading>
                  <Paragraphs light>
                    The SmartSuite Dashboard gives clients 24/7 access to
                    metrics, so you can meet your goals faster. Real-time data
                    and insights let you manage the live performance of your
                    campaigns and make changes to retailers, products, redirect
                    pages, and more anytime.
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
