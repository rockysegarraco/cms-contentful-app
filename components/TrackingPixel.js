import { useEffect } from 'react';

const TrackingPixel = () => {
  useEffect(() => {
    (function () {
      "use strict";
       var b = "4.0.0",
        n = "34274",
        additional = "term=value",
        t, r, i;

      try {
        if (window.top === window) {
          r = top.document.referrer !== "" ? encodeURIComponent(top.document.referrer.toString().substring(0, 2048)) : "";
        } else {
          r = document.referrer !== null ? encodeURIComponent(document.referrer.toString().substring(0, 2048)) : "";
        }
      } catch (error) {
        r = document.location;
      }

      try {
        const parentURL = parent.location.href;
        i = parentURL ? encodeURIComponent(parentURL.substring(0, 2048)) : "";
      } catch (error) {
        i = r ? encodeURIComponent(r.toString().substring(0, 2048)) : "";
      }

      // Rest of the code
      var c = document.createElement("script");
      var h = null;
      var p = document.getElementsByTagName("script");
      var d = Number(p.length) - 1;
      var v = document.getElementsByTagName("script")[d];
      var l = Math.floor(Math.random() * 1e17);
      h = "dx.mountain.com/spx?" + "dxver=" + b + "&shaid=" + n + "&tdr=" + t + "&plh=" + i + "&cb=" + l + additional;
      c.type = "text/javascript";
      c.src = ("https:" === document.location.protocol ? "https://" : "http://") + h;
      v.parentNode.insertBefore(c, v);
    })();

  }, []);

  return null;
};

export default TrackingPixel;
