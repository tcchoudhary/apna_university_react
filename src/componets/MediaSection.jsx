import { motion } from "framer-motion";

const LOGOS = [
    "https://upload.wikimedia.org/wikipedia/commons/1/1f/ABP_News_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/2/24/News18_India_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/NDTV_India_Logo.png/200px-NDTV_India_Logo.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Aaj_Tak_Logo.png/220px-Aaj_Tak_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/India_TV_logo.png/220px-India_TV_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Republic_TV_logo.png/220px-Republic_TV_logo.png",
];

export default function MediaSection() {
    const duplicatedLogos = [...LOGOS, ...LOGOS];

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* ----- Heading ----- */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Featured In Top Media Houses
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm md:text-base">
                        Trusted by India's leading news and digital media platforms.
                    </p>
                </div>

                {/* ----- Smooth Marquee Slider ----- */}
                <div className="overflow-hidden relative py-6">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                        className="flex items-center gap-10 w-[200%]"
                    >
                        {duplicatedLogos.map((src, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.15 }}
                                className="
                                    bg-white shadow-lg rounded-xl px-6 py-4
                                    flex items-center justify-center
                                    backdrop-blur-lg border border-gray-200
                                    hover:shadow-2xl hover:border-blue-300 transition
                                "
                            >
                                <img
                                    src={src}
                                    alt="media-logo"
                                    className="h-10 sm:h-14 object-contain opacity-80 hover:opacity-100 transition"
                                    loading="lazy"
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Soft Gradient Edge Fade (Professional Look) */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent"></div>
                </div>
            </div>
        </section>
    );
}
