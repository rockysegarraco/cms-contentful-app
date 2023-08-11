import { useState } from "react";
import Wrapper from "../components/Wrapper";
import _Container from "../components/_Container";
import _PageTitle from "../components/_PageTitle";
import Heading from "../components/Heading";
import Paragraphs from "../components/Paragraphs";
import Layout from "../components/Layout";
import Head from "next/head";

export default function Example() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`SmartCommerce Team Who We Are Your international SmartCommerce team has decades of experience in CPG eCommerce (it’s our passion), and would love the opportunity to show you what our next-gen eCommerce tools could be doing for your brand! Your SmartCommerce Team Angie Atkins Director, Implementations...`}</title>
        </Head>
        <_PageTitle title="Privacy Policy" />
        <Wrapper light>
          <_Container onecolumn>
            <div className="text-left">PRIVACY GOES HERE</div>
          </_Container>
        </Wrapper>
      </Layout>
    </>
  );
}
