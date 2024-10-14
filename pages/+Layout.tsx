import "@fontsource/rubik/latin-400.css";
import { PropsWithChildren, StrictMode } from "react";
import { HelmetProvider } from "react-helmet-async";

import Footer from "../components/footer.tsx";
import "./globals.css";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <StrictMode>
      <HelmetProvider>
        <div id="base">
          <main>{children}</main>
          <Footer />
        </div>
      </HelmetProvider>
    </StrictMode>
  );
}
