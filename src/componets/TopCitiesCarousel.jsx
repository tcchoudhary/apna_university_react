import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cities = [
    { id: 1, name: "Delhi", icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png" },
    { id: 2, name: "Mumbai", icon: "https://cdn-icons-png.flaticon.com/512/882/882706.png" },
    { id: 3, name: "Pune", icon: "https://cdn-icons-png.flaticon.com/512/4149/4149656.png" },
    { id: 4, name: "Kolkata", icon: "https://cdn-icons-png.flaticon.com/512/816/816005.png" },
    { id: 5, name: "Chennai", icon: "https://cdn-icons-png.flaticon.com/512/2112/2112479.png" },
    { id: 6, name: "Ahmedabad", icon: "https://cdn-icons-png.flaticon.com/512/684/684894.png" },
    { id: 7, name: "Bangalore", icon: "https://cdn-icons-png.flaticon.com/512/727/727244.png" },
];

export default function TopCitiesCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <section className="py-10 px-4 md:px-16 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Choose your city of interest
                </h2>

                <Slider {...settings}>
                    {cities.map((city) => (
                        <motion.div
                            key={city.id}
                            whileHover={{ scale: 1.05 }}
                            className="p-4 cursor-pointer"
                        >
                            <div className="bg-blue-50 hover:bg-blue-100 transition rounded-2xl flex flex-col items-center p-5 shadow-sm">
                                <img src={city.icon} alt={city.name} className="w-12 h-12 mb-2" />
                                <p className="text-gray-800 font-medium">{city.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
