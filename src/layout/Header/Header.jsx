import useWindowSize from "../../hooks/useWindowSize";

import NavbarMain from "../../components/NavbarMain/NavbarMain";
import Button from "../../components/Button/Button";

export default function Header() {
  const { width } = useWindowSize();

  return (
    <header className="container header-section">
      <NavbarMain />

      <div
        className="header-wrapper"
        data-aos={width <= 1024 ? "zoom-in-up" : "fade-right"}
        data-aos-duration={1000}
      >
        <div className="header-wrapper__text-container">
          <h1 className="header-wrapper__header">
            Bring everyone together to build better products.
          </h1>
          <p className="header-wrapper__text">
            Manage makes it simple for software teams to plan day-to-day tasks while keeping the
            larger goals in view.
          </p>
          <Button btnLight={false} />
        </div>
        <img
          src="./images/illustration-intro.svg"
          alt="Analysis Graphs"
          className="header-wrapper__image"
          data-aos={width <= 1024 ? "zoom-in" : "fade-left"}
          data-aos-duration={1000}
        />
      </div>
    </header>
  );
}
