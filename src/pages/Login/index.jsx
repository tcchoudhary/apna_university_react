import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet"; // 🧠 For SEO
import AURoutes from "../../routes/routing";

export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Details:", form);
    };

    useEffect(() => {
        window.scrollTo(0, 0); // UX improvement: page top on load
    }, []);

    return (
        <>
            {/* 🧠 SEO Optimization */}
            <Helmet>
                <title>Login | Apna University</title>
                <meta
                    name="description"
                    content="Login to Apna University to access admissions, updates, and personalized student dashboard."
                />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>

            {/* 🌐 Page Layout */}
            <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 px-4">
                <motion.div
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center"
                >
                    {/* 🔷 Logo */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                        className="flex justify-center mb-6"
                    >
                        <div
                            className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-full text-2xl font-bold"
                            aria-label="Apna University Logo"
                        >
                            AU
                        </div>
                    </motion.div>

                    {/* 🏷 Heading */}
                    <h1 className="text-2xl font-bold text-gray-800 mb-1">
                        Welcome to Apna University
                    </h1>
                    <p className="text-gray-500 mb-8">Sign in to access all admission services</p>

                    {/* 🔐 Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label
                                htmlFor="email"
                                className="sr-only"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                aria-label="Email address"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="sr-only"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                aria-label="Password"
                            />
                        </div>

                        {/* 🔘 Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all"
                        >
                            Sign In
                        </motion.button>
                    </form>

                    {/* 🔗 Links */}
                    <div className="mt-6 text-sm text-gray-600">
                        <a
                            href={AURoutes.FORGOT_PASSWORD}
                            className="hover:text-blue-600"
                            aria-label="Forgot Password"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    <p className="mt-3 text-sm">
                        Don’t have an account?{" "}
                        <a
                            href={AURoutes.RAGISTER}
                            className="text-blue-600 font-semibold hover:underline"
                            aria-label="Register for a new account"
                        >
                            Register here
                        </a>
                    </p>
                </motion.div>
            </main>
        </>
    );
}

