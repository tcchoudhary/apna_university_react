import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return setMessage("Please enter your email");

        try {
            const res = await fetch("https://api.example.com/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                setMessage("✅ Subscribed successfully!");
                setEmail("");
            } else {
                setMessage("❌ Subscription failed. Try again.");
            }
        } catch (err) {
            setMessage("⚠️ Network error. Please try later.");
        }
        setTimeout(() => setMessage(""), 4000);
    };

    return (
        <footer className="bg-gray-900 text-gray-300 mt-20 pt-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* 🌟 Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h3 className="text-2xl font-bold text-white mb-3">Subscribe to Our Newsletter</h3>
                    <p className="text-gray-400 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
                        Join thousands of learners! Get the latest education news, blogs, and updates straight to your inbox.
                    </p>

                    <form
                        onSubmit={handleSubscribe}
                        className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-xl mx-auto"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="flex-1 w-full px-4 py-3 rounded-xl text-gray-900 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                            required
                        />

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 transition-all px-6 py-3 
                            rounded-xl text-white font-semibold w-full sm:w-auto"
                        >
                            Subscribe
                        </motion.button>
                    </form>

                    {message && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-3 text-sm text-blue-400"
                        >
                            {message}
                        </motion.p>
                    )}
                </motion.div>

                {/* 💡 Footer Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Apna <span className="text-blue-400">University</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Your trusted source for educational guidance and updates. Explore career tips, scholarships, and more.
                        </p>

                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="hover:text-blue-500 text-xl"><FaFacebook /></a>
                            <a href="#" className="hover:text-pink-500 text-xl"><FaInstagram /></a>
                            <a href="#" className="hover:text-sky-400 text-xl"><FaTwitter /></a>
                            <a href="#" className="hover:text-red-500 text-xl"><FaYoutube /></a>
                        </div>
                    </div>

                    {/* Explore */}
                    <nav>
                        <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
                        <ul className="space-y-2">
                            <li><Link to="/news" className="hover:text-blue-400">News</Link></li>
                            <li><Link to="/updates" className="hover:text-blue-400">Latest Updates</Link></li>
                            <li><Link to="/blogs" className="hover:text-blue-400">Blogs</Link></li>
                            <li><Link to="/articles" className="hover:text-blue-400">Articles</Link></li>
                            <li><Link to="/events" className="hover:text-blue-400">Events</Link></li>
                            <li><Link to="/contact-us" className="hover:text-blue-400">Contact Us</Link></li>
                        </ul>
                    </nav>

                    {/* Resources */}
                    <nav>
                        <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><Link to="/courses" className="hover:text-blue-400">Courses</Link></li>
                            <li><Link to="/scholarships" className="hover:text-blue-400">Scholarships</Link></li>
                            <li><Link to="/career-guidance" className="hover:text-blue-400">Career Guidance</Link></li>
                            <li><Link to="/mock-tests" className="hover:text-blue-400">Mock Tests</Link></li>
                            <li><Link to="/counselling" className="hover:text-blue-400">Counselling</Link></li>
                        </ul>
                    </nav>

                    {/* Contact + Legal Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <strong>Email:</strong>{" "}
                                <a href="mailto:support@apnauniversity.com" className="hover:text-blue-400">
                                    support@apnauniversity.com
                                </a>
                            </li>
                            <li>
                                <strong>Phone:</strong>{" "}
                                <a href="tel:+919876543210" className="hover:text-blue-400">
                                    +91 98765 43210
                                </a>
                            </li>
                            <li>
                                <strong>Address:</strong>{" "}
                                <span className="text-gray-400">
                                    MI Road, Jaipur, Rajasthan, India
                                </span>
                            </li>

                            {/* ✅ Added Legal Links */}
                            <li className="pt-4 border-t border-gray-700">
                                <Link to="/terms-conditions" className="hover:text-blue-400 block">
                                    Terms & Conditions
                                </Link>
                                <Link to="/privacy-policy" className="hover:text-blue-400 block mt-2">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Apna University — All Rights Reserved.
            </div>
        </footer>
    );
}
