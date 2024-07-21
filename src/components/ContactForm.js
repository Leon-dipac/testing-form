// src/ContactForm.js

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // For demo purposes
    // You can add your submission logic (e.g., API calls, etc.) here
    // Reset form fields after submission if needed
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        placeholder="Your Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
