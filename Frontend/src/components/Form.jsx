import { useState } from "react";

// 1. Destructure 'close' from props correctly
const Form = ({ close }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false); // For TODO #6

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });

        // 2. Correct way to call the close function
        if (close) close();
      } else {
        alert("Server error. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Could not connect to the backend.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <form className="glass-form" onSubmit={handleSubmit}>
      {/* 3. Added an X button inside the form for manual closing */}
      <button type="button" className="close-btn" onClick={close}>
        ✕
      </button>

      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
        disabled={isLoading}
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        disabled={isLoading}
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message..."
        required
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default Form;
