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

export default function Example() {
  return (
    <>
      <Layout>
        <Head>
          <title>
            Events - Accelerate E-commerce from all existing touchpoints -
            SmartCommerce
          </title>
          <meta
            name="description"
            content="Want to connect at one of these events? Email:&nbsp;info@smartcommerce.co Phone:&nbsp;1-800-571-3520 Europe: Barcelona, Spain Email: infoEU@smartcommerce.co"
          />
        </Head>
        <_PageTitle title="Events" />
        <div className="bg-white lg:bg-slate-50 py-0 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="pt-16 lg:pb-8 pb-4 font-bold lg:text-5xl text-4xl text-info-950 text-center">
              Let's Meet Up!
            </div>
            <p className="text-center lg:pb-4 pb-0">
              We're looking forward to attending these upcoming events and would
              love to connect if you'll be there too.
            </p>
            <div className="py-6 flex items-center justify-center gap-x-6">
              <a
                href="https://www.smartcommerce.com/meetupform"
                className="rounded-full bg-primary-950 px-8 py-4 text-md font-medium text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Schedule a Meetup
              </a>
            </div>
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 sm:grid-cols-2 mb-16">
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <Link href="https://adage.com/events">
                  <img
                    class="w-full"
                    src="img/events/adage.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-info-950">
                      Ad Age TV & Streaming Summit
                    </div>
                    <div className="text-dark-950 pb-2 text-sm font-semibold">
                      May 21-22, 2024
                      <br />
                      New York, NY
                    </div>
                    <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                      <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                        Register
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <Link href="https://www.digitalgrocerysummit.com/">
                  <img
                    class="w-full"
                    src="img/events/dgs.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-info-950">
                      Digital Grocery Summit
                    </div>
                    <div className="text-dark-950 pb-2 text-sm font-semibold">
                      May 23, 2024
                      <br />
                      Chicago, IL
                    </div>
                    <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                      <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                        Register
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src="img/events/springsocial.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-info-950">
                    Spring Social
                  </div>
                  <div className="text-dark-950 pb-2 text-sm font-semibold">
                    May 30, 2024
                    <br />
                    Chicago, IL
                  </div>
                </div>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <Link href="https://shoptalkeurope.com/">
                  <img
                    class="w-full"
                    src="img/events/shop-talk-europe.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-info-950">
                      ShopTalk Europe
                    </div>
                    <div className="text-dark-950 pb-2 text-sm font-semibold">
                      June 3-5, 2024
                      <br />
                      Europe
                    </div>
                    <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                      <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                        Register
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <Link href="https://www.canneslions.com/festival">
                  <img
                    class="w-full"
                    src="img/events/cannes.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-info-950">
                      Cannes International Festival of Creativity
                    </div>
                    <div className="text-dark-950 pb-2 text-sm font-semibold">
                      June 17-21, 2024
                      <br />
                      Cannes, France
                    </div>
                    <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                      <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                        Register
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src="img/events/summersocial.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-info-950">
                    Summer Social
                  </div>
                  <div className="text-dark-950 pb-2 text-sm font-semibold">
                    August 2024
                    <br />
                    Location: TBD
                  </div>
                </div>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <Link href="https://foodandbeverage.wbresearch.com/">
                  <img
                    class="w-full"
                    src="img/events/digital-food.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-info-950">
                      Digital Food & Beverage
                    </div>
                    <div className="text-dark-950 pb-2 text-sm font-semibold">
                      June 24-26, 2024
                      <br />
                      Paul Desert, CA
                    </div>
                    <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                      <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                        Register
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <Link href="https://events.p2pi.com/retailmediasummit2024">
                  <img
                    class="w-full"
                    src="img/events/ppi.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-info-950">
                      P2PI Retail Media Summit
                    </div>
                    <div className="text-dark-950 pb-2 text-sm font-semibold">
                      June 25-27, 2024
                      <br />
                      Chicago, IL
                    </div>
                    <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                      <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                        Register
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <Link href="https://groceryshop.com/">
                  <img
                    class="w-full"
                    src="img/events/grocery-shop.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-info-950">
                      Groceryshop
                    </div>
                    <div className="text-dark-950 pb-2 text-sm font-semibold">
                      October 7-9, 2024
                      <br />
                      Mandalay Bay, Las Vegas
                    </div>
                    <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                      <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                        Register
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <Link href="https://events.p2pi.com/live2024/Registration">
                  <img
                    class="w-full"
                    src="img/events/p2p.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-info-950">
                      P2PI Live & Expo
                    </div>
                    <div className="text-dark-950 pb-2 text-sm font-semibold">
                      November 12-14, 2024
                      <br />
                      Schaumburg, IL
                    </div>
                    <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                      <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                        Register
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src="img/events/adweekny.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-info-950">
                    Advertising Week
                  </div>
                  <div className="text-dark-950 pb-2 text-sm font-semibold">
                    Date: TBD
                    <br />
                    Location: TBD
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto grid pb-8 lg:py-0">
              <div className="relative isolate overflow-hidden bg-primary-100 px-6 py-8 text-center shadow-sm sm:rounded-3xl sm:px-16">
                <h2 className="py-4 text-2xl leading-[2rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-4xl lg:leading-[4.5rem] mb-0 font-bold text-info-950">
                  Want to connect at one of these events?
                </h2>
                <div className="mt-0 flex items-center justify-center gap-x-6">
                  <a
                    href="https://www.smartcommerce.com/meetupform"
                    className="rounded-full bg-primary-950 px-8 py-4 text-md font-medium text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Schedule a Meetup
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="pt-16 pb-2 font-bold text-4xl text-info-950 text-center">
              Noteworthy Industry Events
            </div>
            <p className="text-center">
              These industry events are very much on our radar. Looking for more
              ways to learn - check these out too.
            </p>
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 sm:grid-cols-2 mb-16">
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-info-950">
                    Digital Food & Beverage
                  </div>
                  <div className="text-dark-950 pb-2 text-sm font-semibold">
                    March 12 & 13, 2024
                    <br />
                    London, England
                  </div>
                  <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                    <Link
                      href="https://foodandbeverageeu.wbresearch.com/"
                      className="py-4 text-base text-primary-950 underline underline-offset-8"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-info-950">
                    2024 ANA Brand Masters Conference
                  </div>
                  <div className="text-dark-950 pb-2 text-sm font-semibold">
                    April 15-17, 2024
                    <br />
                    Carlsbad, CA
                  </div>
                  <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                    <Link
                      href="https://www.ana.net/content/show/id/ms-bic-apr24"
                      className="py-4 text-base text-primary-950 underline underline-offset-8"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-info-950">
                    OMR24 Festival
                  </div>
                  <div className="text-dark-950 pb-2 text-sm font-semibold">
                    May 7 & 8, 2024
                    <br />
                    Hamburg, Germany
                  </div>
                  <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                    <Link
                      href="https://omr.com/en/events/omr24"
                      className="py-4 text-base text-primary-950 underline underline-offset-8"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-info-950">
                    Advertising Week Europe
                  </div>
                  <div className="text-dark-950 pb-2 text-sm font-semibold">
                    May 14-16, 2024
                    <br />
                    London, England
                  </div>
                  <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                    <Link
                      href="https://advertisingweek.com/event/advertising-week-europe-2024"
                      className="py-4 text-base text-primary-950 underline underline-offset-8"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-info-950">
                    Shoptalk Europe
                  </div>
                  <div className="text-dark-950 pb-2 text-sm font-semibold">
                    June 3-5, 2024
                    <br />
                    Barcelona, Spain
                  </div>
                  <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                    <Link
                      href="https://shoptalkeurope.com/"
                      className="py-4 text-base text-primary-950 underline underline-offset-8"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-info-950">
                    Retail Innovation Conference and Expo (RICE)
                  </div>
                  <div className="text-dark-950 pb-2 text-sm font-semibold">
                    June 4-6, 2024
                    <br />
                    Chicago, IL
                  </div>
                  <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                    <Link
                      href="https://retailinnovationconference.com/"
                      className="py-4 text-base text-primary-950 underline underline-offset-8"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-info-950">
                    CommerceNext eCommerce Growth Show
                  </div>
                  <div className="text-dark-950 pb-2 text-sm font-semibold">
                    June 11-13, 2024
                    <br />
                    New York, NY
                  </div>
                  <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                    <Link
                      href="https://commercenext.com/"
                      className="py-4 text-base text-primary-950 underline underline-offset-8"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-info-950">
                    Digital Food & Beverage
                  </div>
                  <div className="text-dark-950 pb-2 text-sm font-semibold">
                    June 24-26, 2024
                    <br />
                    Palm Dessert, CA
                  </div>
                  <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                    <Link
                      href="https://foodandbeverage.wbresearch.com/srspricing"
                      className="py-4 text-base text-primary-950 underline underline-offset-8"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-info-950">
                    Adweek Brandweek
                  </div>
                  <div className="text-dark-950 pb-2 text-sm font-semibold">
                    September 23-26, 2024
                    <br />
                    Phoenix, AZ
                  </div>
                  <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                    <Link
                      href="https://event.adweek.com/brandweek_2024"
                      className="py-4 text-base text-primary-950 underline underline-offset-8"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-info-950">
                    ANA Masters of Marketing Conference
                  </div>
                  <div className="text-dark-950 pb-2 text-sm font-semibold">
                    October 22-25, 2024
                    <br />
                    Orlando, FL
                  </div>
                  <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                    <Link
                      href="https://www.ana.net/conference/show/id/ANC-OCT24"
                      className="py-4 text-base text-primary-950 underline underline-offset-8"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto grid pb-8 lg:py-0">
              <div className="relative isolate overflow-hidden bg-primary-100 px-6 py-8 text-center shadow-sm sm:rounded-3xl sm:px-16">
                <h2 className="py-4 text-2xl leading-[2rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-4xl lg:leading-[4.5rem] mb-0 font-bold text-info-950">
                  Want to connect at one of these events?
                </h2>
                <div className="mt-0 flex items-center justify-center gap-x-6">
                  <a
                    href="https://www.smartcommerce.com/meetupform"
                    className="rounded-full bg-primary-950 px-8 py-4 text-md font-medium text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Schedule a Meetup
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="pt-16 pb-2 font-bold text-4xl text-info-950 text-center">
              Past Events
            </div>
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 sm:grid-cols-2 mb-16">
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <Link href="https://tinuiti.com/content/webinars/2024-amazon-retail-media-summit">
                  <img
                    class="w-full"
                    src="img/events/tinuiti.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-info-950">
                      Tinuiti - The Amazon and Retail Media Summit
                    </div>
                    <div className="text-dark-950 pb-2 text-sm font-semibold">
                      February 7 & 14, 2024
                      <br />
                      Webinar
                    </div>
                    <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                      <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                        Learn more
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <Link href="https://event.adweek.com/commerceweek-2024/4441255?ref=adwp2_branded&utm_source=google&utm_medium=cpc&utm_campaign=Commerceweek2024&utm_content=P2_branded&gad_source=1&gclid=CjwKCAiA44OtBhAOEiwAj4gpOS93BVoGMZxb_3MdlNBZqDYmKDxZvLP0HLRdiYX_n6WcVi2w2jJZjhoC3Q0QAvD_BwE">
                  <img
                    class="w-full"
                    src="img/events/adweek.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-info-950">
                      Adweek Commerceweek
                    </div>
                    <div className="text-dark-950 pb-2 text-sm font-semibold">
                      February 28-29, 2024
                      <br />
                      New York, New York
                    </div>
                    <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                      Learn more
                    </div>
                  </div>
                </Link>
              </div>
              <div class="max-w-full rounded overflow-hidden shadow-lg">
                <Link href="https://shoptalk.com/us">
                  <img
                    class="w-full"
                    src="img/events/shop-talk.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-info-950">
                      Shoptalk
                    </div>
                    <div className="text-dark-950 pb-2 text-sm font-semibold">
                      March 17 - 20, 2024
                      <br />
                      Mandalay Bay, Las Vegas
                    </div>
                    <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                      <div className="py-4 text-base text-primary-950 underline underline-offset-8">
                        Learn more
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mx-auto grid pb-8 lg:py-0">
              <div className="relative isolate overflow-hidden bg-primary-100 px-6 py-8 text-center shadow-sm sm:rounded-3xl sm:px-16">
                <h2 className="py-4 text-2xl leading-[2rem] sm:text-5xl sm:leading-[5rem] md:text-5xl md:leading-[4.5rem] lg:text-4xl lg:leading-[4.5rem] mb-0 font-bold text-info-950">
                  Want to connect at one of these events?
                </h2>
                <div className="mt-0 flex items-center justify-center gap-x-6">
                  <a
                    href="https://www.smartcommerce.com/meetupform"
                    className="rounded-full bg-primary-950 px-8 py-4 text-md font-medium text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Schedule a Meetup
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{"body { background-color: #f8fafc; }"}</style>
      </Layout>
    </>
  );
}
