import {
  ChevronRightIcon,
  HomeIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/20/solid";

export default function LinkCrumb(props) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-0">
        <li>
          <div>
            <a href={props.url} className="text-gray-500 hover:text-gray-400">
              <ArrowLongLeftIcon
                className="h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <a
              href={props.url}
              className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-400"
            >
              {props.title}
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
}
