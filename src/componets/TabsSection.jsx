import { motion } from "framer-motion";
import { useState } from "react";
import { Search, BadgeCheck, FileText, Newspaper, Pencil, Plane } from "lucide-react";

export default function TabsSection({ onTabChange = () => { } }) {
    const tabs = [
        { id: "find", label: "Find Colleges", icon: <Search className="w-6 h-6" /> },
        { id: "admission", label: "Get Admission", icon: <BadgeCheck className="w-6 h-6" /> },
        // { id: "exams", label: "Explore Exams", icon: <FileText className="w-6 h-6" /> },
        { id: "news", label: "Latest News", icon: <Newspaper className="w-6 h-6" /> },
        { id: "review", label: "Write a Review", icon: <Pencil className="w-6 h-6" /> },
        { id: "abroad", label: "Study Abroad", icon: <Plane className="w-6 h-6" /> },
    ];

    const [active, setActive] = useState("find");

    return (
        <section className="w-full bg-[#F8FAFF] py-10 border-y border-gray-200">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10 px-4">

                {tabs.map((t) => (
                    <motion.div
                        key={t.id}
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => {
                            setActive(t.id);
                            onTabChange(t.id);
                        }}
                        className="
                            group cursor-pointer flex flex-col items-center gap-2 
                            p-4 rounded-xl transition-all duration-300
                        "
                    >
                        {/* ICON */}
                        <motion.div
                            initial={false}
                            animate={{
                                scale: active === t.id ? 1.15 : 1,
                                color: active === t.id ? "#1d4ed8" : "#94a3b8"
                            }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="group-hover:text-blue-600"
                        >
                            {t.icon}
                        </motion.div>

                        {/* LABEL */}
                        <span
                            className={`
                                text-sm font-medium transition-all
                                ${active === t.id ? "text-blue-700 font-semibold" : "text-gray-600 group-hover:text-blue-600"}
                            `}
                        >
                            {t.label}
                        </span>

                        {/* UNDERLINE ANIMATION */}
                        <motion.div
                            initial={false}
                            animate={{
                                width: active === t.id ? "60%" : "0%",
                                opacity: active === t.id ? 1 : 0
                            }}
                            transition={{ duration: 0.35 }}
                            className="h-[3px] bg-blue-600 rounded-full"
                        />

                    </motion.div>
                ))}

            </div>
        </section>
    );
}
