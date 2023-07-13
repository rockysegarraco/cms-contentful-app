import Link from "next/link";
import Container from "../components/container";
import Breadcrumb from "../components/breadcrumb";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <div>
      <div className="font-normal mb-15 py-5 border-t shadow-sm bg-[#f3f8fb]">
        <div className="mx-auto sm:max-w-7xl px-6">
          <Breadcrumb />
        </div>
      </div>
    </div>
  );
}
