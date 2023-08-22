import PageNotFound from "../components/pagenotfound";
import Wrapper from "../components/Wrapper";
import Intro from "../components/intro";
import GetDemo from "../components/getdemo";
import Layout from "../components/Layout";
import Head from "next/head";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Example() {
  return (
    <>
      <Head>
        <title>
          SmartCommerce - Accelerate E-commerce from all existing touchpoints -
          SmartCommerce
        </title>
      </Head>
      <PageNotFound />
    </>
  );
}
