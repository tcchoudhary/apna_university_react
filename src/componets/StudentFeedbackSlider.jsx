import { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Eye, Play } from "lucide-react";
import { Helmet } from "react-helmet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Using your uploaded image path here
const dummyThumbnail1 = "/mnt/data/9ddded05-2d5c-422d-871f-420611268d62.png";

export default function StudentFeedbackSlider() {
    const [videos, setVideos] = useState([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const data = [
            {
                id: 1,
                views: "9K",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                title: "Student Success Story 1",
                thumbnail: dummyThumbnail1,
            },
            {
                id: 2,
                views: "7.2K",
                videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
                title: "Student Success Story 2",
                thumbnail: "https://source.unsplash.com/600x400/?student,portrait",
            },
            {
                id: 3,
                views: "10.4K",
                videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
                title: "Student Success Story 3",
                thumbnail: "https://source.unsplash.com/600x400/?students,smile",
            },
        ];
        setVideos(data);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    if (!mounted) return null; // ensures SSR-safe rendering

    return (
        <>
            <Helmet>
                <title>Trusted Voices | Apna University</title>
            </Helmet>

            <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
                <div className="max-w-6xl mx-auto px-4">
                    <p className="text-gray-500 text-sm font-semibold mb-1">Trusted Voices</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-10">
                        Hear <span className="text-blue-600">them out</span>
                    </h2>

                    <Slider {...settings}>
                        {videos.map((v) => (
                            <div key={v.id} className="px-4">
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="relative rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 text-white flex flex-col transition-transform duration-300"
                                >
                                    {/* Video Thumbnail */}
                                    <div className="relative w-full h-[300px] md:h-[350px] lg:h-[380px] overflow-hidden rounded-t-2xl">
                                        <img
                                            src={v.thumbnail}
                                            alt={v.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src =
                                                    "https://via.placeholder.com/600x400?text=No+Image";
                                            }}
                                        />
                                        <motion.a
                                            href={v.videoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.2 }}
                                            className="absolute inset-0 flex justify-center items-center bg-black/30 hover:bg-black/40 transition duration-300"
                                        >
                                            <Play className="w-16 h-16 text-white" />
                                        </motion.a>
                                    </div>

                                    {/* Video Info */}
                                    <div className="p-5 flex flex-col gap-2">
                                        <h3 className="text-lg font-semibold">{v.title}</h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-100">
                                            <Eye className="w-4 h-4" /> {v.views} views
                                        </div>
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

// Custom Arrows
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "-25px", zIndex: 20 }}
            onClick={onClick}
        >
            ›
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "-25px", zIndex: 20 }}
            onClick={onClick}
        >
            ‹
        </div>
    );
}
