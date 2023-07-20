import Container from "../components/container";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import Brands from "../components/brands";
import Stats from "../components/smartlink/stats";
import Path from "../components/smartlink/path";
import Testimonials from "../components/smartlink/testimonials";
import Cta from "../components/cta";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { fetchHomepage } from "../lib/api";

export default function SmartLink({ pageData }) {
  return (
    <>
      <Layout>
        <Head>
          <title>
            SmartCommerce - Accelerate E-commerce from all existing touchpoints
            - SmartCommerce
          </title>
        </Head>
        <Hero pageData={pageData} />
        <Path />
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
