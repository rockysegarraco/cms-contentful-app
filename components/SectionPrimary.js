import Button from "../components/Button";
import ReactPlayer from "react-player";

export default function Section(props) {
  const { children } = props; // Destructure 'children' from 'props'
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-r from-info-950 to-dark-accent">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 px-8 gap-16 sm:gap-16 lg:gap-16 pt-16 pb-16 lg:pt-24 lg:pb-24">
        <div className="lg:order-first order-last">
          <h1 className="text-4xl leading-[3rem] sm:text-6xl sm:leading-[5.5rem] md:text-5xl md:leading-[4.5rem] lg:text-6xl lg:leading-[5rem] mb-8 font-bold text-white">
            {props.title}
          </h1>
          <div className="pb-8 text-white">{children}</div>
        </div>
        <div className="relative w-full">
          {" "}
          {/* Make the container relative */}
          <img src={props.ImageUrl} className="relative" />{" "}
          {/* Position the image at the bottom */}
          <ReactPlayer
            width="100%"
            controls
            url="https://www.youtube.com/watch?v=d9MyW72ELq0&t=73s"
          />
        </div>
      </div>
    </div>
  );
}
