import _PageTitle from "../components/_PageTitle";
import _Hero from "../components/_Hero";
import Container from "../components/container";
import AboutHero from "../components/AboutHero";
import Dogs from "../components/dogs";
import Pics from "../components/pics";
import World from "../components/world";
import OurStory from "../components/OurStory";
import Short from "../components/short";
import Values from "../components/Values";
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
          <title>{`SmartCommerce Team Who We Are Your international SmartCommerce team has decades of experience in CPG eCommerce (it’s our passion), and would love the opportunity to show you what our next-gen eCommerce tools could be doing for your brand! Your SmartCommerce Team Angie Atkins Director, Implementations...`}</title>
        </Head>
        <_PageTitle title="About Us" />
        <_Hero
          title="Better together"
          ButtonTitle="Come work with us"
          ButtonLink="/"
          ImageUrl="img/SmartLinkHeroImage.jpg"
        >
          We’re a community of problem solvers passionate about helping clients
          take their sales to the next level. We develop tools that reinvent the
          way CPG products get into the hands of consumers across the globe.
          <div className="mx-auto max-w-7xl mt-8">
            <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-2 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                src="best-ceo-for-women-2022-small 1.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                src="best-company-for-women-2022-small 1.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                src="Best_Workplaces_Badge 1.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
            </div>
          </div>
        </_Hero>
        <OurStory />
        <World />
        <Pics />
        <Values />
        <Dogs />
      </Layout>
    </>
  );
}
