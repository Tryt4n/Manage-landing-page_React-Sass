import Button from "../Button/Button";

export default function NavbarMain() {
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

      <ul className="main-navigation__list">
        <li>
          <a
            href="#"
            className="main-navigation__list-item"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="main-navigation__list-item"
          >
            Product
          </a>
        </li>
        <li>
          <a
            href="#"
            className="main-navigation__list-item"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="main-navigation__list-item"
          >
            Careers
          </a>
        </li>
        <li>
          <a
            href="#"
            className="main-navigation__list-item"
          >
            Community
          </a>
        </li>
      </ul>

      <Button btnLight={false} />
    </nav>
  );
}
