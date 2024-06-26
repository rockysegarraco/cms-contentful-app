import DateComponent from "./date";

export default function WhiteCard({ posts }) {
  return (
    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 sm:grid-cols-2 mb-16">
      {posts.map((post) => (
        <article
          key={post.fields.title}
          className="flex flex-col items-start justify-between bg-white rounded-2xl shadow-sm"
        >
          <a href={`/whitepapers/${post.fields.slug}`}>
            <div className="max-w-full rounded-2xl overflow-hidden">
              <img
                className="w-full"
                src={post.fields.coverImage?.fields?.file?.url}
                alt={post.fields.title}
              />

              <div className="p-6">
                <div className="text-sm uppercase text-secondary-950 pb-3">
                  {post.fields.topic}
                </div>
                <div className="font-semibold text-xl mb-2 text-dark-950">
                  {post.fields.title}
                </div>
                <div className="text-dark-950">{post.fields.excerpt}</div>

                <div className="pt-3 text-dark-950 text-sm uppercase">
                  <DateComponent dateString={post.fields.date} />
                </div>
              </div>
            </div>
          </a>
        </article>
      ))}
    </div>
  );
}
