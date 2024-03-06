import _Container from "../components/_Container";
import Wrapper from "../components/Wrapper";
import Intro from "../components/intro";
import GetDemo from "../components/getdemo";
import Layout from "../components/Layout";
import Head from "next/head";
import Heading from "../components/Heading";
import Paragraphs from "../components/Paragraphs";
import Button from "../components/Button";
import Link from "next/link";
import Video from "../components/Video";

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
            content="Interested in learning how Click2Cart® can drive e-commerce from your digital ads, social channels and website? Fill out the form below and one our team members will be in touch."
          />
          <script
            async
            src="https://www.tfaforms.com/publish/4988154"
            data-qp-target-id="fa-form"
            defer
          ></script>
        </Head>
        <Intro title="Get Demo" />
        <Wrapper slate>
          <_Container twocolumn>
            <div className="order-first lg:order-last">
              <h1 className="text-4xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-4xl lg:leading-[5rem]  mb-1 font-bold text-info-950">
                Request a Demo
                <span className="text-secondary-950">.</span>
              </h1>
              <p className="mt-1 text-lg leading-8 text-gray-600">
                Interested in learning how Click2Cart® can drive e- commerce
                from your digital ads, social channels and website - or would
                you like to see a sample link for your brand? Please introduce
                yourself below, and one our team members will be right back with
                you!
              </p>
              <div className="mt-8">
                <Video />
              </div>
            </div>
            <div className="relative w-full order-first lg:order-last">
              <div className="p-6">
                <div className="font-bold text-info-950 mb-4">
                  Schedule a Demo
                </div>
                <iframe
                  src="https://demo.smartcommerce.co/smartcommerce/forms/demo-linkedin-form.html"
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
      </Layout>
    </>
  );
}
