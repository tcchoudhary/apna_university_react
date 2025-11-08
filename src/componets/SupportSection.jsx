import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

// ✅ Premium Illustrator Icons (Replace with your final assets later)
const ICONS = [
    "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
    "https://cdn-icons-png.flaticon.com/512/1047/1047850.png",
    "https://cdn-icons-png.flaticon.com/512/2997/2997933.png",
    "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
    "https://cdn-icons-png.flaticon.com/512/2010/2010644.png",
    "https://cdn-icons-png.flaticon.com/512/1047/1047711.png",
];

const ITEMS = [
    { title: "Personalized Counseling", desc: "1:1 guidance for selecting course, college & career." },
    { title: "College Shortlisting", desc: "Cutoffs, fees, placements & ROI based comparisons." },
    { title: "Documents & Form Filling", desc: "Applications, SOPs, LORs & verification support." },
    { title: "Admission Assurance", desc: "End-to-end support till final seat allotment." },
    { title: "Study Abroad Help", desc: "Visa, forex, accommodation & country selection." },
    { title: "Post-Admission Care", desc: "Campus onboarding & continuous follow-ups." },
];

// Color schemes for each card
const COLORS = [
    { bg: "from-purple-500 to-pink-500", text: "from-purple-800 to-pink-700", icon: "from-purple-400 to-pink-400", hoverBg: "from-purple-600 to-pink-600" },
    { bg: "from-green-500 to-emerald-500", text: "from-green-800 to-emerald-700", icon: "from-green-400 to-emerald-400", hoverBg: "from-green-600 to-emerald-600" },
    { bg: "from-yellow-400 to-orange-500", text: "from-yellow-800 to-orange-700", icon: "from-yellow-500 to-orange-400", hoverBg: "from-yellow-500 to-orange-600" },
    { bg: "from-indigo-500 to-violet-500", text: "from-indigo-800 to-violet-700", icon: "from-indigo-400 to-violet-400", hoverBg: "from-indigo-600 to-violet-600" },
    { bg: "from-blue-500 to-cyan-500", text: "from-blue-800 to-cyan-700", icon: "from-blue-400 to-cyan-400", hoverBg: "from-blue-600 to-cyan-600" },
    { bg: "from-rose-500 to-red-500", text: "from-rose-800 to-red-700", icon: "from-rose-400 to-red-400", hoverBg: "from-rose-600 to-red-600" },
];

export default function SupportSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        margin: "-20% 0px 0px 0px",
        amount: 0.3
    });

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
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Main Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-700 via-pink-600 to-green-600 bg-clip-text text-transparent drop-shadow-lg"
                >
                    End-to-End Support
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto"
                >
                    Aapke admission journey ko smooth aur stress-free banane ke liye
                </motion.p>

                {/* Cards */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {ITEMS.map((it, i) => {
                        const color = COLORS[i];
                        return (
                            <motion.div
                                key={i}
                                variants={cardVariants}
                                custom={{ ...angles[i % angles.length] }}
                                whileHover={{
                                    scale: 1.08,
                                    rotateX: 5,
                                    rotateY: 3,
                                    y: -10,
                                    opacity: 0.95,
                                    background: `linear-gradient(135deg, ${color.hoverBg})`,
                                }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.5, type: "spring", stiffness: 300, mass: 0.5 }}
                                className={`relative overflow-hidden bg-gradient-to-br ${color.bg} text-white p-8 rounded-3xl
                                    shadow-2xl cursor-pointer group flex flex-col items-center justify-center
                                    border border-white/30 backdrop-blur-sm transition-all duration-500`}
                            >
                                {/* Icon */}
                                <motion.div
                                    className="mb-6 relative z-10 flex-shrink-0"
                                    initial={{ rotate: 0, scale: 1 }}
                                    whileHover={{
                                        rotate: 360,
                                        scale: 1.1,
                                        filter: "drop-shadow(0 0 20px currentColor)"
                                    }}
                                    transition={{ duration: 0.6, rotate: { duration: 1 } }}
                                >
                                    <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm shadow-lg">
                                        <motion.div
                                            animate={{
                                                background: `linear-gradient(135deg, ${color.icon})`,
                                                filter: "drop-shadow(0 0 15px rgba(255,255,255,0.3))"
                                            }}
                                            transition={{ duration: 0.4 }}
                                            className="p-4 rounded-xl"
                                        >
                                            <img
                                                src={ICONS[i]}
                                                className="w-12 h-12 object-contain"
                                                alt={it.title}
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Title */}
                                <motion.h3
                                    className="text-xl font-bold text-center mb-2 drop-shadow-md transition-all duration-300 group-hover:drop-shadow-lg"
                                    style={{
                                        background: `linear-gradient(135deg, #4B0082, #DB2777, #059669)`, // darker, high contrast
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}
                                >
                                    {it.title}
                                </motion.h3>

                                {/* Description */}
                                <motion.p
                                    className="text-white/90 text-sm text-center leading-relaxed opacity-90 transition-all duration-300 group-hover:opacity-100"
                                    initial={{ opacity: 0.8 }}
                                    whileHover={{ opacity: 0.95 }}
                                >
                                    {it.desc}
                                </motion.p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
