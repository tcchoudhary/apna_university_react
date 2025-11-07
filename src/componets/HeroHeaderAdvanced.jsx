// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import { Sparkles, Search } from "lucide-react";

// // 👇 images array parent se aati ho to props se pass kar sakte ho
// const HERO_IMAGES = [
//     "/banner-1.jpg",
//     "/banner-2.jpg",
//     "/banner-3.jpg",
// ];

// const TICKERS = [
//     "Your journey starts here",
//     "MBBS made simple",
//     "Guidance that gets results",
//     "India’s Top Medical Counselors",
// ];

// export default function HeroHeaderAdvanced({ images = HERO_IMAGES, onSearch, suggestions = [] }) {
//     const [search, setSearch] = useState("");
//     const [tickerIndex, setTickerIndex] = useState(0);

//     // flip ticker auto-rotate
//     // if you want timed flip, keep this; else remove
//     // eslint-disable-next-line
//     setTimeout(() => setTickerIndex((t) => (t + 1) % TICKERS.length), 2600);

//     const handleSearch = () => {
//         onSearch?.(search);
//     };

//     return (
//         <section className="relative w-full h-[74vh] md:h-[86vh] overflow-hidden bg-[#0b122e]">
//             {/* BACKGROUND LAYER: Swiper images with subtle zoom */}
//             <div className="absolute inset-0">
//                 <Swiper
//                     modules={[Autoplay]}
//                     autoplay={{ delay: 3500 }}
//                     loop
//                     className="w-full h-full"
//                 >
//                     {images.map((src, i) => (
//                         <SwiperSlide key={i}>
//                             <motion.img
//                                 src={src}
//                                 alt={`hero-${i}`}
//                                 className="w-full h-full object-cover opacity-80"
//                                 initial={{ scale: 1.08 }}
//                                 animate={{ scale: 1 }}
//                                 transition={{ duration: 3, ease: "easeOut" }}
//                                 loading="lazy"
//                             />
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//                 {/* dark overlay + subtle grid */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-[#0b122e]/70 via-[#0b122e]/60 to-[#0b122e]/85" />
//                 <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.12),transparent_55%)]" />
//             </div>

//             {/* FLOATING GLOW BLOBS */}
//             <motion.div
//                 className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl"
//                 animate={{ x: [0, 30, -20, 0], y: [0, 20, -10, 0] }}
//                 transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
//             />
//             <motion.div
//                 className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-400/25 blur-3xl"
//                 animate={{ x: [0, -25, 20, 0], y: [0, -15, 25, 0] }}
//                 transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
//             />

//             {/* CONTENT */}
//             <div className="relative z-10 h-full flex items-center">
//                 <div className="w-full max-w-7xl mx-auto px-5 md:px-8">
//                     {/* Badge + sparkles */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 12 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 backdrop-blur-md"
//                     >
//                         <Sparkles className="w-4 h-4 text-yellow-300" />
//                         <span className="text-xs md:text-sm tracking-wide">#1 Choice for Medical Guidance</span>
//                     </motion.div>

//                     {/* HEADING with split/stagger + flip ticker line */}
//                     <div className="mt-4 md:mt-6">
//                         <motion.h1
//                             initial="hidden"
//                             animate="show"
//                             variants={{
//                                 hidden: { opacity: 0, y: 20 },
//                                 show: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
//                             }}
//                             className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
//                         >
//                             {["Your", "Customized", "Path", "to", "an", "Indian", "MBBS", "Seat"].map((w, i) => (
//                                 <motion.span
//                                     key={i}
//                                     variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
//                                     className="inline-block mr-2"
//                                 >
//                                     {w}
//                                 </motion.span>
//                             ))}
//                         </motion.h1>

//                         {/* Flip ticker line */}
//                         <div className="mt-3 md:mt-4 h-8 md:h-10 relative">
//                             <AnimatePresence mode="wait">
//                                 <motion.div
//                                     key={tickerIndex}
//                                     initial={{ rotateX: 90, opacity: 0 }}
//                                     animate={{ rotateX: 0, opacity: 1 }}
//                                     exit={{ rotateX: -90, opacity: 0 }}
//                                     transition={{ duration: 0.5 }}
//                                     className="origin-bottom text-lg md:text-2xl font-semibold text-cyan-200"
//                                 >
//                                     {TICKERS[tickerIndex]}
//                                 </motion.div>
//                             </AnimatePresence>
//                         </div>

//                         {/* Glass Search */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 16 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.25, duration: 0.6 }}
//                             className="mt-6 md:mt-8 max-w-2xl"
//                         >
//                             <div className="group flex items-center gap-2 p-2 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl">
//                                 <Search className="w-5 h-5 text-white/80 ml-2" />
//                                 <input
//                                     value={search}
//                                     onChange={(e) => setSearch(e.target.value)}
//                                     placeholder="Search MBBS / MD / MS colleges, exams, scholarships…"
//                                     className="flex-1 bg-transparent outline-none text-white placeholder-white/60 px-2 py-2 text-sm md:text-base"
//                                 />
//                                 <motion.button
//                                     whileHover={{ scale: 1.03 }}
//                                     whileTap={{ scale: 0.98 }}
//                                     onClick={handleSearch}
//                                     className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg"
//                                 >
//                                     Search
//                                 </motion.button>
//                             </div>

//                             {/* Trending chips */}
//                             <div className="mt-3 flex flex-wrap items-center gap-2">
//                                 {["MBBS Rajasthan", "Top Private Colleges", "NEET Cutoff", "Hostel & Fees"].map((t, i) => (
//                                     <motion.button
//                                         key={i}
//                                         whileHover={{ y: -2 }}
//                                         className="text-xs md:text-sm px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 hover:bg-white/20"
//                                         onClick={() => setSearch(t)}
//                                     >
//                                         {t}
//                                     </motion.button>
//                                 ))}
//                             </div>

//                             {/* Suggestions (if parent passes) */}
//                             {Array.isArray(suggestions) && suggestions.length > 0 && (
//                                 <div className="mt-3 bg-white/90 rounded-xl p-3 text-gray-800 shadow-xl max-w-xl">
//                                     {suggestions.map((s) => (
//                                         <div key={s.id} className="px-2 py-2 rounded-lg hover:bg-blue-50 cursor-pointer">
//                                             {s.title}
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>

//             {/* CURVED DIVIDER bottom */}
//             <svg className="absolute bottom-[-1px] left-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
//                 <path fill="#ffffff" d="M0,96L60,80C120,64,240,32,360,26.7C480,21,600,43,720,69.3C840,96,960,128,1080,122.7C1200,117,1320,75,1380,53.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
//             </svg>
//         </section>
//     );
// }



// 2nd hero sections here

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Search, Sparkles } from "lucide-react";

// const TICKERS = [
//     "Your journey starts here",
//     "MBBS made simple",
//     "Guidance that gets results",
//     "India’s Top Medical Counselors"
// ];

// export default function HeroHeaderAdvancedVideo({ onSearch, suggestions = [] }) {
//     const [search, setSearch] = useState("");
//     const [tickerIndex, setTickerIndex] = useState(0);

//     // Auto flip ticker
//     setTimeout(() => setTickerIndex((t) => (t + 1) % TICKERS.length), 2600);

//     return (
//         <section className="relative w-full h-[74vh] md:h-[86vh] overflow-hidden bg-[#0b122e]">

//             {/* ✅ BACKGROUND VIDEO */}
//             <video
//                 src="/hero-bg-video.mp4"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="absolute inset-0 w-full h-full object-cover opacity-80"
//             />

//             {/* ✅ DARK + GRADIENT OVERLAY */}
//             <div className="absolute inset-0 bg-gradient-to-b from-[#0b122e]/70 via-[#0b122e]/55 to-[#0b122e]/80" />

//             {/* ✅ FLOATING GLOW BLOBS */}
//             <motion.div
//                 className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl"
//                 animate={{ x: [0, 30, -20, 0], y: [0, 20, -10, 0] }}
//                 transition={{ repeat: Infinity, duration: 10 }}
//             />
//             <motion.div
//                 className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-400/25 blur-3xl"
//                 animate={{ x: [0, -25, 20, 0], y: [0, -15, 25, 0] }}
//                 transition={{ repeat: Infinity, duration: 12 }}
//             />

//             {/* ✅ CONTENT */}
//             <div className="relative z-10 h-full flex items-center">
//                 <div className="w-full max-w-7xl mx-auto px-5 md:px-8">

//                     {/* Badge */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 12 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md"
//                     >
//                         <Sparkles className="w-4 h-4 text-yellow-300" />
//                         <span className="text-sm">#1 Choice for Medical Guidance</span>
//                     </motion.div>

//                     {/* Heading */}
//                     <motion.h1
//                         initial="hidden"
//                         animate="show"
//                         variants={{
//                             hidden: { opacity: 0, y: 20 },
//                             show: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } }
//                         }}
//                         className="mt-4 text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
//                     >
//                         {["Your", "Customized", "Path", "to", "an", "Indian", "MBBS", "Seat"].map((w, i) => (
//                             <motion.span
//                                 key={i}
//                                 variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
//                                 className="inline-block mr-2"
//                             >
//                                 {w}
//                             </motion.span>
//                         ))}
//                     </motion.h1>

//                     {/* 🔄 Flip ticker line */}
//                     <div className="mt-3 h-8 relative">
//                         <AnimatePresence mode="wait">
//                             <motion.div
//                                 key={tickerIndex}
//                                 initial={{ rotateX: 90, opacity: 0 }}
//                                 animate={{ rotateX: 0, opacity: 1 }}
//                                 exit={{ rotateX: -90, opacity: 0 }}
//                                 transition={{ duration: 0.45 }}
//                                 className="origin-bottom text-lg md:text-2xl font-semibold text-cyan-200"
//                             >
//                                 {TICKERS[tickerIndex]}
//                             </motion.div>
//                         </AnimatePresence>
//                     </div>

//                     {/* ✅ Glass Search Bar */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 16 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.25 }}
//                         className="mt-6 max-w-2xl"
//                     >
//                         <div className="group flex items-center gap-2 p-2 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl">
//                             <Search className="w-5 h-5 text-white ml-2" />
//                             <input
//                                 value={search}
//                                 onChange={(e) => setSearch(e.target.value)}
//                                 placeholder="Search MBBS / MD / MS colleges…"
//                                 className="flex-1 bg-transparent outline-none text-white placeholder-white/70 px-2 py-2"
//                             />
//                             <motion.button
//                                 whileHover={{ scale: 1.04 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 onClick={() => onSearch?.(search)}
//                                 className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow"
//                             >
//                                 Search
//                             </motion.button>
//                         </div>

//                         {/* ✅ Trending chips */}
//                         <div className="mt-3 flex flex-wrap gap-2">
//                             {["MBBS Rajasthan", "Top Private Colleges", "NEET Cutoff", "Fees & Hostel"].map((t, i) => (
//                                 <motion.button
//                                     key={i}
//                                     whileHover={{ y: -2 }}
//                                     className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20"
//                                     onClick={() => setSearch(t)}
//                                 >
//                                     {t}
//                                 </motion.button>
//                             ))}
//                         </div>

//                         {/* ✅ Suggestions dropdown */}
//                         {suggestions.length > 0 && (
//                             <div className="mt-3 bg-white rounded-xl p-3 text-gray-800 shadow-xl max-w-xl">
//                                 {suggestions.map((s) => (
//                                     <div key={s.id} className="px-2 py-2 hover:bg-blue-50 cursor-pointer">
//                                         {s.title}
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </motion.div>
//                 </div>
//             </div>

//             {/* ✅ Smooth white curve divider */}
//             <svg className="absolute bottom-[-1px] left-0 w-full" viewBox="0 0 1440 120">
//                 <path fill="#ffffff" d="M0,96L60,80C120,64,240,32,360,26.7C480,21,600,43,720,69.3C840,96,960,128,1080,122.7C1200,117,1320,75,1380,53.3L1440,32L1440,120L0,120Z" />
//             </svg>
//         </section>
//     );
// }




// New separate component: HeroBanner.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HeroSectionBg from "../assets/bg_college.avif";

const HeroBanner = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [allCourses, setAllCourses] = useState([]);

    const images = [HeroSectionBg, HeroSectionBg];

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

    const handleSearch = (query) => {
        setSearch(query);
        if (!query.trim()) {
            setFilteredCourses([]);
            return;
        }
        const filtered = allCourses.filter((course) =>
            course.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCourses(filtered);
    };

    // Staggered text animation variants
    const titleVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        })
    };

    // Glow effect for search bar
    const searchVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Flipper-like card for suggestions
    const suggestionVariants = {
        hidden: { opacity: 0, rotateX: -90 },
        visible: { opacity: 1, rotateX: 0, transition: { duration: 0.5, ease: "backOut" } },
        hover: { scale: 1.02, rotateY: 5, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }
    };

    return (
        <div className="w-full flex flex-col bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
            {/* Animated Background Particles/Effects - Add a canvas or use CSS for shimmer */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400/20 via-blue-500/20 to-indigo-600/20 animate-pulse"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]"></div>
            </div>

            <header className="sr-only">
                <h1>Apna University – Your journey to a medical seat starts with the right guidance.</h1>
            </header>

            {/* Enhanced Hero Section with Fade Effect Swiper */}
            <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop
                    className="w-full h-full"
                >
                    {images.map((src, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative w-full h-full">
                                <img
                                    src={src}
                                    alt={`slide-${i}`}
                                    className="w-full h-full object-cover brightness-75"
                                    loading="lazy"
                                />
                                {/* Overlay shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Enhanced Search Overlay with Neon Glow */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-gradient-to-b from-black/50 to-black/20 text-white px-4 z-20">
                    {/* Animated Title with Staggered Words & Glow */}
                    <motion.div className="max-w-4xl mx-auto">
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            className="text-3xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl mb-2"
                        >
                            {"“Find Your Ideal".split(" ").map((word, i) => (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    variants={titleVariants}
                                    className="inline-block"
                                >
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </motion.h2>
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            className="text-3xl md:text-6xl font-black bg-gradient-to-r from-pink-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl"
                        >
                            {"Medical Path".split(" ").map((word, i) => (
                                <motion.span
                                    key={i + 5}
                                    custom={i + 5}
                                    variants={titleVariants}
                                    className="inline-block"
                                >
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="text-lg md:text-xl font-light text-blue-200 mt-4 max-w-2xl mx-auto"
                        >
                            with Personalized Guidance That Shines Bright.
                        </motion.p>
                    </motion.div>

                    {/* Enhanced Search Bar with Glow & Pulse */}
                    <motion.div
                        variants={searchVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1 }}
                        whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                        className="mt-8 bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-2xl border border-white/20 w-full max-w-2xl flex items-center px-6 py-4"
                    >
                        <div className="flex-grow relative">
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => handleSearch(e.target.value)}
                                placeholder="🔍 Search courses or universities..."
                                className="w-full bg-transparent px-4 py-2 outline-none text-white placeholder-gray-300 text-lg"
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                        >
                            Discover
                        </motion.button>
                    </motion.div>

                    {/* Flipper-like Suggestions with 3D Flip Animation */}
                    <AnimatePresence>
                        {filteredCourses.length > 0 && (
                            <motion.ul
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-white/10 backdrop-blur-md text-white mt-4 rounded-2xl shadow-2xl w-full max-w-2xl p-0 border border-white/20 overflow-hidden"
                            >
                                {filteredCourses.map((item, index) => (
                                    <motion.li
                                        key={item.id}
                                        custom={index}
                                        variants={suggestionVariants}
                                        initial="hidden"
                                        animate="visible"
                                        whileHover="hover"
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => navigate(`/course/${item.id}`)}
                                        className="px-6 py-4 hover:bg-white/10 cursor-pointer border-b border-white/10 last:border-b-0 relative overflow-hidden"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-medium">{item.title}</span>
                                            <motion.div
                                                className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                                                animate={{ scale: [1, 1.5, 1] }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                            />
                                        </div>
                                        {/* Subtle flip effect on hover */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"
                                            initial={{ x: "-100%" }}
                                            whileHover={{ x: "100%" }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </motion.li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>

                {/* Floating Glow Orbs for Extra Flair */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/30 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-400/30 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
            </section>
        </div>
    );
};

export default HeroBanner;