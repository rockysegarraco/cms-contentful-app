import Layout from "../components/Layout";
import Link from "next/link";
import Wrapper from "../components/Wrapper";
import _Container from "../components/_Container";
import Heading from "../components/Heading";
import Paragraphs from "../components/Paragraphs";
import Button from "../components/Button";
import _Products from "../components/_Products";
import _Stats from "../components/_Stats";
import Cta from "../components/Cta";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { fetchHomepage } from "../lib/api";
import ReactPlayer from "react-player";

import Image from "next/image";
import heroPic from ".//../public/img/HomepageHeroImage.png";
import heroPics from ".//../public/img/HomepageHeroImage.png";
import reportingPic from ".//../public/img/reporting.png";
import statPic from ".//../public/img/stat.jpg";

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

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
    description: "Is 95%+ hands-free (removes human error)",
    icon: CheckIcon,
  },
  {
    description: "Is always getting smarter: Machine-learning enabled",
    icon: CheckIcon,
  },
  {
    description: "Requires NO feeds, spreadsheets, or links from brands.",
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
          <_Container twocolumnmargin>
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
                <div className="pb-0 md:pb-8">
                  <Button primary>Let's do this!</Button>
                </div>
              </Link>
            </div>
            <div className="relative w-full order-first lg:order-last">
              <Image
                loader={imageLoader}
                src={heroPic}
                alt="Smart Commerce"
                className="relative"
              />
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
        <Wrapper primary>
          <_Container twocolumn>
            <div className="order-last lg:order-first">
              <Heading light>
                The Click2Cart<span className="font-normal">®</span> Difference
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
            <div className="relative w-full order-first lg:order-last text-white">
              'VIDEO GOES HERE'
            </div>
          </_Container>
        </Wrapper>
        <Wrapper light>
          <_Container>
            <div className="text-center">
              <div className="mx-auto max-w-4xl">
                <Heading dark>
                  Smart solutions that boost your bottom line
                </Heading>
                <Paragraphs dark>
                  Our suite of solutions fits any campaign objective and comes
                  with a convenient to use 24/7 platform and next-level client
                  support! Anywhere you can use a URL, you can drive commerce.
                </Paragraphs>
              </div>
            </div>
            <_Products />
          </_Container>
        </Wrapper>
        <Wrapper light>
          <_Container twocolumn>
            <div className="order-last lg:order-first">
              <Heading dark>The difference is data</Heading>
              <Paragraphs dark>
                The SmartCommerce Master Optimization Engine (MOE for short):
              </Paragraphs>
              <dl className="mt-0 max-w-xl text-gray-600 lg:max-w-none mb-0 py-6">
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
                Our up-to-the-minute technology always knows what’s in stock and
                IDs the best substitutes for OOS/3P items. It continuously
                updates 10s of millions of product-offer pairs across hundreds
                of retailers. And you don’t need to do a thing – our panel of
                Data Scientists manage all of it!
              </Paragraphs>
              <Link href="/reporting">
                <Button primary>Tell me more</Button>
              </Link>
            </div>
            <div className="relative w-full order-first lg:order-last">
              <Image
                loader={imageLoader}
                src={reportingPic}
                className="relative"
                alt="SmartCommerce Reporting"
              />
            </div>
          </_Container>
        </Wrapper>
        <Wrapper slate>
          <_Container onecolumn>
            <div className="mx-auto max-w-5xl">
              <Heading two>
                Don’t just take our word for it. Here’s what clients are saying…
              </Heading>
            </div>
            <div className="mx-auto max-w-lg">
              <Paragraphs dark>
                “Click2Cart works with the way consumers actually behave, not
                the way they wish they did.”
                <br />
                <br />– CMO, Major CPG Mfr
              </Paragraphs>
            </div>

            <div className="flex items-center justify-center gap-x-6">
              <Link href="/contact-us">
                <Button primary>See for yourself</Button>
              </Link>
            </div>
          </_Container>
        </Wrapper>
        <Wrapper secondary>
          <Image
            className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
            loader={imageLoader}
            src={statPic}
            alt="SmartCommerce Reporting"
          />
          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            <div className="px-8 py-16 lg:col-start-2 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-7xl">
                <Heading light>The truth is in the numbers</Heading>
                <Paragraphs light>
                  It just works – across all categories and verticals, from
                  display ads to QR codes, at ALL major points of intent.
                </Paragraphs>
                <dl className="mt-8 lg:mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                  <div className="flex flex-col gap-y-0 lg:gap-y-3 border-l border-gray-900/10 pl-6">
                    <dt className="text-sm leading-6 text-white">
                      Dollar value of products carted in the last 12 months.
                    </dt>
                    <dd className="order-first text-5xl font-semibold tracking-tight text-info-950">
                      $3B<span className="text-white">+</span>
                    </dd>
                  </div>
                  <div className="flex flex-col gap-y-0 lg:gap-y-3 border-l border-gray-900/10 pl-6">
                    <dt className="text-sm leading-6 text-white">
                      Number of products carted in the last 12 months
                    </dt>
                    <dd className="order-first text-5xl font-semibold tracking-tight text-info-950">
                      93M<span className="text-white">+</span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </Wrapper>
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
