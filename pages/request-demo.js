import Container from "../components/container";
import Intro from "../components/intro";
import GetDemo from "../components/getdemo";
import Layout from "../components/layout";
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
            Request A DEMO Interested in learning how Click2Cart® can drive
            e-commerce from your digital ads, social channels and website? Fill
            out the form below and one our team members will be in touch.
            Locations US Offices: Atlanta, GA San Francisco, CA
            Email:&nbsp;info@smartcommerce.co Phone:&nbsp;1-800-571-3520 Europe:
            Barcelona,...
          </title>
        </Head>
        <Intro title="Get Demo" />
        <Container>
          <style>{"body { background-color: #f5f5f7; }"}</style>
          <GetDemo />
        </Container>
      </Layout>
    </>
  );
}
