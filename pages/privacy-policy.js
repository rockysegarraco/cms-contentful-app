import { useState, useEffect } from "react";
import Wrapper from "../components/Wrapper";
import _Container from "../components/_Container";
import _PageTitle from "../components/_PageTitle";
import Heading from "../components/Heading";
import Paragraphs from "../components/Paragraphs";
import Layout from "../components/Layout";
import Head from "next/head";
import { fetchPrivacy } from "../lib/api";
import PostBody from "../components/Postbody";

export default function Example({ preview, privacy }) {
  const [policy, setPolicy] = useState();

  useEffect(() => {
    if (privacy) {
      setPolicy(privacy[0]?.fields?.privacy);
    }
  }, []);

  return (
    <>
      <Layout>
        <Head>
          <title>{`SmartCommerce Team Who We Are Your international SmartCommerce team has decades of experience in CPG eCommerce (it’s our passion), and would love the opportunity to show you what our next-gen eCommerce tools could be doing for your brand! Your SmartCommerce Team Angie Atkins Director, Implementations...`}</title>
        </Head>
        <_PageTitle title="Privacy Policy" />
        <Wrapper light>
          <div className="mx-auto max-w-4xl text-left px-8 text-dark-950">
            {policy && <PostBody content={policy} />}
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const { privacy } = await fetchPrivacy();
  return {
    props: { preview, privacy },
    revalidate: 60,
  };
}
