"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-5">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="appearance-none border rounded-sm w-full py-2 px-3 leading-tight focus:outline-none focus:border-[rgb(var(--second-rgb))]"
          placeholder="Your name"
        />
      </div>

      <div className="mb-5">
        <input
          type="tel"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="appearance-none border rounded-sm w-full py-2 px-3 leading-tight focus:outline-none focus:border-[rgb(var(--second-rgb))]"
          placeholder="Your email"
        />
      </div>

      <div className="mb-5">
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="appearance-none border rounded-sm w-full py-2 px-3 leading-tight focus:outline-none focus:border-[rgb(var(--second-rgb))]"
          placeholder="Your phone number"
        />
      </div>

      <div className="mb-5">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="appearance-none border rounded-sm w-full py-2 px-3 leading-tight focus:outline-none focus:border-[rgb(var(--second-rgb))]"
          placeholder="Your comment or feedback about us"
          cols={5}
          rows={3}
        ></textarea>
      </div>

      <div className="flex items-center justify-between w-full">
        <button
          type="submit"
          className="text-[rgb(var(--btn-text))] bg-[rgb(var(--btn-bg))] hover:text-[rgb(var(--btn-text-hv))] hover:bg-[rgb(var(--btn-bg-hv))] py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline w-full"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
