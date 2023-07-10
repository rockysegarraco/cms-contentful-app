import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { fetchBlogs, fetchHeroBlogs } from "../lib/api";
import Head from "next/head";
import { NUMBER_OF_BLOG_TO_SHOW } from "../lib/constants";
import Newsletter from "../components/newsletter";
import HeroHero from "../components/HeroHero";
import { useState } from "react";
import Pagination from "../components/pagination";

export default function Index({ preview, allPosts, total, heroPost }) {
  const morePosts = allPosts;

  const [currentPage, setCurrentPage] = useState(1)
  const [postData, setPostData] = useState(morePosts)
  const [totalLength, setTotalLength] = useState(NUMBER_OF_BLOG_TO_SHOW);

  const handleNext = async(e) => {
    e.preventDefault();
    if (totalLength != total) {
      const {posts} = await fetchBlogs(NUMBER_OF_BLOG_TO_SHOW, totalLength);
      setTotalLength(totalLength + posts.length);
      setCurrentPage(currentPage + 1);
      setPostData(posts)
    }
  }

  const handlePrev = async(e) => {
    e.preventDefault();
    if (currentPage != 1) {
      const totalSkip = currentPage == 2 ? 0 : totalLength - postData.length; 
      const {posts} = await fetchBlogs(NUMBER_OF_BLOG_TO_SHOW, totalSkip);
      setTotalLength(totalLength - postData.length);
      setCurrentPage(currentPage - 1);
      setPostData(posts)
    }
  }

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`SmartCommerce - Accelerate E-commerce from all existing touchpoints`}</title>
        </Head>
        <Intro />
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
          <Pagination total={total} currentPage={totalLength} handleNext={handleNext} handlePrev={handlePrev} />
          <Newsletter />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const {posts, total} = (await fetchBlogs(NUMBER_OF_BLOG_TO_SHOW, 0)) ?? [];
  const heroPost = (await fetchHeroBlogs());
  return {
    props: { preview, allPosts: posts, total, heroPost },
    revalidate: 60,
  };
}
