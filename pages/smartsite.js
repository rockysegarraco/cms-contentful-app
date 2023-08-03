import _PageTitle from "../components/_PageTitle";
import _General from "../components/_General";
import _Secondary from "../components/_Secondary";
import _Hero from "../components/_Hero";
import Container from "../components/container";
import Layout from "../components/layout";
import SmartLinkHero from "../components/smartlink/SmartLinkHero";
import Brands from "../components/brands";
import _Stats from "../components/_Stats";
import Diff from "/components/smartlink/Diff";
import _Primary from "../components/_Primary";
import Testimonials from "../components/smartlink/testimonials";
import Cta from "../components/cta";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { fetchHomepage } from "../lib/api";

const features = [
  {
    name: "Support multiple retailers",
    description:
      "Replace typical friction-filled paths to purchase with a single click that puts products (even recipes) directly into retailer carts.",
    href: "#",
    img: "img/cta-shop.svg",
  },
  {
    name: "Let the consumer choose",
    description:
      "Our product engine avoids OOS conditions, 3P sellers, changing prices, etc, so your consumers enjoy a frictionless shopping experience.",
    href: "#",
    img: "img/cta-barcode.svg",
  },
  {
    name: "More Insights",
    description:
      "Whether or not a consumer checks out immediately, you still win. Carting triggers retailer retargeting and influences retailer recommendations/SEO.",
    href: "#",
    img: "img/cta-sight.svg",
  },
];

export default function SmartSite({ pageData }) {
  return (
    <>
      <Layout>
        <Head>
          <title>
            SmartCommerce - Accelerate E-commerce from all existing touchpoints
            - SmartCommerce
          </title>
        </Head>
        <_PageTitle title="SmartSite" />
        <_Hero
          title="Go From Driving Awareness To Driving ACTION"
          ButtonTitle="Request Demo"
          ButtonLink="/"
          ImageUrl="img/SmartSiteHeroImage.jpg"
        >
          <p className="font-bold text-secondary-950 mb-8">
            Why use SmartSite for your website?
          </p>
          Easy-to-implement solutions let consumers add products to their carts
          from the retailer of their choice at any touchpoint on your website,
          making every moment a shoppable one.
        </_Hero>
        <_Primary>
          <div className="mx-auto max-w-7xl lg:mx-0 text-center">
            <h2 className="text-4xl leading-[3rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[5rem]  mb-8 font-bold text-white">
              Multi-solutions for multi-channels
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
        <_General className="bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 sm:gap-16 lg:gap-16 lg:grid-cols-12">
            <div className="col-span-6 lg:col-span-6">
              <h1 className="text-3xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[5rem]  mb-8 font-bold text-info-950">
                Carousels & SmartButtons
              </h1>
              <p className="pb-0">
                This easy-to-implement Click2Cart code drives commerce from
                websites, brand.com pages, influencer pages, and more. Smartsite
                Carousels work by bringing the retailer cart onto your page, so
                ecommerce is only one click away.
                <br />
                <br />A carousel renders via brand rules based on retailer
                relevance and stock status. For category pages or when space is
                limited, SmartButtons let shoppers choose the retailer in two
                clicks (1 to open, 1 to select).
              </p>
            </div>
            <div className="col-span-6 lg:col-span-6">
              <img src="img/SmartSiteCaro.png" />
            </div>
          </div>
        </_General>
        <_General className="bg-slate-50">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 sm:gap-16 lg:gap-16 lg:grid-cols-12">
            <div className="col-span-6 lg:col-span-6">
              <img src="img/SmartSiteCaro.png" />
            </div>
            <div className="col-span-6 lg:col-span-6">
              <h1 className="text-3xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[5rem]  mb-8 font-bold text-info-950">
                SmartShop
              </h1>
              <p className="pb-0">
                SmartShop for websites are the PERFECT fit for recipes but can
                extend to any products that are bought together like skincare
                regimens, DIY kits and party packs. SmartShop allows the
                consumer to choose among products and select variants while
                dynamically showing relevant local retailers.
              </p>
            </div>
          </div>
        </_General>
        <_General className="bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 sm:gap-16 lg:gap-16 lg:grid-cols-12">
            <div className="col-span-6 lg:col-span-6">
              <h1 className="text-3xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[5rem]  mb-8 font-bold text-info-950">
                Product Locators
              </h1>
              <p className="pb-0">
                Optimize your site for omni-channel shopping and boost brand
                discovery. With unmatched coverage and no dead-ends, this is a
                no-brainer.
              </p>
            </div>
            <div className="col-span-6 lg:col-span-6">
              <img src="img/cta-storelocators.jpg" />
            </div>
          </div>
        </_General>
        <_General>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 sm:gap-16 lg:gap-16 lg:grid-cols-12">
            <div className="col-span-6 lg:col-span-7">
              <h1 className="text-3xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[5rem]  mb-8 font-bold text-info-950">
                Click2Cart® difference
              </h1>
              <p className="pb-0">
                Why SmartCommerce? We like to think of it as behind-the-scenes
                magic that makes the carting process as simple and seamless as
                possible. The friction-free, one-click path to purchase means
                consumers aren’t distracted by competitor ads or cross-selling,
                and there is no waiting (i.e. forgetting) to check out. And even
                when shoppers don’t complete a purchase, you still win because
                carting triggers retargeting (building brand awareness) and
                improves retailer-side SEO/SEM results.
              </p>
            </div>
            <div className="col-span-6 lg:col-span-5">
              <img src="img/SmartSiteCaro.png" />
            </div>
          </div>
        </_General>
        <_Secondary>
          <div className="mx-auto max-w-7xl lg:max-w-6xl text-center">
            <h2 className="text-4xl leading-[3rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[5rem]  mb-8 font-bold text-white">
              Reporting
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white">
              Our partnership with TruAudience™ by TransUnion powers data-driven
              marketing and measurement through privacy-first data enrichment,
              audience targeting and advanced analytics. Create and segment high
              quality customer and prospect audiences, as well as upload to the
              DSPs of your choice.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/reporting"
                className="rounded-full bg-primary-950 px-8 py-4 text-md font-medium text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Learn More
              </a>
            </div>
          </div>
        </_Secondary>
        <_Stats
          title="Don’t just take our word for it. Here’s what clients are saying…"
          ImageUrl="img/SmartSiteTestimonial.jpg"
          alt="Smart Commerce"
        >
          “Click2Cart works with the way consumers actually behave, not the way
          they wish they did.” <br />
          <br />– CMO, Major CPG Mfr
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
