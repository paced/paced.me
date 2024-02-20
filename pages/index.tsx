import { faKeybase } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";

/**
 * The landing page with some basic frontpage information.
 */
export default class Home extends Component {
  /**
   * My PGP public key signature.
   */
  keybaseSignature = "AD13 F72A 4454 A8AE";

  /**
   * My Keybase identity URL.
   */
  keybaseUrl = "https://keybase.io/paced";

  /**
   * @return {JSX.Element} the {@link JSX.Element}
   */
  render(): JSX.Element {
    return (
      <>
        <div className="content">
          <div className="brief">
            <h1 className="title big-pad">Hey.</h1>
            <h2 className="subtitle">
              I&apos;m Thomas <span className="highlight">(he/him)</span>.
            </h2>
            <p>
              I&apos;m a full-stack technologist from sunny Melbourne, Australia. You might also
              know me as:
            </p>
            <ul>
              <li>
                <span className="tag">Simplified Chinese</span> 王天皓
              </li>
              <li>
                <span className="tag">Romanised</span> Tian Hao Wang
              </li>
              <li>
                <span className="tag">Anglicised</span> Thomas Wang
              </li>
            </ul>
            <p>
              I am primarily passionate about <span className="highlight">
                usability
              </span>, <span className="highlight">
                interactivity
              </span>, and <span className="highlight">innovation</span>.
            </p>
          </div>
          <div className="index-socials">
            <b>
              <FontAwesomeIcon icon={faKeybase} />
            </b> Keybase: <a href={this.keybaseUrl} target={"__blank"}>
              {this.keybaseSignature}
            </a>
          </div>
        </div>
      </>
    );
  }
}
