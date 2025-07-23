"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Send to API or email
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded bg-gray-900 text-white border border-gray-700"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded bg-gray-900 text-white border border-gray-700"
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        value={formData.subject}
        onChange={handleChange}
        className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={6}
        required
        value={formData.message}
        onChange={handleChange}
        className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700"
      />
      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
