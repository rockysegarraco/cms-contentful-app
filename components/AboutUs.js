import { useState } from "react";
import Wrapper from "../components/Wrapper";
import _Container from "../components/_Container";
import Heading from "../components/Heading";
import Paragraphs from "../components/Paragraphs";
import Button from "../components/Button";
import Values from "../components/Values";
import Link from "next/link";

const stats = [
  { id: 1, name: "Countries", value: "8" },
  { id: 2, name: "Teammates", value: "120" },
  { id: 3, name: "Bundles of Joy (and counting)", value: "12" },
  { id: 4, name: "Brand & Agency Partners", value: "922" },
];

export default function AboutUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Wrapper slate>
        <_Container twocolumn>
          <div className="order-last lg:order-first">
            <Heading dark>
              Better together<span className="text-secondary-950">.</span>
            </Heading>
            <Paragraphs dark>
              We’re a community of problem solvers passionate about helping
              clients take their sales to the next level. We develop tools that
              reinvent the way products get into the hands of consumers across
              the globe.
            </Paragraphs>
            <Link href="/careers">
              <Button primary>Come work with us</Button>
            </Link>
            <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-2 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-3 mt-16">
              <a href="https://www.comparably.com/companies/smartcommerce/awards?utm_medium=cfc&utm_source=comparably&utm_campaign=awards&utm_content=best-ceo-for-women-2022-small">
                <img
                  className="col-span-2 max-h-48 w-full object-contain lg:col-span-1"
                  src="best-ceo-for-women-2022-small 1.svg"
                  alt="Transistor"
                  width={158}
                  height={68}
                />
              </a>
              <a href="https://www.comparably.com/companies/smartcommerce/awards?utm_medium=cfc&utm_source=comparably&utm_campaign=awards&utm_content=best-company-for-women-2022-small">
                <img
                  className="col-span-2 max-h-48 w-full object-contain lg:col-span-1"
                  src="best-company-for-women-2022-small 1.svg"
                  alt="Reform"
                  width={158}
                  height={48}
                />
              </a>
              <img
                className="col-span-2 max-h-48 w-full object-contain lg:col-span-1"
                src="Best_Workplaces_Badge 1.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
            </div>
          </div>
          <div className="relative w-full order-first lg:order-last">
            <img src="img/about-pic-5.jpg" className="relative" />
          </div>
        </_Container>
      </Wrapper>
      <Wrapper primary>
        <_Container twocolumn>
          <div className="relative w-full">
            <img src="img/HeroOurStory.png" />
          </div>
          <div>
            <Heading light>Our Story</Heading>
            <Paragraphs light>
              SmartCommerce is in the business of making the complex simple. We
              believe in tackling the hard work it takes to turn complicated
              processes into something super-easy for our clients and consumers
              to use. 
              <br />
              <br />
              Creating this magic takes a whole team, one with decades of
              experience in the CPG category.  Our CEO Jennifer Silverberg and
              the founding members were pioneers in the where-to-buy space. For
              years, they worked together at Channel Intelligence, one of the
              world’s leading commerce technology partners that was acquired by
              Google in 2013 (and still powers Google Shopping today).
              <br />
              <br />
              What the team learned was that while the where-to-buy solutions
              worked really well for some categories, CPG brands were often left
              out in the cold. In 2016, SmartCommerce was born, and the team got
              to work developing technology that made it easier for shoppers to
              directly cart fast-moving consumer goods, creating more
              conversions for CPG brands. Being one of the first movers in the
              add-to-cart space, we were primed and ready when the pandemic hit,
              and CPG shopping behavior shifted more online. 
              <br />
              <br />
              SmartCommerce has continued to grow since 2016.  In 2022, the
              company acquired Myxx and Basketful, expanding our contextual
              commerce capabilities with recipe solutions. 
            </Paragraphs>
          </div>
        </_Container>
      </Wrapper>
      <Wrapper light>
        <_Container onecolumn>
          <Heading dark>Welcome to our world</Heading>
          <div className="mx-auto max-w-lg">
            <Paragraphs dark>
              We’re a fully-remote team, empowered to deliver for clients daily.
              But most importantly, we have fun while doing it!
            </Paragraphs>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col bg-gray-400/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">
                Teammates
              </dt>
              <dd className="order-first text-6xl font-semibold tracking-tight text-info-950">
                120
              </dd>
            </div>
            <div className="flex flex-col bg-gray-400/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">
                Bundles of Joy (and counting)
              </dt>
              <dd className="order-first text-6xl font-semibold tracking-tight text-[#89BB48]">
                12
              </dd>
            </div>
            <div className="flex flex-col bg-gray-400/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">
                Brand & Agency Partners
              </dt>
              <dd className="order-first text-6xl font-semibold tracking-tight text-primary-950">
                922
              </dd>
            </div>
          </dl>
        </_Container>
      </Wrapper>
      <Wrapper slate>
        <_Container twocolumn>
          <div className="relative w-full order-first lg:order-last">
            <img src="img/TeamHeroPic.png" />
          </div>
          <div className="order-last lg:order-first pt-0 lg:pt-32">
            <Heading dark>Teamwork</Heading>
            <Paragraphs dark>
              SmartCommerce team members are passionate go-getters who wake up
              excited about helping clients take their sales to the next level,
              increasing their profit margins and sales exponentially.
              <br />
              <br />
              Our ideal candidate is an A+ player/achiever with an
              entrepreneurial spirit, infectious personality, and the ability to
              earn instant rapport with internal and external clients. The right
              candidate learns fast, is self-motivated, and wants to grow while
              contributing to the success of the team.
            </Paragraphs>
          </div>
        </_Container>
      </Wrapper>
      <Values />
      <Wrapper slate>
        <_Container twocolumn>
          <div className="relative w-full order-first lg:order-last">
            <img src="img/HeroFamPic.png" />
          </div>
          <div className="order-last lg:order-first pt-0 lg:pt-32">
            <Heading dark>Join the family</Heading>
            <Paragraphs dark>
              Do you feel like your work team “has your back,” and that you’re
              in a safe place to grow and explore new ideas? Do you feel
              empowered to deliver - actually over-deliver - for clients
              (internal and external), and your company will support you in
              that, whatever it takes? We do, and we continue to work at getting
              better at it every day, including looking for the very best people
              to join our team!
            </Paragraphs>
            <Link href="/careers">
              <Button primary>See open positions</Button>
            </Link>
          </div>
        </_Container>
      </Wrapper>
    </>
  );
}
