import { useState } from "react";
import Wrapper from "../components/Wrapper";
import _Container from "../components/_Container";
import Heading from "../components/Heading";
import Paragraphs from "../components/Paragraphs";
import Button from "../components/Button";
import Values from "../components/Values";
import Link from "next/link";
export default function Cta() {
  return (
    <>
      <Wrapper light>
        <_Container onecolumn>
          <div className="order-last lg:order-first">
            <Heading dark>We’ve got you – always</Heading>
            <div className="mx-auto max-w-xl">
              <Paragraphs dark>
                No matter what you need help with, our team of experts will work
                with you every step of the way to ensure you’re set up for
                success. (And, no, we don’t charge extra for that.)
              </Paragraphs>
            </div>
            <div className="flex items-center justify-center gap-x-6">
              <Link href="/contact-us">
                <Button primary>Tell me more</Button>
              </Link>
            </div>
          </div>
        </_Container>
      </Wrapper>
    </>
  );
}
