import { useState } from "react";
import NewsCard from "../components/NewsCard";
import Container from "../components/container";
import Layout from "../components/layout";
import Pagination from "../components/pagination";
import { fetchNews } from "../lib/api";
import Head from "next/head";
import { NUMBER_OF_NEWS_TO_SHOW } from "../lib/constants";

export default function News({ preview, posts, total }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [postData, setPostData] = useState(posts)
  const [totalLength, setTotalLength] = useState(NUMBER_OF_NEWS_TO_SHOW)

  const handleNext = async(e) => {
    e.preventDefault();
    if (totalLength != total) {
      const {posts} = await fetchNews(NUMBER_OF_NEWS_TO_SHOW, totalLength);
      setTotalLength(totalLength + posts.length);
      setCurrentPage(currentPage + 1);
      setPostData(posts)
    }
  }

  const handlePrev = async(e) => {
    e.preventDefault();
    if (currentPage != 1) {
      const totalSkip = currentPage == 2 ? 0 : totalLength - postData.length; 
      const {posts} = await fetchNews(NUMBER_OF_NEWS_TO_SHOW, totalSkip);
      setTotalLength(totalLength - postData.length);
      setCurrentPage(currentPage - 1);
      setPostData(posts)
    }
  }

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Contact us For general inquiries, please use the form below. Locations US Offices: Atlanta, GA Email:&nbsp;info@smartcommerce.co Phone:&nbsp;1-800-571-3520 Europe: Barcelona, Spain Email: infoEU@smartcommerce.co`}</title>
        </Head>
        <h2 className="font-normal leading-tight mb-20 p-5 bg-white border-t shadow-sm">
          <div className="mx-auto lg:max-w-7xl sm:max-w-7xl sm:px-6 lg:px-8 px-10 text-sm">
            <h1 className="text-3xl md:text-3xl font-bold md:pr-8 text-dark-950">
              News & Events<span className="text-secondary-950">.</span>
            </h1>
          </div>
        </h2>
        <Container>
          <style>{"body { background-color: #f5f5f7; }"}</style>
          {postData.length > 0 && <NewsCard posts={postData} />}
          <Pagination total={total} currentPage={totalLength} handleNext={handleNext} handlePrev={handlePrev} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const {posts, total} = await fetchNews(NUMBER_OF_NEWS_TO_SHOW, 0);
  return {
    props: { preview, posts, total },
    revalidate: 60,
  };
}
