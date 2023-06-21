import DateComponent from "../components/date";

export default function HeroHero({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  topic,
}) {
  return (
    <div className="mb-16">
      <div className="mx-auto">
        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 pt-80 sm:pt-48 lg:pt-80">
          <img
            src={coverImage.url}
            alt={title}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
          <div className="p-6">
            <div className="text-sm uppercase text-white pb-3">{topic}</div>
            <h1 className="lg:text-4xl font-semibold text-white lg:leading-[3rem] leading-[2rem] text-2xl">
              <a href={`/posts/${slug}`}>{title}</a>
            </h1>
            <div className="flex flex-wrap items-center gap-y-3 overflow-hidden text-sm leading-6 text-gray-300 py-3 uppercase">
              <DateComponent dateString={date} />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
