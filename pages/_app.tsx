import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
          rel="stylesheet"
        />
        <script defer src="assets/fontawesome/js/all.js"></script>
        <link
          rel="stylesheet"
          href="assets/plugins/tiny-slider/tiny-slider.css"
        />
        <link id="theme-style" rel="stylesheet" href="assets/css/theme-1.css" />

        <script src="\assets\plugins\jquery-3.4-1.min.js"></script>
        <script src="\assets\plugins\popper.min.js"></script>
        <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
        <script src="assets/plugins/tiny-slider/min/tiny-slider.js"></script>
        <script src="\assets\plugins\js-cookie.min.js"></script>
        <script src="\assets\js\dark-mode.js"></script>
      </Head>
      <Navbar />
      <div className="main-wrapper">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
