import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/Layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import { CMS_NAME } from "../../lib/constants";
import Newsletter from "../../components/newsletter";
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
                      href="/blog"
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
                      Blog Home
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
                <meta property="og:image" content={post.coverImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody content={post.content} />
              <iframe
                src={`${post.formId}`}
                height="800"
                width="600"
                frameborder="0"
              ></iframe>
              <script src="//tfaforms.com/js/iframe_resize_helper.js"></script>
            </article>
          </>
        )}
        <Newsletter />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  };
}
