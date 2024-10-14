import { Helmet } from "react-helmet-async";
import { FaKeybase } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Paced Engineering</title>
      </Helmet>
      <div className="content">
        <div className="brief">
          <h1 className="title big-pad">Hey.</h1>
          <h2 className="subtitle">
            I&apos;m Thomas <span className="highlight">(he/him)</span>.
          </h2>
          <p>I&apos;m a full-stack technologist from sunny Melbourne, Australia. You might also know me as:</p>
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
            I am primarily passionate about <span className="highlight"> usability </span>,{" "}
            <span className="highlight">interactivity</span>, and <span className="highlight">innovation</span>.
          </p>
        </div>
        <div className="index-socials">
          <b>
            <FaKeybase />
          </b>{" "}
          Keybase:{" "}
          <a href="https://keybase.io/paced" target="__blank" rel="noreferrer noopener">
            AD13 F72A 4454 A8AE
          </a>
        </div>
      </div>
    </>
  );
}
