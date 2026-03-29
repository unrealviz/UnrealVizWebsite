"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faTag,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export const FooterContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subjectLine = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`,
    );
    const bodyText = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:unreal.viz24@gmail.com?subject=${subjectLine}&body=${bodyText}`;
  };

  return (
    <div className="flex flex-col justify-center items-start gap-4 w-full max-w-md">
      <h2 className="text-gray-400 font-bold tracking-widest uppercase text-[clamp(1.125rem,1.5vw,2rem)]">
        Contact Us
      </h2>
      <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit}>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            <FontAwesomeIcon
              icon={faUser}
              className="text-[clamp(0.75rem,1vw,1rem)]"
            />
          </span>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-400 transition-all text-[clamp(0.875rem,1vw,1.125rem)]"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-[clamp(0.75rem,1vw,1rem)]"
            />
          </span>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-400 transition-all text-[clamp(0.875rem,1vw,1.125rem)]"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            <FontAwesomeIcon
              icon={faTag}
              className="text-[clamp(0.75rem,1vw,1rem)]"
            />
          </span>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-400 transition-all text-[clamp(0.875rem,1vw,1.125rem)]"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-400 transition-all resize-none text-[clamp(0.875rem,1vw,1.125rem)]"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          className="group flex items-center justify-center gap-2 p-4 bg-gray-400 text-black font-bold rounded-md hover:bg-gray-300 transition-all duration-300 uppercase text-[clamp(0.7rem,0.8vw,1rem)] tracking-wider"
        >
          <span>Send Message</span>
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </button>
      </form>
    </div>
  );
};

export const Navigation = ({ navLinks }) => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex flex-col gap-6 justify-start items-start">
      <h3 className="text-gray-400 font-bold tracking-widest uppercase text-[clamp(1.125rem,1.5vw,2rem)]">
        Quick Navigation
      </h3>

      <div className="flex flex-col items-start justify-start gap-4">
        {navLinks.map((link, i) => (
          <button
            key={i}
            onClick={() => handleScroll(link.id)}
            className="uppercase text-[#e5e5e5] hover:text-[#c9c9c9] transition cursor-pointer text-[clamp(0.75rem,1vw,1.125rem)]"
          >
            {link.name}
          </button>
        ))}
      </div>
    </div>
  );
};
