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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script src="https://js.chatlio.com/widget.js" async></script>
        <chatlio-widget widgetid="21276619-1a50-4dc5-64d0-4abfae3e95b2"></chatlio-widget>
        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/8cddd9e07b2f233dbfda8450/script.js"
        ></script>
        {/* Tag manager scripts */}
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-K6MBFWV"
        ></script>
        <script
          async
          src="https://www.tfaforms.com/publish/4988154"
          data-qp-target-id=""
          defer
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
