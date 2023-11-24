import Wrapper from "../components/Wrapper";
import _Container from "../components/_Container";
import Paragraphs from "../components/Paragraphs";
import Container from "../components/container";
import _PageTitle from "../components/_PageTitle";
import _Hero from "../components/_Hero";
import Layout from "../components/Layout";
import Clients from "../components/partners/clients";
import { fetchNewsletter } from "../lib/api";
import Head from "next/head";
import Link from "next/link";
import Heading from "../components/Heading";
import Button from "../components/Button";
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
        <_PageTitle title="Events" />
        <Wrapper slate>
          <_Container twocolumn>
            <div className="order-last lg:order-first">
              <Heading dark>
                Shop Talk 2024
                <span className="text-secondary-950">.</span>
              </Heading>

              <Paragraphs dark>
                <span className="font-semibold">
                  March 17th-20th 2024 at Mandalay Bay Las Vegas.
                </span>{" "}
                <br />
                <br />
                For four days, top execs from innovative brands and retailers
                gather in Las Vegas to discuss the evolving landscape of
                consumer discovery, shopping, and purchasing.
              </Paragraphs>
              <Link href="https://shoptalk.com/us">
                <Button primary>Learn more</Button>
              </Link>
            </div>
            <div className="relative w-full order-first lg:order-last">
              <img
                src="img/events/shop-talk.jpg"
                className="relative rounded-2xl w-full"
              />
            </div>
          </_Container>
        </Wrapper>
        <div className="bg-white lg:bg-slate-50 py-0 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 sm:grid-cols-2 mb-16">
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src="img/events/grocery-shop.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-info-950">
                    GroceryShop
                  </div>
                  <div className="text-dark-950 pb-2 text-sm font-semibold">
                    Oct 7th-9th 2024
                    <br /> at Mandalay Bay Las Vegas.
                  </div>
                  <p class="text-gray-700 text-sm">
                    Grocery industry vets come together to focus on the latest
                    technologies and trends affecting how consumers discover,
                    shop, and buy CPG products in the current digital world.
                  </p>
                  <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                    <Link
                      href="https://groceryshop.com/"
                      className="py-4 text-base text-primary-950 underline underline-offset-8"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
