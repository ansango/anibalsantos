import "../styles.css";
import TinaProvider from "../.tina/components/TinaDynamicProvider";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { DefaultSeo, type DefaultSeoProps } from "next-seo";
import { SessionProvider, useSession } from "next-auth/react";
import { AppProps } from "next/app";
import { Session } from "next-auth";
import { NextComponentType } from "next";
import { ReactNode } from "react";

const defaultSeoProps: DefaultSeoProps = {
  title: "ansango",
  titleTemplate: "%s | Aníbal Santos Gómez | Frontend Engineer",
  robotsProps: {
    maxImagePreview: "standard",
    notranslate: true,
    maxSnippet: -1,
  },
  description:
    "Blog sobre tecnologías, programación, herramientas, chuletas, apuntes y desarrollo web. Esto es Javascript, copiar y pegar.",
  canonical: `${process.env.NEXT_PUBLIC_WEB_URI}`,
  mobileAlternate: {
    media: "handheld",
    href: `${process.env.NEXT_PUBLIC_WEB_URI}`,
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
    },
    {
      name: "author",
      content: "Aníbal Santos Gómez",
    },
    {
      name: "keywords",
      content:
        "desarrollo web, javascript, react, nextjs, nodejs, typescript, css, html, frontend, backend, programación, tecnología, herramientas, chuletas, apuntes, copiar y pegar",
    },
    {
      name: "publisher",
      content: "Aníbal Santos Gómez",
    },
  ],
  twitter: {
    handle: "@iamasync_",
    site: "@iamasync_",
    cardType: "summary_large_image",
  },
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_WEB_URI}`,
    title: "Anibal Santos",
    type: "website",
    description:
      "Blog sobre tecnologías, programación, herramientas, chuletas, apuntes y desarrollo web. Esto es Javascript, copiar y pegar.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URI}/logo.png`,
        width: 400,
        height: 400,
        alt: "Anibal Santos",
      },
    ],
    locale: "es_ES",
    site_name: "Anibal Santos Gómez",
    profile: {
      firstName: "Anibal",
      lastName: "Santos",
      username: "Anibal Santos",
    },
  },
};

function Auth({ children }: { children: ReactNode }) {
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <></>;
  }

  return <>{children}</>;
}

type CustomAppProps = AppProps<{ session: Session }> & {
  Component: NextComponentType & { auth?: boolean };
};

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
      language="es"
    >
      <DefaultSeo {...defaultSeoProps} />
      <GoogleAnalytics trackPageViews strategy="lazyOnload" />
      <TinaProvider>
        <SessionProvider session={session}>
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </SessionProvider>
      </TinaProvider>
    </GoogleReCaptchaProvider>
  );
};

export default App;
