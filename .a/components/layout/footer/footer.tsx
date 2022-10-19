import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "../../util/container";
import { RawRenderer } from "./rawRenderer";
import {
  monoTextColors,
  primaryHoverTextColors,
  primaryTextColors,
} from "../../styles";
import { useTheme } from "../theme";

export const Footer = ({ data, rawData }) => {
  const { color, mono } = useTheme();
  const [prefix, setPrefix] = useState("");

  useEffect(() => {
    if (window.location.pathname.startsWith("/admin")) {
      setPrefix("/admin");
    }
  });

  const internalLinks =
    (data.links &&
      data.links.map((link, i) => ({
        el: (
          <li key={`${link.label}-${i}`}>
            <Link href={`${prefix}/${link.href}`} passHref>
              <a
                className={`text-sm font-normal ${monoTextColors[500][mono]} ${primaryHoverTextColors[color]}`}
              >
                {link.label}
              </a>
            </Link>
          </li>
        ),
      }))) ||
    [];
  const socialLinks =
    (data.social &&
      data.social.map((link, i) => ({
        el: (
          <li key={`${link.label}-${i}-external`}>
            <a
              className={`text-sm font-normal ${monoTextColors[500][mono]} ${primaryHoverTextColors[color]}`}
              href={link.href}
              target="_blank"
            >
              {link.label}
            </a>
          </li>
        ),
      }))) ||
    [];

  return (
    <>
      <footer>
        <Container>
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3
                    className={`text-xs font-semibold tracking-wider ${primaryTextColors[color]} uppercase`}
                  >
                    Mapa
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {internalLinks.map((link) => link.el)}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3
                    className={`text-xs font-semibold tracking-wider ${primaryTextColors[color]} uppercase`}
                  >
                    Social
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {socialLinks.map((link) => link.el)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      {process.env.NODE_ENV === "development" && (
        <RawRenderer rawData={rawData} />
      )}
    </>
  );
};
