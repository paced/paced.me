import { Component } from "react";

/**
 * A footer globally present for the entire website.
 */
export default class Footer extends Component {
  /**
   * @return {JSX.Element} the {@link JSX.Element}
   */
  render(): JSX.Element {
    const currentYear: number = new Date().getFullYear();

    return (
      <footer className="content">
        <p>Paced Engineering &copy; 2015 - {currentYear}.</p>
      </footer>
    );
  }
}
