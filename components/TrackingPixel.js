//import { useEffect } from 'react';

// const TrackingPixel = () => {

//   useEffect(() => {
//     (function () {
//       "use strict";
//        var b = "4.0.0",
//         n = "34274",
//         additional = "term=value",
//         t, r, i;

//       try {
//         if (window.top === window) {
//           r = top.document.referrer !== "" ? encodeURIComponent(top.document.referrer.toString().substring(0, 2048)) : "";
//         } else {
//           r = document.referrer !== null ? encodeURIComponent(document.referrer.toString().substring(0, 2048)) : "";
//         }
//       } catch (error) {
//         r = document.location;
//       }

//       try {
//         const parentURL = parent.location.href;
//         i = parentURL ? encodeURIComponent(parentURL.substring(0, 2048)) : "";
//       } catch (error) {
//         i = r ? encodeURIComponent(r.toString().substring(0, 2048)) : "";
//       }

//       // Rest of the code
//       var c = document.createElement("script");
//       var h = null;
//       var p = document.getElementsByTagName("script");
//       var d = Number(p.length) - 1;
//       var v = document.getElementsByTagName("script")[d];
//       var l = Math.floor(Math.random() * 1e17);
//       h = "dx.mountain.com/spx?" + "dxver=" + b + "&shaid=" + n + "&tdr=" + t + "&plh=" + i + "&cb=" + l + additional;
//       c.type = "text/javascript";
//       c.src = ("https:" === document.location.protocol ? "https://" : "http://") + h;
//       v.parentNode.insertBefore(c, v);
//     })();

//   }, []);

//   return null;
// };

// export default TrackingPixel;

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'

const handleRouteChange = () => {
  pageview()
}

const FB_PIXEL_ID = process.env.PUBLIC_NEXT_TRACKING_ID

const pageview = () => {
  window.fbq('track', 'PageView')
}

const FacebookPixel = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    // the below will only fire on route changes (not initial load - that is handled in the script below)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Script id="facebook-pixel">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', ${FB_PIXEL_ID});
        fbq('track', 'PageView');
      `}
    </Script>
  )
}

export default FacebookPixel
