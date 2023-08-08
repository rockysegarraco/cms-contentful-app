import Link from "next/link";
import LinkCrumb from "../components/LinkCrumb";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

export default function Header({ children }) {
  return (
    <div>
      <div className="font-normal mb-15 py-5 border-t shadow-sm bg-[#f3f8fb]">
        <div className="mx-auto sm:max-w-7xl px-6">{children}</div>
      </div>
    </div>
  );
}
