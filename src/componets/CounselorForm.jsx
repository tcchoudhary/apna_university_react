import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

export default function CounselorForm({ show, onClose }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile: "",
        country: ""
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Counselor form data:", form);
        onClose(); // close popup after submission
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[100]"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-full max-w-md p-6 rounded-3xl shadow-2xl bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400 backdrop-blur-md border border-white/30"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-white hover:text-gray-100 transition"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-white text-center mb-1">
                            Get a Counselor
                        </h2>
                        <p className="text-center text-white/80 text-sm mb-6">
                            Fill this form and our counselor will reach you soon.
                        </p>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="w-full rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 transition shadow-md"
                                required
                            />
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-full rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition shadow-md"
                                required
                            />
                            <input
                                name="mobile"
                                type="tel"
                                value={form.mobile}
                                onChange={handleChange}
                                placeholder="Mobile Number"
                                className="w-full rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-md"
                                required
                            />
                            <select
                                name="country"
                                value={form.country}
                                onChange={handleChange}
                                className="w-full rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 transition shadow-md bg-white"
                                required
                            >
                                <option value="">Select Country</option>
                                <option value="India">India</option>
                                <option value="USA">United States</option>
                                <option value="UK">United Kingdom</option>
                                <option value="Australia">Australia</option>
                                <option value="Other">Other</option>
                            </select>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-2 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-105 transform transition shadow-lg"
                            >
                                Submit
                            </button>

                            {/* WhatsApp Button */}
                            <button
                                type="button"
                                onClick={() =>
                                    window.open("https://wa.me/919876543210", "_blank")
                                }
                                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-green-400 to-green-600 hover:scale-105 transform transition shadow-lg"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Contact via WhatsApp
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
