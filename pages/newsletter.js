import Wrapper from "../components/Wrapper";
import _Container from "../components/_Container";
import Intro from "../components/intro";
import Layout from "../components/Layout";
import { fetchNewsletter } from "../lib/api";
import Head from "next/head";
import NewsletterCard from "../components/NewsletterCard";
import { NUMBER_OF_NEWSLETTER_TO_SHOW } from "../lib/constants";
import { useState } from "react";
import Pagination from "../components/pagination";

export default function Index({ preview, allPosts, total }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postData, setPostData] = useState(allPosts);
  const [totalLength, setTotalLength] = useState(NUMBER_OF_NEWSLETTER_TO_SHOW);

  const handleNext = async (e) => {
    e.preventDefault();
    if (totalLength != total) {
      const { posts } = await fetchNews(
        NUMBER_OF_NEWSLETTER_TO_SHOW,
        totalLength
      );
      setTotalLength(totalLength + posts.length);
      setCurrentPage(currentPage + 1);
      setPostData(posts);
    }
  };

  const handlePrev = async (e) => {
    e.preventDefault();
    if (currentPage != 1) {
      const totalSkip = currentPage == 2 ? 0 : totalLength - postData.length;
      const { posts } = await fetchNewsletter(
        NUMBER_OF_NEWSLETTER_TO_SHOW,
        totalSkip
      );
      setTotalLength(totalLength - postData.length);
      setCurrentPage(currentPage - 1);
      setPostData(posts);
    }
  };

  const handleNumberclick = async (number) => {
    const { posts } = await fetchNewsletter(
      NUMBER_OF_NEWSLETTER_TO_SHOW,
      NUMBER_OF_NEWSLETTER_TO_SHOW * (number - 1)
    );
    const length =
      currentPage < number
        ? totalLength + posts.length
        : totalLength - postData.length;
    setTotalLength(length);
    setCurrentPage(number);
    setPostData(posts);
  };

  return (
    <>
      <Layout preview={preview}>
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
        <Intro title="Newsletter" />
        <Wrapper>
          <div className="mx-auto grid max-w-7xl px-8 py-8 lg:py-8">
            <div className="relative isolate overflow-hidden bg-primary-100 px-6 py-16 text-center shadow-sm sm:rounded-3xl sm:px-16">
              <img className="h-16 mx-auto" src="/img/logo-smartbites.svg" />
              <h2 className="py-4 text-2xl leading-[2rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[4.5rem] mb-0 font-bold text-info-950">
                Be a SmartCookie<span className="text-secondary-950">.</span>
              </h2>
              <p className="mx-auto mt-0 max-w-xl text-lg leading-8 text-dark-950">
                Sign up to be the first to know about new products, events, and
                our monthly SmartBites newsletter.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#footer"
                  className="rounded-full bg-primary-950 px-8 py-4 text-md font-medium text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Subscribe now
                </a>
              </div>
            </div>
            <style>{"body { background-color: #f5f5f7; }"}</style>
            {postData.length > 0 && <NewsletterCard posts={postData} />}
            <Pagination
              total={total}
              currentPage={currentPage}
              numberOfResult={NUMBER_OF_NEWSLETTER_TO_SHOW}
              handleNext={handleNext}
              handlePrev={handlePrev}
              numberClick={handleNumberclick}
            />
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const { posts, total } = await fetchNewsletter(
    NUMBER_OF_NEWSLETTER_TO_SHOW,
    0
  );
  return {
    props: { preview, allPosts: posts, total },
    revalidate: 60,
  };
}
