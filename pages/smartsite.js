import _PageTitle from "../components/_PageTitle";
import _Hero from "../components/_Hero";
import Container from "../components/container";
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

export default function SmartSite({ pageData }) {
  return (
    <>
      <Layout>
        <Head>
          <title>
            SmartCommerce - Accelerate E-commerce from all existing touchpoints
            - SmartCommerce
          </title>
        </Head>
        <_PageTitle title="SmartSite" />
        <_Hero
          title="Go From Driving Awareness To Driving ACTION"
          ButtonTitle="Request Demo"
          ButtonLink="/"
          ImageUrl="img/SmartSiteHeroImage.jpg"
        >
          <p className="font-bold text-secondary-950 mb-8">
            Why use SmartSite for your website?
          </p>
          Easy-to-implement solutions let consumers add products to their carts
          from the retailer of their choice at any touchpoint on your website,
          making every moment a shoppable one.
        </_Hero>
        <Path />
        <Diff />
        <Stats />
        <Testimonials />
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
