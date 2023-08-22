import "../styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Poppins } from "next/font/google";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-74080712-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }) {
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
