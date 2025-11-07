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
import HeroHeaderAdvanced from "../componets/HeroHeaderAdvanced";

export default function HeroSection() {
    const [allCourses, setAllCourses] = useState([]);
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



    return (
        <>

            <HeroHeaderAdvanced
                images={[HeroSectionBg, HeroSectionBg]}
                onSearch={(q) => console.log("Search =>", q)}
                suggestions={[]} // future API data
            />
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



