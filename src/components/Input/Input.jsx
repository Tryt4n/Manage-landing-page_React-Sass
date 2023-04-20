import { useState } from "react";

export default function Input({ type, name, id, placeholder }) {
  const [valid, setValid] = useState(true);

  function handleInput(e) {
    const input = e.target;
    if (!input.value) {
      setValid(true);
    } else {
      setValid(input.validity.valid);
    }
  }

  return (
    <>
      <div className="custom-input__container">
        <input
          type={type}
          name={name}
          id={id}
          required
          placeholder={placeholder}
          className={valid ? "custom-input" : "custom-input invalid"}
          onInput={handleInput}
        />
        {!valid && <em className="custom-input__warning">Please insert a valid email</em>}
      </div>
    </>
  );
}
