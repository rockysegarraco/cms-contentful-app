import { CMS_NAME, CMS_URL } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-4xl font-bold md:pr-8">
        Blog<span className="text-orange-400">.</span>
      </h1>
    </section>
  );
}
