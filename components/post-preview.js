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
}) {
  return (
    <>
      <article className="flex flex-col items-start justify-between bg-white rounded-2xl">
        <div className="max-w-full rounded-2xl overflow-hidden shadow-sm">
          <img className="w-full" src={coverImage.url} alt={title} />
          <div className="p-6">
            <div className="">
              <div className="font-medium text-xl mb-2">{title}</div>
            </div>
            <div className="pt-3 text-slate-500 text-sm">
              <DateComponent dateString={date} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
