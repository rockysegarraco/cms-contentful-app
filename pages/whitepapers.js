import { useState } from "react";
import Intro from "../components/intro";
import WhiteCard from "../components/WhiteCard";
import Container from "../components/container";
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
          <title>{`Contact us For general inquiries, please use the form below. Locations US Offices: Atlanta, GA Email:&nbsp;info@smartcommerce.co Phone:&nbsp;1-800-571-3520 Europe: Barcelona, Spain Email: infoEU@smartcommerce.co`}</title>
        </Head>
        <Intro title="White Papers" />
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
