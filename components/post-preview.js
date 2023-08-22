import Link from "next/link";
import Avatar from "../components/avatar";
import DateComponent from "../components/date";
import CoverImage from "./cover-image";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  topic,
}) {
  return (
    <>
      <article className="flex flex-col items-start justify-between bg-white rounded-2xl shadow-sm">
        <a href={`/${slug}`}>
          <div className="max-w-full rounded-2xl overflow-hidden">
            <img className="w-full" src={coverImage.url} alt={title} />
            <div className="p-6">
              <div className="text-sm uppercase text-secondary-950 pb-3">
                {topic}
              </div>
              <div className="font-semibold text-xl mb-2 text-dark-950">
                {title}
              </div>
              <div className="pt-3 text-dark-950 text-sm uppercase">
                <DateComponent dateString={date} />
              </div>
            </div>
          </div>
        </a>
      </article>
    </>
  );
}
