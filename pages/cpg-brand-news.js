import { useState } from "react";
import Intro from "../components/intro";
import _General from "../components/_General";
import NewsCard from "../components/NewsCard";
import Container from "../components/container";
import Layout from "../components/Layout";
import Pagination from "../components/pagination";
import { fetchNews } from "../lib/api";
import Head from "next/head";
import { NUMBER_OF_NEWS_TO_SHOW } from "../lib/constants";

export default function News({ preview, posts, total }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postData, setPostData] = useState(posts);
  const [totalLength, setTotalLength] = useState(NUMBER_OF_NEWS_TO_SHOW);

  const handleNext = async (e) => {
    e.preventDefault();
    if (totalLength != total) {
      const { posts } = await fetchNews(NUMBER_OF_NEWS_TO_SHOW, totalLength);
      setTotalLength(totalLength + posts.length);
      setCurrentPage(currentPage + 1);
      setPostData(posts);
    }
  };

  const handlePrev = async (e) => {
    e.preventDefault();
    if (currentPage != 1) {
      const totalSkip = currentPage == 2 ? 0 : totalLength - postData.length;
      const { posts } = await fetchNews(NUMBER_OF_NEWS_TO_SHOW, totalSkip);
      setTotalLength(totalLength - postData.length);
      setCurrentPage(currentPage - 1);
      setPostData(posts);
    }
  };

  const handleNumberclick = async (number) => {
    const { posts } = await fetchNews(
      NUMBER_OF_NEWS_TO_SHOW,
      NUMBER_OF_NEWS_TO_SHOW * (number - 1)
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
        <Intro title="News" />
        <div className="mx-auto max-w-7xl px-8 pt-16 pb-0 sm:px-8 sm:pt-16">
          <div className="text-center">
            <h2 className="text-4xl leading-[3rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[4.5rem] mb-0 font-bold text-info-950">
              What’s happening?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              SmartCommerce in the news
            </p>
          </div>
        </div>
        <Container>
          <style>{"body { background-color: #f5f5f7; }"}</style>
          {postData.length > 0 && <NewsCard posts={postData} />}
          <Pagination
            total={total}
            currentPage={currentPage}
            numberOfResult={NUMBER_OF_NEWS_TO_SHOW}
            handleNext={handleNext}
            handlePrev={handlePrev}
            numberClick={handleNumberclick}
          />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const { posts, total } = await fetchNews(NUMBER_OF_NEWS_TO_SHOW, 0);
  return {
    props: { preview, posts, total },
    revalidate: 60,
  };
}
