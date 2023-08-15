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
          <title>{`Privacy Policy - SmartCommerce`}</title>
          <meta
            name="description"
            content="Privacy Policy - Updated May 23, 2022 We know that Privacy Policies are long, confusing, and hard to read, but we have to have all of the details for legal reasons, and to be sure you are informed."
          />
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
