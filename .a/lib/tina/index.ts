import client from "../../.tina/__generated__/client";
import {
  BookmarksQuery,
  BookmarksQueryVariables,
  ChuletasQuery,
  ChuletasQueryVariables,
  HerramientasQuery,
  HerramientasQueryVariables,
  JavascriptQuery,
  JavascriptQueryVariables,
  LinuxQuery,
  LinuxQueryVariables,
  ReactQuery,
  ReactQueryVariables,
} from "../../.tina/__generated__/types";

export const getAllConnections = async () => {
  const {
    bookmarksConnection,
    chuletasConnection,
    herramientasConnection,
    javascriptConnection,
    linuxConnection,
    reactConnection,
  } = client.queries;

  const bookmarkData = await (
    await bookmarksConnection()
  ).data.bookmarksConnection.edges.map(({ node }) => node);
  const chuletaData = await (
    await chuletasConnection()
  ).data.chuletasConnection.edges.map(({ node }) => node);
  const herramientasData = await (
    await herramientasConnection()
  ).data.herramientasConnection.edges.map(({ node }) => node);
  const javascriptData = await (
    await javascriptConnection()
  ).data.javascriptConnection.edges.map(({ node }) => node);
  const linuxData = await (
    await linuxConnection()
  ).data.linuxConnection.edges.map(({ node }) => node);
  const reactData = await (
    await reactConnection()
  ).data.reactConnection.edges.map(({ node }) => node);

  return [
    ...bookmarkData,
    ...chuletaData,
    ...herramientasData,
    ...javascriptData,
    ...linuxData,
    ...reactData,
  ];
};

export type CollectionQueryPost =
  | "bookmarks"
  | "chuletas"
  | "herramientas"
  | "javascript"
  | "linux"
  | "react";

export type DataCollection =
  | BookmarksQuery
  | ChuletasQuery
  | HerramientasQuery
  | JavascriptQuery
  | LinuxQuery
  | ReactQuery;

export type VariablesCollection =
  | BookmarksQueryVariables
  | ChuletasQueryVariables
  | HerramientasQueryVariables
  | JavascriptQueryVariables
  | LinuxQueryVariables
  | ReactQueryVariables;

export const queries: {
  [key in CollectionQueryPost]: ({
    relativePath,
  }: {
    relativePath: string;
  }) => Promise<{
    data: DataCollection;
    variables: VariablesCollection;
    query: string;
  }>;
} = {
  bookmarks: async ({ relativePath }: { relativePath: string }) =>
    await client.queries.bookmarks({ relativePath }),
  chuletas: async ({ relativePath }: { relativePath: string }) =>
    await client.queries.chuletas({ relativePath }),
  herramientas: async ({ relativePath }: { relativePath: string }) =>
    await client.queries.herramientas({ relativePath }),
  javascript: async ({ relativePath }: { relativePath: string }) =>
    await client.queries.javascript({ relativePath }),
  linux: async ({ relativePath }: { relativePath: string }) =>
    await client.queries.linux({ relativePath }),
  react: async ({ relativePath }: { relativePath: string }) =>
    await client.queries.react({ relativePath }),
};
