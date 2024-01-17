const posts = [
  {
    id: 1,
    title: "Katie Gallo & Polly Gleneck: Syndigo",
    href: "https://www.cpgscoop.com/katie-gallo-polly-gleneck-syndigo/",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "img/cpg/cpg-29.jpg",
    date: "Jan. 10, 2024",
  },
  {
    id: 2,
    title: "Hamid Saify, SVP of Digital Retail, Liquid Death",
    href: "https://www.cpgscoop.com/hamid-saify-svp-of-digital-retail-liquid-death/",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "img/cpg/cpg-28.jpg",
    date: "Jan. 4, 2024",
  },
  {
    id: 3,
    title: "John Merris, CEO, Solo Brands",
    href: "https://www.cpgscoop.com/john-merris-ceo-solo-brands/",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "img/cpg/cpg-27.jpg",
    date: "Dec. 27,2023",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
  },
  // More posts...
];

export default function _cpg() {
  return (
    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {posts.map((post) => (
        <a href={post.href}>
          <article
            key={post.id}
            className="flex flex-col items-start justify-between"
          >
            <div className="relative w-full">
              <img src={post.imageUrl} alt="" className="w-full" />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
              </div>
              <div className="group relative text-left">
                <h3 className="mt-3 text-xl font-semibold leading-8 text-info-950 group-hover:text-gray-600">
                  <span className="absolute inset-0" />
                  {post.title}
                </h3>
              </div>
            </div>
          </article>
        </a>
      ))}
    </div>
  );
}
