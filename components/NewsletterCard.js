export default function NewsletterCard({ posts }) {
  return (
    <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 sm:grid-cols-2 mb-16">
      {posts.map((post) => (
        <article
          key={post.fields.title}
          className="flex flex-col items-start justify-between bg-white rounded-2xl shadow-sm"
        >
          <a href={post.fields.url} target="_blank">
            <div className="max-w-full rounded-2xl overflow-hidden">
              <div className="p-6">
                <div className="text-sm uppercase text-info-950 font-semibold pb-1">
                  {post.fields.title}
                </div>
                <div className="text-dark-950">
                  {" "}
                  <p>{post.fields.excerpt}</p>
                  <div className="mt-4 text-xs text-primary-950 underline underline-offset-8">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </a>
        </article>
      ))}
    </div>
  );
}
