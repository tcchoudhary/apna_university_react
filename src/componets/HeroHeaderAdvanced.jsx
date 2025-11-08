// HeroBanner.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HeroSectionBg from "../assets/herosection.mp4";

const HeroBanner = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [allCourses, setAllCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await axios.get("/api/courses");
                setAllCourses(res.data);
            } catch (err) {
                console.error("Error fetching courses:", err);
            }
        };
        fetchCourses();
    }, []);

    const handleSearch = (query) => {
        setSearch(query);
        if (!query.trim()) {
            setFilteredCourses([]);
            return;
        }
        const filtered = allCourses.filter((course) =>
            course.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCourses(filtered);
    };

    // --- Framer motion animations ---
    const titleVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        }),
    };

    const searchVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const suggestionVariants = {
        hidden: { opacity: 0, rotateX: -90 },
        visible: {
            opacity: 1,
            rotateX: 0,
            transition: { duration: 0.5, ease: "backOut" },
        },
        hover: {
            scale: 1.02,
            rotateY: 5,
            boxShadow: "0 10px 30px rgba(59,130,246,0.3)",
        },
    };

    return (
        <div className="relative w-full flex flex-col overflow-hidden bg-black text-white">
            {/* 🎥 Background Video */}
            <video
                src={HeroSectionBg}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
            />

            {/* 🩵 Animated Overlay Gradients */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.2),transparent_50%)]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.2),transparent_50%)]"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.6, 0.4] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Floating particles for dreamy effect */}
            <div className="absolute top-20 left-20 w-10 h-10 bg-blue-500/20 rounded-full blur-3xl animate-ping"></div>
            <div className="absolute bottom-20 right-32 w-16 h-16 bg-pink-500/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-purple-400/30 rounded-full blur-2xl animate-bounce"></div>

            {/* 🌟 Content Section */}
            <section className="relative z-20 flex flex-col justify-center items-center text-center px-6 py-24 min-h-[70vh] md:min-h-[80vh]">
                {/* Title */}
                <motion.div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial="hidden"
                        animate="visible"
                        className="text-3xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl mb-2"
                    >
                        {"Find Your Ideal".split(" ").map((word, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={titleVariants}
                                className="inline-block"
                            >
                                {word}&nbsp;
                            </motion.span>
                        ))}
                    </motion.h2>
                    <motion.h2
                        initial="hidden"
                        animate="visible"
                        className="text-3xl md:text-6xl font-black bg-gradient-to-r from-pink-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl"
                    >
                        {"Medical Path".split(" ").map((word, i) => (
                            <motion.span
                                key={i + 5}
                                custom={i + 5}
                                variants={titleVariants}
                                className="inline-block"
                            >
                                {word}&nbsp;
                            </motion.span>
                        ))}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="text-lg md:text-xl font-light text-blue-200 mt-4 max-w-2xl mx-auto"
                    >
                        with Personalized Guidance That Shines Bright.
                    </motion.p>
                </motion.div>

                {/* 🔍 Search Bar */}
                <motion.div
                    variants={searchVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                    whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                    }}
                    className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 w-full max-w-2xl flex items-center px-6 py-4"
                >
                    <div className="flex-grow relative">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => handleSearch(e.target.value)}
                            placeholder="🔍 Search courses or universities..."
                            className="w-full bg-transparent px-4 py-2 outline-none text-white placeholder-gray-300 text-lg"
                        />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    >
                        Discover
                    </motion.button>
                </motion.div>

                {/* 🔮 Suggestions */}
                <AnimatePresence>
                    {filteredCourses.length > 0 && (
                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-white/10 backdrop-blur-md text-white mt-4 rounded-2xl shadow-2xl w-full max-w-2xl p-0 border border-white/20 overflow-hidden"
                        >
                            {filteredCourses.map((item, index) => (
                                <motion.li
                                    key={item.id}
                                    custom={index}
                                    variants={suggestionVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => navigate(`/course/${item.id}`)}
                                    className="px-6 py-4 hover:bg-white/10 cursor-pointer border-b border-white/10 last:border-b-0 relative overflow-hidden"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-medium">{item.title}</span>
                                        <motion.div
                                            className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                                            animate={{ scale: [1, 1.5, 1] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        />
                                    </div>
                                    {/* Subtle shimmer on hover */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </section>
        </div>
    );
};

export default HeroBanner;
