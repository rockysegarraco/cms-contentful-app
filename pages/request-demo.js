import _Container from "../components/_Container";
import Wrapper from "../components/Wrapper";
import Intro from "../components/intro";
import GetDemo from "../components/getdemo";
import Layout from "../components/Layout";
import Head from "next/head";

export default function Example() {
  return (
    <>
      <Layout>
        <Head>
          <title>
            SmartCommerce - Accelerate E-commerce from all existing touchpoints
            - SmartCommerce
          </title>
          <meta
            name="description"
            content="Interested in learning how Click2Cart® can drive e- commerce from your digital ads, social channels and website? Fill out the form below and one our team members will be in touch."
          />
          <script
            async
            src="https://www.tfaforms.com/publish/4988154"
            data-qp-target-id="fa-form"
            defer
          ></script>
        </Head>
        <Intro title="Get Demo" />
        <Wrapper>
          <_Container>
            <style>{"body { background-color: #f5f5f7; }"}</style>
            <div id="fa-form"></div>
            <GetDemo />
          </_Container>
        </Wrapper>
      </Layout>
    </>
  );
}
