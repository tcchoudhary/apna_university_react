import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function RegisterPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        country: ""
    });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Register:", form);
        // call register API...
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-300 to-indigo-400 relative overflow-hidden px-4">

            <Helmet>
                <title>Register | Apna University</title>
                <meta
                    name="description"
                    content="Create your account on Apna University to access admission updates, medical blogs, and more."
                />
            </Helmet>

            {/* Decorative floating shapes */}
            <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative bg-white/70 backdrop-blur-md shadow-2xl rounded-3xl p-8 w-full max-w-xl border border-white/30"
            >
                {/* Logo */}
                <div className="flex justify-center mb-4">
                    <div
                        className="bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 text-white w-16 h-16 flex items-center justify-center rounded-full text-3xl font-bold shadow-lg"
                        aria-label="Apna University Logo"
                    >
                        AU
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
                    Create Your Account
                </h1>
                <p className="text-center text-gray-700 mb-6">
                    Join Apna University — get notified about new updates
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-600">Full Name</label>
                            <input
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="text-sm text-gray-600">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="mobile" className="text-sm text-gray-600">Mobile</label>
                            <input
                                id="mobile"
                                name="mobile"
                                type="tel"
                                value={form.mobile}
                                onChange={handleChange}
                                placeholder="+91 98765 43210"
                                className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="text-sm text-gray-600">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Choose a strong password"
                                className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition"
                                required
                                minLength={6}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="country" className="text-sm text-gray-600">Country</label>
                        <select
                            id="country"
                            name="country"
                            value={form.country}
                            onChange={handleChange}
                            className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm transition"
                            required
                        >
                            <option value="">Select your country</option>
                            <option value="India">India</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Australia">Australia</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition shadow-lg"
                    >
                        Create Account
                    </motion.button>
                </form>

                <div className="mt-4 text-center text-sm text-gray-800">
                    Already have an account?{" "}
                    <button
                        onClick={() => navigate("/login")}
                        className="text-purple-600 font-semibold hover:underline"
                        aria-label="Go to login page"
                    >
                        Sign in
                    </button>
                </div>
            </motion.div>
        </main>
    );
}
