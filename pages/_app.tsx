import { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../components/footer";
import "../styles/globals.scss";

// eslint-disable-next-line require-jsdoc
const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  // All pages have the same title and description.

  const title = "Paced Engineering";
  const description =
    "The personal profile website for Thomas Wang (AKA 'paced'), an engineer and musician from " +
    "Melbourne, Australia.";

  return (
    <div id={"base"}>
      <Head>
        {/* Base. */}

        <meta property="og:site_name" content="Paced Engineering" />

        <title>{title}</title>

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="/img/profile.png" />
        <meta name="twitter:image" content="/img/profile.png" />
        <meta
          property="og:image:alt"
          content="A caricature of the owner of Paced Engineering when he was bald."
        />

        <meta property="og:type" content="website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#FF00E6" />
      </Head>
      <main>
        <Component {...pageProps} />

        <Footer />
      </main>
    </div>
  );
};

export default App;
