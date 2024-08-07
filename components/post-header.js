import Avatar from "../components/avatar";
import DateComponent from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <div>
        <div className="mb-6 text-lg text-xs max-w-3xl mx-auto text-dark-950">
          <DateComponent dateString={date} />
        </div>
        <div className="mb-6 text-lg text-xs max-w-3xl mx-auto text-dark-950">
          <PostTitle>{title}</PostTitle>
        </div>
        <div className="hidden md:block md:mb-12">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <CoverImage title={title} url={coverImage.url} />
          </div>
          <div className="block md:hidden mb-6">
            {author && <Avatar name={author.name} picture={author.picture} />}
          </div>
        </div>
      </div>
    </>
  );
}
