import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TopPrivateColleges from "../componets/TopPrivateColleges";
import CounsellingSlider from "../componets/CounsellingSlider";
import StudentFeedbackSlider from "../componets/StudentFeedbackSlider";
import SuccessStories from "../componets/SuccessStories";
import HeroSectionBg from "../assets/bg_college.avif";
import TabsSection from "../componets/TabsSection";
import CareerGoals from "../componets/CareerGoals";
import SupportSection from "../componets/SupportSection";
import MediaSection from "../componets/MediaSection";
import ExpertCarousel from "../componets/ExpertsCarousel";
import FloatingButtons from "../componets/FloatingButtons";

export default function HeroSection() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [allCourses, setAllCourses] = useState([]);

    const images = [HeroSectionBg, HeroSectionBg];

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await axios.get("/api/courses");
                setAllCourses(res.data);
            } catch (err) {
                console.error("Error fetching courses:", err);
            }
        };
        fetchCourses();
    }, []);

    const handleSearch = (query) => {
        setSearch(query);
        if (!query.trim()) {
            setFilteredCourses([]);
            return;
        }
        const filtered = allCourses.filter((course) =>
            course.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCourses(filtered);
    };

    return (
        <>
            <div className="w-full flex flex-col bg-gradient-to-b from-blue-50 via-blue-50/50 to-white">
                <header className="sr-only">
                    <h1>Apna University – Your journey to a medical seat starts with the right guidance.</h1>
                </header>

                {/* ✅ Hero Section */}
                <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
                    <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop className="w-full h-full">
                        {images.map((src, i) => (
                            <SwiperSlide key={i}>
                                <img src={src} alt={`slide-${i}`} className="w-full h-full object-cover" loading="lazy" />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* ✅ Search Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/40 text-white px-4 z-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-2xl md:text-4xl font-bold max-w-2xl"
                        >
                            “Find Your Ideal Medical Path with Personalized Guidance.”
                        </motion.h2>

                        {/* Search */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-6 bg-white text-gray-700 rounded-xl shadow-lg w-full max-w-xl flex items-center px-4 py-2"
                        >
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => handleSearch(e.target.value)}
                                placeholder="Search courses or universities..."
                                className="flex-grow px-3 py-2 outline-none text-gray-700"
                            />
                            <button
                                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700"
                            >
                                Search
                            </button>
                        </motion.div>

                        {/* Suggestions */}
                        {filteredCourses.length > 0 && (
                            <motion.ul
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="bg-white text-gray-800 mt-3 rounded-xl shadow-lg w-full max-w-xl p-3 text-left"
                            >
                                {filteredCourses.map((item) => (
                                    <li
                                        key={item.id}
                                        onClick={() => navigate(`/course/${item.id}`)}
                                        className="px-3 py-2 hover:bg-blue-50 cursor-pointer rounded-md"
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </div>
                </section>
            </div>

            <TabsSection />
            <CareerGoals />
            <TopPrivateColleges />
            <SupportSection />
            <ExpertCarousel />
            <CounsellingSlider />
            <SuccessStories />
            <MediaSection />
            <StudentFeedbackSlider />
            {/* ✅ Floating Buttons */}
            <FloatingButtons onChatOpen={() => setChatOpen(true)} />
        </>
    );
}
