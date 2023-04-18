export default function Button({ btnLight }) {
  return <button className={btnLight ? "btn btn--light" : "btn btn--accent"}>Get Started</button>;
}
