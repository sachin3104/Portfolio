import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Create a reference to the form element
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const SERVICE_ID = "service_u0fq91w";
  const TEMPLATE_ID = "template_ukgye4n";
  const PUBLIC_KEY = "68YPUPNITzRA32aae";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    setSuccess(false);

    // Use sendForm with form reference and credentials
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        console.log("Email sent successfully:", result.text); // Log success
        setSending(false);
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error("Failed to send email:", error.text); // Log error
        setSending(false);
        setError("Failed to send the message. Please try again later.");
      }
    );
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
        <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-6 rounded-lg shadow-lg w-full max-w-md">
          <h3 className="text-2xl font-semibold mb-4">Contact Me</h3>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="Your Message"
                rows="4"
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                disabled={sending}
                className="bg-neutral-500 text-white py-2 px-4 rounded hover:bg-neutral-700 focus:outline-none"
              >
                {sending ? "Sending..." : "Send"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-100 hover:text-gray-500 focus:outline-none"
              >
                Close
              </button>
            </div>
            {error && <p className="mt-4 text-red-500">Error: {error}</p>}
            {success && (
              <p className="mt-4 text-green-500">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    )
  );
};

export default ContactForm;
