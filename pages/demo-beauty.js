import { useState } from "react";
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
      <div>
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
              className="absolute inset-0 bg-gray-900 opacity-50"
            />
            <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
              <h1 className="text-4xl font-bold text-white lg:text-7xl mb-8">
                The Beauty of Click2Cart
              </h1>
              <p className="mt-4 text-2xl leading-10 text-white">
                Drive more commerce to your brand with our technology. <br />
                This demo site shows how our technology can drive more commerce
                to your brand.
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
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Our pressed blush powder pallette delivers a long-lasting,
                    velvet-matte flush of color. This lightweight, buildable
                    formula effortlessly blends into skin for a comfortable,
                    non-drying finish.
                  </p>
                  {/* CODE */}
                  <div className="pt-8">
                    <div id="smart-cart" data-sc-type="ec"></div>
                    <div data-sc-id="21297555-1329-430e-81f1-c37b52768289"></div>
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
              Get Glossy Lip Service
            </div>
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:gap-x-8">
              <div className="group relative">
                <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                  <img
                    src="/img/demo/beauty-2.jpg"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="py-4 text-2xl lg:text-3xl text-[#4363F9] text-center pt-4 ">
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
                    src="/img/demo/beauty-2.jpg"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="py-4 text-2xl lg:text-3xl text-[#4363F9] text-center pt-4">
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
                    src="/img/demo/beauty-2.jpg"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="py-4 text-2xl lg:text-3xl text-[#4363F9] text-center pt-4">
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
              <p className="py-6 text-base leading-7 text-slate-950 font-bold uppercase">
                Product Uses
              </p>
              <div className="grid grid-cols-1 mb-8 gap-x-6">
                <div>
                  <ul>
                    <li>Eye shadow</li>
                    <li>Liner</li>
                    <li>Mascar</li>
                  </ul>
                </div>
                <p className="py-6 text-base leading-7 text-slate-950 font-bold uppercase">
                  Instructions
                </p>
                <div>
                  <ol>
                    <li>
                      1. Cover eye lid up to eye brow with with base color,
                      layer with darker brown shadow
                    </li>
                    <li>2. Line top of lid with black liner</li>
                    <li>3. Finish with black mascara</li>
                  </ol>
                </div>
              </div>
              <div>
                <button
                  className="bg-primary-950 text-white py-4 px-6 rounded-full"
                  data-basketful-bundle-id="784b8862-a7df-40da-b0fe-1f102052d920"
                >
                  Cart this Look
                </button>
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
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our Product Locator will find makeup at a retailer near you.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-full px-6 lg:px-16">
              <iframe
                src="https://shop.basketful.co/productLocator?origin=https://shop.basketful.co&publisher=shop.basketful.co"
                height="1000"
                width="100%"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <style>{"body { background-color: #f8fafc; }"}</style>
    </>
  );
}
