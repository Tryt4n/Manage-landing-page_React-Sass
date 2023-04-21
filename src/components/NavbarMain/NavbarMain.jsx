import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

import MobileMenuButton from "./MobileMenuButton";
import Button from "../Button/Button";

export default function NavbarMain() {
  const { width } = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [mobileMenuTabIndex, setMobileMenuTabIndex] = useState(-1);
  const [isMobileListMenuHidden, setIsMobileListMenuHidden] = useState(true);
  const [isMobileMenuExpanded, setIsMobileMenuExpanded] = useState(false);

  function handleMobileMenu() {
    setIsMenuOpen(!isMenuOpen);

    mobileMenuTabIndex === -1 ? setMobileMenuTabIndex(1) : setMobileMenuTabIndex(-1);
    setIsMobileListMenuHidden(!isMobileListMenuHidden);
    setIsMobileMenuExpanded(!isMobileMenuExpanded);
  }

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
      <div className={isMobileMenuExpanded ? "main-navigation__mobile-menu-background" : undefined}>
        {isMobileMenuExpanded && (
          <MobileMenuButton
            isMobileMenuExpanded={isMobileMenuExpanded}
            handleMobileMenu={handleMobileMenu}
            isOpeningBtn={false}
          />
        )}
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
      </div>
      {width > 1024 ? (
        <>
          <Button btnLight={false} />
        </>
      ) : (
        !isMobileMenuExpanded && (
          <MobileMenuButton
            isMobileMenuExpanded={isMobileMenuExpanded}
            handleMobileMenu={handleMobileMenu}
            isOpeningBtn={true}
          />
        )
      )}
    </nav>
  );
}
