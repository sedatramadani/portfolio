import { useState } from "react";

const Form = ({ close }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
        close(); // mbyll form-in
      } else {
        alert("Server error. Try again.");
      }
    } catch (err) {
      alert("Cannot connect to backend.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 anim">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm sm:max-w-[380px] bg-gray-900/90 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-xl flex flex-col gap-4 text-white relative max-h-[90vh] overflow-y-auto anim"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={close}
          className="absolute top-3 right-4 text-xl hover:text-red-500 transition anim"
        >
          ✕
        </button>

        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded bg-white/10 outline-none focus:ring-2 focus:ring-blue-500 anim"
          required
          disabled={isLoading}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded bg-white/10 outline-none focus:ring-2 focus:ring-blue-500 anim"
          required
          disabled={isLoading}
        />
        <textarea
          name="message"
          placeholder="Your message..."
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded bg-white/10 outline-none focus:ring-2 focus:ring-blue-500 anim"
          required
          disabled={isLoading}
        />

        <button
          type="submit"
          disabled={isLoading}
          className={`py-3 rounded transition ${
            isLoading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 anim"
          }`}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Form;
