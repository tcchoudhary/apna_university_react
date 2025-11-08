import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";

const data = [
    {
        state: "Rajasthan",
        icon: "https://cdn-icons-png.flaticon.com/512/744/744469.png",
        colleges: [
            "SMS Medical College, Jaipur",
            "Mahatma Gandhi Medical College, Jaipur",
            "JLN Medical College, Ajmer",
            "Geetanjali Medical College, Udaipur",
            "Pacific Medical University, Udaipur",
            "NIMS Medical College, Jaipur",
        ],
        colors: {
            bg: "from-orange-400 to-red-500",
            text: "from-orange-700 to-red-600",
            icon: "from-orange-500 to-red-400",
            hoverBg: "from-orange-500 to-red-600"
        }
    },
    {
        state: "Uttar Pradesh",
        icon: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
        colleges: [
            "King George’s Medical University, Lucknow",
            "Subharti Medical College, Meerut",
            "Santosh Medical College, Ghaziabad",
            "Era’s Lucknow Medical College",
            "Hind Institute of Medical Sciences, Barabanki",
            "Heritage Institute of Medical Sciences, Varanasi",
        ],
        colors: {
            bg: "from-green-400 to-emerald-500",
            text: "from-green-700 to-emerald-600",
            icon: "from-green-500 to-emerald-400",
            hoverBg: "from-green-500 to-emerald-600"
        }
    },
    {
        state: "Karnataka",
        icon: "https://cdn-icons-png.flaticon.com/512/482/482546.png",
        colleges: [
            "MS Ramaiah Medical College",
            "Kempegowda Institute of Medical Sciences",
            "AJ Institute of Medical Sciences",
            "Vydehi Institute of Medical Sciences",
            "St. John’s Medical College",
            "KS Hegde Medical Academy",
        ],
        colors: {
            bg: "from-blue-400 to-cyan-500",
            text: "from-blue-700 to-cyan-600",
            icon: "from-blue-500 to-cyan-400",
            hoverBg: "from-blue-500 to-cyan-600"
        }
    },
    {
        state: "Kerala",
        icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
        colleges: [
            "Amrita School of Medicine, Kochi",
            "Jubilee Mission Medical College, Thrissur",
            "MES Medical College, Malappuram",
            "Sree Gokulam Medical College, Thiruvananthapuram",
            "Pushpagiri Institute of Medical Sciences",
            "Malankara Orthodox Syrian Church Medical College",
        ],
        colors: {
            bg: "from-purple-400 to-violet-500",
            text: "from-purple-700 to-violet-600",
            icon: "from-purple-500 to-violet-400",
            hoverBg: "from-purple-500 to-violet-600"
        }
    },
    {
        state: "Maharashtra",
        icon: "https://cdn-icons-png.flaticon.com/512/814/814513.png",
        colleges: [
            "DY Patil Medical College, Pune",
            "Bharati Vidyapeeth Medical College, Pune",
            "MGM Medical College, Navi Mumbai",
            "Krishna Institute of Medical Sciences, Karad",
            "Dr. D.Y. Patil Medical College, Kolhapur",
            "Terna Medical College, Nerul",
        ],
        colors: {
            bg: "from-pink-400 to-rose-500",
            text: "from-pink-700 to-rose-600",
            icon: "from-pink-500 to-rose-400",
            hoverBg: "from-pink-500 to-rose-600"
        }
    },
];

export default function TopPrivateColleges() {
    const [active, setActive] = useState(data[0]);
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        margin: "-20% 0px 0px 0px",
        amount: 0.3
    });

    // Staggered variants for tabs
    const tabContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const tabVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    // Staggered variants for cards with varied flip angles
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: (custom) => ({
            opacity: 0,
            y: 50,
            scale: 0.8,
            rotateY: custom.angle,
            rotateX: custom.xAngle || 0,
            transformPerspective: 1000
        }),
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            rotateX: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                rotateY: { duration: 0.7, ease: "easeInOut" },
                rotateX: { duration: 0.7, ease: "easeInOut" }
            }
        }
    };

    // Define varied angles for each card
    const angles = [
        { angle: 90, xAngle: 0 },
        { angle: -90, xAngle: 0 },
        { angle: 0, xAngle: -90 },
        { angle: 0, xAngle: 90 },
        { angle: 45, xAngle: -45 },
        { angle: -45, xAngle: 45 }
    ];

    return (
        <section ref={ref} className="py-20 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            {/* Animated background particles */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.3),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.2),transparent_70%)]"></div>
            </div>
            {/* Floating orbs */}
            <motion.div
                className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full blur-xl opacity-30"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
                className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full blur-xl opacity-30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-rose-400 to-orange-500 rounded-full blur-xl opacity-30"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
            />

            <div className="max-w-6xl mx-auto px-4 md:px-16 relative z-10">
                {/* Enhanced Heading with Multi-Color Gradient */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg"
                >
                    Top Private <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">MBBS Colleges</span> in India
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center text-gray-600 text-lg mb-10 max-w-3xl mx-auto"
                >
                    Explore top private medical colleges by state — choose your dream destination.
                </motion.p>

                {/* Enhanced STATE TABS with Colors */}
                <motion.div
                    variants={tabContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {data.map((state, i) => {
                        const isActive = active.state === state.state;
                        return (
                            <motion.button
                                key={i}
                                variants={tabVariants}
                                custom={i}
                                onClick={() => setActive(state)}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`
                                    relative px-5 py-3 rounded-2xl flex items-center gap-2 border-2 font-semibold transition-all overflow-hidden group
                                    ${isActive
                                        ? `bg-gradient-to-br ${state.colors.bg} border-transparent shadow-lg shadow-[${state.colors.bg.split(' ').slice(-1)[0]}]/30 scale-105`
                                        : `bg-white/80 border-gray-200/50 hover:border-[${state.colors.bg.split(' ').slice(-1)[0]}]/30 hover:bg-gradient-to-br hover:${state.colors.hoverBg} hover:text-white hover:shadow-md`
                                    }
                                `}
                                style={{
                                    "--color-rajasthan": "249 115 22",
                                    "--color-uttar-pradesh": "34 197 94",
                                    "--color-karnataka": "59 130 246",
                                    "--color-kerala": "139 92 246",
                                    "--color-maharashtra": "236 72 153"
                                }}
                            >
                                {/* Icon with Glow */}
                                <motion.img
                                    src={state.icon}
                                    alt={state.state}
                                    className={`w-5 h-5 transition-all ${isActive ? "filter drop-shadow-lg" : "group-hover:scale-110"}`}
                                />
                                {/* Label */}
                                <span className={`transition-all ${isActive ? "text-white drop-shadow-md" : "text-gray-700 group-hover:text-white"}`}>
                                    {state.state}
                                </span>
                                {/* Animated active indicator */}
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-90 -z-10"
                                        style={{ background: `linear-gradient(135deg, ${state.colors.bg})` }}
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    />
                                )}
                                {/* Shine effect on hover */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl"></div>
                                </motion.div>
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Enhanced COLLEGE CARDS */}
                <motion.div
                    key={active.state}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10"
                >
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7"
                    >
                        {active.colleges.map((college, i) => (
                            <motion.div
                                key={i}
                                variants={cardVariants}
                                custom={{ ...angles[i % angles.length] }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -8,
                                    rotateX: 5,
                                    rotateY: 3,
                                    boxShadow: `0 20px 40px rgba(var(--card-shadow-${i % 6}), 0.3)`,
                                    background: `linear-gradient(135deg, ${active.colors.hoverBg})`
                                }}
                                whileTap={{ scale: 0.98 }}
                                transition={{
                                    duration: 0.4,
                                    type: "spring",
                                    stiffness: 300,
                                    mass: 0.5
                                }}
                                className={`
                                    bg-gradient-to-br ${active.colors.bg} text-white rounded-2xl p-6 shadow-xl cursor-pointer relative group overflow-hidden flex flex-col justify-center
                                    border border-white/20 backdrop-blur-sm transition-all
                                `}
                                style={{
                                    "--card-shadow-0": "249 115 22",
                                    "--card-shadow-1": "34 197 94",
                                    "--card-shadow-2": "59 130 246",
                                    "--card-shadow-3": "139 92 246",
                                    "--card-shadow-4": "236 72 153",
                                    "--card-shadow-5": "251 191 36"
                                }}
                            >
                                {/* Enhanced Shine Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                />

                                {/* Floating Particles on Hover */}
                                {[...Array(3)].map((_, j) => (
                                    <motion.div
                                        key={j}
                                        className="absolute w-2 h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100"
                                        style={{
                                            top: `${20 + j * 30}%`,
                                            left: `${10 + j * 20}%`,
                                        }}
                                        initial={{ scale: 0 }}
                                        whileHover={{ scale: 1, y: -10 }}
                                        transition={{ delay: j * 0.1 }}
                                    />
                                ))}

                                {/* College Title */}
                                <h3 className="font-bold text-lg leading-tight drop-shadow-md relative z-10 mb-2">
                                    {college}
                                </h3>

                                {/* Description */}
                                <p className="text-white/90 text-sm relative z-10 opacity-90 group-hover:opacity-100 transition-opacity">
                                    {active.state}, India
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}