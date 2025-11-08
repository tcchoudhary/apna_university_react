import { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SuccessStories() {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const data = [
            {
                id: 1,
                name: "Ananya Mehta",
                course: "MBBS - Russia",
                image: "https://randomuser.me/api/portraits/women/65.jpg",
                quote:
                    "AU guided me at every step! I got into a top Russian medical college with scholarship!",
            },
            {
                id: 2,
                name: "Rohit Verma",
                course: "MBBS - Georgia",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                quote:
                    "Perfect university selection & visa guidance. My journey was stress-free!",
            },
            {
                id: 3,
                name: "Sneha Gupta",
                course: "BDS - India",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                quote:
                    "Got admission in a top BDS college. AU’s team helped at every stage!",
            },
            {
                id: 4,
                name: "Arjun Singh",
                course: "MD - Philippines",
                image: "https://randomuser.me/api/portraits/men/41.jpg",
                quote:
                    "Mock counseling + comparisons changed everything. Highly recommended!",
            },
        ];

        setStories(data);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <>
            <Helmet>
                <title>Success Stories | Apna University</title>
            </Helmet>

            <section className="py-20 bg-gradient-to-b from-white to-blue-50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-extrabold mb-3 drop-shadow-sm"
                    >
                        <span className="text-pink-500">Our Students’</span>{" "}
                        <span className="text-blue-500">Success Stories</span>
                    </motion.h2>
                    <p className="text-teal-600 max-w-2xl mx-auto mb-14 text-lg">
                        Real journeys of students who turned dreams into reality with AU.
                    </p>


                    <Slider {...settings}>
                        {stories.map((story, i) => (
                            <div key={story.id} className="px-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.15, duration: 0.6 }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow:
                                            "0 20px 40px rgba(59, 130, 246, 0.3)",
                                        backgroundColor: "rgba(240, 249, 255, 0.85)",
                                        borderColor: "rgb(59 130 246)",
                                    }}
                                    className="
                                        h-[350px]
                                        bg-white border border-gray-200
                                        rounded-3xl shadow-md p-8
                                        flex flex-col items-center text-center
                                        transition-all duration-300
                                        cursor-pointer
                                    "
                                >
                                    <motion.img
                                        src={story.image}
                                        alt={story.name}
                                        className="
                                            w-28 h-28 rounded-full object-cover
                                            border-4 border-blue-100 shadow-lg mb-6
                                            transition-transform duration-300
                                        "
                                        whileHover={{ scale: 1.12 }}
                                    />

                                    <p className="text-gray-700 italic text-base mb-6 leading-relaxed max-w-[260px] mx-auto">
                                        “{story.quote}”
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {story.name}
                                    </h3>

                                    <p className="text-blue-600 font-medium text-sm mt-1">
                                        {story.course}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    );
}
