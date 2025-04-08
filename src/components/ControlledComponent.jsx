import React, { useState } from "react";
import "../styles/ControlledComponent.css";

export default function ControlledComponent() {
  const [formData, setFormData] = useState({
    name: "",
    secondName: "",
    email: "",
    terms: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    secondName: "",
    email: "",
    terms: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", secondName: "", email: "", terms: "" };

    if (!formData.name) {
      newErrors.name = "Please fill out this field.";
      valid = false;
    }
    if (!formData.secondName) {
      newErrors.secondName = "Please fill out this field.";
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = "Please fill out this field.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }
    if (!formData.terms) {
      newErrors.terms = "You must accept the terms and conditions.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      alert("Form submitted successfully");
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="controlledForm">
      <h1>Controlled Component</h1>
      <p>This is a controlled component example.</p>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <input
          type="text"
          name="secondName"
          placeholder="Enter Second Name"
          value={formData.secondName}
          onChange={handleChange}
        />
        {errors.secondName && <p className="error">{errors.secondName}</p>}
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <span>
          Did you read the terms and conditions?
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
        </span>
        {errors.terms && <p className="error">{errors.terms}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
