import Button from "../components/Button";
import Section from "../components/Section";
import SectionSecondary from "../components/SectionSecondary";
import SectionPrimary from "../components/SectionPrimary";
import Link from "next/link";
import _HeroFull from "../components/_HeroFull";
import _Secondary from "../components/_Secondary";
import _Primary from "../components/_Primary";
import _Content from "../components/_Content";
import Container from "../components/container";
import Layout from "../components/layout";
import HeroFull from "../components/Hero";
import Brands from "../components/brands";
import _Products from "../components/_Products";
import _Stats from "../components/_Stats";
import Diff from "../components/diff";
import Diffy from "../components/diffy";
import Cta from "../components/cta";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { fetchHomepage } from "../lib/api";
import ReactPlayer from "react-player";

import { CheckIcon } from "@heroicons/react/20/solid";
const features = [
  {
    description: "Maintain up-to-the-minute stock status.",
    icon: CheckIcon,
  },
  {
    description:
      "Bypass dead ends (out-of-stocks, seasonal item changes, 3rd party sellers).",
    icon: CheckIcon,
  },
  {
    description: "Keep your e-commerce sales MOVING!",
    icon: CheckIcon,
  },
];

const data = [
  {
    description: " Is 95%+ hands-free (removes human error)",
    icon: CheckIcon,
  },
  {
    description: "Is always getting smarter: Machine-learning enabled",
    icon: CheckIcon,
  },
  {
    description: "Requires NO feeds, spreadsheets or links from brands!",
    icon: CheckIcon,
  },
];

export default function Index({ pageData }) {
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
            content="SmartCommerce is a simple tool that transforms all of your marketing touchpoints into e-commerce launch points."
          />
        </Head>
        <Section
          title="Make everything shoppable"
          ButtonTitle="Let's do this!"
          ButtonLink="/request-demo"
          ImageUrl="img/HomepageHeroImage.png"
        >
          SmartCommerce is a simple tool that transforms all of your marketing
          touchpoints into e-commerce launch points.
          <dl className="mt-8 max-w-xl text-base leading-7 text-gray-600 lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon
                    className="absolute left-1 top-1 h-5 w-5 text-secondary-950"
                    aria-hidden="true"
                  />
                </dt>{" "}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
          <p className="font-bold text-info-950 mt-8">
            Welcome to the future of commerce.{" "}
          </p>
        </Section>
        <SectionSecondary title="Trusted by leading consumer brands across the globe">
          Major players leverage SmartCommerce to reach consumers across
          categories – grocery, wellness, beauty, pet, electronics and more
          <div className="mx-auto max-w-7xl lg:max-w-7xl mt-16 grid grid-cols-4 items-center gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-0 lg:mx-0 lg:grid-cols-6">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="brands/_abbott.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="brands/_boston.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="img/brands/_png.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="brands/_kimberly.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="img/brands/_nestle.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="img/brands/_barilla.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </SectionSecondary>
        <SectionPrimary title="Click2Cart® Difference">
          <p>
            Why Click2Cart? We like to think of it as behind-the-scenes magic
            that makes the carting process as simple and seamless as possible.
            The friction-free, one-click path to purchase means consumers aren’t
            distracted by competitor ads or cross-selling, and there is no
            waiting (i.e. forgetting) to check out.
            <br /> <br />
            And even when shoppers don’t complete a purchase, you still win
            because carting triggers retargeting (building brand awareness) and
            improves retailer-side SEO/SEM results.
          </p>
        </SectionPrimary>
        <_Products />
        <Section
          title="The difference is data"
          ButtonTitle="Tell Me More"
          ButtonLink="/reporting"
          ImageUrl="img/reporting.jpg"
        >
          The SmartCommerce Master Optimization Engine (MOE for short):
          <dl className="mt-8 max-w-xl text-base leading-7 text-gray-600 lg:max-w-none">
            {data.map((data) => (
              <div key={data.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <data.icon
                    className="absolute left-1 top-1 h-5 w-5 text-secondary-950"
                    aria-hidden="true"
                  />
                </dt>{" "}
                <dd className="inline">{data.description}</dd>
              </div>
            ))}
          </dl>
          <p className="pt-8">
            Creating and maintaining the connection between products and
            retailers requires sophisticated data analytics. Our
            up-to-the-minute technology always knows what’s in stock and can ID
            the best substitutes for OOS/3P items. It continuously updates 10s
            of millions of product-offer pairs across hundreds of retailers. And
            don’t worry, you don’t need to do a thing: We have a panel of Data
            Scientists to constantly manage all of it!
          </p>
        </Section>
        <_Stats
          title="The truth is in the numbers"
          ImageUrl="img/stat.jpg"
          alt="Smart Commerce"
        >
          <p className="mt-6 text-lg leading-8 text-dark-950">
            It just works – across all categories and verticals, from display
            ads to QR codes, at ALL major points of intent.
          </p>
          <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
            <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
              <dt className="text-sm leading-6 text-dark-950">
                Dollar value of products carted in the last 12 months.
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-info-950">
                $3B<span className="text-secondary-950">+</span>
              </dd>
            </div>
            <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
              <dt className="text-sm leading-6 text-dark-950">
                Number of products carted in the last 12 months
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-info-950">
                93M<span className="text-secondary-950">+</span>
              </dd>
            </div>
          </dl>
        </_Stats>
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
