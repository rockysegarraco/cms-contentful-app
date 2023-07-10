import Container from "../components/container";
import Layout from "../components/layout";
import { fetchNewsletter } from "../lib/api";
import Head from "next/head";
import NewsletterCard from "../components/NewsletterCard";
import { NUMBER_OF_NEWSLETTER_TO_SHOW } from "../lib/constants";
import { useState } from "react";
import Pagination from "../components/pagination";

export default function Index({ preview, allPosts, total }) {

  const [currentPage, setCurrentPage] = useState(1)
  const [postData, setPostData] = useState(allPosts)
  const [totalLength, setTotalLength] = useState(NUMBER_OF_NEWSLETTER_TO_SHOW)

  const handleNext = async(e) => {
    e.preventDefault();
    if (totalLength != total) {
      const {posts} = await fetchNews(NUMBER_OF_NEWSLETTER_TO_SHOW, totalLength);
      setTotalLength(totalLength + posts.length);
      setCurrentPage(currentPage + 1);
      setPostData(posts)
    }
  }

  const handlePrev = async(e) => {
    e.preventDefault();
    if (currentPage != 1) {
      const totalSkip = currentPage == 2 ? 0 : totalLength - postData.length; 
      const {posts} = await fetchNews(NUMBER_OF_NEWSLETTER_TO_SHOW, totalSkip);
      setTotalLength(totalLength - postData.length);
      setCurrentPage(currentPage - 1);
      setPostData(posts)
    }
  }

  const handleNumberclick = async(number) => {
    const { posts } = await fetchNews(NUMBER_OF_NEWS_TO_SHOW, NUMBER_OF_NEWS_TO_SHOW * (number - 1));
    const length = currentPage < number ? (totalLength + posts.length) : (totalLength - postData.length);
    setTotalLength(length);
    setCurrentPage(number);
    setPostData(posts);
  }

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`SmartCommerce - Accelerate E-commerce from all existing touchpoints`}</title>
        </Head>
        <h2 className="font-normal leading-tight mb-20 p-5 bg-white border-t shadow-sm">
          <div className="mx-auto lg:max-w-7xl sm:max-w-7xl sm:px-6 lg:px-8 px-10 sm:px-8 text-sm">
            <h1 className="text-3xl md:text-3xl font-bold md:pr-8 text-dark-950">
              Newsletter<span className="text-secondary-950">.</span>
            </h1>
          </div>
        </h2>
        <Container>
          <div className="mx-auto">
            <div className="relative isolate overflow-hidden bg-secondary-100 px-6 py-24 text-center shadow-sm sm:rounded-3xl sm:px-16">
              <img className="h-24 mx-auto" src="/logo-smartbites.svg" />

              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-dark-950">
                Here you will find past issues to our SmartBites newsletter as
                well as other helpful resources.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://smartcommerce.us20.list-manage.com/subscribe?u=5d71f8753fa72eab4b72788c2&id=8a974f182a%20"
                  className="rounded-full bg-primary-950 px-8 py-4 text-md font-medium text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Subscribe to our Newsletter
                </a>
              </div>
            </div>
          </div>
          <style>{"body { background-color: #f5f5f7; }"}</style>
          {postData.length > 0 && <NewsletterCard posts={postData} />}
          <Pagination total={total}
            currentPage={currentPage}
            numberOfResult={NUMBER_OF_NEWSLETTER_TO_SHOW}
            handleNext={handleNext} handlePrev={handlePrev}
            numberClick={handleNumberclick} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const {posts, total} = await fetchNewsletter(NUMBER_OF_NEWSLETTER_TO_SHOW, 0);
  return {
    props: { preview, allPosts: posts, total },
    revalidate: 60,
  };
}
