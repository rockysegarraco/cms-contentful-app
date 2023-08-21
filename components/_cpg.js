const posts = [
  {
    id: 1,
    title:
      "Tony Fung, Director of Shopper Marketing & eCommerce, Bob Evans Farms",
    href: "https://www.cpgscoop.com/tony-fung-director-of-shopper-marketing-ecommerce-bob-evans-farms/",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "img/cpg-tonyfung.png",
    date: "May 30, 2023",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "img/cpg-tonyfung.png",
    },
  },
  {
    id: 2,
    title: "Sam Nehme, Performance Lead at Mediacom",
    href: "https://www.cpgscoop.com/sam-nehme-performance-lead-at-mediacom/",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "img/cpg-samnehme.png",
    date: "Mar 23, 2020",
  },
  {
    id: 3,
    title: "Lee Dunbar - SVP, Head of Retail Media, Starcom",
    href: "https://www.cpgscoop.com/lee-dunbar-svp-head-of-retail-media-starcom/",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "img/cpg-leedunbar.png",
    date: "May 1, 2023",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "cpg-leedunbar.png",
    },
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
              <img
                src={post.imageUrl}
                alt=""
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
              </div>
              <div className="group relative text-left">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-info-950 group-hover:text-gray-600">
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
