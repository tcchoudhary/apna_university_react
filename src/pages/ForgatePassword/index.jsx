import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reset link requested for:", email);
        setSent(true);
        setTimeout(() => setSent(false), 5000);
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-300 to-indigo-400 relative overflow-hidden px-4">
            <Helmet>
                <title>Forgot Password | Apna University</title>
                <meta
                    name="description"
                    content="Reset your password easily at Apna University. Enter your registered email to receive password reset instructions."
                />
            </Helmet>

            {/* Decorative floating shapes */}
            <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white/70 backdrop-blur-md shadow-2xl rounded-3xl p-8 w-full max-w-md border border-white/30"
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
                <h1 className="text-3xl font-bold text-gray-900 text-center">Forgot Password</h1>
                <p className="text-center text-gray-700 mb-6">
                    Enter your email to receive reset instructions
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4" aria-label="Forgot password form">
                    <div>
                        <label htmlFor="email" className="text-sm text-gray-600">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition"
                            required
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition shadow-lg"
                        aria-label="Send password reset link"
                    >
                        Send Reset Link
                    </motion.button>
                </form>

                {/* Success message */}
                {sent && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 text-sm text-green-600 text-center"
                        role="status"
                    >
                        Reset link sent to your email.
                    </motion.p>
                )}

                {/* Navigation link */}
                <div className="mt-4 text-center text-sm text-gray-800">
                    Remembered?{" "}
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
