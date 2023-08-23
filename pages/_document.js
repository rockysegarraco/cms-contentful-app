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

        {/* Include other head elements here */}
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Chatlio Widget */}
        <Script src="https://js.chatlio.com/widget.js" strategy="lazyOnload" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              Chatlio('init', { widgetId: '21276619-1a50-4dc5-64d0-4abfae3e95b2' });
            `,
          }}
        />
        {/* Mountain Analytics
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                "use strict";
                var version = "4.0.0";
                var shaid = "34274";
                var additional = "term=value";
                // Rest of your script...
              })();
            `,
          }}
        />
        */}
      </body>
    </Html>
  );
}
