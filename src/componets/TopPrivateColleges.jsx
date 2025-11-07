// import { motion } from "framer-motion";
// import { useState } from "react";

// const data = [
//     {
//         state: "Rajasthan",
//         icon: "https://cdn-icons-png.flaticon.com/512/744/744469.png",
//         colleges: [
//             "SMS Medical College, Jaipur",
//             "Mahatma Gandhi Medical College, Jaipur",
//             "JLN Medical College, Ajmer",
//             "Geetanjali Medical College, Udaipur",
//             "Pacific Medical University, Udaipur",
//             "NIMS Medical College, Jaipur",
//         ],
//     },
//     {
//         state: "Uttar Pradesh",
//         icon: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
//         colleges: [
//             "King George’s Medical University, Lucknow",
//             "Subharti Medical College, Meerut",
//             "Santosh Medical College, Ghaziabad",
//             "Era’s Lucknow Medical College",
//             "Hind Institute of Medical Sciences, Barabanki",
//             "Heritage Institute of Medical Sciences, Varanasi",
//         ],
//     },
//     {
//         state: "Karnataka",
//         icon: "https://cdn-icons-png.flaticon.com/512/482/482546.png",
//         colleges: [
//             "MS Ramaiah Medical College",
//             "Kempegowda Institute of Medical Sciences",
//             "AJ Institute of Medical Sciences",
//             "Vydehi Institute of Medical Sciences",
//             "St. John’s Medical College",
//             "KS Hegde Medical Academy",
//         ],
//     },
//     {
//         state: "Kerala",
//         icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
//         colleges: [
//             "Amrita School of Medicine, Kochi",
//             "Jubilee Mission Medical College, Thrissur",
//             "MES Medical College, Malappuram",
//             "Sree Gokulam Medical College, Thiruvananthapuram",
//             "Pushpagiri Institute of Medical Sciences",
//             "Malankara Orthodox Syrian Church Medical College",
//         ],
//     },
//     {
//         state: "Maharashtra",
//         icon: "https://cdn-icons-png.flaticon.com/512/814/814513.png",
//         colleges: [
//             "DY Patil Medical College, Pune",
//             "Bharati Vidyapeeth Medical College, Pune",
//             "MGM Medical College, Navi Mumbai",
//             "Krishna Institute of Medical Sciences, Karad",
//             "Dr. D.Y. Patil Medical College, Kolhapur",
//             "Terna Medical College, Nerul",
//         ],
//     },
// ];

// export default function TopPrivateColleges() {
//     const [active, setActive] = useState(data[0]);

//     return (
//         <section className="py-12 px-4 md:px-16 bg-blue-50">
//             <div className="max-w-6xl mx-auto text-center">
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
//                     Top Private <span className="text-blue-600">MBBS Colleges</span> in India
//                 </h2>
//                 <p className="text-gray-600 mb-8">
//                     Explore top private medical colleges by state — choose your dream destination.
//                 </p>

//                 {/* State Tabs */}
//                 <div className="flex flex-wrap justify-center gap-3 mb-10">
//                     {data.map((state, i) => (
//                         <button
//                             key={i}
//                             onClick={() => setActive(state)}
//                             className={`flex items-center gap-2 px-4 py-2 rounded-full border ${active.state === state.state
//                                 ? "bg-blue-600 text-white border-blue-600"
//                                 : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
//                                 } transition`}
//                         >
//                             <img src={state.icon} alt={state.state} className="w-5 h-5" />
//                             {state.state}
//                         </button>
//                     ))}
//                 </div>

//                 {/* College Cards */}
//                 <motion.div
//                     key={active.state}
//                     initial={{ opacity: 0, y: 15 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4 }}
//                     className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
//                 >
//                     {active.colleges.map((college, i) => (
//                         <div
//                             key={i}
//                             className="bg-white shadow-lg rounded-xl p-5 hover:shadow-xl transition flex flex-col justify-between"
//                         >
//                             <h3 className="font-semibold text-gray-800 text-lg mb-2">
//                                 {college}
//                             </h3>
//                             <p className="text-sm text-gray-500">
//                                 {active.state}, India
//                             </p>
//                         </div>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     );
// }





import { motion } from "framer-motion";
import { useState } from "react";

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
    },
];

export default function TopPrivateColleges() {
    const [active, setActive] = useState(data[0]);

    return (
        <section className="py-14 px-4 md:px-16 bg-blue-50">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    Top Private <span className="text-blue-600">MBBS Colleges</span> in India
                </h2>
                <p className="text-gray-600 mb-10">
                    Explore top private medical colleges by state — choose your dream destination.
                </p>

                {/* ✅ STATE TABS */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {data.map((state, i) => {
                        const isActive = active.state === state.state;
                        return (
                            <motion.button
                                key={i}
                                onClick={() => setActive(state)}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative px-5 py-2.5 rounded-full flex items-center gap-2 border font-medium transition-all
                                    ${isActive
                                        ? "bg-blue-600 text-white border-blue-600 shadow-md"
                                        : "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-blue-50"
                                    }`}
                            >
                                {/* Icon */}
                                <img src={state.icon} alt={state.state} className="w-5 h-5" />

                                {/* Label */}
                                {state.state}

                                {/* ✅ Animated active indicator */}
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 rounded-full bg-blue-600 -z-10"
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    />
                                )}
                            </motion.button>
                        );
                    })}
                </div>

                {/* ✅ COLLEGE CARDS */}
                <motion.div
                    key={active.state}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7"
                >
                    {active.colleges.map((college, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{
                                scale: 1.03,
                                borderColor: "rgb(37,99,235)", // blue-600
                                backgroundColor: "rgb(239,246,255)", // blue-50
                                boxShadow: "0 12px 30px rgba(30, 64, 175, 0.25)"
                            }}
                            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-left transition-all cursor-pointer"
                        >
                            <h3 className="font-semibold text-gray-800 text-lg leading-tight">
                                {college}
                            </h3>
                            <p className="text-sm text-gray-500 mt-2">
                                {active.state}, India
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
