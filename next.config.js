/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: 'custom',
    domains: ["images.ctfassets.net"],
  },
  env: {
    CONTENTFUL_SPACE_ID:process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_ACCESS_TOKEN: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_SECRET: process.env.CONTENTFUL_PREVIEW_SECRET,
    CONTENTFUL_REVALIDATE_SECRET: process.env.CONTENTFUL_REVALIDATE_SECRET,
    CONTENTFUL_MANAGEMENT_TOKEN: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
  },
}
