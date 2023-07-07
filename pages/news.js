import Container from "../components/container";
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
        <h2 className="font-normal leading-tight mb-20 p-5 bg-white border-t shadow-sm">
          <div className="mx-auto lg:max-w-7xl sm:max-w-7xl sm:px-6 lg:px-8 px-10 sm:px-8 text-sm">
            <h1 className="text-3xl md:text-3xl font-bold md:pr-8 text-dark-950">
              News & Events<span className="text-secondary-950">.</span>
            </h1>
          </div>
        </h2>
        <Container>
          <style>{"body { background-color: #f5f5f7; }"}</style>
          TBD
        </Container>
      </Layout>
    </>
  );
}
