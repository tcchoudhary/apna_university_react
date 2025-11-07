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
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-4">
            {/* ✅ SEO META TAGS */}
            <Helmet>
                <title>Forgot Password | Apna University</title>
                <meta
                    name="description"
                    content="Reset your password easily at Apna University. Enter your registered email to receive password reset instructions."
                />
                <meta
                    name="keywords"
                    content="Apna University, forgot password, reset password, login help"
                />
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md"
            >
                {/* Logo */}
                <div className="flex justify-center mb-4">
                    <div
                        className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-full text-2xl font-bold"
                        aria-label="Apna University Logo"
                    >
                        AU
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-2xl font-semibold text-gray-800 text-center">
                    Forgot Password
                </h1>
                <p className="text-center text-sm text-gray-500 mb-6">
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
                            className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-blue-600 text-white font-medium py-3 rounded-xl"
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
                <div className="mt-4 text-center text-sm text-gray-600">
                    Remembered?{" "}
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
