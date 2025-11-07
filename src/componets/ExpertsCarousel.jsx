// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, Star, ShieldCheck } from "lucide-react";
// import CounselorForm from "./CounselorForm"; // ✅ rename to match file

// const EXPERTS = [
//     { id: 1, name: "Rohit Gupta", role: "Education Expert", qualification: "MBA", experience: "8 years experience", rating: 4.8, count: 2423, image: "https://i.pravatar.cc/250?img=12" },
//     { id: 2, name: "Sarthak Garg", role: "Sr. Mentor", qualification: "MCA", experience: "6 years experience", rating: 4.7, count: 2339, image: "https://i.pravatar.cc/250?img=8" },
//     { id: 3, name: "Sakshi Rajput", role: "Sr. Mentor", qualification: "M.Com", experience: "5 years experience", rating: 4.5, count: 1724, image: "https://i.pravatar.cc/250?img=31" },
//     { id: 4, name: "Manish Thapliyal", role: "Sr. Mentor", qualification: "MA", experience: "6 years experience", rating: 4.6, count: 1943, image: "https://i.pravatar.cc/250?img=9" }
// ];

// export default function ExpertsCarousel() {
//     const [index, setIndex] = useState(0);
//     const [openForm, setOpenForm] = useState(false);
//     const [selectedExpert, setSelectedExpert] = useState(null);

//     const next = () => setIndex((p) => (p + 1) % EXPERTS.length);
//     const prev = () => setIndex((p) => (p - 1 + EXPERTS.length) % EXPERTS.length);

//     const handleConsult = (expert) => {
//         setSelectedExpert(expert);
//         setOpenForm(true);
//     };

//     return (
//         <section className="py-16 bg-[#0A0F2C] text-white">
//             <div className="max-w-7xl mx-auto px-6">
//                 <h2 className="text-3xl md:text-4xl font-bold text-center">Right Guidance from Experts</h2>
//                 <p className="text-center text-gray-300 mt-2 mb-10 text-sm md:text-base">
//                     Our team of certified counselors is guiding 50,000+ students every year.
//                 </p>

//                 <div className="relative">
//                     {/* Left Arrow */}
//                     <button
//                         onClick={prev}
//                         className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-100 z-20"
//                         aria-label="Previous experts"
//                     >
//                         <ChevronLeft className="w-5 h-5" />
//                     </button>

//                     {/* Cards */}
//                     <div className="overflow-hidden px-10">
//                         <AnimatePresence mode="wait">
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, x: 60 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 exit={{ opacity: 0, x: -60 }}
//                                 transition={{ duration: 0.4 }}
//                                 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//                             >
//                                 {EXPERTS.map((expert) => (
//                                     <motion.div
//                                         key={expert.id}
//                                         className="relative bg-white text-black rounded-2xl shadow-xl overflow-hidden"
//                                         whileHover={{ scale: 1.03 }}
//                                     >
//                                         {/* Rating Tag */}
//                                         <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-xl shadow flex items-center gap-1">
//                                             <Star className="w-4 h-4 text-yellow-500" />
//                                             <span className="text-sm font-semibold">{expert.rating}</span>
//                                         </div>

//                                         {/* Counselling Count */}
//                                         <div className="absolute top-3 right-3 bg-green-500/90 text-white px-3 py-1 rounded-xl shadow text-xs">
//                                             <ShieldCheck className="w-4 h-4 inline mr-1" />
//                                             {expert.count}+ Counseling
//                                         </div>

//                                         {/* Image */}
//                                         <img src={expert.image} alt={expert.name} className="w-full h-48 object-cover" />

//                                         {/* Content */}
//                                         <div className="p-4 text-center">
//                                             <h3 className="font-semibold text-lg">{expert.name}</h3>
//                                             <p className="text-gray-700 text-sm">
//                                                 {expert.role} • {expert.qualification}
//                                             </p>
//                                             <p className="text-gray-500 text-sm mt-1">{expert.experience}</p>

//                                             <button
//                                                 onClick={() => handleConsult(expert)}
//                                                 className="mt-4 w-full bg-black text-white py-2 rounded-xl font-semibold hover:bg-gray-800 transition"
//                                             >
//                                                 Consult Now
//                                             </button>
//                                         </div>
//                                     </motion.div>
//                                 ))}
//                             </motion.div>
//                         </AnimatePresence>
//                     </div>

//                     {/* Right Arrow */}
//                     <button
//                         onClick={next}
//                         className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-100 z-20"
//                         aria-label="Next experts"
//                     >
//                         <ChevronRight className="w-5 h-5" />
//                     </button>
//                 </div>
//             </div>

//             {/* 🔵 Counselor Form Modal */}
//             <CounselorForm
//                 show={openForm}
//                 onClose={() => setOpenForm(false)}
//                 // optional: prefill props your form supports
//                 // initialValues={{ message: `I want to consult ${selectedExpert?.name} (${selectedExpert?.role})` }}
//                 expert={selectedExpert} // pass whole object if your form can read it
//                 source="experts-carousel"
//             />
//         </section>
//     );
// }




import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, ShieldCheck } from "lucide-react";
import CounselorForm from "./CounselorForm";

const EXPERTS = [
    { id: 1, name: "Rohit Gupta", role: "Education Expert", qualification: "MBA", experience: "8 years experience", rating: 4.8, count: 2423, image: "https://i.pravatar.cc/400?img=12" },
    { id: 2, name: "Sarthak Garg", role: "Sr. Mentor", qualification: "MCA", experience: "6 years experience", rating: 4.7, count: 2339, image: "https://i.pravatar.cc/400?img=8" },
    { id: 3, name: "Sakshi Rajput", role: "Sr. Mentor", qualification: "M.Com", experience: "5 years experience", rating: 4.5, count: 1724, image: "https://i.pravatar.cc/400?img=31" },
    { id: 4, name: "Manish Thapliyal", role: "Sr. Mentor", qualification: "MA", experience: "6 years experience", rating: 4.6, count: 1943, image: "https://i.pravatar.cc/400?img=9" }
];

export default function ExpertsCarousel() {
    const [index, setIndex] = useState(0);
    const [openForm, setOpenForm] = useState(false);
    const [selectedExpert, setSelectedExpert] = useState(null);

    const next = () => setIndex((p) => (p + 1) % EXPERTS.length);
    const prev = () => setIndex((p) => (p - 1 + EXPERTS.length) % EXPERTS.length);

    const handleConsult = (expert) => {
        setSelectedExpert(expert);
        setOpenForm(true);
    };

    return (
        <section className="py-16 relative overflow-hidden">
            {/* Themed gradient band background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A0F2C] via-[#0A0F2C] to-[#0e1540]" />
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue">
                        Right Guidance from Experts
                    </h2>
                    <p className="text-black-300 mt-2 text-sm md:text-base">
                        Our certified counselors guide 50,000+ students every year.
                    </p>
                </div>

                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={prev}
                        aria-label="Previous experts"
                        className="group absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/95 hover:bg-white shadow-lg ring-1 ring-gray-200 p-3 z-20 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-800 group-hover:text-blue-700 transition" />
                    </button>

                    {/* Cards */}
                    <div className="overflow-hidden px-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 60 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -60 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                            >
                                {EXPERTS.map((expert) => (
                                    <motion.article
                                        key={expert.id}
                                        whileHover={{
                                            y: -6,
                                            rotateX: 2,
                                            boxShadow: "0 24px 60px rgba(30,64,175,0.25)"
                                        }}
                                        className="relative rounded-2xl bg-white/98 backdrop-blur border border-gray-100 shadow-md transition"
                                    >
                                        {/* Top badges */}
                                        <div className="absolute top-3 left-3 bg-white/95 px-3 py-1 rounded-xl shadow flex items-center gap-1 ring-1 ring-gray-100">
                                            <Star className="w-4 h-4 text-yellow-500" />
                                            <span className="text-sm font-semibold text-gray-800">{expert.rating}</span>
                                        </div>
                                        <div className="absolute top-3 right-3 bg-emerald-500 text-white px-3 py-1 rounded-xl shadow text-xs font-medium flex items-center gap-1">
                                            <ShieldCheck className="w-4 h-4" />
                                            {expert.count}+ Counselings
                                        </div>

                                        {/* Image */}
                                        <div className="overflow-hidden rounded-t-2xl">
                                            <img
                                                src={expert.image}
                                                alt={`${expert.name} – ${expert.role}`}
                                                loading="lazy"
                                                className="w-full h-48 object-cover transition-transform duration-500 ease-out hover:scale-105"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 text-center">
                                            <h3 className="font-semibold text-lg text-gray-900">{expert.name}</h3>
                                            <p className="text-gray-700 text-sm mt-0.5">
                                                {expert.role} • {expert.qualification}
                                            </p>
                                            <p className="text-gray-500 text-sm mt-1">{expert.experience}</p>

                                            <button
                                                onClick={() => handleConsult(expert)}
                                                className="
                          mt-4 w-full inline-flex items-center justify-center
                          rounded-xl px-4 py-2.5 font-semibold
                          bg-gradient-to-r from-blue-700 to-blue-600
                          text-white shadow hover:from-blue-800 hover:to-blue-700
                          focus:outline-none focus:ring-2 focus:ring-blue-400
                          transition
                        "
                                            >
                                                Consult Now
                                            </button>
                                        </div>

                                        {/* Decorative blue edge on hover */}
                                        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-to-r from-blue-500/0 via-blue-600 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    </motion.article>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={next}
                        aria-label="Next experts"
                        className="group absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/95 hover:bg-white shadow-lg ring-1 ring-gray-200 p-3 z-20 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-800 group-hover:text-blue-700 transition" />
                    </button>
                </div>
            </div>

            {/* Modal */}
            <CounselorForm
                show={openForm}
                onClose={() => setOpenForm(false)}
                expert={selectedExpert}
                source="experts-carousel"
            />
        </section>
    );
}
