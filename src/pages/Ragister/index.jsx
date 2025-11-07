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
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-4">

            {/* ✅ SEO META TAGS */}
            <Helmet>
                <title>Register | Apna University</title>
                <meta
                    name="description"
                    content="Create your account on Apna University to access admission updates, medical blogs, and more."
                />
                <meta
                    name="keywords"
                    content="Apna University, register, sign up, education portal, student registration"
                />
            </Helmet>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl"
            >
                <div className="flex justify-center mb-4">
                    <div
                        className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-full text-2xl font-bold"
                        aria-label="Apna University Logo"
                    >
                        AU
                    </div>
                </div>

                <h1 className="text-3xl font-semibold text-gray-800 text-center mb-2">
                    Create your account
                </h1>
                <p className="text-center text-sm text-gray-500 mb-6">
                    Join Apna University — get notified about new updates
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-600">
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="text-sm text-gray-600">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="mobile" className="text-sm text-gray-600">
                                Mobile
                            </label>
                            <input
                                id="mobile"
                                name="mobile"
                                type="tel"
                                value={form.mobile}
                                onChange={handleChange}
                                placeholder="+91 98765 43210"
                                className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="text-sm text-gray-600">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Choose a strong password"
                                className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                minLength={6}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="country" className="text-sm text-gray-600">
                            Country
                        </label>
                        <select
                            id="country"
                            name="country"
                            value={form.country}
                            onChange={handleChange}
                            className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
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
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-blue-600 text-white font-medium py-3 rounded-xl"
                    >
                        Create Account
                    </motion.button>
                </form>

                <div className="mt-4 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <button
                        onClick={() => navigate("/login")}
                        className="text-blue-600 font-semibold hover:underline"
                        aria-label="Go to login page"
                    >
                        Sign in
                    </button>
                </div>
            </motion.div>
        </main>
    );
}
