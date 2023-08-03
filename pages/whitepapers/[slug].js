import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/Postbody";
import LinkCrumb from "../../components/LinkCrumb";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { fetchAllwhitePapers, fetchwhitePapersWithSlug } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Newsletter from "../../components/newsletter";

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
            <LinkCrumb title="Back" url="/whitepapers" />
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
            </article>
          </>
        )}
        <Newsletter />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await fetchwhitePapersWithSlug(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.fields ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await fetchAllwhitePapers();
  return {
    paths: allPosts?.map((post) => `/whitepapers/${post?.fields?.slug}`) ?? [],
    fallback: true,
  };
}
