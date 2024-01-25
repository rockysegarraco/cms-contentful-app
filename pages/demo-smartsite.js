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
        <div className="bg-white">
          <div className="relative bg-gray-900">
            {/* Decorative image and overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1665990786173-4b343763001e?q=80&w=3694&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gray-900 opacity-50"
            />

            <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
              <h1 className="text-4xl font-bold text-white lg:text-6xl mb-8">
                A SmartSite Demo
              </h1>
              <p className="mt-4 text-2xl leading-10 text-white">
                Drive more commerce for your <br />
                brand with our Click2Cart technology.
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden py-8 sm:py-16 bg-slate-50">
          <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
              <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold text-info-950 sm:text-4xl">
                    Lemon Seltzer
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    A little sweet, a little tart, and the perfect amount of
                    effervescence makes this flavor a customer favorite.
                  </p>
                  <div className="py-8">
                    <div id="smart-cart" data-sc-type="ec"></div>
                    <div data-sc-id="21297555-1329-430e-81f1-c37b52768289"></div>
                    <script
                      type="text/javascript"
                      src="https://ss.click2cart.com/assets/js/smartcart.js"
                    ></script>
                  </div>
                </div>
              </div>
              <div className="px-6 lg:px-0">
                <img
                  className="rounded-lg"
                  src="https://images.squarespace-cdn.com/content/v1/64fb5865ed807a448ce13391/a5fb2efb-6d8b-40a0-b28d-bca62a725ef8/lemon.png?format=2500w"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:gap-x-8">
              <div className="group relative">
                <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/64fb5865ed807a448ce13391/f21ffe53-3b56-4abc-a6f9-8d76808cf6bf/Grapefruit.png?format=2500w"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-700 text-center py-2">
                  <a>
                    <span className="absolute inset-0" />
                    Grapefruit Seltzer
                  </a>
                </h3>
                <div id="smart-cart" data-sc-type="ec"></div>
                <div
                  data-sc-id="aa9223b9-c0cb-45c6-aa71-eec60167173f"
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
                    src="https://images.squarespace-cdn.com/content/v1/64fb5865ed807a448ce13391/8c9a3b60-94a2-48db-ac92-4bfab77fbc49/Lime.png?format=2500w"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-700 text-center py-2">
                  <a>
                    <span className="absolute inset-0" />
                    Grapefruit Seltzer
                  </a>
                </h3>
                <div id="smart-cart" data-sc-type="ec"></div>
                <div
                  data-sc-id="aa9223b9-c0cb-45c6-aa71-eec60167173f"
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
                    src="https://images.squarespace-cdn.com/content/v1/64fb5865ed807a448ce13391/f21ffe53-3b56-4abc-a6f9-8d76808cf6bf/Grapefruit.png?format=2500w"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-700 text-center py-2">
                  <a>
                    <span className="absolute inset-0" />
                    Grapefruit Seltzer
                  </a>
                </h3>
                <div id="smart-cart" data-sc-type="ec"></div>
                <div
                  data-sc-id="aa9223b9-c0cb-45c6-aa71-eec60167173f"
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
        <div className="relative bg-slate-100">
          <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
            <img
              className="h-full w-full object-cover"
              src="https://images.squarespace-cdn.com/content/v1/64fb5865ed807a448ce13391/1694193774658-1P59O51K4JY6B0R8PMPB/AdobeStock_514401984.jpeg?format=2500w"
              alt=""
            />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
              <p className="mt-2 text-3xl font-bold text-info-950 sm:text-4xl">
                Lemon Rosemary Seltzer
              </p>
              <p className="py-6 text-base leading-7 text-slate-950 font-bold">
                Ingredients:
              </p>
              <div className="grid grid-cols-1 mb-8 gap-x-6">
                <div>
                  <ul>
                    <li>1 large lemon</li>
                    <li>A few fresh rosemary sprigs</li>
                    <li>3 cans of Lemon Seltzer</li>
                    <li>1 bottle of chilled Prosecco</li>
                  </ul>
                </div>
                <p className="py-6 text-base leading-7 text-slate-950 font-bold">
                  Directions:
                </p>
                <div>
                  <ol>
                    <li>
                      1. Using a 32-ounce pitcher, place the rosemary inside of
                      it and pour in the Lemon Seltzer.
                      <br />
                      <br />
                    </li>

                    <li>
                      2. Top the pitcher with the Prosecco.
                      <br />
                      <br />
                    </li>

                    <li>
                      3. Fill two highball glasses with ice and fill three
                      quarters of the way with the pitcher mixture.
                      <br />
                      <br />
                    </li>

                    <li>
                      4. Top each glass up with a splash more of Lemon Seltzer.
                      <br />
                      <br />
                    </li>

                    <li>
                      5. Slice the lemon in half and cut one half into wedges.
                      <br />
                      <br />
                    </li>

                    <li>
                      6. Squeeze the other half between the two glasses.
                      <br />
                      <br />
                    </li>

                    <li>
                      7. Place a wedge of lemon on the side of each glass and
                      decorate with a sprig of rosemary. Enjoy immediately.
                      <br />
                      <br />
                    </li>
                  </ol>
                </div>
              </div>
              <div>
                <button
                  className="bg-primary-950 text-white py-4 px-6 rounded-full"
                  data-basketful-bundle-id="784b8862-a7df-40da-b0fe-1f102052d920"
                >
                  Buy Ingredients
                </button>
                <script
                  src="https://shop.basketful.co/basketful.js"
                  async
                ></script>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <p className="mt-2 text-3xl font-bold text-info-950 sm:text-4xl">
                Get the Goods
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our Product Locator will find flavored seltzer at a retailer
                near you.
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
