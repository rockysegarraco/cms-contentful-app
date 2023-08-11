import { createClient } from "contentful";

// contentful baseAPI init;
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const POST_GRAPHQL_FIELDS = `
slug
title
topic
coverImage {
  url
}
date
author {
  name
  picture {
    url
  }
}
excerpt
formId
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

function extractPost(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items;
}

export async function getPreviewPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  );
  return extractPost(entry);
}

export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractPostEntries(entries);
}

export async function getAllPostsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      postCollection(order: date_DESC, preview: ${preview ? "true" : "false"}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPostEntries(entries);
}

export async function getPostAndMorePosts(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? "true" : "false"
    }, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}

// Blogs content

export const fetchBlogs = async (limit, skip) => {
  const res = await client.getEntries({
    content_type: "post",
    limit,
    skip,
    order: "-fields.date", // reverse order by
  });
  const total = res.total;
  return { posts: res.items, total };
};

// Newsletter Content

export const fetchNewsletter = async (limit, skip) => {
  const res = await client.getEntries({
    content_type: "newsletter",
    limit,
    skip,
    order: "-fields.date", // reverse order by
    // order: '-sys.createdAt', // reverse order by
  });
  const total = res.total;
  return { posts: res.items, total };
};

// Homepage Content

export const fetchHomepage = async () => {
  const res = await client.getEntries({ content_type: "homepage" });
  return res.items[0];
};

// News Content

export const fetchAllNews = async () => {
  const res = await client.getEntries({
    content_type: "news",
    order: "-fields.date", // reverse order by
  });
  return res.items;
};

export const fetchNewsWithSlug = async (slug) => {
  const res = await client.getEntries({
    content_type: "news",
    "fields.slug": slug,
    order: "-fields.date", // reverse order by
  });
  return res.items[0];
};

export const fetchNews = async (limit, skip) => {
  const res = await client.getEntries({
    content_type: "news",
    limit,
    skip,
    order: "-fields.date", // reverse order by
  });
  const total = res.total;
  return { posts: res.items, total };
};

// White Paper Content

export const fetchAllwhitePapers = async () => {
  const res = await client.getEntries({
    content_type: "whitePapers",
    order: "-fields.date", // reverse order by
  });
  return res.items;
};

export const fetchwhitePapersWithSlug = async (slug) => {
  const res = await client.getEntries({
    content_type: "whitePapers",
    "fields.slug": slug,
    order: "-fields.date", // reverse order by
  });
  return res.items[0];
};

export const fetchwhitePapers = async (limit, skip) => {
  const res = await client.getEntries({
    content_type: "whitePapers",
    limit,
    skip,
    order: "-fields.date", // reverse order by
  });
  const total = res.total;
  return { posts: res.items, total };
};
