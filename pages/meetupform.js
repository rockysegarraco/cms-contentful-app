import Wrapper from "../components/Wrapper";
import _Container from "../components/_Container";
import Paragraphs from "../components/Paragraphs";
import Container from "../components/container";
import Intro from "../components/intro";
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
            Schedule a Meetup - Accelerate E-commerce from all existing
            touchpoints - SmartCommerce
          </title>
          <meta
            name="description"
            content="We would love to connect and show you how SmartCommerce can drive more sales. Fill out the form below, and we’ll be in touch soon – looking forward!"
          />
        </Head>
        <Intro title="Schedule a Meet up" />
        <Wrapper>
          <_Container onecolumn>
            <div className="text-start">
              <div className="mx-auto max-w-xl p-4 lg:p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-info-950 mb-4">
                    Let's meet up!
                  </h2>
                  <Paragraphs>
                    We would love to connect and show you how SmartCommerce can
                    drive more sales. Fill out the form below, and we’ll be in
                    touch soon – looking forward!
                  </Paragraphs>
                </div>
                <iframe
                  src="https://demo.smartcommerce.co/smartcommerce/forms/meetup-form.html"
                  height="550"
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
                <script src="//tfaforms.com/js/iframe_resize_helper.js"></script>
              </div>
            </div>
          </_Container>
        </Wrapper>
        <style>{"body { background-color: #f5f5f7; }"}</style>
      </Layout>
    </>
  );
}
