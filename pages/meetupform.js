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
        <Wrapper slate>
          <_Container twocolumn>
            <div className="order-first lg:order-last">
              <h1 className="text-4xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-4xl lg:leading-[5rem] mb-1 font-bold text-info-950">
                Let's meet up!
                <span className="text-secondary-950">.</span>
              </h1>
              <p className="mt-1 text-lg leading-8 text-gray-600">
                We would love to connect and show you how SmartCommerce can
                drive more sales. Fill out the form below, and we’ll be in touch
                soon – looking forward!
              </p>
              <img className="w-full pt-8" src="/img/meetup_form.png" />
            </div>
            <div className="relative w-full order-first lg:order-last">
              <div className="p-6 rounded-lg">
                <iframe
                  src="https://demo.smartcommerce.co/smartcommerce/forms/meetup-form.html"
                  height="650"
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
