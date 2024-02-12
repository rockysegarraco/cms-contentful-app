import { useState } from "react";
import Meta from "../components/meta";
import { Disclosure, RadioGroup, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import Wrapper from "../components/Wrapper";
import _Container from "../components/_Container";
import Paragraphs from "../components/Paragraphs";
import Container from "../components/container";
import _PageTitle from "../components/_PageTitle";
import _Hero from "../components/_Hero";
import Layout from "../components/Layout";
import Clients from "../components/partners/clients";
import { fetchNewsletter } from "../lib/api";
import Head from "next/head";
import Link from "next/link";
import Heading from "../components/Heading";
import Button from "../components/Button";
import Footer from "../components/footer";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <Meta />
      <div>
        {/* HEADER */}
        <div className="bg-[#252D6C] py-4">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex justify-between items-center">
              <div>
                <img className="h-8" src="/img/demo/c2c-logo.svg" />
              </div>
              <a
                href="/contact-us"
                className="bg-primary-950 text-white py-3 px-6 rounded-full"
              >
                Talk to Us
              </a>
            </div>
          </div>
        </div>
        {/* HERO */}
        <div className="bg-white">
          <div className="relative bg-gray-900">
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden"
            >
              <img
                src="/img/demo/beauty-hero.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gray-900 opacity-0"
            />
            <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
              <h1 className="text-4xl font-bold text-white lg:text-7xl mb-8 lg:mt-24">
                The Beauty of Click2Cart
              </h1>
              <p className="mt-4 text-2xl leading-10 text-white">
                Drive more commerce to your brand with our technology.
              </p>
            </div>
          </div>
        </div>
        {/* SECTION */}
        <div className="bg-white">
          <div className="mx-auto max-w-7xl md:px-6 lg:px-8 py-8 sm:py-24 overflow-hidden">
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
              <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                <div className="mx-auto">
                  <p className="py-2 lg:py-6 font-bold text-3xl text-[#4363F9] sm:text-5xl">
                    Are You Blushing?
                  </p>
                  <p className="mt-6 text-lg leading-8 text-slate-950">
                    Our pressed blush powder pallette delivers a long-lasting,
                    velvet-matte flush of color. This lightweight, buildable
                    formula effortlessly blends into skin for a comfortable,
                    non-drying finish.
                  </p>
                  {/* CODE */}
                  <div className="pt-8">
                    <div id="smart-cart" data-sc-type="ec"></div>
                    <div
                      data-sc-id="69b3482e-9808-4f21-83b5-74a1a5038727"
                      data-mp-id="1653595"
                    ></div>
                    <script
                      type="text/javascript"
                      src="https://ss.click2cart.com/assets/js/smartcart.js"
                    ></script>
                  </div>
                  {/* / */}
                </div>
              </div>
              <div className="px-6 lg:px-0">
                <img className="rounded-lg" src="/img/demo/beauty-1.jpg" />
              </div>
            </div>
          </div>
        </div>
        {/* SECTION */}
        <div className="bg-[#EEC7BD]/20">
          <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="text-center leading-[4rem] lg:pb-12 text-3xl lg:text-5xl font-bold text-[#4363F9]">
              Get Glossy
            </div>
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:gap-x-8">
              <div className="group relative">
                <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                  <img
                    src="/img/demo/beauty-2.jpg"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="py-4 text-2xl lg:text-3xl text-slate-950 text-center pt-4 ">
                  <a>
                    <span className="absolute inset-0" />
                    Rosé Eclat
                  </a>
                </h3>
                <div
                  data-sc-id="a5f5f033-9868-4ec6-b5d2-f1a572d1e62a"
                  data-sc-type="SmartButton"
                ></div>
                <script
                  type="text/javascript"
                  src="https://ss.click2cart.com/assets/js/smartcart.js"
                ></script>
              </div>
              <div className="group relative">
                <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                  <img
                    src="/img/demo/beauty-3.jpg"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="py-4 text-2xl lg:text-3xl text-slate-950 text-center pt-4">
                  <a>
                    <span className="absolute inset-0" />
                    Berry Bright
                  </a>
                </h3>
                <div
                  data-sc-id="e8ce90b3-b9d1-4503-b256-5de030855c1b"
                  data-sc-type="SmartButton"
                ></div>
                <script
                  type="text/javascript"
                  src="https://ss.click2cart.com/assets/js/smartcart.js"
                ></script>
              </div>
              <div className="group relative">
                <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                  <img
                    src="/img/demo/beauty-4.jpg"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="py-4 text-2xl lg:text-3xl text-slate-950 text-center pt-4">
                  <a>
                    <span className="absolute inset-0" />
                    Cotton Candy
                  </a>
                </h3>
                <div
                  data-sc-id="a1b2c605-30a7-4929-b4a1-a04bed3c81d2"
                  data-sc-type="SmartButton"
                ></div>
                <script
                  type="text/javascript"
                  src="https://ss.click2cart.com/assets/js/smartcart.js"
                ></script>
              </div>
            </div>
          </div>
        </div>
        {/* SECTION */}
        <div className="relative bg-white">
          <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:right-0 md:h-full md:w-1/3 lg:w-1/2">
            <img
              className="h-full w-full object-cover"
              src="/img/demo/AdobeStock_332366978.jpeg"
              alt=""
            />
          </div>
          <div className="relative mx-auto max-w-8xl py-8 sm:py-32 lg:px-8 lg:py-40">
            <div className="pl-6 pr-6 md:mr-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-16 xl:pl-32 ">
              <p className="py-2 lg:py-6 font-bold text-3xl text-[#4363F9] sm:text-5xl">
                Smoke Show
              </p>
              <p className="py-2 text-base leading-7 text-slate-950 font-bold">
                Product
              </p>
              <div className="grid grid-cols-1 mb-8 gap-x-6">
                <div>
                  <ul classNames="list-disc">
                    <li>Eye shadow</li>
                    <li>Liner</li>
                    <li>Mascara</li>
                  </ul>
                </div>
                <p className="pt-6 pb-2 text-base leading-7 text-slate-950 font-bold">
                  Instructions
                </p>
                <div className="px-4">
                  <ol className="list-decimal">
                    <li>
                      Cover eye lid up to eye brow with <br />
                      base color, layer with darker brown shadow
                    </li>
                    <li>Line top of lid with black liner</li>
                    <li>Finish with black mascara</li>
                  </ol>
                </div>
              </div>
              <div className="py-8">
                <Link
                  href="https://shop.basketful.co/bundle?bundle=f8157266-4129-4646-942f-b431b15e90cc"
                  target="_blank"
                  className="bg-primary-950 text-white py-4 px-6 rounded-lg font-bold"
                  data-basketful-bundle-id="784b8862-a7df-40da-b0fe-1f102052d920"
                >
                  Cart this Look
                </Link>
                <script
                  src="https://shop.basketful.co/basketful.js"
                  async
                ></script>
              </div>
            </div>
          </div>
        </div>
        {/* MAP */}
        <div className="bg-[#EEC7BD]/20 py-8 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <p className="py-2 lg:py-6 font-bold text-3xl text-[#4363F9] sm:text-5xl">
                Look Locator
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-950">
                Our Product Locator will find makeup at a retailer near you.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-full px-6 lg:px-16">
              <iframe
                src="https://shop.basketful.co/productLocator?origin=https://demo.smartcommerce.com&publisher=demo.smartcommerce.com"
                height="1000"
                width="100%"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
        {/* SECTION */}
        <div className="bg-[#EEC7BD]/40">
          <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="text-center leading-[4rem] lg:pb-6 text-3xl lg:text-5xl font-bold text-[#4363F9]">
              Make everything shoppable
            </div>
            <p className="text-center mb-16">
              eCommerce enable all of your digital touch points with SmartLinks
            </p>
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:gap-x-8">
              <div className="group relative">
                <Link href="https://click2cart.com/0350bl7" target="_blank">
                  <div className="w-full overflow-hidden rounded-md group-hover:opacity-75">
                    <img
                      src="/img/demo/beauty-5.png"
                      className="h-full w-full"
                    />
                  </div>
                  <h3 className="py-4 text-lg text-[#4363F9] text-center pt-4 ">
                    <span className="absolute inset-0" />
                    Click2Cart Direct
                  </h3>
                </Link>
              </div>
              <div className="group relative">
                <Link href="https://click2cart.com/0350bl8" target="_blank">
                  <div className="w-full overflow-hidden rounded-md group-hover:opacity-75">
                    <img
                      src="/img/demo/beauty-6.png"
                      className="h-full w-full"
                    />
                  </div>
                  <h3 className="py-4 text-lg text-[#4363F9] text-center pt-4">
                    <span className="absolute inset-0" />
                    Shopper’s Choice
                  </h3>
                </Link>
              </div>
              <div className="group relative">
                <Link href="https://click2cart.com/0350blA" target="_blank">
                  <div className="w-full overflow-hidden rounded-md group-hover:opacity-75">
                    <img
                      src="/img/demo/beauty-7.png"
                      className="h-full w-full"
                    />
                  </div>
                  <h3 className="py-4 text-lg text-[#4363F9] text-center pt-4">
                    <span className="absolute inset-0" />
                    SmartShelf
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* SECTION */}
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="text-center leading-[4rem] lg:pb-6 text-3xl lg:text-5xl font-bold text-[#4363F9]">
              That’s how Click2Cart works!
            </div>
            <p className="text-center mb-0 text-slate-950">
              Get in touch to get your products into carts faster (and more
              frequently)
            </p>
            <div className="mt-0 mx-auto max-w-xl">
              <iframe
                src="https://tfaforms.com/4982191"
                height="800"
                width="100%"
                frameBorder="0"
              ></iframe>
              <script src="//tfaforms.com/js/iframe_resize_helper.js"></script>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <style>{"body { background-color: #f8fafc; }"}</style>
    </>
  );
}
