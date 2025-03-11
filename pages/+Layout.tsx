import "@fontsource/rubik/latin-400.css";
import { PropsWithChildren, StrictMode } from "react";

import Footer from "../components/footer.tsx";
import "./globals.css";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <StrictMode>
      <div id="base">
        <main>{children}</main>
        <Footer />
      </div>
    </StrictMode>
  );
}
