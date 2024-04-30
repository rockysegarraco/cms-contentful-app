import { useState, useEffect } from "react";
import Wrapper from "../components/Wrapper";
import _Container from "../components/_Container";
import _PageTitle from "../components/_PageTitle";
import Heading from "../components/Heading";
import Paragraphs from "../components/Paragraphs";
import Layout from "../components/Layout";
import Head from "next/head";
import { fetchPrivacy } from "../lib/api";
import PostBody from "../components/Postbody";

export default function Example({ preview, privacy }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Terms of Use</title>
          <meta
            name="description"
            content="By using SmartCommerce, you agree to these Terms and Conditions which govern your use of this website."
          />
        </Head>
        <_PageTitle title="Terms and Conditions" />
        <Wrapper light>
          <div className="mx-auto max-w-4xl text-left px-8 text-dark-950 py-8">
            <div className="font-bold">Last Updated: April 17, 2024</div>
            <div className="font-bold mt-4">Your Acceptance</div>
            <p>
              Welcome to https://www.smartcommerce.com/ (the “Website”), the
              website and online service of SmartCommerce, Inc., a Delaware
              corporation and its affiliates (“SmartCommerce”, “we”, or “us”).
              This page explains the terms by which you may use Website and
              other services we may make available on this or any other website
              (collectively the “Service”). By accessing or using the Service,
              you agree to be bound by this Terms of Service (these “Terms”) and
              to the collection and use of your information as set forth in the
              Privacy Policy available at:
              https://www.smartcommerce.com/privacy-policy. These Terms apply to
              all visitors, users and others who access the Service (“you” or
              “User(s)”). If you do not agree to the Terms or the Privacy Policy
              please stop using the Service immediately.{" "}
            </p>
            <div className="font-bold mt-4">Intellectual Property Rights</div>
            <p>
              The Service is owned and operated by SmartCommerce. The visual
              interfaces, graphics, design, compilation, information, computer
              code (including source code or object code), products, software,
              services, and all other elements of the Service provided by
              SmartCommerce (the “SmartCommerce Materials”) are protected by
              United States or foreign copyright, trade dress, patent, and
              trademark laws, international conventions, and all other relevant
              intellectual property and proprietary rights, and applicable laws.
              All SmartCommerce Materials contained on the Service are the
              property of SmartCommerce or its subsidiaries or affiliated
              companies or third-party licensors. All trademarks, service marks,
              and trade names are proprietary to SmartCommerce or its affiliates
              or third-party licensors. Except as expressly authorized by
              SmartCommerce, you agree not to sell, license, distribute, copy,
              modify, publicly perform or display, transmit, publish, edit,
              adapt, create derivative works from, or otherwise make
              unauthorized use of the Materials. SmartCommerce reserves all
              rights not expressly granted in these Terms.
            </p>
            <div className="font-bold mt-4">Disclaimer of Warranties.</div>
            <p>
              THE SERVICE, INCLUDING WITHOUT LIMITATION, ALL MATERIALS, ARE MADE
              AVAILABLE ON AN “AS IS”, “AS AVAILABLE” AND “WITH ALL FAULTS”
              BASIS AND (II) SMARTCOMMERCE AND ITS EMPLOYEES, MANAGERS, MEMBERS,
              OFFICERS, SHAREHOLDERS, PARENT COMPANY, AGENTS, VENDORS AND
              CONTRACTORS (COLLECTIVELY, THE "SMARTCOMMERCE PARTIES") MAKE NO
              REPRESENTATIONS OR WARRANTIES OR ENDORSEMENTS OF ANY KIND
              WHATSOEVER, EXPRESS OR IMPLIED, AS TO: (A) THE SERVICE; (B) THE
              CONTENT ON OR PROVIDED THROUGH THE SERVICE; (C) THE FUNCTIONS MADE
              ACCESSIBLE ON OR THROUGH THE SERVICE; (D) ANY PRODUCTS, SERVICES
              OR INSTRUCTIONS OFFERED OR REFERENCED AT THE SERVICE; OR (F)
              SECURITY ASSOCIATED WITH THE TRANSMISSION OF INFORMATION TO OR
              FROM SMARTCOMMERCE OR VIA THE SERVICE. IN ADDITION, THE
              SMARTCOMMERCE PARTIES HEREBY DISCLAIM ALL WARRANTIES, EXPRESS OR
              IMPLIED, INCLUDING, WITHOUT LIMITATION, THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, NON-INFRINGEMENT, TITLE, CUSTOM, TRADE, QUIET ENJOYMENT,
              SYSTEM INTEGRATION AND FREEDOM FROM VIRUS. The SmartCommerce
              Parties do not make any representations or warranties that the
              information (including any instructions) on the Service is
              accurate, complete, correct, adequate, useful, timely, reliable or
              otherwise. The SmartCommerce Parties do not warrant that your use
              of the service or items are lawful in any particular jurisdiction,
              and the SmartCommerce Parties specifically disclaim such
              warranties. Some jurisdictions limit or do not allow the
              disclaimer of implied or other warranties so the above disclaimer
              may not apply to the extent such jurisdiction's law is applicable
              to these terms.
            </p>
            <p>
              You are solely responsible for your interactions with any
              third-parties and other users and we are not responsible for the
              activities, omissions, or other conduct, whether online or
              offline, of any third-parties or user of Services.
            </p>
            <div className="font-bold mt-4">Limitations on Liability</div>
            <p>
              UNDER NO CIRCUMSTANCES, INCLUDING NEGLIGENCE, SHALL ANY OF THE
              SMARTCOMMERCE PARTIES BE LIABLE FOR ANY DIRECT, INDIRECT,
              INCIDENTAL, SPECIAL, PUNITIVE OR CONSEQUENTIAL DAMAGES THAT MAY
              RESULT FROM THE ACCESS OF, USE OR INABILITY TO USE OUR SERVICES
              AND/OR CONTENT, INCLUDING WITHOUT LIMITATION, USE OF OR RELIANCE
              ON INFORMATION, INTERRUPTIONS, ERRORS, DEFECTS, MISTAKES,
              OMISSIONS, DELETIONS OF FILES, DELAYS IN OPERATION OR
              TRANSMISSION, NON-DELIVERY OF INFORMATION, DISCLOSURE OF
              COMMUNICATIONS, OR ANY OTHER FAILURE OF PERFORMANCE. TO THE EXTENT
              PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL SMARTCOMMERCE’S
              AGGREGATE LIABILITY UNDER THESE TERMS EXCEED U.S.$100.00. 
            </p>
            <div className="font-bold mt-4">Third-Party Service</div>
            <p>
              The Service may contain links to third-party platforms or websites
              (each, a “Third-Party Service”). You acknowledge and agree that we
              have no control over, and are not responsible for, these
              Third-Party Service or their use of your personal information. We
              do not endorse, recommend, or vouch for the security of such
              Third-Party Services. We recommend that you review their terms of
              service and privacy policies before accessing and using the
              Third-Party Service.
            </p>
            <div className="font-bold mt-4">Governing Law</div>
            <p>
              You agree that (i) the Service shall be deemed solely based in
              Georgia; and (ii) the Service shall be deemed a passive one that
              does not give rise to personal jurisdiction over SmartCommerce,
              either specific or general, in jurisdictions other than Georgia.
              These Terms shall be governed by the internal substantive laws of
              the State of Georgia, without respect to its conflict of laws
              principles. You agree to submit to the personal jurisdiction of
              the federal and state courts, located in Fulton county, Georgia,
              for any actions for which we retain the right to seek injunctive
              or other equitable relief in a court of competent jurisdiction to
              prevent the actual or threatened infringement of misappropriation
              or violation of our copyrights, trademarks, trade secrets,
              patents, or other intellectual property or proprietary rights
            </p>
            <div className="font-bold mt-4">Severability</div>
            <p>
              In the event that a provision of these Terms is found to be
              unlawful, conflicting with another provision of the Terms, or
              otherwise unenforceable, the Terms will remain in force as though
              it had been entered into without that unenforceable provision
              being included in it.
            </p>
             <div className="font-bold mt-4">Non-Waiver</div>
            <p>
              We reserve all rights permitted to us under these Terms as well as
              under the provisions of any applicable law. Our non-enforcement of
              any particular provision or provisions of these Terms or any
              applicable law should not be construed as our waiver of the right
              to enforce that same provision under the same or different
              circumstances at any time in the future.
            </p>
            <div className="font-bold mt-4">Modifications</div>
            <p>
              We reserve the right, at our discretion, to update, change,
              modify, add, or remove portions of these Terms at any time by
              posting the amended Terms on our website and, although not
              obligated, we may choose to provide additional notice, such as an
              email message or messaging within the Service, especially for
              material changes. It is important that you review these Terms
              regularly to ensure you are updated on any changes. Changes to
              these Terms are effective seven (7) days after being posted on our
              website, unless stated otherwise. Your continued use of the
              Service after any such updates take effect constitutes your
              agreement to the new terms. In the event of any material changes,
              disputes arising under these Terms will be governed by the version
              of the Terms in effect at the time the dispute arises.{" "}
            </p>
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const { privacy } = await fetchPrivacy();
  return {
    props: { preview, privacy },
    revalidate: 60,
  };
}
