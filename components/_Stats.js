import Heading from "../components/Heading";
import Paragraphs from "../components/Paragraphs";

export default function _Stats(props) {
  const { children } = props; // Destructure 'children' from 'props'

  return (
    <div className="relative bg-slate-50">
      <img
        className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
        src={props.ImageUrl}
        alt={props.alt}
      />
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-end-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-7xl">
            <Heading dark>{props.title}</Heading>
            <Paragraphs dark>{children}</Paragraphs>
          </div>
        </div>
      </div>
    </div>
  );
}
