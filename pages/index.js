import Container from "../components/container";
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
