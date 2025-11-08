
// import { motion } from "framer-motion";
// import { GraduationCap, Stethoscope, HeartPulse, Globe, Microscope } from "lucide-react";

// const goals = [
//     {
//         title: "MBBS in India",
//         desc: "Top NEET colleges",
//         icon: <Stethoscope className="w-12 h-12" />,
//         colors: {
//             bg: "from-emerald-400 to-blue-500",
//             text: "from-emerald-700 to-blue-600",
//             icon: "from-emerald-500 to-blue-400",
//             hoverBg: "from-emerald-500 to-blue-600"
//         }
//     },
//     {
//         title: "MD / MS Programs",
//         desc: "PG Medical Specializations",
//         icon: <Microscope className="w-12 h-12" />,
//         colors: {
//             bg: "from-purple-500 to-indigo-600",
//             text: "from-purple-700 to-indigo-700",
//             icon: "from-purple-400 to-indigo-500",
//             hoverBg: "from-purple-600 to-indigo-700"
//         }
//     },
//     {
//         title: "BDS Programs",
//         desc: "Best Dentistry Colleges",
//         icon: <HeartPulse className="w-12 h-12" />,
//         colors: {
//             bg: "from-rose-400 to-orange-500",
//             text: "from-rose-700 to-orange-700",
//             icon: "from-rose-500 to-orange-400",
//             hoverBg: "from-rose-500 to-orange-600"
//         }
//     },
//     {
//         title: "Paramedical",
//         desc: "Allied health courses",
//         icon: <GraduationCap className="w-12 h-12" />,
//         colors: {
//             bg: "from-yellow-400 to-amber-500",
//             text: "from-yellow-700 to-amber-700",
//             icon: "from-yellow-500 to-amber-400",
//             hoverBg: "from-yellow-500 to-amber-600"
//         }
//     },
//     {
//         title: "Overseas MBBS",
//         desc: "Best countries for MBBS abroad",
//         icon: <Globe className="w-12 h-12" />,
//         colors: {
//             bg: "from-cyan-400 to-teal-500",
//             text: "from-cyan-700 to-teal-700",
//             icon: "from-cyan-500 to-teal-400",
//             hoverBg: "from-cyan-500 to-teal-600"
//         }
//     }
// ];

// export default function CareerGoals({ navigate }) {
//     // Staggered variants for cards
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.2,
//                 delayChildren: 0.3
//             }
//         }
//     };

//     const cardVariants = {
//         hidden: { opacity: 0, y: 50, scale: 0.8 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             transition: {
//                 duration: 0.6,
//                 ease: [0.22, 1, 0.36, 1]
//             }
//         }
//     };

//     return (
//         <section className="py-20 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
//             {/* Animated background particles */}
//             <div className="absolute inset-0 opacity-20">
//                 <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.3),transparent_50%)]"></div>
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3),transparent_50%)]"></div>
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.2),transparent_70%)]"></div>
//             </div>
//             {/* Floating orbs */}
//             <motion.div
//                 className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full blur-xl opacity-30"
//                 animate={{ y: [0, -20, 0] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//             />
//             <motion.div
//                 className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full blur-xl opacity-30"
//                 animate={{ scale: [1, 1.1, 1] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//             />
//             <motion.div
//                 className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-rose-400 to-orange-500 rounded-full blur-xl opacity-30"
//                 animate={{ y: [0, 20, 0] }}
//                 transition={{ duration: 3.5, repeat: Infinity }}
//             />

//             {/* Section Title with Gradient */}
//             <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="text-center text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-emerald-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg"
//             >
//                 Explore Career Goals
//             </motion.h2>

//             <div className="max-w-7xl mx-auto px-6 relative z-10">
//                 <motion.div
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-8"
//                 >
//                     {goals.map((goal, i) => (
//                         <motion.div
//                             key={i}
//                             variants={cardVariants}
//                             custom={i}
//                             whileHover={{
//                                 scale: 1.08,
//                                 rotateX: 5,
//                                 rotateY: 3,
//                                 y: -10,
//                                 boxShadow: `0 30px 60px rgba(var(--card-shadow-${i}), 0.4)`,
//                                 background: `linear-gradient(135deg, ${goal.colors.hoverBg})`
//                             }}
//                             whileTap={{ scale: 0.98 }}
//                             transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
//                             onClick={() =>
//                                 navigate(`/courses/${goal.title.replace(/\s+/g, "-")}`)
//                             }
//                             className={`
//                                 bg-gradient-to-br ${goal.colors.bg} text-white p-8 rounded-3xl
//                                 shadow-2xl cursor-pointer relative group overflow-hidden flex flex-col items-center
//                                 border border-white/20 backdrop-blur-sm
//                                 transition-all duration-500
//                             `}
//                             style={{
//                                 "--card-shadow-0": "16 185 129",
//                                 "--card-shadow-1": "147 51 234",
//                                 "--card-shadow-2": "239 68 68",
//                                 "--card-shadow-3": "251 191 36",
//                                 "--card-shadow-4": "6 182 212"
//                             }}
//                         >
//                             {/* Enhanced Shine Effect */}
//                             <motion.div
//                                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
//                                 initial={{ x: "-100%" }}
//                                 whileHover={{ x: "100%" }}
//                                 transition={{ duration: 0.8, ease: "easeInOut" }}
//                             />

//                             {/* Floating Particles on Hover */}
//                             {[...Array(3)].map((_, j) => (
//                                 <motion.div
//                                     key={j}
//                                     className="absolute w-2 h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100"
//                                     style={{
//                                         top: `${20 + j * 30}%`,
//                                         left: `${10 + j * 20}%`,
//                                     }}
//                                     initial={{ scale: 0 }}
//                                     whileHover={{ scale: 1, y: -10 }}
//                                     transition={{ delay: j * 0.1 }}
//                                 />
//                             ))}

//                             {/* ICON with Glow and Rotation */}
//                             <motion.div
//                                 className="mb-6 relative z-10"
//                                 initial={{ rotate: 0, scale: 1 }}
//                                 whileHover={{
//                                     rotate: 360,
//                                     scale: 1.1,
//                                     filter: "drop-shadow(0 0 20px currentColor)"
//                                 }}
//                                 transition={{ duration: 0.6, rotate: { duration: 1 } }}
//                             >
//                                 <div className={`p-3 rounded-2xl bg-white/10 backdrop-blur-sm shadow-lg`}>
//                                     <motion.div
//                                         animate={{
//                                             background: `linear-gradient(135deg, ${goal.colors.icon})`,
//                                             filter: "drop-shadow(0 0 15px rgba(255,255,255,0.3))"
//                                         }}
//                                         transition={{ duration: 0.4 }}
//                                         className="p-3 rounded-xl"
//                                     >
//                                         {goal.icon}
//                                     </motion.div>
//                                 </div>
//                             </motion.div>

//                             {/* TITLE with Gradient Text */}
//                             <motion.h3
//                                 className={`text-xl font-bold text-center mb-2 drop-shadow-md transition-all duration-300 group-hover:drop-shadow-lg`}
//                                 style={{
//                                     background: `linear-gradient(135deg, ${goal.colors.text})`,
//                                     backgroundClip: "text",
//                                     WebkitBackgroundClip: "text",
//                                     WebkitTextFillColor: "transparent"
//                                 }}
//                             >
//                                 {goal.title}
//                             </motion.h3>

//                             {/* DESCRIPTION */}
//                             <motion.p
//                                 className="text-white/90 text-sm text-center mb-6 opacity-90 transition-all duration-300 group-hover:opacity-100"
//                                 initial={{ opacity: 0.7 }}
//                                 whileHover={{ opacity: 1 }}
//                             >
//                                 {goal.desc}
//                             </motion.p>

//                             {/* Learn More Button with Bounce */}
//                             <motion.button
//                                 whileHover={{ x: 8, scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="font-semibold text-white/90 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
//                             >
//                                 Learn More
//                                 <motion.span
//                                     animate={{ rotate: [0, 360] }}
//                                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                                     className="text-sm"
//                                 >
//                                     →
//                                 </motion.span>
//                             </motion.button>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     );
// }




import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { GraduationCap, Stethoscope, HeartPulse, Globe, Microscope } from "lucide-react";

const goals = [
    {
        title: "MBBS in India",
        desc: "Top NEET colleges",
        icon: <Stethoscope className="w-12 h-12" />,
        colors: {
            bg: "from-emerald-400 to-blue-500",
            text: "from-emerald-700 to-blue-600",
            icon: "from-emerald-500 to-blue-400",
            hoverBg: "from-emerald-500 to-blue-600"
        }
    },
    {
        title: "MD / MS Programs",
        desc: "PG Medical Specializations",
        icon: <Microscope className="w-12 h-12" />,
        colors: {
            bg: "from-purple-500 to-indigo-600",
            text: "from-purple-700 to-indigo-700",
            icon: "from-purple-400 to-indigo-500",
            hoverBg: "from-purple-600 to-indigo-700"
        }
    },
    {
        title: "BDS Programs",
        desc: "Best Dentistry Colleges",
        icon: <HeartPulse className="w-12 h-12" />,
        colors: {
            bg: "from-rose-400 to-orange-500",
            text: "from-rose-700 to-orange-700",
            icon: "from-rose-500 to-orange-400",
            hoverBg: "from-rose-500 to-orange-600"
        }
    },
    {
        title: "Paramedical",
        desc: "Allied health courses",
        icon: <GraduationCap className="w-12 h-12" />,
        colors: {
            bg: "from-yellow-400 to-amber-500",
            text: "from-yellow-700 to-amber-700",
            icon: "from-yellow-500 to-amber-400",
            hoverBg: "from-yellow-500 to-amber-600"
        }
    },
    {
        title: "Overseas MBBS",
        desc: "Best countries for MBBS abroad",
        icon: <Globe className="w-12 h-12" />,
        colors: {
            bg: "from-cyan-400 to-teal-500",
            text: "from-cyan-700 to-teal-700",
            icon: "from-cyan-500 to-teal-400",
            hoverBg: "from-cyan-500 to-teal-600"
        }
    }
];

export default function CareerGoals({ navigate }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        margin: "-20% 0px 0px 0px",
        amount: 0.3
    });

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
        { angle: 90, xAngle: 0 },    // Right flip
        { angle: -90, xAngle: 0 },   // Left flip
        { angle: 0, xAngle: -90 },   // Bottom flip
        { angle: 0, xAngle: 90 },    // Top flip
        { angle: 45, xAngle: -45 }   // Diagonal
    ];

    const handleCardClick = (title) => {
        if (navigate) {
            navigate(`/courses/${title.replace(/\s+/g, "-")}`);
        } else {
            console.error("Navigate function not provided");
        }
    };

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

            {/* Section Title with Gradient */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-emerald-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg"
            >
                Explore Career Goals
            </motion.h2>

            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="max-w-7xl mx-auto px-6 relative z-10"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {goals.map((goal, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            custom={{ ...angles[i % angles.length] }}
                            whileHover={{
                                scale: 1.08,
                                rotateX: 5,
                                rotateY: 3,
                                y: -10,
                                boxShadow: `0 30px 60px rgba(var(--card-shadow-${i}), 0.4)`,
                                background: `linear-gradient(135deg, ${goal.colors.hoverBg})`
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{
                                duration: 0.5,
                                type: "spring",
                                stiffness: 300,
                                mass: 0.5 // Smoother animation to avoid glitchy pause
                            }}
                            onClick={() => handleCardClick(goal.title)}
                            className={`
                                bg-gradient-to-br ${goal.colors.bg} text-white p-8 rounded-3xl
                                shadow-2xl cursor-pointer relative group overflow-hidden flex flex-col items-center justify-center
                                border border-white/30 backdrop-blur-sm
                                transition-all duration-500
                            `}
                            style={{
                                "--card-shadow-0": "16 185 129",
                                "--card-shadow-1": "147 51 234",
                                "--card-shadow-2": "239 68 68",
                                "--card-shadow-3": "251 191 36",
                                "--card-shadow-4": "6 182 212"
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

                            {/* ICON with Glow and Rotation */}
                            <motion.div
                                className="mb-4 relative z-10 flex-shrink-0"
                                initial={{ rotate: 0, scale: 1 }}
                                whileHover={{
                                    rotate: 360,
                                    scale: 1.1,
                                    filter: "drop-shadow(0 0 20px currentColor)"
                                }}
                                transition={{ duration: 0.6, rotate: { duration: 1 } }}
                            >
                                <div className={`p-3 rounded-2xl bg-white/20 backdrop-blur-sm shadow-lg`}>
                                    <motion.div
                                        animate={{
                                            background: `linear-gradient(135deg, ${goal.colors.icon})`,
                                            filter: "drop-shadow(0 0 15px rgba(255,255,255,0.3))"
                                        }}
                                        transition={{ duration: 0.4 }}
                                        className="p-3 rounded-xl"
                                    >
                                        {goal.icon}
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* TITLE with White Text - Centered */}
                            <motion.h3
                                className="text-xl font-bold text-white text-center mb-2 drop-shadow-md transition-all duration-300 group-hover:drop-shadow-lg flex-1"
                            >
                                {goal.title}
                            </motion.h3>

                            {/* DESCRIPTION - Centered */}
                            <motion.p
                                className="text-white/90 text-sm text-center mb-6 opacity-90 transition-all duration-300 group-hover:opacity-100 flex-1"
                                initial={{ opacity: 0.7 }}
                                whileHover={{ opacity: 1 }}
                            >
                                {goal.desc}
                            </motion.p>

                            {/* Learn More Button with Bounce */}
                            <motion.button
                                whileHover={{ x: 8, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="font-semibold text-white/90 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 flex-shrink-0"
                            >
                                Learn More
                                <motion.span
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    className="text-sm"
                                >
                                    →
                                </motion.span>
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}