import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        country: "",
        email: "",
        mobile: "",
        address: "",
        subscribe: false
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("https://api.example.com/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 4000);
                setFormData({
                    name: "",
                    country: "",
                    email: "",
                    mobile: "",
                    address: "",
                    subscribe: false
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-center py-10 px-4">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-3xl"
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>

                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Your full name"
                        />
                    </div>

                    {/* Country */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Your country"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="you@example.com"
                        />
                    </div>

                    {/* Mobile */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            pattern="[0-9]{10}"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="10-digit mobile number"
                        />
                    </div>

                    {/* Address */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            rows="3"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Your full address"
                        />
                    </div>

                    {/* Newsletter */}
                    <div className="md:col-span-2 flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="subscribe"
                            checked={formData.subscribe}
                            onChange={handleChange}
                            className="w-5 h-5 accent-blue-600"
                        />
                        <span className="text-sm text-gray-600">
                            Subscribe to our newsletter for latest updates
                        </span>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="md:col-span-2 bg-blue-600 text-white py-3 rounded-xl font-semibold"
                    >
                        Send Message
                    </motion.button>
                </form>

                {submitted && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-green-600 text-center mt-4"
                    >
                        ✅ Message sent successfully! We’ll get back to you soon.
                    </motion.p>
                )}
            </motion.div>

            {/* 🌍 Google Map */}
            <div className="mt-8 w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg">
                <iframe
                    title="Our Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0932312055644!2d144.96305771531602!3d-37.816279379751454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f3f5%3A0x3d56b7a474aa4db4!2sMelbourne%20CBD!5e0!3m2!1sen!2sin!4v1691509170133!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}
