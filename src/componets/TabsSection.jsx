import { motion } from "framer-motion";
import { useState } from "react";
import { Search, BadgeCheck, FileText, Newspaper, Pencil, Plane } from "lucide-react";

export default function TabsSection({ onTabChange = () => { } }) {
    const tabs = [
        {
            id: "find",
            label: "Find Colleges",
            icon: <Search className="w-6 h-6" />,
            colors: { active: "from-blue-600 to-cyan-600", hover: "from-blue-500 to-cyan-500", text: "from-blue-700 to-cyan-700" }
        },
        {
            id: "admission",
            label: "Get Admission",
            icon: <BadgeCheck className="w-6 h-6" />,
            colors: { active: "from-green-600 to-emerald-600", hover: "from-green-500 to-emerald-500", text: "from-green-700 to-emerald-700" }
        },
        // { id: "exams", label: "Explore Exams", icon: <FileText className="w-6 h-6" /> },
        {
            id: "news",
            label: "Latest News",
            icon: <Newspaper className="w-6 h-6" />,
            colors: { active: "from-orange-600 to-red-600", hover: "from-orange-500 to-red-500", text: "from-orange-700 to-red-700" }
        },
        {
            id: "review",
            label: "Write a Review",
            icon: <Pencil className="w-6 h-6" />,
            colors: { active: "from-purple-600 to-violet-600", hover: "from-purple-500 to-violet-500", text: "from-purple-700 to-violet-700" }
        },
        {
            id: "abroad",
            label: "Study Abroad",
            icon: <Plane className="w-6 h-6" />,
            colors: { active: "from-pink-600 to-rose-600", hover: "from-pink-500 to-rose-500", text: "from-pink-700 to-rose-700" }
        },
    ];
    const [active, setActive] = useState("find");

    // Staggered animation for tabs
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const tabVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.7 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const iconVariants = {
        initial: { scale: 1, rotate: 0 },
        hover: {
            scale: 1.3,
            rotate: 180,
            filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8))"
        },
        active: {
            scale: 1.4,
            rotate: 0,
            filter: "drop-shadow(0 0 12px currentColor)"
        }
    };

    return (
        <section className="w-full bg-gradient-to-br from-slate-50 via-indigo-50 to-pink-50 py-16 relative overflow-hidden border-y border-indigo-200/40">
            {/* Vibrant background effects with multiple gradients */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(168,85,247,0.15),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_70%)]"></div>
            </div>
            {/* Floating colorful particles with varied animations */}
            <div className="absolute top-10 left-10 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-20 right-20 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-10 left-1/4 w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-lg animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-20 right-1/3 w-7 h-7 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-5 w-4 h-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s' }}></div>

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
                                whileHover={{
                                    y: -10,
                                    scale: 1.1,
                                    boxShadow: `0 25px 50px rgba(var(--color-${t.id}), 0.25)`
                                }}
                                whileTap={{ scale: 0.92 }}
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
                                        ? `bg-gradient-to-br ${t.colors.active} border-[${t.colors.active.split(' ').slice(-1)[0]}]/40 shadow-[${t.colors.active.split(' ').slice(-1)[0]}]/25 scale-110`
                                        : `hover:bg-gradient-to-br hover:${t.colors.hover} hover:border-[${t.colors.hover.split(' ').slice(-1)[0]}]/30 hover:shadow-[${t.colors.hover.split(' ').slice(-1)[0]}]/15`
                                    }
                                `}
                                style={{
                                    "--color-find": "37 99 235",
                                    "--color-admission": "22 163 74",
                                    "--color-news": "234 88 12",
                                    "--color-review": "124 58 237",
                                    "--color-abroad": "219 39 119"
                                }}
                            >
                                {/* Colorful ICON with rotation, glow, and gradient background */}
                                <motion.div
                                    variants={iconVariants}
                                    initial="initial"
                                    whileHover="hover"
                                    animate={isActive ? "active" : "initial"}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 12,
                                        rotate: { duration: 0.8 }
                                    }}
                                    className={`
                                        p-4 rounded-2xl transition-all duration-500
                                        group-hover:shadow-2xl group-hover:shadow-current/40
                                        ${isActive
                                            ? `bg-white/30 backdrop-blur-sm shadow-2xl shadow-current/60`
                                            : "bg-white/20 group-hover:bg-white/30"
                                        }
                                    `}
                                    style={{
                                        color: isActive ? `hsl(var(--color-${t.id}))` : "#374151"
                                    }}
                                >
                                    <motion.div
                                        animate={{
                                            background: isActive ? `linear-gradient(135deg, ${t.colors.active})` : "transparent"
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="p-2 rounded-xl bg-gradient-to-br"
                                    >
                                        <span className={`text-white ${isActive ? "filter drop-shadow-md" : ""}`}>
                                            {t.icon}
                                        </span>
                                    </motion.div>
                                </motion.div>

                                {/* Enhanced LABEL with colorful gradient text */}
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

                                {/* Dynamic colorful Underline with glow, expansion, and particles */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        width: isActive ? "100%" : "0%",
                                        opacity: isActive ? 1 : 0,
                                        scale: isActive ? 1.3 : 1,
                                        background: isActive ? `linear-gradient(90deg, ${t.colors.active})` : "transparent"
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.22, 1, 0.36, 1],
                                        scale: { duration: 0.3 }
                                    }}
                                    className="h-[5px] rounded-full shadow-lg"
                                    style={{
                                        boxShadow: isActive ? `0 0 25px rgba(var(--color-${t.id}), 0.7)` : "none",
                                        filter: isActive ? "blur(1px)" : "none"
                                    }}
                                />

                                {/* Shine effect with color on hover */}
                                <motion.div
                                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-3xl"
                                        style={{
                                            background: `linear-gradient(90deg, transparent, rgba(var(--color-${t.id}), 0.15), transparent)`
                                        }}
                                    ></div>
                                </motion.div>

                                {/* Sparkle effect on active tab */}
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-sm"
                                    >
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.5, 1, 1.2, 1],
                                                opacity: [1, 0.8, 1, 0.5, 1]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                repeatType: "reverse"
                                            }}
                                        />
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}