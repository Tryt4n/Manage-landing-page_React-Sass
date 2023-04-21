import useWindowSize from "../../hooks/useWindowSize";

import Button from "../Button/Button";

export default function AccentSection() {
  const { width } = useWindowSize();

  return (
    <section
      className="accent-section"
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-delay="500"
    >
      <div
        className="container accent-section__container"
        data-aos="zoom-in"
        data-aos-duration="250"
        data-aos-delay="1000"
      >
        <h2 className="accent-section__header">Simplify how your team works today.</h2>
        <div
          data-aos="zoom-in"
          data-aos-duration="250"
          data-aos-delay="1250"
        >
          <Button btnLight={true} />
        </div>
      </div>
    </section>
  );
}
