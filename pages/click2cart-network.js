import { useState } from "react";
import Wrapper from "../components/Wrapper";
import _Container from "../components/_Container";
import Heading from "../components/Heading";
import Paragraphs from "../components/Paragraphs";
import Button from "../components/Button";
import Values from "../components/Values";
import Link from "next/link";

import _PageTitle from "../components/_PageTitle";
import _Hero from "../components/_Hero";
import _Primary from "../components/_Primary";
import Testimonials from "../components/careers/testimonials";
import TestimonialsTwo from "../components/careers/testimonialsTwo";
import TestimonialsThree from "../components/careers/testimonialsThree";
import GetToKnow from "../components/careers/getoknow";
import Stats from "../components/stats";
import StatsOpp from "../components/stats-opp";
import CareerHero from "../components/CareerHero";
import Cta from "../components/careers/Cta";
import Clients from "../components/partners/clients";
import Remote from "../components/careers/remote";
import Benefits from "../components/careers/Benefits";
import Intro from "../components/intro";
import Layout from "../components/Layout";
import { fetchNewsletter } from "../lib/api";
import Image from "next/image";
import Head from "next/head";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const features = [
  {
    name: "No cost to Retailers",
    description:
      "SmartCommerce is entirely brand-supported, meaning we do not charge retailers to be in our network or to receive orders.",
    href: "#",
    img: "img/icon-pig.svg",
  },
  {
    name: "Heighten visibility",
    description:
      "Become a place to purchase at the exact moment of consumer interest.",
    href: "#",
    img: "img/icon-eye.svg",
  },
  {
    name: "Expand your reach",
    description:
      "Click2Cart® has access to millions of consumers and sends them to retailers.",
    href: "#",
    img: "img/icon-world.svg",
  },
];

export default function Example() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`SmartCommerce Team Who We Are Your international SmartCommerce team has decades of experience in CPG eCommerce (it’s our passion), and would love the opportunity to show you what our next-gen eCommerce tools could be doing for your brand! Your SmartCommerce Team Angie Atkins Director, Implementations...`}</title>
        </Head>
        <_PageTitle title="Retailers" />
        <Wrapper slate>
          <_Container twocolumn>
            <div className="order-last lg:order-first">
              <Heading dark>
                Unlock the value of Click2Cart
                <span className="text-secondary-950">.</span>
              </Heading>
              <Paragraphs dark>
                CPG brands use SmartCommerce Click2Cart® technology to let
                consumers drop products directly into store shopping carts from
                brand websites, social, video, email, etc.
              </Paragraphs>
              <Link href="/partners">
                <Button primary>Visit our retailer list</Button>
              </Link>
            </div>
            <div className="relative order-first lg:order-last">
              <img
                src="img/HeroRetailers.jpg"
                className="relative rounded-2xl w-full"
              />
            </div>
          </_Container>
        </Wrapper>
        <Wrapper secondary>
          <_Container onecolumn>
            <div className="order-last lg:order-first">
              <Heading light>
                <div className="max-w-full">Retailer Rolodex</div>
              </Heading>
              <div className="mx-auto max-w-none lg:max-w-xl">
                <Paragraphs light>
                  Major players leverage SmartCommerce to reach consumers across
                  categories – grocery, wellness, beauty, pet, electronics and
                  more.
                </Paragraphs>
              </div>
              <div className="mx-auto max-w-7xl lg:max-w-7xl mt-8 grid grid-cols-1 items-center gap-x-8 gap-y-10 sm:gap-x-0 lg:mx-0">
                <div className="slider">
                  <div className="slide-track">
                    <div className="slide">
                      <Image
                        loader={imageLoader}
                        className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                        src="img/brands/_abbott.svg"
                        alt="Abbott"
                        width={158}
                        height={48}
                      />
                    </div>
                    <div className="slide">
                      <Image
                        loader={imageLoader}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="img/brands/_boston.svg"
                        alt="Boston Beer"
                        width={158}
                        height={48}
                      />
                    </div>
                    <div className="slide">
                      <Image
                        loader={imageLoader}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="img/brands/_png.svg"
                        alt="P&G"
                        width={158}
                        height={48}
                      />
                    </div>
                    <div className="slide">
                      <Image
                        loader={imageLoader}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="img/brands/_kimberly.svg"
                        alt="Kimberly"
                        width={158}
                        height={48}
                      />
                    </div>
                    <div className="slide">
                      <Image
                        loader={imageLoader}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="img/brands/_nestle.svg"
                        alt="Nestle"
                        width={158}
                        height={48}
                      />
                    </div>
                    <div className="slide">
                      <Image
                        loader={imageLoader}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="img/brands/bananaboat.svg"
                        alt="Banana Boat"
                        width={158}
                        height={48}
                      />
                    </div>
                    <div className="slide">
                      {" "}
                      <Image
                        loader={imageLoader}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="img/brands/barilla.svg"
                        alt="Barilla"
                        width={158}
                        height={48}
                      />
                    </div>
                    <div className="slide">
                      {" "}
                      <Image
                        loader={imageLoader}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="img/brands/microsoft.svg"
                        alt="Microsoft"
                        width={158}
                        height={48}
                      />
                    </div>
                    <div className="slide">
                      <Image
                        loader={imageLoader}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="img/brands/clorox.svg"
                        alt="Clorox"
                        width={158}
                        height={48}
                      />
                    </div>
                    <div className="slide">
                      <Image
                        loader={imageLoader}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="img/brands/beyondmeat.svg"
                        alt="Beyond Meat"
                        width={158}
                        height={48}
                      />
                    </div>

                    <div className="slide">
                      <Image
                        loader={imageLoader}
                        className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                        src="img/brands/_abbott.svg"
                        alt="Abbott"
                        width={158}
                        height={48}
                      />
                    </div>
                    <div className="slide">
                      <Image
                        loader={imageLoader}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="img/brands/_boston.svg"
                        alt="Boston Beer"
                        width={158}
                        height={48}
                      />
                    </div>
                    <div className="slide">
                      <Image
                        loader={imageLoader}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="img/brands/_png.svg"
                        alt="P&G"
                        width={158}
                        height={48}
                      />
                    </div>
                    <div className="slide">
                      <Image
                        loader={imageLoader}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="img/brands/_kimberly.svg"
                        alt="Kimberly"
                        width={158}
                        height={48}
                      />
                    </div>
                    <div className="slide">
                      <Image
                        loader={imageLoader}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="img/brands/_nestle.svg"
                        alt="Nestle"
                        width={158}
                        height={48}
                      />
                    </div>
                    <div className="slide">
                      <Image
                        loader={imageLoader}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="img/brands/bananaboat.svg"
                        alt="Banana Boat"
                        width={158}
                        height={48}
                      />
                    </div>
                    <div className="slide">
                      {" "}
                      <Image
                        loader={imageLoader}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="img/brands/barilla.svg"
                        alt="Barilla"
                        width={158}
                        height={48}
                      />
                    </div>
                    <div className="slide">
                      {" "}
                      <Image
                        loader={imageLoader}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="img/brands/microsoft.svg"
                        alt="Microsoft"
                        width={158}
                        height={48}
                      />
                    </div>
                    <div className="slide">
                      <Image
                        loader={imageLoader}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="img/brands/clorox.svg"
                        alt="Clorox"
                        width={158}
                        height={48}
                      />
                    </div>
                    <div className="slide">
                      <Image
                        loader={imageLoader}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="img/brands/beyondmeat.svg"
                        alt="Beyond Meat"
                        width={158}
                        height={48}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </_Container>
        </Wrapper>
        <Wrapper light>
          <_Container onecolumn>
            <div className="order-last lg:order-first">
              <Heading dark>Retailer benefits</Heading>
              <Paragraphs dark>
                It’s easy to join the SmartCommerce Retailer network. We handle
                any configuration to send products to your shopping cart and
                once complete, you’ll start receiving orders (with no work
                required on your end). Please note that access to a product
                catalog, API, or Data Feed is preferred, but not mandatory.
                Contact us to get started today!
              </Paragraphs>
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 text-center mt-8">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="text-2xl font-semibold text-info-950">
                      <img
                        className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 mb-8"
                        src={feature.img}
                        alt="Reform"
                        width={200}
                        height={48}
                      />
                      {feature.name}
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-dark-950">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="flex items-center justify-center gap-x-6 mt-8">
                <Link href="/contact-us">
                  <Button primary>Get started today</Button>
                </Link>
              </div>
            </div>
          </_Container>
        </Wrapper>
      </Layout>
    </>
  );
}
