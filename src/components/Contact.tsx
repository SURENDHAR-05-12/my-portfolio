import { motion } from "framer-motion";
import { Mail, MessageCircle, CheckCircle2, XCircle } from "lucide-react";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const sendWhatsApp = () => {
    const name = (document.getElementById("name") as HTMLInputElement).value.trim();
    const email = (document.getElementById("email") as HTMLInputElement).value.trim();
    const message = (document.getElementById("message") as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      showToast("Please fill all fields before sending!", "error");
      return;
    }

    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const phone = "916384024943";
    const link = `https://wa.me/${phone}?text=${text}`;
    window.open(link, "_blank");
    showToast("Opening WhatsApp...", "success");
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formAction = "https://formsubmit.co/surendhar6384@gmail.com";
    const formData = new FormData(form);

    fetch(formAction, { method: "POST", body: formData })
      .then(() => {
        showToast("✅ Email sent successfully!", "success");
        form.reset();
      })
      .catch(() => {
        showToast("❌ Failed to send email. Try again!", "error");
      });
  };

  return (
    <section
  id="contact"
  className="relative min-h-[110vh] flex flex-col items-center justify-center 
  py-20 bg-gradient-to-b from-[#0a0f1a] via-[#060b14] to-[#0f121a] 
  text-white overflow-hidden"
>
  {/* ✨ Smooth footer blend */}
  <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent via-[#0f121a]/80 to-[#111827] pointer-events-none"></div>

  {/* 💫 Glow effect */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.18),transparent_75%)]"></div>

  {/* 🌟 Contact Content Centered */}
  <div className="max-w-2xl w-full px-6 relative z-10 flex flex-col items-center text-center">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
    >
      Get In Touch
    </motion.h2>

    <motion.form
      onSubmit={handleFormSubmit}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl space-y-5 flex flex-col items-center"
    >
      <input
        id="name"
        name="name"
        required
        placeholder="Your Name"
        className="w-full sm:w-[80%] p-3 bg-white/10 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none text-gray-200 placeholder-gray-400 transition"
      />
      <input
        id="email"
        name="email"
        type="email"
        required
        placeholder="Your Email"
        className="w-full sm:w-[80%] p-3 bg-white/10 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none text-gray-200 placeholder-gray-400 transition"
      />
      <textarea
        id="message"
        name="message"
        rows={6}
        required
        placeholder="Your Message"
        className="w-full sm:w-[80%] p-3 bg-white/10 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none text-gray-200 placeholder-gray-400 transition resize-none"
      />

      {/* Buttons centered */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          type="button"
          onClick={sendWhatsApp}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition"
        >
          <MessageCircle className="w-5 h-5" /> WhatsApp
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition"
        >
          <Mail className="w-5 h-5" /> Send Email
        </motion.button>
      </div>
    </motion.form>
  </div>

  {/* ✅ Toast notification */}
  {toast && (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl flex items-center gap-2 text-white shadow-lg 
      ${
        toast.type === "success"
          ? "bg-gradient-to-r from-green-500 to-emerald-500"
          : "bg-gradient-to-r from-red-500 to-rose-500"
      }`}
    >
      {toast.type === "success" ? (
        <CheckCircle2 className="w-5 h-5" />
      ) : (
        <XCircle className="w-5 h-5" />
      )}
      <span className="font-medium">{toast.message}</span>
    </motion.div>
  )}
</section>

  );
};

export default Contact;
