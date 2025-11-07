import { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Eye, Play } from "lucide-react";
import { Helmet } from "react-helmet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function StudentFeedbackSlider() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const data = [
            {
                id: 1,
                views: "9K",
                thumbnail: "https://source.unsplash.com/600x1000/?student,blue",
                videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            },
            {
                id: 2,
                views: "7.2K",
                thumbnail: "https://source.unsplash.com/600x1000/?student,portrait",
                videoUrl: "https://www.w3schools.com/html/movie.mp4",
            },
            {
                id: 3,
                views: "10.4K",
                thumbnail: "https://source.unsplash.com/600x1000/?students,talking",
                videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            }
        ];
        setVideos(data);
    }, []);

    // ✅ Slider config + arrows
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <>
            <Helmet>
                <title>Trusted Voices | Apna University</title>
            </Helmet>

            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Heading */}
                    <p className="text-gray-500 text-sm font-semibold mb-1">
                        Trusted Voices
                    </p>
                    <h2 className="text-3xl font-bold mb-10">
                        Hear <span className="text-blue-600">them out</span>
                    </h2>

                    {/* Slider */}
                    <Slider {...settings}>
                        {videos.map((v) => (
                            <div key={v.id} className="px-4">
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    className="rounded-[25px] shadow-lg overflow-hidden bg-white flex flex-col items-center"
                                >
                                    {/* ✅ Mobile Frame Top Bar */}
                                    <div className="w-full bg-gray-200 h-14 rounded-t-[25px] flex justify-center items-center">
                                        <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow text-xs font-medium">
                                            <Eye className="w-4 h-4" />
                                            {v.views}
                                        </div>
                                    </div>

                                    {/* ✅ Video Thumbnail */}
                                    <div className="relative w-full h-[380px] rounded-b-[25px] overflow-hidden">
                                        <img
                                            src={v.thumbnail}
                                            className="w-full h-full object-cover"
                                            alt="video"
                                        />

                                        {/* ✅ Play Icon Overlay */}
                                        <button className="absolute inset-0 flex justify-center items-center bg-black/30 hover:bg-black/40 transition">
                                            <Play className="w-16 h-16 text-white" />
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    );
}

/* ✅ Custom Arrows (rounded like screenshot) */
function NextArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 z-20"
        >
            ›
        </button>
    );
}

function PrevArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 z-20"
        >
            ‹
        </button>
    );
}
