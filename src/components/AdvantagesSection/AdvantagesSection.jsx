import useWindowSize from "../../hooks/useWindowSize";

export default function AdvantagesSection() {
  const { width } = useWindowSize();

  return (
    <section className={width <= 1024 ? "advantages" : "container advantages"}>
      <div className="advantages__text">
        <h2 className="advantages__text-header">What’s different about Manage?</h2>
        <p className="advantages__description">
          Manage provides all the functionality your team needs, without the complexity. Our
          software is tailor-made for modern digital product teams.
        </p>
      </div>

      <ol className="advantages__list">
        <li className="advantages__list-item">
          <article>
            <h3 className="advantages__list-item-header">Track company-wide progress</h3>
            <p className="advantages__list-item-text">
              See how your day-to-day tasks fit into the wider vision. Go from tracking progress at
              the milestone level all the way done to the smallest of details. Never lose sight of
              the bigger picture again.
            </p>
          </article>
        </li>
        <li className="advantages__list-item">
          <article>
            <h3 className="advantages__list-item-header">Advanced built-in reports</h3>
            <p className="advantages__list-item-text">
              Set internal delivery estimates and track progress toward company goals. Our
              customisable dashboard helps you build out the reports you need to keep key
              stakeholders informed.
            </p>
          </article>
        </li>
        <li className="advantages__list-item">
          <article>
            <h3 className="advantages__list-item-header">Everything you need in one place</h3>
            <p className="advantages__list-item-text">
              Stop jumping from one service to another to communicate, store files, track tasks and
              share documents. Manage offers an all-in-one team productivity solution.
            </p>
          </article>
        </li>
      </ol>
    </section>
  );
}
