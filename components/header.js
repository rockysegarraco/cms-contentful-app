import Link from "next/link";
import Container from "../components/container";
import Breadcrumb from "../components/breadcrumb";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <h2 className="font-normal leading-tight mb-0 p-5 bg-[#f3f8fb]">
      <div className="mx-auto lg:max-w-6xl sm:max-w-7xl sm:px-6 lg:px-8 px-10 sm:px-8 text-sm">
        <Breadcrumb />
      </div>
    </h2>
  );
}
