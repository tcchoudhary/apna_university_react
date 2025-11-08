import { motion } from "framer-motion";
import { useState } from "react";

// 🖼️ Import image icons
import search from "../assets/search.png";
import plane from "../assets/travelling.png";
import news from "../assets/world-news.png";
import badgecheck from "../assets/verified.png";
import pencil from "../assets/rating.png";

export default function TabsSection({ onTabChange = () => { } }) {
    const tabs = [
        {
            id: "find",
            label: "Find Colleges",
            icon: search,
            colors: {
                active: "from-blue-600 to-cyan-600",
                hover: "from-blue-500 to-cyan-500",
                text: "from-blue-700 to-cyan-700",
            },
        },
        {
            id: "admission",
            label: "Get Admission",
            icon: badgecheck,
            colors: {
                active: "from-green-600 to-emerald-600",
                hover: "from-green-500 to-emerald-500",
                text: "from-green-700 to-emerald-700",
            },
        },
        {
            id: "news",
            label: "Latest News",
            icon: news,
            colors: {
                active: "from-orange-600 to-red-600",
                hover: "from-orange-500 to-red-500",
                text: "from-orange-700 to-red-700",
            },
        },
        {
            id: "review",
            label: "Write a Review",
            icon: pencil,
            colors: {
                active: "from-purple-600 to-violet-600",
                hover: "from-purple-500 to-violet-500",
                text: "from-purple-700 to-violet-700",
            },
        },
        {
            id: "abroad",
            label: "Study Abroad",
            icon: plane,
            colors: {
                active: "from-pink-600 to-rose-600",
                hover: "from-pink-500 to-rose-500",
                text: "from-pink-700 to-rose-700",
            },
        },
    ];

    const [active, setActive] = useState("find");

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
        },
    };

    const tabVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.7 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const iconVariants = {
        initial: { scale: 1, rotate: 0 },
        hover: {
            scale: 1.2,
            rotate: 10,
            filter: "drop-shadow(0 0 6px currentColor)",
        },
        active: {
            scale: 1.3,
            rotate: 0,
            filter: "drop-shadow(0 0 12px currentColor)",
        },
    };

    return (
        <section className="w-full bg-gradient-to-br from-slate-50 via-indigo-50 to-pink-50 py-16 relative overflow-hidden border-y border-indigo-200/40">
            {/* Background gradient layers */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(168,85,247,0.15),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_70%)]"></div>
            </div>

            {/* Floating colorful particles */}
            <div className="absolute top-10 left-10 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg animate-bounce"></div>
            <div className="absolute top-20 right-20 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-lg animate-pulse"></div>
            <div className="absolute bottom-10 left-1/4 w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-lg animate-bounce"></div>
            <div className="absolute bottom-20 right-1/3 w-7 h-7 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full blur-lg animate-pulse"></div>
            <div className="absolute top-1/2 left-5 w-4 h-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full blur-lg animate-bounce"></div>

            {/* Tabs */}
            <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 px-4 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full flex flex-wrap justify-center gap-8"
                >
                    {tabs.map((t, index) => {
                        const isActive = active === t.id;
                        return (
                            <motion.div
                                key={t.id}
                                variants={tabVariants}
                                custom={index}
                                whileHover={{ y: -10, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    setActive(t.id);
                                    onTabChange(t.id);
                                }}
                                className={`
                                    group cursor-pointer flex flex-col items-center gap-4
                                    p-8 rounded-3xl transition-all duration-700 backdrop-blur-md
                                    bg-white/60 border border-white/40 shadow-xl
                                    relative overflow-hidden
                                    ${isActive
                                        ? `bg-gradient-to-br ${t.colors.active} scale-110`
                                        : `hover:bg-gradient-to-br ${t.colors.hover} hover:brightness-110`
                                    }
                                `}
                                style={{
                                    "--color-find": "37 99 235",
                                    "--color-admission": "22 163 74",
                                    "--color-news": "234 88 12",
                                    "--color-review": "124 58 237",
                                    "--color-abroad": "219 39 119",
                                }}
                            >
                                {/* ICON */}
                                <motion.div
                                    variants={iconVariants}
                                    initial="initial"
                                    whileHover="hover"
                                    animate={isActive ? "active" : "initial"}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 12,
                                    }}
                                    className={`
                                        p-4 rounded-2xl transition-all duration-500
                                        group-hover:shadow-2xl group-hover:shadow-current/40
                                        ${isActive
                                            ? `bg-white/10 backdrop-blur-[1px] shadow-xl shadow-current/50`
                                            : "bg-white/20 group-hover:bg-white/30"
                                        }
                                    `}
                                >
                                    <img
                                        src={t.icon}
                                        alt={t.label}
                                        className={`w-10 h-10 object-contain transition-all duration-500 ${isActive
                                                ? "brightness-110 drop-shadow-lg"
                                                : "opacity-90 group-hover:opacity-100"
                                            }`}
                                    />
                                </motion.div>

                                {/* LABEL */}
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    className={`
                                        text-lg font-bold transition-all duration-500 text-center leading-tight
                                        ${isActive
                                            ? `bg-gradient-to-r ${t.colors.text} bg-clip-text text-transparent drop-shadow-lg`
                                            : "text-slate-700 group-hover:text-slate-900"
                                        }
                                    `}
                                >
                                    {t.label}
                                </motion.span>

                                {/* UNDERLINE */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        width: isActive ? "100%" : "0%",
                                        opacity: isActive ? 1 : 0,
                                        scale: isActive ? 1.3 : 1,
                                        background: isActive
                                            ? `linear-gradient(90deg, ${t.colors.active})`
                                            : "transparent",
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="h-[5px] rounded-full shadow-lg"
                                    style={{
                                        boxShadow: isActive
                                            ? `0 0 25px rgba(var(--color-${t.id}), 0.7)`
                                            : "none",
                                        filter: isActive ? "blur(1px)" : "none",
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
