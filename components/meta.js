import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <link rel="canonical" href="https://smartcommerce.com/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`SmartCommerce provides innovative omnichannel solutions that empower multichannel brands to engage consumers seamlessly. Our data-driven platform enhances the shopping experience with one-click carting, shoppable links, and real-time stock tracking. Trusted by leading brands, we help you drive sales across all digital touchpoints, ensuring your products reach consumers wherever they shop. Discover how our Master Optimization Engine (MOE) can transform your commerce strategy today!`}
      />
      <meta property="og:url" content="https://smartcommerce.com/" />
      <meta property="og:site_name" content="SmartCommerce" />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta
        name="facebook-domain-verification"
        content="bc4iwnozh0phcwk9d8vorr9ly1so80"
      />
    </Head>
  );
}
