import "../styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Poppins } from "next/font/google";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactGA from "react-ga";
import GTM from "../lib/GMT";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }) {
  ReactGA.initialize(process.env.PUBLIC_NEXT_TRACKING_ID);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Trigger a custom GTM event for route changes
      window.dataLayer.push({ event: 'page_view', page_path: url });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <main className={poppins.className}>
      <GTM />
      <Component {...pageProps} />
      <ToastContainer
        hideProgressBar
        icon={false}
        autoClose={3000}
        closeButton={false}
      />
    </main>
  );
}
