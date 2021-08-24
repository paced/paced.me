import { Component } from "react";

import Navbar from "../components/navbar";

/**
 * The layout shared by all pages.
 */
export default class Layout extends Component {
  /**
   * @returns {JSX.Element} the {@link JSX.Element}
   */
  render(): JSX.Element {
    return (
      <div className={"container"}>
        <Navbar />
        <main></main>
      </div>
    );
  }
}
