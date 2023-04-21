import useWindowSize from "../../hooks/useWindowSize";

export default function AdvantagesSection() {
  const { width } = useWindowSize();

  return (
    <section className={width <= 1024 ? "advantages" : "container advantages"}>
      <div className="advantages__text">
        <h2
          className="advantages__text-header"
          data-aos={width <= 1024 ? "fade-up" : "fade-right"}
          data-aos-duration="500"
          data-aos-delay={width <= 1024 ? "500" : undefined}
        >
          What’s different about Manage?
        </h2>
        <p
          className="advantages__description"
          data-aos={width <= 1024 ? "fade-up" : "fade-right"}
          data-aos-duration="500"
          data-aos-delay={width <= 1024 ? "250" : undefined}
        >
          Manage provides all the functionality your team needs, without the complexity. Our
          software is tailor-made for modern digital product teams.
        </p>
      </div>

      <ol className="advantages__list">
        <li
          className="advantages__list-item"
          data-aos={width <= 1024 ? "fade-up" : "fade-up"}
          data-aos-duration="500"
          data-aos-anchor-placement="top-left"
        >
          <article>
            <h3
              className="advantages__list-item-header"
              data-aos={width <= 1024 ? "zoom-in" : "fade-left"}
              data-aos-duration="500"
              data-aos-delay={width <= 1024 ? "150" : "650"}
            >
              Track company-wide progress
            </h3>
            <p
              className="advantages__list-item-text"
              data-aos={width <= 1024 ? "zoom-in" : "fade-left"}
              data-aos-duration="500"
              data-aos-delay={width <= 1024 ? "300" : "650"}
            >
              See how your day-to-day tasks fit into the wider vision. Go from tracking progress at
              the milestone level all the way done to the smallest of details. Never lose sight of
              the bigger picture again.
            </p>
          </article>
        </li>
        <li
          className="advantages__list-item"
          data-aos={width <= 1024 ? "fade-up" : "fade-up"}
          data-aos-duration="500"
          data-aos-anchor-placement="top-left"
          data-aos-delay={width <= 1024 ? "450" : "650"}
        >
          <article>
            <h3
              className="advantages__list-item-header"
              data-aos={width <= 1024 ? "zoom-in" : "fade-left"}
              data-aos-duration="500"
              data-aos-delay={width <= 1024 ? "600" : "650"}
            >
              Advanced built-in reports
            </h3>
            <p
              className="advantages__list-item-text"
              data-aos={width <= 1024 ? "zoom-in" : "fade-left"}
              data-aos-duration="500"
              data-aos-delay={width <= 1024 ? "750" : "650"}
            >
              Set internal delivery estimates and track progress toward company goals. Our
              customisable dashboard helps you build out the reports you need to keep key
              stakeholders informed.
            </p>
          </article>
        </li>
        <li
          className="advantages__list-item"
          data-aos={width <= 1024 ? "fade-up" : "fade-up"}
          data-aos-duration="500"
          data-aos-anchor-placement="top-left"
          data-aos-delay={width <= 1024 ? "900" : "650"}
        >
          <article>
            <h3
              className="advantages__list-item-header"
              data-aos={width <= 1024 ? "zoom-in" : "fade-left"}
              data-aos-duration="500"
              data-aos-delay={width <= 1024 ? "1050" : "650"}
            >
              Everything you need in one place
            </h3>
            <p
              className="advantages__list-item-text"
              data-aos={width <= 1024 ? "zoom-in" : "fade-left"}
              data-aos-duration="500"
              data-aos-delay={width <= 1024 ? "1200" : "650"}
            >
              Stop jumping from one service to another to communicate, store files, track tasks and
              share documents. Manage offers an all-in-one team productivity solution.
            </p>
          </article>
        </li>
      </ol>
    </section>
  );
}
