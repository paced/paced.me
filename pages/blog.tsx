/**
 * The component for the blog root.
 *
 * @returns {JSX.Element} the element
 * @constructor
 */
import { faHardHat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// noinspection JSUnusedGlobalSymbols
/**
 * A blog page.
 *
 * @returns {JSX.Element} the element
 * @constructor
 */
export default function Blog(): JSX.Element {
  return (
    <div className={"content brief"}>
      <h1 className={"title big-pad"}>
        <FontAwesomeIcon icon={faHardHat} /> Blog
      </h1>
      <h2 className={"subtitle"}>Thoughts coming soon!</h2>

      <p>
        It&apos;s not that I have nothing interesting to say (probably), it&apos;s just that I still
        need to implement this.
      </p>
      <p>At least it&apos;s not a 404 page!</p>
    </div>
  );
}
