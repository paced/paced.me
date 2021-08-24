import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBlog, faHome, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import { useRouter } from "next/router";
import { Component } from "react";

/**
 * A burger menu that appears on small-width screens (e.g., mobile devices)
 */
class Burger extends Component {
  /**
   * @returns {JSX.Element} the {@link JSX.Element}
   */
  render = (): JSX.Element => (
    <a
      role="button"
      className="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target={"navbar-main"}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  );

  componentDidMount = () => {
    this.handleBurger();
  };

  handleBurger = (): void => {
    // Gather all "navbar-burger" elements.

    const navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Then add a click event to all of them (should just be one):

    navbarBurgers.forEach((element) => {
      element.addEventListener("click", () => {
        // Get the target from the "data-target" attribute.

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const target = document.getElementById(element.dataset.target)!;

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu":

        element.classList.toggle("is-active");
        target.classList.toggle("is-active");
      });
    });
  };
}

/**
 * The props for a link appearing in the main navbar.
 */
interface NavbarLinkProps {
  /**
   * The text content of the link.
   */
  name: string;

  /**
   * An icon to be displayed next to the link.
   */
  icon: IconDefinition;

  /**
   * Where clicking the link goes.
   */
  path: string;
}

/**
 * A link that appears in the main navbar.
 *
 * @param props the props for this component
 * @returns {JSX.Element} the element
 */
const NavbarLink = (props: NavbarLinkProps): JSX.Element => {
  const router = useRouter();

  return (
    <div className={"navbar-item"}>
      <Link href={props.path} passHref={true}>
        <a className={router.pathname === props.path ? "has-text-weight-bold has-text-black" : ""}>
          <span className={"navbar-icon"}>
            <FontAwesomeIcon icon={props.icon} />
          </span>{" "}
          {props.name}
        </a>
      </Link>
    </div>
  );
};

/**
 * A navbar globally present for the entire website.
 */
export default class Navbar extends Component {
  /**
   * Add listeners once on mount.
   */
  componentDidMount(): void {
    window.addEventListener("scroll", this.handleScroll);

    // Run listeners once on mount so the initial state is consistent with operation:

    this.handleScroll();
  }

  /**
   * @returns {JSX.Element} the {@link JSX.Element}
   */
  render(): JSX.Element {
    return (
      <>
        <nav
          id={"navbar"}
          className={"navbar is-fixed-top"}
          role={"navigation"}
          aria-label={"main" + " navigation"}
        >
          <div className={"navbar-brand"}>
            <a className={"navbar-item is-family-monospace"}>&gt;_ paced</a>
            <Burger />
          </div>

          {/* Main navigation items. */}

          <div id={"navbar-main"} className={"navbar-menu"}>
            <div className={"navbar-end"}>
              <NavbarLink name={"Home"} icon={faHome} path={"/"} />
              <NavbarLink name={"Profile"} icon={faIdCard} path={"/profile"} />
              <NavbarLink name={"Blog"} icon={faBlog} path={"/blog"} />
            </div>
          </div>
        </nav>
      </>
    );
  }

  /**
   * Handle scrolling to resize the navbar.
   */
  handleScroll(): void {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const navbar = document.getElementById("navbar")!;

    // The guard tests that the user has scrolled more than 64px from the top.

    if (document.body.scrollTop <= 64 && document.documentElement.scrollTop <= 64) {
      navbar.classList.add("expanded-navbar");
    } else {
      navbar.classList.remove("expanded-navbar");
    }
  }
}
