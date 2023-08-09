import Layout from "../components/layout";
import Link from "next/link";
import Wrapper from "../components/Wrapper";
import _Container from "../components/_Container";
import Heading from "../components/Heading";
import Paragraphs from "../components/Paragraphs";
import Button from "../components/Button";
import _Products from "../components/_Products";
import _Stats from "../components/_Stats";
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

const data = [
  {
    description: " Is 95%+ hands-free (removes human error)",
    icon: CheckIcon,
  },
  {
    description: "Is always getting smarter: Machine-learning enabled",
    icon: CheckIcon,
  },
  {
    description: "Requires NO feeds, spreadsheets or links from brands!",
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
            content="A FRICTIONLESS ONE-CLICK PATH TO PURCHASE THAT COLLECTS INSIGHTS ALONG THE WAY! ACCELERATE ECOMMERCE Click2Cart® from SmartCommerce helps brands dramatically accelerate ecommerce from all of their existing touchpoints, by replacing typical friction-filled paths to purchase with a single click that sends products all the way into..."
          />
        </Head>
        <Wrapper slate>
          <_Container twocolumn>
            <div className="order-last lg:order-first">
              <Heading dark>
                Make everything shoppable
                <span className="text-secondary-950">.</span>
              </Heading>
              <Paragraphs dark>
                SmartCommerce is a simple tool that transforms all of your
                marketing touchpoints into e-commerce launch points.
              </Paragraphs>
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
              <Link href="/request-demo">
                <Button primary>Let's do this!</Button>
              </Link>
            </div>
            <div className="relative w-full order-first lg:order-last">
              <img src="img/HomepageHeroImage.png" className="relative" />
            </div>
          </_Container>
        </Wrapper>
        <Wrapper secondary>
          <_Container onecolumn>
            <div className="order-last lg:order-first">
              <Heading light>
                <div className="max-w-6xl">
                  Trusted by leading consumer brands across the globe
                </div>
              </Heading>
              <Paragraphs light>
                <div className="mx-auto max-w-none lg:max-w-xl">
                  Major players leverage SmartCommerce to reach consumers across
                  categories – grocery, wellness, beauty, pet, electronics and
                  more.
                </div>
              </Paragraphs>
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
          </_Container>
        </Wrapper>
        <Wrapper primary>
          <_Container twocolumn>
            <div className="order-last lg:order-first">
              <Heading light>
                Click2Cart<span className="font-normal">®</span> Difference
              </Heading>
              <Paragraphs light>
                Why Click2Cart? We like to think of it as behind-the-scenes
                magic that makes the carting process as simple and seamless as
                possible. The friction-free, one-click path to purchase means
                consumers aren’t distracted by competitor ads or cross-selling,
                and there is no waiting (i.e. forgetting) to check out.
                <br /> <br />
                And even when shoppers don’t complete a purchase, you still win
                because carting triggers retargeting (building brand awareness)
                and improves retailer-side SEO/SEM results.
              </Paragraphs>
            </div>
            <div className="relative w-full order-first lg:order-last">
              <ReactPlayer
                width="100%"
                controls
                url="https://www.youtube.com/watch?v=d9MyW72ELq0&t=73s"
              />
            </div>
          </_Container>
        </Wrapper>
        <_Products />
        <Wrapper slate>
          <_Container twocolumn>
            <div className="order-last lg:order-first">
              <Heading dark>The difference is data</Heading>
              <Paragraphs dark>
                The SmartCommerce Master Optimization Engine (MOE for short):
              </Paragraphs>
              <dl className="mt-8 max-w-xl text-base leading-7 text-gray-600 lg:max-w-none mb-8">
                {data.map((data) => (
                  <div key={data.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <data.icon
                        className="absolute left-1 top-1 h-5 w-5 text-secondary-950"
                        aria-hidden="true"
                      />
                    </dt>{" "}
                    <dd className="inline">{data.description}</dd>
                  </div>
                ))}
              </dl>
              <Paragraphs dark>
                Creating and maintaining the connection between products and
                retailers requires sophisticated data analytics. Our
                up-to-the-minute technology always knows what’s in stock and can
                ID the best substitutes for OOS/3P items. It continuously
                updates 10s of millions of product-offer pairs across hundreds
                of retailers. And don’t worry, you don’t need to do a thing: We
                have a panel of Data Scientists to constantly manage all of it!
              </Paragraphs>
              <Link href="/reporting">
                <Button primary>Tell me more</Button>
              </Link>
            </div>
            <div className="relative w-full order-first lg:order-last">
              <img src="img/reporting.png" className="relative" />
            </div>
          </_Container>
        </Wrapper>
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
