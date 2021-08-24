import { AppProps } from "next/app";
import "../styles/globals.css";

// eslint-disable-next-line require-jsdoc
function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

// noinspection JSUnusedGlobalSymbols
export default App;
