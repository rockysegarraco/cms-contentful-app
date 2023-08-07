import _HeroFull from "../components/_HeroFull";
import _Secondary from "../components/_Secondary";
import _Primary from "../components/_Primary";
import _Content from "../components/_Content";
import Container from "../components/container";
import Layout from "../components/layout";
import HeroFull from "../components/Hero";
import Brands from "../components/brands";
import _Products from "../components/_Products";
import _Stats from "../components/_Stats";
import Diff from "../components/diff";
import Diffy from "../components/diffy";
import Cta from "../components/cta";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { fetchHomepage } from "../lib/api";
import ReactPlayer from "react-player";

import { CheckIcon } from "@heroicons/react/20/solid";
const features = [
  {
    description: "Maintain up-to-the-minute stock status.",
    icon: CheckIcon,
  },
  {
    description:
      "Bypass dead ends (out-of-stocks, seasonal item changes, 3rd party sellers).",
    icon: CheckIcon,
  },
  {
    description: "Keep your e-commerce sales MOVING!",
    icon: CheckIcon,
  },
];

export default function Index({ pageData }) {
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
            content="SmartCommerce is a simple tool that transforms all of your marketing touchpoints into e-commerce launch points."
          />
        </Head>
        <_HeroFull
          title="Make everything shoppable"
          ButtonTitle="Let’s do this!"
          ButtonLink="/request-demo"
          ImageUrl="img/HomepageHeroImage.png"
        >
          SmartCommerce is a simple tool that transforms all of your marketing
          touchpoints into e-commerce launch points.
          <dl className="mt-8 max-w-xl text-base leading-7 text-gray-600 lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon
                    className="absolute left-1 top-1 h-5 w-5 text-secondary-950"
                    aria-hidden="true"
                  />
                </dt>{" "}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
          <p className="font-bold text-info-950 mt-8">
            Welcome to the future of commerce.{" "}
          </p>
        </_HeroFull>
        <_Secondary>
          <div className="mx-auto max-w-7xl lg:max-w-6xl text-center">
            <h2 className="text-4xl leading-[3rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[5rem]  mb-8 font-bold text-white">
              Trusted by leading consumer brands across the globe
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white">
              Major players leverage SmartCommerce to reach consumers across
              categories – grocery, wellness, beauty, pet, electronics and more
            </p>
            <div className="mx-auto max-w-7xl lg:max-w-7xl mt-16 grid grid-cols-4 items-center gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-0 lg:mx-0 lg:grid-cols-6">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="brands/_abbott.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="brands/_boston.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="img/brands/_png.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="brands/_kimberly.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="img/brands/_nestle.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="img/brands/_barilla.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </_Secondary>
        <_Primary>
          <div className="mx-auto grid max-w-7xl grid-cols-1 px-8 gap-16 sm:gap-16 lg:gap-16 lg:grid-cols-12">
            <div className="col-span-6 text-white">
              <h1 className="text-4xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-6xl lg:leading-[5rem]  mb-8 font-bold text-white">
                Click2Cart® Difference
              </h1>
              Why Click2Cart? We like to think of it as behind-the-scenes magic
              that makes the carting process as simple and seamless as possible.
              The friction-free, one-click path to purchase means consumers
              aren’t distracted by competitor ads or cross-selling, and there is
              no waiting (i.e. forgetting) to check out.
              <br />
              <br /> And even when shoppers don’t complete a purchase, you still
              win because carting triggers retargeting (building brand
              awareness) and improves retailer-side SEO/SEM results.
            </div>
            <div className="col-span-6">
              <ReactPlayer
                width="100%"
                controls
                url="https://www.youtube.com/watch?v=d9MyW72ELq0&t=73s"
              />
            </div>
          </div>
        </_Primary>
        <_Products />
        <_Content
          title="The difference is data"
          ButtonTitle="Tell Me More"
          ButtonLink="/reporting"
          ImageUrl="img/reporting.jpg"
        ></_Content>
        <_Stats
          title="The truth is in the numbers"
          ImageUrl="img/stat.jpg"
          alt="Smart Commerce"
        >
          <p className="mt-6 text-lg leading-8 text-dark-950">
            It just works – across all categories and verticals, from display
            ads to QR codes, at ALL major points of intent.
          </p>
          <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
            <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
              <dt className="text-sm leading-6 text-dark-950">
                Dollar value of products carted in the last 12 months.
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-info-950">
                $3B<span className="text-secondary-950">+</span>
              </dd>
            </div>
            <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
              <dt className="text-sm leading-6 text-dark-950">
                Number of products carted in the last 12 months
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-info-950">
                93M<span className="text-secondary-950">+</span>
              </dd>
            </div>
          </dl>
        </_Stats>
        <Cta />
        <style>{"body { background-color: #f5f5f7; }"}</style>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const pageData = await fetchHomepage();
  return {
    props: { preview, pageData },
    revalidate: 60,
  };
}
