import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
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
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Login | Apna University</title>
                <meta
                    name="description"
                    content="Login to Apna University to access admissions, updates, and personalized student dashboard."
                />
            </Helmet>

            {/* 🌈 Gradient Background with abstract shapes */}
            <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-300 to-indigo-400 relative overflow-hidden px-4">
                {/* Decorative floating shapes */}
                <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>

                <motion.div
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative bg-white/70 backdrop-blur-md shadow-2xl rounded-3xl p-8 w-full max-w-md text-center border border-white/30"
                >
                    {/* 🔷 Logo */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                        className="flex justify-center mb-6"
                    >
                        <div
                            className="bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 text-white w-16 h-16 flex items-center justify-center rounded-full text-3xl font-bold shadow-lg"
                            aria-label="Apna University Logo"
                        >
                            AU
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-1">Welcome to Apna University</h1>
                    <p className="text-gray-700 mb-8">Sign in to access all admission services</p>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition"
                            required
                            aria-label="Email address"
                        />
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition"
                            required
                            aria-label="Password"
                        />

                        {/* Gradient Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition shadow-lg"
                        >
                            Sign In
                        </motion.button>
                    </form>

                    {/* Links */}
                    <div className="mt-6 text-sm text-gray-800">
                        <a
                            href={AURoutes.FORGOT_PASSWORD}
                            className="hover:text-purple-600 transition"
                            aria-label="Forgot Password"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    <p className="mt-3 text-sm text-gray-800">
                        Don’t have an account?{" "}
                        <a
                            href={AURoutes.RAGISTER}
                            className="font-semibold text-purple-600 hover:underline"
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
