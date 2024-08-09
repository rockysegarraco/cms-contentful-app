import React, { useEffect } from "react";
import _PageTitle from "../components/_PageTitle";
import AboutUs from "../components/AboutUs";
import Layout from "../components/Layout";
import Head from "next/head";
import ReactGA from "react-ga";

export default function Example() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Layout>
        <Head>
          <title>{`At our core, SmartCommerce helps brands build their success stories.`}</title>
          <meta
            name="description"
            content="Discover SmartCommerce, a pioneering community dedicated to simplifying the sales process for fast-moving consumer goods. Our innovative tools empower brands to connect directly with consumers, enhancing sales and conversions. Founded by industry veterans, we leverage decades of experience to transform complex challenges into seamless solutions. Join us in redefining commerce and driving success for our clients."
          />
        </Head>
        <_PageTitle title="About Us" />
        <AboutUs />
      </Layout>
    </>
  );
}
