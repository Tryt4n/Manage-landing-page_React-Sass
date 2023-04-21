export default function TestimonialsCard({ imageUrl, name, text }) {
  return (
    <article className="testimonials-card">
      <img
        src={imageUrl}
        alt={`avatar ${name}`}
        className="testimonials-card__image"
      />
      <h3 className="testimonials-card__header">{name}</h3>
      <p className="testimonials-card__text">{text}</p>
    </article>
  );
}
