import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/Layout";
import { fetchBlogs } from "../lib/api";
import Head from "next/head";
import { NUMBER_OF_BLOG_TO_SHOW } from "../lib/constants";
import Newsletter from "../components/newsletter";
import HeroHero from "../components/HeroHero";
import { useState } from "react";
import Pagination from "../components/pagination";

export default function Index({ preview, allPosts, total }) {
  const heroPost = allPosts[0].fields;
  const morePosts = allPosts.slice(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [postData, setPostData] = useState(morePosts);
  const [totalLength, setTotalLength] = useState(NUMBER_OF_BLOG_TO_SHOW - 1);

  const handleNext = async (e) => {
    e.preventDefault();
    if (totalLength != total) {
      const { posts } = await fetchBlogs(NUMBER_OF_BLOG_TO_SHOW, totalLength);
      setTotalLength(totalLength + posts.length);
      setCurrentPage(currentPage + 1);
      setPostData(posts);
    }
  };

  const handlePrev = async (e) => {
    e.preventDefault();
    if (currentPage != 1) {
      const totalSkip = currentPage == 2 ? 0 : totalLength - postData.length;
      const { posts } = await fetchBlogs(NUMBER_OF_BLOG_TO_SHOW, totalSkip);
      setTotalLength(totalLength - postData.length);
      setCurrentPage(currentPage - 1);
      setPostData(currentPage == 2 ? posts.slice(1) : posts);
    }
  };

  const handleNumberclick = async (number) => {
    const { posts } = await fetchBlogs(
      NUMBER_OF_BLOG_TO_SHOW,
      NUMBER_OF_BLOG_TO_SHOW * (number - 1)
    );
    const length =
      currentPage < number
        ? totalLength + posts.length
        : totalLength - postData.length;
    setTotalLength(length);
    setCurrentPage(number);
    setPostData(number === 1 ? posts.slice(1) : posts);
  };

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>
            Stay informed on trends and best practices in the CPG commerce and
            marketing space.
          </title>
          <meta
            name="description"
            content="Explore SmartCommerce's CPG Marketing Blog for the latest insights and strategies in e-commerce. Discover expert tips, industry trends, and innovative solutions to boost your brand's online presence and drive sales. Stay ahead with our comprehensive guides and reports."
          />
        </Head>
        <Intro title="Blog" />
        <Container>
          <style>{"body { background-color: #f5f5f7; }"}</style>
          {heroPost && (
            <HeroHero
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              topic={heroPost.topic}
            />
          )}
          {postData.length > 0 && <MoreStories posts={postData} />}
          <Pagination
            total={total}
            currentPage={currentPage}
            numberOfResult={NUMBER_OF_BLOG_TO_SHOW}
            handleNext={handleNext}
            handlePrev={handlePrev}
            numberClick={handleNumberclick}
          />
          <Newsletter />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const { posts, total } = (await fetchBlogs(NUMBER_OF_BLOG_TO_SHOW, 0)) ?? [];
  return {
    props: { preview, allPosts: posts, total },
    revalidate: 60,
  };
}
