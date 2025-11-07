import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Home, PhoneCall } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-6 
        bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800">

            {/* Animation Illustration */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <div className="mx-auto w-60 h-60 flex items-center justify-center">
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="bg-white p-6 rounded-full shadow-xl"
                    >
                        <Search className="w-24 h-24 text-blue-600" />
                    </motion.div>
                </div>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl sm:text-5xl font-bold text-blue-700 mt-4"
                >
                    404 – Page Not Found
                </motion.h1>

                <p className="mt-3 text-lg text-gray-600 max-w-xl mx-auto">
                    Sorry! The page you're looking for doesn’t exist or has been moved.
                </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-10 flex flex-wrap gap-4 justify-center"
            >
                <Link
                    to="/"
                    className="flex items-center gap-2 px-6 py-3 text-white bg-blue-600 
                    rounded-xl shadow-md hover:bg-blue-700 transition"
                >
                    <Home className="w-5 h-5" />
                    Go Home
                </Link>

                <Link
                    to="/contact-us"
                    className="flex items-center gap-2 px-6 py-3 text-blue-600 bg-white 
                    rounded-xl border border-blue-300 hover:bg-blue-50 transition"
                >
                    <PhoneCall className="w-5 h-5" />
                    Contact Support
                </Link>
            </motion.div>

            {/* Mini Footer Note */}
            <p className="mt-8 text-gray-500 text-sm">
                © {new Date().getFullYear()} Apna University
            </p>
        </div>
    );
}
