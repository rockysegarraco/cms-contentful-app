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
            content="Contact us For general inquiries, please use the form below. Locations US Offices: Atlanta, GA Email:&nbsp;info@smartcommerce.co Phone:&nbsp;1-800-571-3520 Europe: Barcelona, Spain Email: infoEU@smartcommerce.co"
          />
        </Head>
        <Intro title="Schedule a Meetup" />
        <Wrapper slate>
          <_Container onecolumn>
            <div className="text-start">
              <div className="mx-auto max-w-xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-info-950 mb-4">
                    Let's meetup!
                  </h2>
                  <Paragraphs>
                    Are you attending an event we will be at too? If so, we'd
                    love to chat about how we can help you drive more commerce.
                    Fill out the form below to schedule a meet-up with one of
                    the SmartCommerce team members!
                  </Paragraphs>
                </div>
                <iframe
                  src="https://tfaforms.com/5008721"
                  height="487"
                  width="100%"
                  frameborder="0"
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
