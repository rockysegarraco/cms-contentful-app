import _PageTitle from "../components/_PageTitle";
import _Hero from "../components/_Hero";
import Button from "../components/Button";
import _Primary from "../components/_Primary";
import Testimonials from "../components/careers/testimonials";
import TestimonialsTwo from "../components/careers/testimonialsTwo";
import TestimonialsThree from "../components/careers/testimonialsThree";
import GetToKnow from "../components/careers/getoknow";
import Stats from "../components/stats";
import StatsOpp from "../components/stats-opp";
import CareerHero from "../components/CareerHero";
import Cta from "../components/careers/cta";
import Clients from "../components/partners/clients";
import Remote from "../components/careers/remote";
import Benefits from "../components/careers/Benefits";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { fetchNewsletter } from "../lib/api";
import Head from "next/head";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "No cost to Retailers",
    description:
      "SmartCommerce is entirely brand-supported, meaning we do not charge retailers to be in our network, or to receive orders. ",
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
      "Click2Cart® has access to millions of consumer and sends them to Retailers",
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
        <_Hero
          title="Unlock the value of Click2Cart"
          ButtonTitle="Visit our retailer list"
          ButtonLink="/partners"
          ImageUrl="img/HeroRetailers.jpg"
        >
          CPG brands use SmartCommerce Click2Cart® technology  to let consumers
          drop products directly into store shopping carts  from brand websites,
          social, video, email, etc.
        </_Hero>
        <div className="relative isolate overflow-hidden bg-white px-8 py-16 lg:py-32">
          <div className="mx-auto max-w-3xl">
            <div className="lg:mx-0 text-center">
              <h2 className="text-4xl leading-[3rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[5rem]  mb-8 font-bold text-info-950">
                Retailer benefits
              </h2>
              <p className="text-dark-950">
                It’s easy to join the SmartCommerce Retailer network. We handle
                any configuration to send products to your shopping cart and
                once complete, you’ll start receiving orders (with no work
                required on your end). Please note that access to a product
                catalog, API, or Data Feed is preferred, but not mandatory.
                Contact us to get started today!
              </p>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-xl lg:max-w-7xl text-center">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 text-center">
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
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/request-demo"
              className="rounded-full bg-primary-950 px-8 py-4 text-md font-medium text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
}
