import { AppProps } from "next/app";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../styles/globals.scss";

// eslint-disable-next-line require-jsdoc
function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div id={"base"}>
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
