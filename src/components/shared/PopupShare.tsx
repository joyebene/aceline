"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function PopupSubscribe() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Show popup after 5 seconds (customizable)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");
    setSubmitted(true);

    // TODO: Integrate with your backend or newsletter API (e.g., Mailchimp)
    console.log("Subscribed email:", email);

    setTimeout(() => {
      setShowPopup(false);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative"
          >
            {/* Close Button */}
            <button type="button"
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              {<X className="w-5 h-5" />}
            </button>

            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold mb-2 text-gray-900">
                  Stay Updated!
                </h2>
                <p className="text-gray-600 mb-6">
                  Subscribe to get our latest news, promotions, and creative
                  insights straight to your inbox.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#dd1e26] outline-none text-gray-900"
                  />
                  <button
                    type="submit"
                    className="bg-[#dd1e26] text-white py-3 rounded-lg font-medium hover:bg-[#dd1e26]/90 transition"
                  >
                    Subscribe Now
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  🎉 You’re subscribed!
                </h3>
                <p className="text-gray-600">
                  Thanks for joining our community. You’ll hear from us soon!
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
