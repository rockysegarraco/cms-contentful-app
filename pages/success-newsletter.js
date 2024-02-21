import _Container from "../components/_Container";
import Wrapper from "../components/Wrapper";
import Intro from "../components/intro";
import GetDemo from "../components/getdemo";
import Layout from "../components/Layout";
import Head from "next/head";

export default function Example() {
  return (
    <>
      <main className="bg-white px-0 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-0 text-3xl leading-[4rem] font-bold tracking-tight text-secondary-950 sm:text-5xl">
            You’re clearly a <br />
            genius already!
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-950">
            Stay tuned for our monthly <br />
            newsletter, SmartBites.
          </p>
        </div>
      </main>
    </>
  );
}
