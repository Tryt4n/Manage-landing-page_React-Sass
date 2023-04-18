import Button from "../Button/Button";

export default function AccentSection() {
  return (
    <section className="accent-section">
      <div className="container accent-section__container">
        <h2 className="accent-section__header">Simplify how your team works today.</h2>
        <Button btnLight={true} />
      </div>
    </section>
  );
}
