import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DATA = [
    {
        name: "Aarav Sharma",
        course: "MBBS — Maharashtra",
        text: "College shortlist + counseling strategy ne pura process easy kar diya. Genuine mentorship!",
        avatar: "https://i.pravatar.cc/120?img=5",
    },
    {
        name: "Meera Gupta",
        course: "MD — Karnataka",
        text: "Seat allotment tak constant follow-ups milte rahe. Documentation bhi smooth ho gaya.",
        avatar: "https://i.pravatar.cc/120?img=15",
    },
    {
        name: "Kabir Jain",
        course: "BDS — Delhi NCR",
        text: "Realistic options, fake promises nahi. ROI aur placements par honest discussion.",
        avatar: "https://i.pravatar.cc/120?img=11",
    },
];

export default function ReviewsSection() {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setIdx((p) => (p + 1) % DATA.length), 3500);
        return () => clearInterval(t);
    }, []);

    const go = (d) => setIdx((p) => (p + d + DATA.length) % DATA.length);

    return (
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Hear from Our Students</h2>
                <p className="text-gray-600 mb-8">Real experiences. Real outcomes.</p>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -15, scale: 0.98 }}
                            transition={{ duration: 0.35 }}
                            className="bg-white rounded-2xl shadow-xl px-6 py-8"
                        >
                            <img
                                src={DATA[idx].avatar}
                                alt={DATA[idx].name}
                                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                            />
                            <h3 className="font-semibold text-lg">{DATA[idx].name}</h3>
                            <p className="text-sm text-blue-600">{DATA[idx].course}</p>
                            <p className="text-gray-700 mt-4 max-w-2xl mx-auto">{DATA[idx].text}</p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="flex justify-center gap-4 mt-6">
                        <button onClick={() => go(-1)} className="px-3 py-1.5 rounded-lg border hover:bg-gray-50">
                            ‹ Prev
                        </button>
                        <button onClick={() => go(1)} className="px-3 py-1.5 rounded-lg border hover:bg-gray-50">
                            Next ›
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-3">
                        {DATA.map((_, i) => (
                            <span
                                key={i}
                                className={`w-2.5 h-2.5 rounded-full ${i === idx ? "bg-blue-600" : "bg-gray-300"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
