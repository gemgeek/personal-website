"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "General Question",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // To display success/error messages

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", inquiry: "General Question", subject: "", message: "" }); // Clear form
      } else {
        const errorData = await response.json();
        setStatus(`Failed to send message: ${errorData.error}`);
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
      <h2 className="text-3xl font-bold text-white mb-2">Send Me a Message</h2>
      <p className="text-gray-400 mb-8">Have a project, design idea, or opportunity? Fill out the form below.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ... Your form inputs are the same ... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-white focus:ring-pink-500 focus:border-pink-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-white focus:ring-pink-500 focus:border-pink-500" />
          </div>
        </div>
        <div>
          <label htmlFor="inquiry" className="block text-sm font-medium text-gray-300 mb-2">Inquiry Type</label>
          <select name="inquiry" id="inquiry" value={formData.inquiry} onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-white focus:ring-pink-500 focus:border-pink-500">
            <option>General Question</option>
            <option>Design / Branding</option>
            <option>Development / Code</option>
            <option>Collaboration / Consultation</option>
          </select>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
          <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-white focus:ring-pink-500 focus:border-pink-500" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
          <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-white focus:ring-pink-500 focus:border-pink-500"></textarea>
        </div>
        <div className="flex items-center gap-4">
          <button type="submit" className="inline-flex items-center gap-2 bg-pink-600 text-white font-bold px-6 py-3 rounded-md hover:bg-pink-700 transition-colors disabled:bg-gray-500" disabled={status === 'Sending...'}>
            <FiSend /> {status === 'Sending...' ? 'Sending...' : 'Send Message'}
          </button>
          {status && <p className="text-sm text-gray-400">{status}</p>}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;