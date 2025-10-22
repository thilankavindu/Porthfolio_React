
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would integrate a service like EmailJS here.
    // For example: emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
    alert(`Thank you for your message, ${formData.name}! Your message has been received.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Contact <span className="text-cyan-400">Me.</span>
        </h2>

        {/* FIX: Replaced <style jsx> with Tailwind CSS utility classes to fix compilation error. */}
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-slate-800 border-2 border-slate-700 text-slate-300 py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:border-cyan-400"
            />
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-slate-800 border-2 border-slate-700 text-slate-300 py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:border-cyan-400"
            />
            <input
              id="phone"
              type="tel"
              placeholder="Phone Number (Optional)"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-slate-800 border-2 border-slate-700 text-slate-300 py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:border-cyan-400"
            />
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-slate-800 border-2 border-slate-700 text-slate-300 py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:border-cyan-400"
            />
          </div>
          <textarea
            id="message"
            rows={7}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 border-2 border-slate-700 text-slate-300 py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:border-cyan-400"
          ></textarea>
          <div className="text-center mt-6">
            <button type="submit" className="inline-block py-3 px-10 rounded-full font-semibold text-center transition-all duration-300 border-2 border-cyan-400 bg-cyan-400 text-slate-900 hover:bg-transparent hover:text-cyan-400">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
