import _PageTitle from "../components/_PageTitle";
import _Hero from "../components/_Hero";
import Section from "../components/Section";
import _Primary from "../components/_Primary";
import _General from "../components/_General";
import _Stats from "../components/_Stats";
import _Center from "../components/_Center";
import Testimonials from "../components/careers/testimonials";
import TestimonialsTwo from "../components/careers/testimonialsTwo";
import TestimonialsThree from "../components/careers/testimonialsThree";
import GetToKnow from "../components/careers/getoknow";
import Stats from "../components/stats";
import StatsOpp from "../components/stats-opp";
import CareerHero from "../components/CareerHero";
import Cta from "../components/cta";
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
    name: "Create",
    description:
      "All of your performance metrics are easily accessible in the SmartSuite Dashboard. If you need help, we’re always here (at no additional charge).",
    href: "#",
    img: "img/cta-1.svg",
  },
  {
    name: "Analyze",
    description:
      "Manage the live performance of your links and make changes to retailers, products,redirect pages, etc. This is where you learn who your audience is and what they want.",
    href: "#",
    img: "img/cta-2.svg",
  },
  {
    name: "Act",
    description:
      "Use the insights to inform your next campaign or your website. By creating a better experience for your audience, they’ll keep coming back for more. ",
    href: "#",
    img: "img/cta-3.svg",
  },
];

export default function Reporting() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`SmartCommerce Team Who We Are Your international SmartCommerce team has decades of experience in CPG eCommerce (it’s our passion), and would love the opportunity to show you what our next-gen eCommerce tools could be doing for your brand! Your SmartCommerce Team Angie Atkins Director, Implementations...`}</title>
        </Head>
        <_PageTitle title="Reporting" />
        <Section
          title="Knowledge is power"
          ButtonTitle="Request Demo"
          ButtonLink="/request-demo"
          ImageUrl="img/HeroReporting.jpg"
        >
          <p className="font-bold text-secondary-950 mb-8">
            How to use comprehensive reporting in real time
          </p>
          Smartsuite empowers you with real time data and insights to sync your
          media spend with your inventory, reduce advertising waste and measure
          campaign outcomes. Every subscription comes with unlimited logins and
          unlimited support!
        </Section>
        <_Primary>
          <div className="mx-auto max-w-7xl lg:mx-0 text-center">
            <h2 className="text-4xl leading-[3rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[5rem]  mb-8 font-bold text-white">
              Know your audience – and give them what they want
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 text-center">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-2xl font-normal text-white">
                    <img
                      className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 mb-8"
                      src={feature.img}
                      alt="Reform"
                      width={200}
                      height={48}
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-white">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </_Primary>
        <_General className="bg-slate-50">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 sm:gap-16 lg:gap-16 lg:grid-cols-12">
            <div className="col-span-6 lg:col-span-7">
              <h1 className="text-3xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[5rem]  mb-8 font-bold text-info-950">
                You’re in control
              </h1>
              <p className="pb-0">
                The SmartSuite Dashboard gives clients 24/7 access to metrics,
                so you can meet your goals faster. Real-time data and insights
                let you manage the live performance of your campaigns and make
                changes to retailers, products, redirect pages, and more
                anytime. 
                <br />
                <br />
                Of course, we’re always here to help – clients receive unlimited
                White Glove Support. Our team of experts will work with you
                every step of the way to ensure your campaign is successful.
                (And, no, we don’t charge extra for that.)
              </p>
            </div>
            <div className="col-span-6 lg:col-span-5 ">
              <img src="img/SmartSiteCaro.png" />
            </div>
          </div>
        </_General>
        <_Center
          className="bg-white"
          title="A deeper dive into you audience"
          ButtonLink="/partners"
          ButtonTitle="Learn More"
          ImageUrl="img/logo-transunion.svg"
        >
          Our partnership with TruAudience™ by TransUnion powers data-driven
          marketing and measurement through privacy-first data enrichment,
          audience targeting and advanced analytics. Create and segment high
          quality customer and prospect audiences, as well as upload to the DSPs
          of your choice.
        </_Center>
        <_Stats
          title="Don’t just take our word for it. Here’s what clients are saying…"
          ImageUrl="img/cta-report.jpg"
          alt="Smart Commerce"
        >
          “Using Click2Cart is a no-brainer. And your team has made it so easy!”{" "}
          <br />
          <br />– Brand Manager, Canada Dry
        </_Stats>
        <Cta />
      </Layout>
    </>
  );
}
