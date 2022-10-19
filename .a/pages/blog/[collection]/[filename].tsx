/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "../../../.tina/__generated__/client";
import { useTina } from "tinacms/dist/edit-state";
import { Layout } from "../../../components/layout";
import FourOhFour from "../../404";

import { motion } from "framer-motion";
import { NextSeoProps } from "next-seo";
import { Blog } from "../../../components/blog";
import {
  CollectionQueryPost,
  getAllConnections,
  queries,
} from "../../../lib/tina";

const BlogPage = (props: AsyncReturnType<typeof getStaticProps>["props"]) => {
  const { prev, next, route, collection } = props;
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const post = data && (data[collection] as any);
  if (post && !post.draft) {
    const { publishedAt, title, summary, _body, bodyHighlight, cover } = post;

    const collectionTag =
      collection.charAt(0).toUpperCase() + collection.slice(1);

    const seoProps: NextSeoProps = {
      title: post?.seo?.title,
      titleTemplate: `%s | ${collectionTag} | ansango`,
      robotsProps: {
        maxImagePreview: "standard",
        notranslate: true,
        maxSnippet: -1,
      },
      description: post?.seo?.description,
      canonical: `${process.env.NEXT_PUBLIC_WEB_URI}/${route}`,
      mobileAlternate: {
        media: "handheld",
        href: `${process.env.NEXT_PUBLIC_WEB_URI}/${route}`,
      },
      additionalMetaTags: [
        {
          property: "article:published_time",
          content: post?.publishedAt,
        },
      ],
      openGraph: {
        url: `${process.env.NEXT_PUBLIC_WEB_URI}/${route}`,
        type: "article",
        title: post?.seo?.title,
        article: {
          authors: ["Aníbal Santos Gómez"],
          publishedTime: post?.publishedAt,
          tags: post?.tags,
          section: collectionTag,
        },
        description: post?.seo?.description,
        images: [
          {
            //TODO:  Add cover image
            url: `${process.env.NEXT_PUBLIC_WEB_URI}/static/blog/${collection}/${post.cover}.jpg`,
            width: 400,
            height: 400,
            alt: post?.seo?.title,
          },
        ],
      },
    };

    return (
      <Layout rawData={data} seo={seoProps}>
        <motion.div
          key={route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Blog
            {...{
              title,
              summary,
              cover,
              body: _body,
              bodyHighlight,
              next,
              prev,
              publishedAt,
              url: route,
            }}
          />
        </motion.div>
      </Layout>
    );
  }
  return <FourOhFour />;
};

export default BlogPage;

export const getStaticProps = async ({
  params,
}: {
  params: {
    filename: string;
    collection: CollectionQueryPost;
  };
}) => {
  const allPosts = await (
    await getAllConnections()
  ).filter((post) => post.draft !== true);

  const postIndex = allPosts
    .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1))
    .findIndex((post) => post._sys.filename === params.filename);

  const prevPost = allPosts[postIndex - 1] || null;
  const nextPost = allPosts[postIndex + 1] || null;

  const prev =
    (prevPost && {
      title: prevPost.title,
      route: `${prevPost._sys.path.replace("content", "").split(".")[0]}`,
    }) ||
    null;
  const next =
    (nextPost && {
      title: nextPost.title,
      route: `${nextPost._sys.path.replace("content", "").split(".")[0]}`,
    }) ||
    null;
  try {
    const tinaProps = await queries[params.collection]({
      relativePath: `${params.filename}.mdx`,
    });

    return {
      props: {
        ...tinaProps,
        collection: params.collection,
        route: `blog/${params.collection}/${params.filename}`,
        prev,
        next,
      },
    };
  } catch (error) {
    return {
      props: {
        prev: null,
        next: null,
        route: null,
        collection: null,
        data: null,
        query: null,
        variables: null,
      },
    };
  }
};

export const getStaticPaths = async () => {
  const listData = await getAllConnections();
  return {
    paths: listData.map((post) => ({
      params: {
        filename: post._sys.filename,
        collection: post._sys.path
          .replace("/content/blog", "")
          .split("/")[0] as CollectionQueryPost,
      },
    })),
    fallback: "blocking",
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
