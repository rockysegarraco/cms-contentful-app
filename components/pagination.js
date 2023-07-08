import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

export default function Pagination({ total, currentPage, handleNext, handlePrev }) {
  return (
    <nav className="flex items-center justify-center border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <a
          onClick={handlePrev}
          className="inline-flex cursor-pointer items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <ArrowLongLeftIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Previous
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">
        <a
          aria-current="page"
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
        >
          {currentPage} of {total} 
        </a>
        {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <a
          onClick={handleNext}
          className="inline-flex items-center cursor-pointer border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Next
          <ArrowLongRightIcon
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </a>
      </div>
    </nav>
  );
}
