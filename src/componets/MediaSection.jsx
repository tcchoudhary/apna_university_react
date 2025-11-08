import { motion } from "framer-motion";

const DUMMY_IMAGES = [
    "https://picsum.photos/300/150?random=1",
    "https://picsum.photos/300/150?random=2",
    "https://picsum.photos/300/150?random=3",
    "https://picsum.photos/300/150?random=4",
    "https://picsum.photos/300/150?random=5",
    "https://picsum.photos/300/150?random=6",
];

export default function MediaSection() {
    const duplicatedImages = [...DUMMY_IMAGES, ...DUMMY_IMAGES];

    return (
        <section className="py-24 bg-gradient-to-b from-purple-50 to-pink-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* ----- Heading ----- */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent 
                                   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 animate-gradient">
                        Featured In Top Media Houses
                    </h2>
                    <p className="text-gray-700 mt-3 text-lg md:text-xl">
                        Trusted by India's leading news and digital media platforms.
                    </p>
                </div>

                {/* ----- Smooth Marquee Slider ----- */}
                <div className="overflow-hidden relative py-8">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        className="flex items-center gap-14 w-[200%]"
                    >
                        {duplicatedImages.map((src, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.25 }}
                                className="
                                    bg-white shadow-2xl rounded-3xl 
                                    flex items-center justify-center
                                    backdrop-blur-xl border border-gray-200
                                    hover:shadow-3xl hover:border-pink-400 transition
                                    w-72 h-36
                                "
                            >
                                <img
                                    src={src}
                                    alt={`media-logo-${i}`}
                                    className="w-full h-full object-cover rounded-3xl"
                                    loading="lazy"
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Soft Gradient Edge Fade */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-purple-50 to-transparent"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-purple-50 to-transparent"></div>
                </div>
            </div>
        </section>
    );
}
