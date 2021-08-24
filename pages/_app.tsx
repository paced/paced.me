import { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../styles/globals.scss";

// eslint-disable-next-line require-jsdoc
function App({ Component, pageProps }: AppProps): JSX.Element {
  // noinspection HtmlRequiredTitleElement
  return (
    <div id={"base"}>
      <Head>
        {/* Base. */}

        <meta property="og:site_name" content="Paced Engineering" />

        {/* Image. */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="/img/profile.png" />
        <meta name="twitter:image" content="/img/profile.png" />
        <meta
          property="og:image:alt"
          content="A caricature of the owner of Paced Engineering when he was bald."
        />

        {/* Other. */}

        <meta property="og:type" content="website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

// noinspection JSUnusedGlobalSymbols
export default App;
