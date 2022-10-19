import Link from "next/link";
import { FC, useState } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import { components, Hero, Masonry, WrapperContent } from "../blocks";
import { useTheme } from "../layout";
import { monoRestColors, monoTextColors } from "../styles";

import { Container } from "../util/container";
import { Image } from "../util/image";
import { Section } from "../util/section";

type Pagination = {
  title: string;
  route: string;
};
const Pagination: FC<{
  prev?: Pagination | null;
  next?: Pagination | null;
}> = ({ next, prev }) => {
  const { mono } = useTheme();
  return (
    <Container className="grid grid-cols-2 gap-5">
      <div className="text-left group">
        {prev && (
          <>
            <h4
              className={`text-xs tracking-wide italic ${monoTextColors[500][mono]}`}
            >
              Anterior
            </h4>
            <Link href={prev.route} passHref>
              <a
                className={`line-clamp-1 max-w-xs mr-auto ${monoTextColors[600][mono]} ${monoRestColors.groupTextHover800[mono]}`}
              >
                {prev.title}
              </a>
            </Link>
          </>
        )}
      </div>

      <div className="text-right group">
        {next && (
          <>
            <h4
              className={`text-xs tracking-wide italic ${monoTextColors[500][mono]}`}
            >
              Siguiente
            </h4>

            <Link href={`${next.route}`} passHref>
              <a
                className={`line-clamp-1 max-w-xs ml-auto ${monoTextColors[600][mono]} ${monoRestColors.groupTextHover800[mono]}`}
              >
                {next.title}
              </a>
            </Link>
          </>
        )}
      </div>
    </Container>
  );
};

export type BlogProps = {
  body?: any;
  bodyHighlight?: boolean;
  publishedAt?: string;
  title?: string;
  cover?: string;
  summary: string;
  prev?: Pagination | null;
  next?: Pagination | null;
  url?: string;
};

export const Blog: FC<BlogProps> = ({
  prev,
  next,
  title,
  summary,
  cover,
  body,
  bodyHighlight,
  publishedAt,
  url,
}) => {
  return (
    <article>
      <Section>
        <Hero
          data={{
            image: {
              alt: title,
              url: cover,
              aspectRatio: "video",
            },
            headline: title,
            text: summary,
            type: "blogPost",
          }}
        />
      </Section>
      <WrapperContent highlight={bodyHighlight}>
        <TinaMarkdown components={components} content={body} />
      </WrapperContent>
      {(next || prev) && <Pagination next={next} prev={prev} />}
    </article>
  );
};
