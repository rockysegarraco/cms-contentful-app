import {
  ChevronRightIcon,
  HomeIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/20/solid";

const pages = [{ name: "Blog Home", href: "/", current: false }];

export default function Breadcrumb() {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-0">
        <li>
          <div>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <ArrowLongLeftIcon
                className="h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <a
                href={page.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
