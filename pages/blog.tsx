/**
 * The component for the blog root.
 *
 * @returns {JSX.Element} the element
 * @constructor
 */
import { faHardHat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

// noinspection JSUnusedGlobalSymbols
/**
 * A blog page.
 *
 * @returns {JSX.Element} the element
 * @constructor
 */
export default function Blog(): JSX.Element {
  const pageTitle = "Paced Engineering - Blog";
  const pageDescription = "Paced Engineering's personal technology blog (featuring other musings).";

  return (
    <>
      <Head>
        {/* Base. */}
        <meta property="og:site_name" content="Paced Engineering" />
        <meta property="og:url" content="https://paced.me/blog" />
        <meta name="twitter:url" content="https://paced.me/blog" />

        {/* Title. */}

        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta name="twitter:title" content={pageTitle} />

        {/* Description. */}

        <meta name="description" content={pageDescription} />
        <meta property="og:description" content={pageDescription} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>
      <div className={"content brief"}>
        <h1 className={"title big-pad"}>
          <FontAwesomeIcon icon={faHardHat} /> Blog
        </h1>
        <h2 className={"subtitle"}>Thoughts coming soon!</h2>

        <p>
          It&apos;s not that I have nothing interesting to say (probably), it&apos;s just that I
          still need to implement this.
        </p>
        <p>At least it&apos;s not a 404 page!</p>
      </div>
    </>
  );
}
