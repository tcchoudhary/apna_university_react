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
        // ✅ In future: send data to backend or WhatsApp API
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
                            Get a Counselor
                        </h2>
                        <p className="text-center text-gray-500 text-sm mb-4">
                            Fill this form and our counselor will reach you soon.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                name="mobile"
                                type="tel"
                                value={form.mobile}
                                onChange={handleChange}
                                placeholder="Mobile Number"
                                className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <select
                                name="country"
                                value={form.country}
                                onChange={handleChange}
                                className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                required
                            >
                                <option value="">Select Country</option>
                                <option value="India">India</option>
                                <option value="USA">United States</option>
                                <option value="UK">United Kingdom</option>
                                <option value="Australia">Australia</option>
                                <option value="Other">Other</option>
                            </select>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-xl font-medium hover:bg-blue-700 transition"
                            >
                                Submit
                            </button>

                            {/* WhatsApp Button */}
                            <button
                                type="button"
                                onClick={() =>
                                    window.open("https://wa.me/919876543210", "_blank")
                                }
                                className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-xl font-medium hover:bg-green-600 transition"
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
