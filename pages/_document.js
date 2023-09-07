import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <script src="https://js.chatlio.com/widget.js" async></script>
        <chatlio-widget widgetid="21276619-1a50-4dc5-64d0-4abfae3e95b2"></chatlio-widget>
        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/8cddd9e07b2f233dbfda8450/script.js"
        ></script>
        {/* Tag manager script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-15J5MMF9N6"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-15J5MMF9N6');
              `,
            }}
          ></script>

          {/* MNTN Tracking Pixel */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  "use strict";
                  var e = null,
                    b = "4.0.0",
                    n = "34274",
                    additional = "term=value",
                    t,
                    r,
                    i;
                  try {
                    t =
                      top.document.referer !== ""
                        ? encodeURIComponent(
                            top.document.referrer.substring(0, 2048)
                          )
                        : "";
                  } catch (o) {
                    t =
                      document.referrer !== null
                        ? document.referrer.toString().substring(0, 2048)
                        : "";
                  }
                  try {
                    r =
                      window &&
                      window.top &&
                      document.location &&
                      window.top.location === document.location
                        ? document.location
                        : window &&
                          window.top &&
                          window.top.location &&
                          "" !== window.top.location
                        ? window.top.location
                        : document.location;
                  } catch (u) {
                    r = document.location;
                  }
                  try {
                    i =
                      parent.location.href !== ""
                        ? encodeURIComponent(
                            parent.location.href.toString().substring(0, 2048)
                          )
                        : "";
                  } catch (a) {
                    try {
                      i =
                        r !== null
                          ? encodeURIComponent(r.toString().substring(0, 2048))
                          : "";
                    } catch (f) {
                      i = "";
                    }
                  }
                  var l,
                    c = document.createElement("script"),
                    h = null,
                    p = document.getElementsByTagName("script"),
                    d = Number(p.length) - 1,
                    v = document.getElementsByTagName("script")[d];
                  if (typeof l === "undefined") {
                    l = Math.floor(Math.random() * 1e17);
                  }
                  h =
                    "dx.mountain.com/spx?" +
                    "dxver=" +
                    b +
                    "&shaid=" +
                    n +
                    "&tdr=" +
                    t +
                    "&plh=" +
                    i +
                    "&cb=" +
                    l +
                    additional;
                  c.type = "text/javascript";
                  c.src =
                    "https:" === document.location.protocol
                      ? "https://" + h
                      : "http://" + h;
                  v.parentNode.insertBefore(c, v);
                })()
              `,
            }}
          />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
