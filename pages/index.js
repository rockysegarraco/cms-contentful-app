import Container from "../components/container";
import Layout from "../components/layout";
import Hero from "../components/Hero";
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
        <Container>
          <style>{"body { background-color: #f5f5f7; }"}</style>
          <h1>Homepage</h1>
        </Container>
      </Layout>
    </>
  );
}
