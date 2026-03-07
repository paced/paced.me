import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="content">
      <p>
        Paced Engineering &copy; 2015 - {new Date().getFullYear()},
        <a
          href="https://github.com/paced/paced.me"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: "0.5ch" }}
        >
          <FaGithub size={9} /> Source
        </a>
      </p>
    </footer>
  );
}
