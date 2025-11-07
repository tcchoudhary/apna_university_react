// // import { motion } from "framer-motion";
// // import { Headset, Notebook, ShieldCheck, FileSignature, Globe2, CheckCircle2 } from "lucide-react";

// // const ITEMS = [
// //     { icon: Headset, title: "Personalized Counseling", desc: "1:1 guidance for course & college selection." },
// //     { icon: Notebook, title: "College Shortlisting", desc: "Cutoffs, fees, ROI & comparisons in one place." },
// //     { icon: FileSignature, title: "Form Filling + Docs", desc: "Applications, SOPs, LORs & verification help." },
// //     { icon: ShieldCheck, title: "Admission Assurance", desc: "End-to-end tracking till seat allotment." },
// //     { icon: Globe2, title: "Overseas Support", desc: "Visa, forex, accommodation & onboarding." },
// //     { icon: CheckCircle2, title: "Post-Admission Care", desc: "On-campus onboarding & follow-ups." },
// // ];

// // export default function SupportSection() {
// //     return (
// //         <section className="py-16 bg-gradient-to-b from-white to-blue-50">
// //             <div className="max-w-7xl mx-auto px-6">
// //                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">End-to-End Support</h2>
// //                 <p className="text-center text-gray-600 mb-10">Admissions ko stress-free banane ke liye complete workflow</p>

// //                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //                     {ITEMS.map((it, i) => (
// //                         <motion.div
// //                             key={it.title}
// //                             initial={{ opacity: 0, y: 20, rotateX: -8 }}
// //                             whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
// //                             viewport={{ once: true, amount: 0.2 }}
// //                             transition={{ duration: 0.5, delay: i * 0.05 }}
// //                             whileHover={{ scale: 1.03, rotateX: 4, boxShadow: "0 20px 50px rgba(0,0,0,0.12)" }}
// //                             className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
// //                         >
// //                             <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
// //                                 <it.icon className="w-6 h-6 text-blue-600" />
// //                             </div>
// //                             <h3 className="text-lg font-semibold">{it.title}</h3>
// //                             <p className="text-gray-600 mt-1 text-sm">{it.desc}</p>
// //                         </motion.div>
// //                     ))}
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // }





// import { motion } from "framer-motion";

// // ✅ Illustrator Style Dummy Icons (Replace URLs later with real illustrator SVGs)
// const ICONS = [
//     "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
//     "https://cdn-icons-png.flaticon.com/512/1047/1047850.png",
//     "https://cdn-icons-png.flaticon.com/512/3050/3050525.png",
//     "https://cdn-icons-png.flaticon.com/512/2997/2997933.png",
//     "https://cdn-icons-png.flaticon.com/512/2010/2010644.png",
//     "https://cdn-icons-png.flaticon.com/512/1047/1047711.png",
// ];

// const ITEMS = [
//     { title: "Personalized Counseling", desc: "1:1 guidance for course & college selection." },
//     { title: "College Shortlisting", desc: "Cutoffs, fees, ROI & comparisons in one place." },
//     { title: "Form Filling + Docs", desc: "Applications, SOPs, LORs & verification help." },
//     { title: "Admission Assurance", desc: "End-to-end tracking till seat allotment." },
//     { title: "Overseas Support", desc: "Visa, forex, accommodation & onboarding." },
//     { title: "Post-Admission Care", desc: "On-campus onboarding & follow-ups." },
// ];

// export default function SupportSection() {
//     return (
//         <section className="py-16 bg-gradient-to-b from-white to-blue-50/40">
//             <div className="max-w-7xl mx-auto px-6">
//                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
//                     End-to-End Support
//                 </h2>
//                 <p className="text-center text-gray-600 mb-10">
//                     Admissions ko stress-free banane ke liye complete workflow
//                 </p>

//                 {/* GRID */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
//                     {ITEMS.map((it, i) => (
//                         <motion.div
//                             key={i}
//                             initial={{ opacity: 0, y: 20, scale: 0.95 }}
//                             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                             whileHover={{
//                                 scale: 1.06,
//                                 rotateX: 6,
//                                 boxShadow: "0 18px 40px rgba(29,78,216,0.22)",
//                             }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.4, delay: i * 0.07 }}
//                             className="
//                                 bg-white rounded-2xl p-6 shadow-md border 
//                                 border-gray-200/70 
//                                 hover:border-blue-500 
//                                 hover:bg-blue-600 
//                                 hover:text-white 
//                                 relative overflow-hidden 
//                                 transition-all
//                             "
//                         >
//                             {/* Light Shine Hover Effect */}
//                             <span
//                                 className="
//                                     absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent 
//                                     opacity-0 hover:opacity-100 transition duration-500
//                                 "
//                             />

//                             {/* ICON */}
//                             <div className="
//                                 w-14 h-14 rounded-xl bg-blue-50 
//                                 flex items-center justify-center mb-4 
//                                 group-hover:bg-white transition-all
//                             ">
//                                 <img
//                                     src={ICONS[i]}
//                                     className="w-8 h-8 object-contain group-hover:scale-110 transition-all duration-300"
//                                 />
//                             </div>

//                             {/* TEXT */}
//                             <h3 className="text-lg font-semibold group-hover:text-white">
//                                 {it.title}
//                             </h3>
//                             <p className="mt-1 text-gray-600 group-hover:text-gray-100 text-sm">
//                                 {it.desc}
//                             </p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }




import { motion } from "framer-motion";

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

export default function SupportSection() {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-blue-50/40">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
                    End-to-End Support
                </h2>
                <p className="text-center text-gray-600 mb-12">
                    Aapke admission journey ko smooth aur stress-free banane ke liye
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ITEMS.map((it, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            whileHover={{
                                scale: 1.07,
                                rotateX: 6,
                                boxShadow: "0 22px 45px rgba(29,78,216,0.25)",
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: i * 0.07 }}
                            className="
                                bg-white rounded-2xl p-6 shadow-md border border-gray-200
                                hover:border-blue-500 hover:bg-blue-600 hover:text-white
                                transition-all relative overflow-hidden group text-center
                            "
                        >
                            {/* Shine Effect */}
                            <span
                                className="
                                    absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition duration-700
                                "
                            />

                            {/* ✅ Icon Centered */}
                            <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-50 group-hover:bg-white flex items-center justify-center mb-4 shadow-sm transition-all">
                                <img
                                    src={ICONS[i]}
                                    className="w-10 h-10 object-contain group-hover:scale-110 transition-all duration-300"
                                />
                            </div>

                            {/* ✅ Centered Title */}
                            <h3 className="text-lg font-semibold group-hover:text-white">
                                {it.title}
                            </h3>

                            {/* ✅ Centered Description */}
                            <p className="mt-2 text-gray-600 group-hover:text-gray-100 text-sm leading-relaxed">
                                {it.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
