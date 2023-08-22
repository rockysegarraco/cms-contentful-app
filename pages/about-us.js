import React, { useEffect } from "react";
import _PageTitle from "../components/_PageTitle";
import AboutUs from "../components/AboutUs";
import Layout from "../components/Layout";
import Head from "next/head";
import ReactGA from 'react-ga';


export default function Example() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Layout>
        <Head>
          <title>{`About us - SmartCommerce is a simple tool that transforms all of your marketing touchpoints into e-commerce launch points.`}</title>
          <meta
            name="description"
            content="SmartCommerce Team Who We Are Your international SmartCommerce team has decades of experience in CPG eCommerce (it’s our passion), and would love the opportunity to show you what our next-gen eCommerce tools could be doing for your brand! Your SmartCommerce Team Angie Atkins Director, Implementations..."
          />
        </Head>
        <_PageTitle title="About Us" />
        <AboutUs />
      </Layout>
    </>
  );
}
