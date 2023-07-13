import Container from "../components/container";
import AboutHero from "../components/AboutHero";
import Team from "../components/team";
import Intro from "../components/intro";
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
          <title>{`Contact us For general inquiries, please use the form below. Locations US Offices: Atlanta, GA Email:&nbsp;info@smartcommerce.co Phone:&nbsp;1-800-571-3520 Europe: Barcelona, Spain Email: infoEU@smartcommerce.co`}</title>
        </Head>
        <Intro title="About" />
        <AboutHero />
        <Team />
        <Container>
          <style>{"body { background-color: #f5f5f7; }"}</style>
        </Container>
      </Layout>
    </>
  );
}
