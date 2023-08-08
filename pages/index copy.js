import _Hero from "../components/_Hero";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import Brands from "../components/brands";
import Success from "../components/success";
import Stats from "../components/stats";
import Diff from "../components/diff";
import Diffy from "../components/diffy";
import Cta from "../components/cta";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { fetchHomepage } from "../lib/api";

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

export default function Index({ pageData }) {
  return (
    <>
      <Layout>
        <Head>
          <title>
            SmartCommerce - Accelerate E-commerce from all existing touchpoints
            - SmartCommerce
          </title>
        </Head>
        <_Hero
          title="Make everything shoppable"
          ButtonTitle="Let’s do this!"
          ButtonLink="/"
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
        </_Hero>
        <Hero pageData={pageData} />
        <Brands />
        <Diffy />
        <Success />
        <Diff />
        <Stats />
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
