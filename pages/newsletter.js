import Container from "../components/container";
import Layout from "../components/layout";
import { fetchNewsletter } from "../lib/api";
import Head from "next/head";
import Newsletter from "../components/newsletter";
import NewsletterCard from "../components/NewsletterCard";

export default function Index({ preview, allPosts }) {

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
          <Newsletter />
          <style>{"body { background-color: #f5f5f7; }"}</style>
          {allPosts.length > 0 && <NewsletterCard posts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await fetchNewsletter());
  return {
    props: { preview, allPosts },
    revalidate: 60
  };
}
