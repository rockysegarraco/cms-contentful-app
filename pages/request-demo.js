import _Container from "../components/_Container";
import Wrapper from "../components/Wrapper";
import Intro from "../components/intro";
import GetDemo from "../components/getdemo";
import Layout from "../components/Layout";
import { fetchNewsletter } from "../lib/api";
import Head from "next/head";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

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
        </Head>
        <Intro title="Get Demo" />
        <Wrapper>
          <_Container>
            <style>{"body { background-color: #f5f5f7; }"}</style>
            <GetDemo />
          </_Container>
        </Wrapper>
      </Layout>
    </>
  );
}
