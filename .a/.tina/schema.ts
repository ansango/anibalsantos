import {
  defineSchema,
  defineConfig,
  RouteMappingPlugin,
  TinaField,
} from "tinacms";
import { DocumentCreatorArgs } from "tinacms/dist/hooks/use-content-creator";
import {
  contentBlockSchema,
  contactFormSchema,
  heroBlockSchema,
  masonryBlockSchema,
} from "../components/blocks/";
import { containerSizesCn } from "../components/blocks/content/components";
import { iconSchema } from "../components/util/icon";
import { aspectRatioCn, objectPositionCn } from "../components/util/image";
import { tagSchema } from "../constants/tags";
import { kebabCase } from "../lib/utils";

import { client } from "./__generated__/client";

const fieldBase = [
  {
    name: "seo",
    label: "SEO",
    type: "object",
    fields: [
      {
        name: "title",
        label: "Title",
        type: "string",
      },
      {
        name: "description",
        label: "Description",
        type: "string",
      },
    ],
  },
  {
    name: "title",
    label: "Title",
    type: "string",
  },
  {
    name: "summary",
    label: "Summary",
    type: "string",
  },
  { ...tagSchema },
  {
    label: "Body Highlight",
    name: "bodyHighlight",
    type: "boolean",
  },
  {
    type: "rich-text",
    label: "Body",
    name: "_body",
    templates: [
      {
        name: "DateTime",
        label: "Date & Time",
        inline: true,
        fields: [
          {
            name: "format",
            label: "Format",
            type: "string",
            options: ["utc", "iso", "local"],
          },
        ],
      },
      {
        name: "BlockQuote",
        label: "Block Quote",
        fields: [
          {
            name: "children",
            label: "Quote",
            type: "rich-text",
          },
          {
            name: "authorName",
            label: "Author",
            type: "string",
          },
        ],
      },
      {
        name: "ContainerText",
        label: "Container Text",
        fields: [
          {
            name: "size",
            label: "Size",
            type: "string",
            options: Object.keys(containerSizesCn),
          },
          {
            name: "children",
            label: "Text",
            type: "rich-text",
            templates: [
              {
                name: "Image",
                label: "Image",
                fields: [
                  {
                    name: "url",
                    label: "URL",
                    type: "image",
                  },
                  {
                    name: "alt",
                    label: "Alt Text",
                    type: "string",
                  },
                  {
                    name: "aspectRatio",
                    label: "Aspect Ratio",
                    type: "string",
                    options: Object.keys(aspectRatioCn),
                  },
                  {
                    name: "centerImage",
                    label: "Center Image",
                    type: "string",
                    options: Object.keys(objectPositionCn),
                  },
                ],
              },
              {
                name: "BlockQuote",
                label: "Block Quote",
                fields: [
                  {
                    name: "children",
                    label: "Quote",
                    type: "rich-text",
                  },
                  {
                    name: "authorName",
                    label: "Author",
                    type: "string",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Image",
        label: "Image",
        fields: [
          {
            name: "url",
            label: "URL",
            type: "image",
          },
          {
            name: "alt",
            label: "Alt Text",
            type: "string",
          },
          {
            name: "aspectRatio",
            label: "Aspect Ratio",
            type: "string",
            options: Object.keys(aspectRatioCn),
          },
          {
            name: "centerImage",
            label: "Center Image",
            type: "string",
            options: Object.keys(objectPositionCn),
          },
        ],
      },
    ],
    isBody: true,
  },
  {
    name: "draft",
    label: "Draft",
    type: "boolean",
  },
  {
    name: "publishedAt",
    label: "Published At",
    type: "datetime",
  },
] as TinaField[];

const schema = defineSchema({
  config: {
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
    branch:
      process.env.NEXT_PUBLIC_TINA_BRANCH! || // custom branch env override
      process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF! || // Vercel branch env
      process.env.HEAD!, // Netlify branch env
    token: process.env.TINA_TOKEN!,
    media: {
      loadCustomStore: async () => {
        const pack = await import("next-tinacms-s3");
        return pack.TinaCloudS3MediaStore;
      },
    },
  },

  collections: [
    {
      label: "Blog/Bookmarks",
      name: "bookmarks",
      path: "content/blog/bookmarks",
      format: "mdx",
      fields: [...fieldBase],
    },
    {
      label: "Blog/Chuletas",
      name: "chuletas",
      path: "content/blog/chuletas",
      format: "mdx",
      fields: [...fieldBase],
    },
    {
      label: "Blog/Javascript",
      name: "javascript",
      path: "content/blog/javascript",
      format: "mdx",
      fields: [...fieldBase],
    },
    {
      label: "Blog/React",
      name: "react",
      path: "content/blog/react",
      format: "mdx",
      fields: [...fieldBase],
    },
    {
      label: "Blog/Herramientas",
      name: "herramientas",
      path: "content/blog/herramientas",
      format: "mdx",
      fields: [...fieldBase],
    },
    {
      label: "Blog/Linux",
      name: "linux",
      path: "content/blog/linux",
      format: "mdx",
      fields: [...fieldBase],
    },

    {
      label: "Pages",
      name: "page",
      path: "content/pages",
      format: "mdx",

      fields: [
        {
          name: "seo",
          label: "SEO",
          type: "object",
          fields: [
            {
              name: "title",
              label: "Title",
              type: "string",
            },
            {
              name: "description",
              label: "Description",
              type: "string",
            },
          ],
        },
        {
          type: "object",
          list: true,
          name: "blocks",
          label: "Sections",
          ui: {
            visualSelector: true,
          },
          templates: [
            contentBlockSchema,
            heroBlockSchema,
            contactFormSchema,
            masonryBlockSchema,
          ],
        },
      ],
    },

    {
      label: "Global",
      name: "global",
      path: "content/global",
      format: "json",
      fields: [
        {
          type: "object",
          label: "Header",
          name: "header",
          fields: [
            { ...iconSchema, label: "Icon Menu", name: "iconMenu" },
            { ...iconSchema, label: "Icon Close", name: "iconClose" },
            {
              type: "object",
              label: "Nav Links",
              name: "nav",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item?.label };
                },
                defaultItem: {
                  href: "home",
                  label: "Home",
                },
              },
              fields: [
                {
                  type: "string",
                  label: "Link",
                  name: "href",
                },
                {
                  type: "string",
                  label: "Label",
                  name: "label",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          label: "Footer",
          name: "footer",
          fields: [
            {
              type: "object",
              label: "Links",
              name: "links",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item?.label };
                },
                defaultItem: {
                  href: "",
                  label: "Home",
                },
              },
              fields: [
                {
                  type: "string",
                  label: "Link",
                  name: "href",
                },
                {
                  type: "string",
                  label: "Label",
                  name: "label",
                },
              ],
            },
            {
              type: "object",
              label: "Social Links",
              name: "social",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item?.label };
                },
                defaultItem: {
                  href: "/",
                  label: "Twitter",
                },
              },
              fields: [
                {
                  type: "string",
                  label: "Link",
                  name: "href",
                },
                {
                  type: "string",
                  label: "Label",
                  name: "label",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          label: "Theme",
          name: "theme",
          fields: [
            {
              type: "string",
              label: "Mono Color",
              name: "mono",
              options: [
                {
                  label: "Slate",
                  value: "slate",
                },
                {
                  label: "Gray",
                  value: "gray",
                },
                {
                  label: "Zinc",
                  value: "zinc",
                },
                {
                  label: "Neutral",
                  value: "neutral",
                },
                {
                  label: "Stone",
                  value: "stone",
                },
              ],
            },
            {
              type: "string",
              label: "Primary Color",
              name: "color",
              options: [
                {
                  label: "Slate",
                  value: "slate",
                },
                {
                  label: "Gray",
                  value: "gray",
                },
                {
                  label: "Zinc",
                  value: "zinc",
                },
                {
                  label: "Neutral",
                  value: "neutral",
                },
                {
                  label: "Stone",
                  value: "stone",
                },
                {
                  label: "Red",
                  value: "red",
                },
                {
                  label: "Orange",
                  value: "orange",
                },
                {
                  label: "Amber",
                  value: "amber",
                },
                {
                  label: "Yellow",
                  value: "yellow",
                },
                {
                  value: "lime",
                  label: "Lime",
                },
                {
                  label: "Green",
                  value: "green",
                },
                {
                  label: "Emerald",
                  value: "emerald",
                },
                {
                  label: "Teal",
                  value: "teal",
                },
                {
                  label: "Cyan",
                  value: "cyan",
                },
                {
                  label: "Sky",
                  value: "sky",
                },
                {
                  label: "Blue",
                  value: "blue",
                },
                {
                  label: "Indigo",
                  value: "indigo",
                },
                {
                  label: "Violet",
                  value: "violet",
                },

                {
                  label: "Purple",
                  value: "purple",
                },
                {
                  label: "Fuchsia",
                  value: "fuchsia",
                },
                {
                  label: "Pink",
                  value: "pink",
                },
                {
                  label: "Rose",
                  value: "rose",
                },
              ],
            },
            {
              type: "string",
              name: "font",
              label: "Font Family",
              options: [
                {
                  label: "System Sans",
                  value: "sans",
                },
                {
                  label: "Work Sans",
                  value: "work-sans",
                },
              ],
            },
            {
              type: "string",
              name: "icon",
              label: "Icon Set",
              options: [
                {
                  label: "Heroicons",
                  value: "hi",
                },
              ],
            },
            {
              type: "string",
              name: "darkMode",
              label: "Dark Mode",
              options: [
                {
                  label: "System",
                  value: "system",
                },
                {
                  label: "Light",
                  value: "light",
                },
                {
                  label: "Dark",
                  value: "dark",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

export const tinaConfig = defineConfig({
  client,
  schema,

  cmsCallback: (cms) => {
    /**
     * When `tina-admin` is enabled, this plugin configures contextual editing for collections
     */
    const RouteMapping = new RouteMappingPlugin((collection, document) => {
      if (["global"].includes(collection.name)) {
        return undefined;
      }
      if (["page"].includes(collection.name)) {
        if (document._sys.filename === "home") {
          return `/`;
        }
        return undefined;
      }

      return `blog/${collection.name}/${document._sys.filename}`;
    });
    cms.plugins.add(RouteMapping);

    return cms;
  },
  formifyCallback: ({ formConfig, createForm, createGlobalForm }) => {
    if (formConfig.id === "content/global/index.json") {
      return createGlobalForm(formConfig);
    }

    return createForm(formConfig);
  },
});

export type Template = {
  label: string;
  name: string;
  ui?: {
    previewSrc?: string;
    defaultItem?: object;
  };
  fields: TinaField[];
};

export default schema;
