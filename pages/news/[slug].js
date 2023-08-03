import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/Postbody";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { fetchAllNews, fetchNewsWithSlug } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Newsletter from "../../components/newsletter";
import Button from "../../components/elements/Button";
import {
  ChevronRightIcon,
  HomeIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/20/solid";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <div>
        <div className="font-normal mb-15 py-5 border-t shadow-sm bg-[#f3f8fb]">
          <div className="mx-auto sm:max-w-7xl px-6">
            <nav className="flex" aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-0">
                <li>
                  <div>
                    <a
                      href="/news"
                      className="text-gray-500 hover:text-gray-400"
                    >
                      <ArrowLongLeftIcon
                        className="h-5 w-5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Home</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <a
                      href="/blog"
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-400"
                    >
                      News Home
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-16">
              <Head>
                <title>{`${post.title}`}</title>
                <meta
                  property="og:image"
                  content={post.coverImage?.fields?.file?.url}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage.fields.file}
                date={post.date}
              />
              <PostBody content={post.content} />
              <div className="mx-auto text-center p-8">
                <Button link={post.externalLink} title="Read More" />
              </div>
            </article>
          </>
        )}
        <Newsletter />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await fetchNewsWithSlug(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.fields ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await fetchAllNews();
  return {
    paths: allPosts?.map((post) => `/news/${post?.fields?.slug}`) ?? [],
    fallback: true,
  };
}
