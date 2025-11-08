import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Home, PhoneCall } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col justify-center items-center px-6
      bg-gradient-to-br from-purple-400 via-pink-300 to-indigo-400 text-gray-900 relative overflow-hidden">

            {/* Decorative floating shapes */}
            <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative bg-white/70 backdrop-blur-md shadow-2xl rounded-3xl p-10 max-w-md text-center border border-white/30"
            >
                {/* Animated Illustration */}
                <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="mx-auto w-48 h-48 flex items-center justify-center bg-white rounded-full shadow-xl mb-6"
                >
                    <Search className="w-24 h-24 text-purple-600" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl sm:text-5xl font-bold text-purple-700 mb-2"
                >
                    404 – Page Not Found
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-700 mb-6"
                >
                    Oops! The page you’re looking for doesn’t exist or has been moved.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <Link
                        to="/"
                        className="flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-xl shadow-lg hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition"
                    >
                        <Home className="w-5 h-5" />
                        Go Home
                    </Link>

                    <Link
                        to="/contact-us"
                        className="flex items-center gap-2 px-6 py-3 text-purple-600 bg-white rounded-xl border border-purple-300 hover:bg-purple-50 transition font-semibold"
                    >
                        <PhoneCall className="w-5 h-5" />
                        Contact Support
                    </Link>
                </motion.div>

                {/* Mini Footer Note */}
                <p className="mt-8 text-gray-500 text-sm">
                    © {new Date().getFullYear()} Apna University
                </p>
            </motion.div>
        </main>
    );
}
