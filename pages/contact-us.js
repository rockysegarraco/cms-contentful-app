import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { fetchNewsletter } from "../lib/api";
import Head from "next/head";
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
          <title>{`Contact us For general inquiries, please use the form below. Locations US Offices: Atlanta, GA Email:&nbsp;info@smartcommerce.co Phone:&nbsp;1-800-571-3520 Europe: Barcelona, Spain Email: infoEU@smartcommerce.co`}</title>
        </Head>
        <Intro title="Contact" />
        <Container>
          <style>{"body { background-color: #f5f5f7; }"}</style>
          <div className="relative isolate">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
              <div className="relative pb-20 sm:pt-0 lg:static">
                <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                  <h2 className="text-3xl font-bold text-info-950">
                    Get in touch
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-dark-950">
                    If you’d prefer to talk about Workable with a real human,
                    just call us. We’re friendly and available on the phone:
                  </p>
                  <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Address</span>
                        <BuildingOffice2Icon
                          className="h-7 w-6 text-secondary-950"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd>
                        <span className="font-bold">Atlanta, USA</span>
                        <br />
                        75 5th Street NW, Suite 2000
                        <br />
                        Atlanta, Georgia 30308
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Address</span>
                        <BuildingOffice2Icon
                          className="h-7 w-6 text-secondary-950"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd>
                        <span className="font-bold">Minneapolis, USA</span>
                        <br />
                        212 Third Ave North, Suite 352
                        <br />
                        Minneapolis, MN 55401
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Telephone</span>
                        <PhoneIcon
                          className="h-7 w-6 text-secondary-950"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd>
                        <a
                          className="hover:text-gray-900"
                          href="tel:+1 (555) 234-5678"
                        >
                          +1 (800) 571-3520
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Email</span>
                        <EnvelopeIcon
                          className="h-7 w-6 text-secondary-950"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd>
                        <a
                          className="hover:text-gray-900"
                          href="mailto:info@smartcommerce.co"
                        >
                          info@smartcommerce.co
                        </a>
                      </dd>
                    </div>
                  </dl>
                  <hr className="my-8" />
                  <h2 className="text-xl text-dark-950 font-bold">Europe</h2>
                  <h3 className="text-lg text-dark-950 pt-0">
                    Barcelona, Spain
                  </h3>
                  <dl className="mt-4 space-y-4 text-base leading-7 text-gray-600">
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Email</span>
                        <EnvelopeIcon
                          className="h-7 w-6 text-secondary-950"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd>
                        <a
                          className="hover:text-gray-900"
                          href="mailto:infoeu@smartcommerce.co"
                        >
                          infoeu@smartcommerce.co
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <iframe
                src="https://tfaforms.com/4982191"
                height="800"
                width="600"
                frameborder="0"
              ></iframe>
              <script src="//tfaforms.com/js/iframe_resize_helper.js"></script>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
