import { useState } from "react";
import Intro from "../components/intro";
import WhiteCard from "../components/WhiteCard";
import Layout from "../components/layout";
import Pagination from "../components/pagination";
import { fetchwhitePapers } from "../lib/api";
import Head from "next/head";
import { NUMBER_OF_WHITEPAPERS_TO_SHOW } from "../lib/constants";

export default function WhitePapers({ preview, posts, total }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postData, setPostData] = useState(posts);
  const [totalLength, setTotalLength] = useState(NUMBER_OF_WHITEPAPERS_TO_SHOW);

  const handleNext = async (e) => {
    e.preventDefault();
    if (totalLength != total) {
      const { posts } = await fetchNews(
        NUMBER_OF_WHITEPAPERS_TO_SHOW,
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
      const { posts } = await fetchNews(
        NUMBER_OF_WHITEPAPERS_TO_SHOW,
        totalSkip
      );
      setTotalLength(totalLength - postData.length);
      setCurrentPage(currentPage - 1);
      setPostData(posts);
    }
  };

  const handleNumberclick = async (number) => {
    const { posts } = await fetchwhitePapers(
      NUMBER_OF_WHITEPAPERS_TO_SHOW,
      NUMBER_OF_WHITEPAPERS_TO_SHOW * (number - 1)
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
          <title>{`SmartCommerce - Here you will find past issues to our Whitepapers as well as other helpful resources.`}</title>
        </Head>
        <Intro title="White Papers" />
        <div className="mx-auto max-w-7xl px-8 pt-16 pb-0 sm:px-8 sm:pt-16">
          <div className="text-center">
            <h2 className="text-4xl leading-[3rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-5xl lg:leading-[4.5rem] mb-0 font-bold text-info-950">
              White Papers
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-gray-600">
              If you're looking for a demo, a quote or just have a question for
              us, we're here to help.
            </p>
          </div>
        </div>
        <Container>
          <style>{"body { background-color: #f5f5f7; }"}</style>
          {postData.length > 0 && <WhiteCard posts={postData} />}
          <Pagination
            total={total}
            currentPage={currentPage}
            numberOfResult={NUMBER_OF_WHITEPAPERS_TO_SHOW}
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
  const { posts, total } = await fetchwhitePapers(
    NUMBER_OF_WHITEPAPERS_TO_SHOW,
    0
  );
  return {
    props: { preview, posts, total },
    revalidate: 60,
  };
}
