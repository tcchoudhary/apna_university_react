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
                image: "https://source.unsplash.com/200x200/?woman,student",
                quote:
                    "AU guided me at every step! I got into a top Russian medical college with scholarship!",
            },
            {
                id: 2,
                name: "Rohit Verma",
                course: "MBBS - Georgia",
                image: "https://source.unsplash.com/200x200/?man,student",
                quote:
                    "Perfect university selection & visa guidance. My journey was stress-free!",
            },
            {
                id: 3,
                name: "Sneha Gupta",
                course: "BDS - India",
                image: "https://source.unsplash.com/200x200/?girl,graduate",
                quote:
                    "Got admission in a top BDS college. AU’s team helped at every stage!",
            },
            {
                id: 4,
                name: "Arjun Singh",
                course: "MD - Philippines",
                image: "https://source.unsplash.com/200x200/?boy,student",
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

            <section className="py-16 bg-gradient-to-b from-white to-blue-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
                    >
                        Our Students’ Success Stories
                    </motion.h2>
                    <p className="text-gray-600 mb-10">
                        Real journeys of students who turned dreams into reality with AU.
                    </p>

                    <Slider {...settings}>
                        {stories.map((story, i) => (
                            <div key={story.id} className="px-3">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.15, duration: 0.6 }}
                                    whileHover={{
                                        scale: 1.06,
                                        backgroundColor: "rgba(230,245,255,1)",
                                        borderColor: "rgb(37,99,235)",
                                        boxShadow:
                                            "0px 25px 40px rgba(30, 64, 175, 0.25)",
                                    }}
                                    className="
                                        h-[330px]
                                        bg-white border border-gray-200 
                                        rounded-2xl shadow-md p-6 
                                        flex flex-col items-center text-center 
                                        transition-all duration-300
                                    "
                                >
                                    <motion.img
                                        src={story.image}
                                        className="
                                            w-24 h-24 rounded-full object-cover 
                                            border-4 border-blue-100 shadow-md mb-4
                                        "
                                        whileHover={{ scale: 1.10 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    <p className="text-gray-600 italic text-sm mb-4 line-clamp-3">
                                        “{story.quote}”
                                    </p>

                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {story.name}
                                    </h3>

                                    <p className="text-blue-700 font-medium text-sm mt-1">
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
