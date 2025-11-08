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
        <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h3 className="text-indigo-600 uppercase tracking-widest font-semibold text-sm mb-3">
                    Choose your Destination
                </h3>

                <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 drop-shadow-lg leading-tight">
                    GMU Admission Counselling
                </h2>
            </div>

            <Slider {...settings}>
                {counsellingOptions.map((item, i) => (
                    <div key={i} className="px-4">
                        <motion.div
                            whileHover={{ scale: 1.06, boxShadow: "0 20px 40px rgba(99,102,241,0.4)" }}
                            className="relative rounded-3xl overflow-hidden h-80 shadow-lg bg-white/60 backdrop-blur-md border border-indigo-200 cursor-pointer transition-shadow duration-300"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                                style={{ backgroundImage: `url(${item.img})` }}
                            />

                            {/* Gradient Overlay with blur behind text */}
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/40 to-transparent" />

                            {/* Text Container */}
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="absolute bottom-8 left-8 right-8"
                            >
                                <h3 className="text-white text-3xl font-bold uppercase tracking-wide drop-shadow-lg flex items-center justify-between">
                                    {item.title}
                                    <ChevronRight className="w-7 h-7 text-white opacity-90 ml-4 transition-transform duration-300 group-hover:translate-x-3" />
                                </h3>
                            </motion.div>
                        </motion.div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}
