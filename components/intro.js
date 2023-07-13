import { CMS_NAME, CMS_URL } from "../lib/constants";

export default function Intro(props) {
  return (
    <div className="font-normal mb-15 py-5 bg-white border-t shadow-sm">
      <div className="mx-auto sm:max-w-7xl px-6">
        <h1 className="text-3xl md:text-3xl font-bold text-dark-950">
          {props.title}
          <span className="text-secondary-950">.</span>
        </h1>
      </div>
    </div>
  );
}
