import _Container from "../components/_Container";
import Wrapper from "../components/Wrapper";
import Intro from "../components/intro";
import GetDemo from "../components/getdemo";
import Layout from "../components/Layout";
import Head from "next/head";
export default function Example() {
  return (
    <>
      <Head>
        <title>
          SmartCommerce - Accelerate E-commerce from all existing touchpoints -
          SmartCommerce
        </title>
        <meta
          name="description"
          content="Interested in learning how Click2Cart® can drive e- commerce from your digital ads, social channels and website? Fill out the form below and one our team members will be in touch."
        />
        <meta name="robots" content="noindex, nofollow" />
        <script
          async
          src="https://www.tfaforms.com/publish/4988154"
          data-qp-target-id="fa-form"
          defer
        ></script>
      </Head>
      <Wrapper>
        <_Container>
          <style>{"body { background-color: #f5f5f7; }"}</style>
          <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-secondary-950 sm:text-5xl">
                Thank You!
              </h1>
              <p className="mt-6 text-base leading-7 text-slate-950">
                Your response has been processed successfully.
              </p>
            </div>
          </main>
        </_Container>
      </Wrapper>
    </>
  );
}
