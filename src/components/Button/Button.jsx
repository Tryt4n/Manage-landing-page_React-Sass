export default function Button({ btnLight, btnText }) {
  return (
    <button className={btnLight ? "btn btn--light" : "btn btn--accent"}>
      {btnText ? btnText : "Get Started"}
    </button>
  );
}
