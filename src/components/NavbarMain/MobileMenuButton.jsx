import { useEffect, useRef } from "react";

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

export default function MobileMenuButton({ isMobileMenuExpanded, handleMobileMenu, isOpeningBtn }) {
  const closingBtn = useRef(null);

  useEffect(() => {
    if (isMobileMenuExpanded && closingBtn.current) {
      closingBtn.current.focus();
    }
  }, [isMobileMenuExpanded]);

  return (
    <button
      className={
        !isOpeningBtn ? "main-navigation__mobile-btn closeBtn" : "main-navigation__mobile-btn"
      }
      aria-controls="mobile-menu"
      aria-expanded={isMobileMenuExpanded}
      aria-labelledby="mobile-menu-btn"
      onClick={() => handleMobileMenu()}
      ref={closingBtn}
    >
      <span
        id="mobile-menu-btn"
        className="visually-hidden"
      >
        {isOpeningBtn ? "Open Menu" : "Close Menu"}
      </span>
      {isOpeningBtn ? hamburgerBtn : closeBtn}
    </button>
  );
}
