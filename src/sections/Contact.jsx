import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:mayank26202@gmail.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 md:px-10 mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-2"
        >
          <h1 className="text-4xl font-black mb-2 bg-linear-to-r from-[#1db954] to-[#1ed760] bg-clip-text text-transparent">
            Contact Me
          </h1>
        </motion.div>

      <p className="text-gray-400 mb-4 text-center max-w-xl">
        Got a project in mind or just want to say hi? Fill out the form below or send me an email at{" "}
        <span className="text-green-400 font-semibold">mayank26202@gmail.com</span>.
      </p>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg flex flex-col gap-6 bg-[#121212] rounded-2xl p-8 shadow-lg border border-[#1DB954]/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-[#1f1f1f] border border-gray-700 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none text-white placeholder-gray-400 transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-[#1f1f1f] border border-gray-700 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none text-white placeholder-gray-400 transition"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-[#1f1f1f] border border-gray-700 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none text-white placeholder-gray-400 transition"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-[#1f1f1f] border border-gray-700 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none text-white placeholder-gray-400 transition resize-none"
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-green-400 text-black font-semibold hover:bg-green-500 transition-all"
        >
          Send Message <Send size={18} />
        </motion.button>
      </motion.form>
    </motion.section>
  );
}
