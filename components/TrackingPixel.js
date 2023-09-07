// components/CustomHead.js

import React from 'react';

const MNTNPixel = () => {
  return (
    <>
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
    </>
  );
};

export default MNTNPixel;
