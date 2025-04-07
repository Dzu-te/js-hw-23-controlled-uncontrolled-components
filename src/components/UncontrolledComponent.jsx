import React, { useRef } from "react";
import "../styles/UncontrolledComponent.css";

export default function UncontrolledComponent() {
  const nameInputRef = useRef(null);
  const secondNameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const checkboxRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredSecondName = secondNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const isTermsAccepted = checkboxRef.current.checked;
    console.log(enteredName, enteredSecondName, enteredEmail, isTermsAccepted);
  };

  return (
    <form onSubmit={handleSubmit} className="uncontrolledForm">
      <h1>Uncontrolled Component</h1>
      <p>This is an uncontrolled component example.</p>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        ref={nameInputRef}
      />
      <input
        type="text"
        name="secondName"
        placeholder="Enter seccond Name"
        ref={secondNameInputRef}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        ref={emailInputRef}
      />
      <span>
        did you read the terms and conditions?
        <input type="checkbox" name="terms" ref={checkboxRef} />
      </span>
      <button type="submit">Submit</button>
    </form>
  );
}
