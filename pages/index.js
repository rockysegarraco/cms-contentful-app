import Container from "../components/container";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import Brands from "../components/brands";
import Success from "../components/success";
import Short from "../components/short";
import Stats from "../components/stats";
import Cta from "../components/cta";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>
            SmartCommerce - Accelerate E-commerce from all existing touchpoints
            - SmartCommerce
          </title>
        </Head>
        <Hero />
        <Brands />
        <Short />
        <Success />
        <Stats />
        <Cta />
        <style>{"body { background-color: #f5f5f7; }"}</style>
      </Layout>
    </>
  );
}
