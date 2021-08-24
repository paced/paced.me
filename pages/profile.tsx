import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faFigma, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faDatabase,
  faFighterJet,
  faGlobe,
  faGlobeAsia,
  faGraduationCap,
  faLanguage,
  faMusic,
  faPalette,
  faPeopleCarry,
  faServer,
  faSuitcase,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

/**
 * Props for the identity cards.
 */
interface CardProps {
  /**
   * An icon to go on the card.
   */
  icon?: IconDefinition;

  /**
   * The header for the card.
   */
  title: string;

  /**
   * The content in the body of the card.
   */
  content: string | JSX.Element;
}

/**
 * An identity card.
 *
 * @param props the {@link CardProps}
 * @returns {JSX.Element} the element
 * @constructor
 */
function Card(props: CardProps): JSX.Element {
  const icon: JSX.Element = props.icon ? <FontAwesomeIcon icon={props.icon} /> : <></>;

  return (
    <div className={"card profile-card"}>
      <header className={"card-header"}>
        <p className={"card-header-title"}>
          {icon} <span className={"card-header-text"}>{props.title}</span>
        </p>
      </header>
      <div className="card-content">
        <div className="content">{props.content}</div>
      </div>
    </div>
  );
}

// noinspection JSUnusedGlobalSymbols
/**
 * A profile page with a bunch of personal information.
 *
 * @returns {JSX.Element} the element
 * @constructor
 */
export default function Profile(): JSX.Element {
  const linkedInUrl = "https://linkedin.com/in/tianhao-wang";
  const miscUrl = "https://www.umisc.info/";

  const pageTitle = "Paced Engineering - Profile";
  const pageDescription =
    "An over-detailed profile page for a Melbournian software engineer going by the name of " +
    // eslint-disable-next-line
    '"paced".';

  return (
    <>
      <Head>
        {/* Base. */}
        <meta property="og:site_name" content="Paced Engineering" />
        <meta property="og:url" content="https://paced.me/profile" />
        <meta name="twitter:url" content="https://paced.me/profile" />

        {/* Title. */}

        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta name="twitter:title" content={pageTitle} />

        {/* Description. */}

        <meta name="description" content={pageDescription} />
        <meta property="og:description" content={pageDescription} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>
      <div className={"content brief wide-brief"}>
        <h1 className={"title"}>Profile</h1>
        <h2 className={"subtitle"}>This is where I overshare.</h2>

        <blockquote>
          <p>
            If you&apos;re a recruiter, you can probably find all you need at my{" "}
            <span className={"do-not-break"}>
              <a href={linkedInUrl} target={"__blank"}>
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
              !
            </span>
          </p>
          <p>Also, the information below is non-exhaustive; just the highlights.</p>
        </blockquote>

        <h3>Identity</h3>

        <div className={"columns"}>
          <div className={"column"}>
            <Card
              icon={faGlobeAsia}
              title={"Hometown"}
              content={
                <>
                  <p>My hometown has been Melbourne for most of my life.</p>
                  <p>
                    I lived in New York for a spell, though. I was born in Shanghai but I don&apos;t
                    really remember much of it.
                  </p>
                </>
              }
            />
          </div>
          <div className={"column"}>
            <Card
              icon={faSuitcase}
              title={"Profession"}
              content={
                <>
                  <p>
                    My official job title is <i>Software Engineer.</i>
                  </p>
                  <p>
                    Sometimes, I&apos;m known as a <i>Full Stack Software Developer.</i>
                  </p>
                </>
              }
            />
          </div>
          <div className={"column"}>
            <Card
              icon={faPeopleCarry}
              title={"Years of Service"}
              content={
                <>
                  <p>
                    I&apos;ve been practicing as a freelancer since 2015 and professionally
                    (full-time) since 2017.
                  </p>
                  <p>I started programming in 2010 on my dad&apos;s old Windows NT workstation!</p>
                </>
              }
            />
          </div>
        </div>
        <div className={"columns"}>
          <div className={"column"}>
            <Card
              icon={faGraduationCap}
              title={"Education"}
              content={
                <>
                  <p>
                    I hold a B.Sci from the University of Melbourne in Computing and Software
                    Systems.
                  </p>
                  <p>This is equivalent to a Computer Science major.</p>
                </>
              }
            />
          </div>
          <div className={"column"}>
            <Card
              icon={faWineGlass}
              title={"Societies"}
              content={
                <>
                  <p>
                    While at university, I co-founded and was the first President and speaker for
                    the{" "}
                    <a href={miscUrl} target={"__blank"}>
                      University of Melbourne Information Security Club.
                    </a>
                  </p>
                  <p>I also was in a few social and music clubs!</p>
                </>
              }
            />
          </div>
          <div className={"column"}>
            <Card
              icon={faMusic}
              title={"Hobbies"}
              content={
                <>
                  <p>My biggest passion is music!</p>
                  <p>I&apos;ve composed hundreds of songs and love both jamming and gigging.</p>
                  <p>I play guitar, piano, bass, clarinet, and I sing.</p>
                </>
              }
            />
          </div>
        </div>

        <h3>Lingual</h3>

        <div className={"columns"}>
          <div className={"column"}>
            <Card
              icon={faLanguage}
              title={"Main Language"}
              content={
                <>
                  <p>I speak English at a native proficiency.</p>
                  <p>Furthermore, I consider myself a strong technical writer.</p>
                </>
              }
            />
          </div>
          <div className={"column"}>
            <Card
              icon={faGlobe}
              title={"Other Languages"}
              content={
                <>
                  <p>I have an aural and speaking proficiency in Mandarin Chinese.</p>
                  <p>I have a basic written and aural proficiency in French.</p>
                </>
              }
            />
          </div>
          <div className={"column"}>
            <Card
              icon={faCode}
              title={"Main Programming Language"}
              content={
                <>
                  <p>
                    My fallback and scripting programming language is{" "}
                    <span className={"highlight"}>Python.</span>
                  </p>
                  <p>
                    Specifically, Python 3. I have almost completely phased out Python 2 from my
                    life.
                  </p>
                </>
              }
            />
          </div>
        </div>
        <div className={"columns"}>
          <div className={"column"}>
            <Card
              icon={faPalette}
              title={"Frontend Languages"}
              content={
                <>
                  <p>
                    I use <span className={"highlight"}>TypeScript</span> and{" "}
                    <span className={"highlight"}>React</span> to build apps. I add{" "}
                    <span className={"highlight"}>Electron</span> for x-platform desktop,{" "}
                    <span className={"highlight"}>React Native</span> for x-platform mobile,{" "}
                    <span className={"highlight"}>Next.js</span> for websites...
                  </p>
                  <p>
                    I also target iOS and iPhoneOS with <span className={"highlight"}>Swift</span>.
                  </p>
                </>
              }
            />
          </div>
          <div className={"column"}>
            <Card
              icon={faServer}
              title={"System Languages"}
              content={
                <>
                  <p>
                    I use <span className={"highlight"}>Python</span> and{" "}
                    <span className={"highlight"}>C</span> primarily as system programming
                    languages. I am very proficient in <span className={"highlight"}>Java</span> and
                    proficient in <span className={"highlight"}>Go</span>,{" "}
                    <span className={"highlight"}>C#</span>, and{" "}
                    <span className={"highlight"}>PHP</span>.
                  </p>
                  <p>
                    I am learning (and loving) <span className={"highlight"}>Rust</span> as a go-to
                    replacement for all of this!
                  </p>
                </>
              }
            />
          </div>
          <div className={"column"}>
            <Card
              icon={faDatabase}
              title={"Other"}
              content={
                <>
                  <p>
                    I&apos;m strong in relational and noSQL database management (PostgreSQL,
                    Firestore, etc).
                  </p>
                  <p>
                    I am proficient with <span className={"highlight"}>Unity</span> for game
                    development, <span className={"highlight"}>Django</span> for MVC, and both{" "}
                    <span className={"highlight"}>headless CMSes</span> and SSGs for content.
                  </p>
                </>
              }
            />
          </div>
        </div>

        <blockquote>
          This site was built entirely in TypeScript + React using the Next.js framework! It is
          statically generated (SSG) with <b>absolutely no dynamic content</b>, not even in the form
          of an AJAX query.
        </blockquote>

        <h3>Toolset</h3>

        <div className={"columns"}>
          <div className={"column"}>
            <Card
              icon={faFighterJet}
              title={"Code Editor"}
              content={
                <>
                  <p>
                    I strongly prefer <span className={"highlight"}>JetBrains IDEs</span> for all
                    programming.
                  </p>
                  <p>
                    I know my way around <span className={"highlight"}>Vim</span>.
                  </p>
                  <p>
                    I use <span className={"highlight"}>Fira Code</span> as my monospace font. It
                    has ligatures!
                  </p>
                </>
              }
            />
          </div>
          <div className={"column"}>
            <Card
              icon={faGithub}
              title={"Repositories"}
              content={
                <>
                  <p>
                    I am a big fan of <span className={"highlight"}>GitHub</span> and what they are
                    doing!
                  </p>
                  <p>
                    I use it for all my <code>git</code> (source code) repositories, but I
                    appreciate the project management and CI/CD tools too.
                  </p>
                </>
              }
            />
          </div>
          <div className={"column"}>
            <Card
              icon={faFigma}
              title={"Prototypes and Wireframes"}
              content={
                <>
                  <p>
                    I lightly use <span className={"highlight"}>Figma</span> and{" "}
                    <span className={"highlight"}>Affinity software</span> for UX design work.
                  </p>
                  <p>
                    I&apos;m no designer, though. I ensure what I make is usable, modern, and
                    accessible, but I have an overwhelmingly technical background.
                  </p>
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
