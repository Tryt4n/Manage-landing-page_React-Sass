import { useState, useRef, useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";

import Button from "../Button/Button";

const hamburgerBtn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="18"
  >
    <g
      fill="#242D52"
      fillRule="evenodd"
    >
      <path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z" />
    </g>
  </svg>
);
const closeBtn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="22"
  >
    <path
      fill="#242D52"
      fillRule="evenodd"
      d="M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z"
    />
  </svg>
);

export default function NavbarMain() {
  const { width } = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [mobileMenuTabIndex, setMobileMenuTabIndex] = useState(-1);
  const [isMobileListMenuHidden, setIsMobileListMenuHidden] = useState(true);
  const [isMobileMenuExpanded, setIsMobileMenuExpanded] = useState(false);

  const firstMobileMenuListItem = useRef(null);

  function handleMobileMenu() {
    setIsMenuOpen(!isMenuOpen);

    mobileMenuTabIndex === -1 ? setMobileMenuTabIndex(1) : setMobileMenuTabIndex(-1);
    setIsMobileListMenuHidden(!isMobileListMenuHidden);
    setIsMobileMenuExpanded(!isMobileMenuExpanded);
  }

  useEffect(() => {
    if (isMobileMenuExpanded && firstMobileMenuListItem.current) {
      firstMobileMenuListItem.current.focus();
    }
  }, [isMobileMenuExpanded]);

  return (
    <nav className="main-navigation">
      <a
        href="#"
        aria-label="Homepage"
        title="Homepage"
      >
        <img
          src="./images/logo.svg"
          alt="Manage logo"
        />
      </a>
      <ul
        id={width <= 1024 ? "mobile-menu" : undefined}
        className="main-navigation__list"
        aria-hidden={width <= 1024 ? isMobileListMenuHidden : undefined}
      >
        <li>
          <a
            href="#"
            className="main-navigation__list-item"
            tabIndex={width <= 1024 && isMenuOpen ? mobileMenuTabIndex : undefined}
            ref={firstMobileMenuListItem}
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="main-navigation__list-item"
            tabIndex={width <= 1024 && isMenuOpen ? mobileMenuTabIndex : undefined}
          >
            Product
          </a>
        </li>
        <li>
          <a
            href="#"
            className="main-navigation__list-item"
            tabIndex={width <= 1024 && isMenuOpen ? mobileMenuTabIndex : undefined}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="main-navigation__list-item"
            tabIndex={width <= 1024 && isMenuOpen ? mobileMenuTabIndex : undefined}
          >
            Careers
          </a>
        </li>
        <li>
          <a
            href="#"
            className="main-navigation__list-item"
            tabIndex={width <= 1024 && isMenuOpen ? mobileMenuTabIndex : undefined}
          >
            Community
          </a>
        </li>
      </ul>
      {width > 1024 ? (
        <>
          <Button btnLight={false} />
        </>
      ) : (
        <button
          className="main-navigation__mobile-btn"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuExpanded}
          aria-labelledby="mobile-menu-btn"
          onClick={() => handleMobileMenu()}
        >
          <span
            id="mobile-menu-btn"
            className="visually-hidden"
          >
            {isMobileMenuExpanded ? "Close Menu" : "Open Menu"}
          </span>
          {isMobileMenuExpanded ? closeBtn : hamburgerBtn}
        </button>
      )}
    </nav>
  );
}
