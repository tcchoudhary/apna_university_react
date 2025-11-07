import Slider from "react-slick";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const counsellingOptions = [
    {
        title: "MBBS India",
        img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&w=800&q=80",
    },
    {
        title: "MD India",
        img: "https://images.unsplash.com/photo-1606813907291-5d3c1c5a60b4?auto=format&w=800&q=80",
    },
    {
        title: "MS India",
        img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&w=800&q=80",
    },
    {
        title: "DM India",
        img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&w=800&q=80",
    },
    {
        title: "MCH India",
        img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&w=800&q=80",
    },
];

export default function CounsellingSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="py-12 px-4 md:px-16 bg-white">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-sm text-gray-600 font-medium mb-2">
                    Choose your Destination
                </h3>

                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                    GMU Admission Counselling
                </h2>

                <Slider {...settings}>
                    {counsellingOptions.map((item, i) => (
                        <div key={i} className="px-3">
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="relative rounded-2xl overflow-hidden h-72 shadow-lg group cursor-pointer"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${item.img})` }}
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition duration-300" />

                                {/* Title */}
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute bottom-6 left-6"
                                >
                                    <h3 className="text-white text-xl font-semibold flex items-center gap-2">
                                        {item.title}
                                        <ChevronRight className="w-5 h-5 text-white opacity-80 group-hover:translate-x-1 transition" />
                                    </h3>
                                </motion.div>
                            </motion.div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
