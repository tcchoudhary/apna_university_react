
// import { motion } from "framer-motion";
// import { GraduationCap, Stethoscope, HeartPulse, Globe, Microscope } from "lucide-react";

// const goals = [
//     {
//         title: "MBBS in India",
//         desc: "Top NEET colleges",
//         icon: <Stethoscope className="w-12 h-12 text-blue-600" />
//     },
//     {
//         title: "MD / MS Programs",
//         desc: "PG Medical Specializations",
//         icon: <Microscope className="w-12 h-12 text-blue-600" />
//     },
//     {
//         title: "BDS Programs",
//         desc: "Best Dentistry Colleges",
//         icon: <HeartPulse className="w-12 h-12 text-blue-600" />
//     },
//     {
//         title: "Paramedical",
//         desc: "Allied health courses",
//         icon: <GraduationCap className="w-12 h-12 text-blue-600" />
//     },
//     {
//         title: "Overseas MBBS",
//         desc: "Best countries for MBBS abroad",
//         icon: <Globe className="w-12 h-12 text-blue-600" />
//     }
// ];

// export default function CareerGoals({ navigate }) {
//     return (
//         <section className="py-16 bg-gradient-to-b from-blue-100 to-white overflow-hidden">
//             <h2 className="text-center text-3xl font-bold mb-10">
//                 Explore Career Goals
//             </h2>

//             {/* ✅ Perfect Responsive Grid */}
//             <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-8">
//                 {goals.map((goal, i) => (
//                     <motion.div
//                         key={i}
//                         whileHover={{
//                             scale: 1.05,
//                             rotateX: 4,
//                             rotateY: 4,
//                             boxShadow: "0 15px 35px rgba(30, 64, 175, 0.35)",
//                             backgroundColor: "rgba(239,246,255,1)",
//                             borderColor: "rgba(30,64,175,1)"
//                         }}
//                         transition={{ type: "spring", stiffness: 180 }}
//                         className="
//                             bg-white p-8 rounded-2xl border border-gray-200 
//                             shadow-xl cursor-pointer 
//                             text-center flex flex-col items-center
//                             hover:shadow-2xl transition-all duration-300
//                         "
//                         onClick={() =>
//                             navigate(`/courses/${goal.title.replace(/\s+/g, "-")}`)
//                         }
//                     >
//                         {/* ✅ ICON */}
//                         <div className="mb-4">{goal.icon}</div>

//                         {/* ✅ TITLE */}
//                         <h3 className="text-xl font-semibold text-blue-700">
//                             {goal.title}
//                         </h3>

//                         {/* ✅ DESCRIPTION */}
//                         <p className="text-gray-600 mt-2 text-sm">{goal.desc}</p>

//                         {/* ✅ BUTTON */}
//                         <motion.button
//                             whileHover={{ x: 5 }}
//                             className="mt-4 font-semibold text-blue-600 hover:text-blue-800"
//                         >
//                             Learn More →
//                         </motion.button>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     );
// }



import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, HeartPulse, Globe, Microscope } from "lucide-react";

const goals = [
    {
        title: "MBBS in India",
        desc: "Top NEET colleges",
        icon: <Stethoscope className="w-12 h-12 text-blue-600" />
    },
    {
        title: "MD / MS Programs",
        desc: "PG Medical Specializations",
        icon: <Microscope className="w-12 h-12 text-blue-600" />
    },
    {
        title: "BDS Programs",
        desc: "Best Dentistry Colleges",
        icon: <HeartPulse className="w-12 h-12 text-blue-600" />
    },
    {
        title: "Paramedical",
        desc: "Allied health courses",
        icon: <GraduationCap className="w-12 h-12 text-blue-600" />
    },
    {
        title: "Overseas MBBS",
        desc: "Best countries for MBBS abroad",
        icon: <Globe className="w-12 h-12 text-blue-600" />
    }
];

export default function CareerGoals({ navigate }) {
    return (
        <section className="py-16 bg-gradient-to-b from-blue-100 to-white overflow-hidden">
            <h2 className="text-center text-3xl font-bold mb-10">
                Explore Career Goals
            </h2>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                {goals.map((goal, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.07,
                            rotateX: 6,
                            rotateY: 4,
                            boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)",
                            backgroundColor: "rgb(239, 246, 255)",
                            borderColor: "rgb(37, 99, 235)",
                        }}
                        transition={{ duration: 0.4 }}
                        onClick={() =>
                            navigate(`/courses/${goal.title.replace(/\s+/g, "-")}`)
                        }
                        className="
                            bg-white p-8 rounded-2xl border border-gray-200 
                            shadow-lg cursor-pointer relative group text-center
                            hover:shadow-2xl transition-all duration-300 flex flex-col items-center
                        "
                    >
                        {/* Shine */}
                        <span className="
                            absolute inset-0 bg-gradient-to-r 
                            from-transparent via-white/30 to-transparent
                            opacity-0 group-hover:opacity-100 
                            transition duration-700 pointer-events-none
                        " />

                        {/* ICON */}
                        <div className="mb-4 transform group-hover:scale-110 transition-all duration-300">
                            {goal.icon}
                        </div>

                        {/* TITLE */}
                        <h3 className="text-xl font-semibold text-blue-700 group-hover:text-blue-800 transition">
                            {goal.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="text-gray-600 mt-2 text-sm group-hover:text-gray-700 transition">
                            {goal.desc}
                        </p>

                        {/* Learn More */}
                        <motion.button
                            whileHover={{ x: 6 }}
                            className="mt-4 font-semibold text-blue-600 group-hover:text-blue-800 transition"
                        >
                            Learn More →
                        </motion.button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
