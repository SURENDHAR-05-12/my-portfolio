import { motion } from "framer-motion";
import { Mail, MessageCircle, CheckCircle2, XCircle, MapPin, Phone, Send } from "lucide-react";
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
    const phone = "+916384024943";
    const link = `https://wa.me/${phone}?text=${text}`;
    window.open(link, "_blank");
    showToast("Opening WhatsApp...", "success");
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formAction = "https://formsubmit.co/surendhar6384@gmail.com";
    const formData = new FormData(form);

    fetch(formAction, {
      method: "POST",
      body: formData,
    })
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
      className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Let's discuss your next project
          </motion.p>
        </div>

        {/* 💎 Premium Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group rounded-3xl p-[1px]" // Border wrapper
        >
          {/* Animated Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-xy"></div>
          
          {/* Main Card Content */}
          <div className="relative bg-[#111] rounded-3xl p-6 md:p-12 overflow-hidden">
            
            {/* Contact Info Row */}
            <div className="mb-12 pb-12 border-b border-white/10">
                <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-12 max-w-fit mx-auto md:max-w-full">
                    
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-400 shrink-0">
                        <Mail className="w-5 h-5" />
                        </div>
                        <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Email</p>
                        <p className="font-medium text-gray-200 break-all md:break-normal">surendhar6384@gmail.com</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-500/10 rounded-full text-purple-400 shrink-0">
                        <Phone className="w-5 h-5" />
                        </div>
                        <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Phone</p>
                        <p className="font-medium text-gray-200">+91 63840 24943</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-500/10 rounded-full text-emerald-400 shrink-0">
                        <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Location</p>
                        <p className="font-medium text-gray-200">Karur, Tamil Nadu</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" /> Send Message
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={sendWhatsApp}
                  className="px-8 py-4 bg-[#212121] text-[#25D366] font-semibold rounded-xl border border-[#333] hover:bg-[#2a2a2a] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

       {/* 🌟 Toast */}
       {toast && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className={`fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full flex items-center gap-3 text-white shadow-2xl z-50 border border-white/10
          ${
            toast.type === "success"
              ? "bg-[#111] border-green-500/50 text-green-400"
              : "bg-[#111] border-red-500/50 text-red-400"
          }`}
        >
          {toast.type === "success" ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
          <span className="font-medium text-gray-200">{toast.message}</span>
        </motion.div>
      )}

      {/* Animation Styles */}
      <style>{`
        @keyframes gradient-xy {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
