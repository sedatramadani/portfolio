import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Form = ({ close }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = "service_n3knwhr";
    const templateId = "template_z9fg2po";
    const publicKey = "6kZX-hZ3XC3EBusA_";

    const templateParams = {
      from_name: name,
      to_name: "Sedat",
      message: message,
      email: email,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");

        if (close) close();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative top-140 z-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <button
        type="button"
        onClick={close}
        className="absolute top-3 right-4 text-xl text-gray-400 hover:text-red-500 transition anim"
      >
        ✕
      </button>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="name"
        >
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isSubmitting}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="name"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="flex flex-col gap-1">
          Enter your email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="email"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="flex flex-col gap-1">
          Your Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={isSubmitting}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id=",message"
            type="text"
            placeholder="message"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default Form;
