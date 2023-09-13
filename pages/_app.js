import "../styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Poppins } from "next/font/google";
import ReactGA from "react-ga";
import TagManager from "react-gtm-module";
const tagManagerArgs = {
  gtmId: "GTM-K6MBFWV",
};
TagManager.initialize(tagManagerArgs);

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }) {
  ReactGA.initialize(process.env.PUBLIC_NEXT_TRACKING_ID);
  return (
    <main className={poppins.className}>
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
