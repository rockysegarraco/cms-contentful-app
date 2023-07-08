import PostPreview from "../components/post-preview";

export default function MoreStories({ posts }) {
  return (
    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 sm:grid-cols-2 mb-16">
      {posts.map((post) => (
        <PostPreview
          key={post.fields.slug}
          title={post.fields.title}
          coverImage={post.fields.coverImage?.fields?.file}
          date={post.fields.date}
          author={post.fields.author}
          slug={post.fields.slug}
          excerpt={post.fields.excerpt}
          topic={post.fields.topic}
        />
      ))}
    </div>
  );
}
