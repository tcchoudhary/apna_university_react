// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, User } from "lucide-react";
// import { Helmet } from "react-helmet";
// import { useNavigate } from "react-router-dom";
// import AURoutes from "../routes/routing";
// import CounselorForm from "./CounselorForm";

// export default function Header() {
//     const navigate = useNavigate();
//     const [isExploreOpen, setIsExploreOpen] = useState(false);
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [showCounselorForm, setShowCounselorForm] = useState(false);

//     const exploreTabs = [
//         { name: "Courses", link: AURoutes.COURSES },
//         { name: "Universities", link: AURoutes.UNIVERSITIES },
//         { name: "Counseling", link: AURoutes.COUNSELING },
//         { name: "Scholarships", link: AURoutes.SCHOLARSHIPS },
//         { name: "Blogs", link: AURoutes.BLOGS },
//     ];

//     return (
//         <>
//             {/* ---------- SEO ---------- */}
//             <Helmet>
//                 <title>AU | Explore Education Platform</title>
//                 <meta
//                     name="description"
//                     content="AU is your trusted education platform for courses, universities, counseling, and scholarships."
//                 />
//                 <meta
//                     name="keywords"
//                     content="education, university, courses, counseling, study abroad, AU"
//                 />
//             </Helmet>

//             {/* ---------- HEADER ---------- */}
//             <header className="sticky top-0 z-50 bg-white shadow-md">
//                 <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6">
//                     {/* ---------- LEFT: Logo + Explore ---------- */}
//                     <div className="flex items-center space-x-4 sm:space-x-8">
//                         <div
//                             onClick={() => navigate("/")}
//                             className="text-xl sm:text-2xl font-bold text-blue-600 cursor-pointer select-none"
//                         >
//                             AU
//                         </div>

//                         {/* Explore Dropdown (Desktop) */}
//                         <div
//                             className="relative hidden sm:block"
//                             onMouseEnter={() => setIsExploreOpen(true)}
//                             onMouseLeave={() => setIsExploreOpen(false)}
//                         >
//                             <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-blue-600 transition">
//                                 Explore
//                                 <ChevronDown
//                                     className={`w-4 h-4 transition-transform ${isExploreOpen ? "rotate-180" : ""
//                                         }`}
//                                 />
//                             </button>

//                             <AnimatePresence>
//                                 {isExploreOpen && (
//                                     <motion.div
//                                         initial={{ opacity: 0, y: -10 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         exit={{ opacity: 0, y: -10 }}
//                                         transition={{ duration: 0.2 }}
//                                         className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden"
//                                     >
//                                         {exploreTabs.map((tab, i) => (
//                                             <button
//                                                 key={i}
//                                                 onClick={() => navigate(tab.link)}
//                                                 className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
//                                             >
//                                                 {tab.name}
//                                             </button>
//                                         ))}
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </div>
//                     </div>

//                     {/* ---------- CENTER ---------- */}
//                     <div className="flex-1 text-center hidden sm:block"></div>

//                     {/* ---------- RIGHT ---------- */}
//                     <div className="hidden sm:flex items-center space-x-4">
//                         <button
//                             className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl font-medium hover:bg-blue-100 transition"
//                             onClick={() => setShowCounselorForm(true)}
//                         >
//                             Get a Counselor
//                         </button>
//                         <button
//                             className="bg-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-700 transition"
//                             onClick={() => navigate(AURoutes.LOGIN)}
//                         >
//                             Login
//                         </button>
//                         <button
//                             className="flex items-center bg-gray-100 text-gray-800 px-3 py-2 rounded-xl font-medium hover:bg-gray-200 transition"
//                             onClick={() => navigate(AURoutes.PROFILE)}
//                         >
//                             <User className="w-5 h-5 mr-1" /> Profile
//                         </button>
//                     </div>

//                     {/* ---------- MOBILE MENU BUTTON ---------- */}
//                     <button
//                         className="sm:hidden text-gray-700 focus:outline-none"
//                         onClick={() => setMenuOpen(!menuOpen)}
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             {menuOpen ? (
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M6 18L18 6M6 6l12 12"
//                                 />
//                             ) : (
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M4 6h16M4 12h16M4 18h16"
//                                 />
//                             )}
//                         </svg>
//                     </button>
//                 </div>

//                 {/* ---------- MOBILE MENU ---------- */}
//                 <AnimatePresence>
//                     {menuOpen && (
//                         <motion.div
//                             initial={{ height: 0, opacity: 0 }}
//                             animate={{ height: "auto", opacity: 1 }}
//                             exit={{ height: 0, opacity: 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="sm:hidden bg-white shadow-md border-t border-gray-100"
//                         >
//                             <div className="px-4 py-3 space-y-3">
//                                 {exploreTabs.map((tab, i) => (
//                                     <button
//                                         key={i}
//                                         onClick={() => {
//                                             navigate(tab.link);
//                                             setMenuOpen(false);
//                                         }}
//                                         className="block w-full text-left text-gray-700 font-medium hover:text-blue-600 transition"
//                                     >
//                                         {tab.name}
//                                     </button>
//                                 ))}
//                                 <button
//                                     className="w-full bg-blue-50 text-blue-600 py-2 rounded-xl font-medium hover:bg-blue-100 transition"
//                                     onClick={() => {
//                                         setShowCounselorForm(true);
//                                         setMenuOpen(false);
//                                     }}
//                                 >
//                                     Get a Counselor
//                                 </button>
//                                 <button
//                                     className="w-full bg-blue-600 text-white py-2 rounded-xl font-medium hover:bg-blue-700 transition"
//                                     onClick={() => navigate(AURoutes.LOGIN)}
//                                 >
//                                     Login
//                                 </button>
//                                 <button
//                                     className="w-full flex items-center justify-center bg-gray-100 text-gray-800 py-2 rounded-xl font-medium hover:bg-gray-200 transition"
//                                     onClick={() => navigate(AURoutes.PROFILE)}
//                                 >
//                                     <User className="w-5 h-5 mr-2" /> Profile
//                                 </button>
//                             </div>
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </header>

//             {/* ---------- COUNSELOR FORM COMPONENT ---------- */}
//             <CounselorForm
//                 show={showCounselorForm}
//                 onClose={() => setShowCounselorForm(false)}
//             />
//         </>
//     );
// }







import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, User, LogOut } from "lucide-react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import AURoutes from "../routes/routing";
import CounselorForm from "./CounselorForm";

const GOAL_LIST = ["MBBS", "MD", "MS", "BDS", "BAMS", "BHMS"];

// ✳️ Static sample data (shape same rahega jab API se aayega)
const SAMPLE_DATA = {
    MBBS: {
        states: [
            { name: "Maharashtra", colleges: 120 },
            { name: "Karnataka", colleges: 98 },
            { name: "Tamil Nadu", colleges: 90 },
            { name: "Uttar Pradesh", colleges: 86 },
            { name: "Kerala", colleges: 75 },
            { name: "Rajasthan", colleges: 69 },
        ],
        cities: [
            { name: "Mumbai", colleges: 32 },
            { name: "Bengaluru", colleges: 28 },
            { name: "Chennai", colleges: 26 },
            { name: "Pune", colleges: 22 },
            { name: "Delhi NCR", colleges: 21 },
            { name: "Hyderabad", colleges: 19 },
        ],
    },
    MD: { states: [{ name: "Delhi", colleges: 34 }, { name: "Karnataka", colleges: 51 }, { name: "Gujarat", colleges: 27 }], cities: [{ name: "New Delhi", colleges: 20 }, { name: "Bengaluru", colleges: 18 }, { name: "Ahmedabad", colleges: 12 }] },
    MS: { states: [{ name: "Telangana", colleges: 22 }, { name: "Maharashtra", colleges: 33 }], cities: [{ name: "Hyderabad", colleges: 14 }, { name: "Nagpur", colleges: 9 }] },
    BDS: { states: [{ name: "Uttar Pradesh", colleges: 40 }, { name: "Tamil Nadu", colleges: 28 }], cities: [{ name: "Lucknow", colleges: 11 }, { name: "Chennai", colleges: 10 }] },
    BAMS: { states: [{ name: "Maharashtra", colleges: 55 }, { name: "Rajasthan", colleges: 24 }], cities: [{ name: "Jaipur", colleges: 8 }, { name: "Nashik", colleges: 7 }] },
    BHMS: { states: [{ name: "Gujarat", colleges: 30 }, { name: "Madhya Pradesh", colleges: 18 }], cities: [{ name: "Indore", colleges: 7 }, { name: "Surat", colleges: 6 }] },
};

// helper: construct route
const buildListingPath = ({ type, name, program }) =>
    `/colleges/${type}/${encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"))}?program=${encodeURIComponent(program.toLowerCase())}`;

// list limit for preview
const PREVIEW_LIMIT = 4;

export default function Header({ isAuthenticated = false, userName = "Student" }) {
    const navigate = useNavigate();

    // UI State
    const [isExploreOpen, setIsExploreOpen] = useState(false);
    const [activeGoal, setActiveGoal] = useState(GOAL_LIST[0]);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showCounselorForm, setShowCounselorForm] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    // Data slice for current goal
    const current = useMemo(() => SAMPLE_DATA[activeGoal] ?? { states: [], cities: [] }, [activeGoal]);

    // close popups on route change or escape
    useEffect(() => {
        const onEsc = (e) => {
            if (e.key === "Escape") {
                setIsExploreOpen(false);
                setMenuOpen(false);
                setProfileOpen(false);
            }
        };
        window.addEventListener("keydown", onEsc);
        return () => window.removeEventListener("keydown", onEsc);
    }, []);

    const handleLogout = () => {
        // TODO: call logout API / clear auth
        setProfileOpen(false);
        navigate(AURoutes.LOGIN);
    };

    return (
        <>
            {/* SEO */}
            <Helmet>
                <title>AU | Explore Programs & Colleges</title>
                <meta name="description" content="Explore MBBS, MD, MS, BDS, BAMS, BHMS programs with top states & top cities. Find colleges, compare, and get guided by experts." />
                <meta name="keywords" content="MBBS, MD, MS, BDS, BAMS, BHMS, medical colleges, states, cities, counseling" />
            </Helmet>

            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
                <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6">
                    {/* Left: Brand + Explore */}
                    <div className="flex items-center gap-4 sm:gap-8">
                        <div
                            onClick={() => navigate("/")}
                            className="text-xl sm:text-2xl font-extrabold tracking-tight text-blue-600 cursor-pointer select-none"
                            aria-label="AU Home"
                        >
                            AU
                        </div>

                        {/* Explore Mega Menu (Desktop) */}
                        <div
                            className="relative hidden sm:block"
                            onMouseEnter={() => setIsExploreOpen(true)}
                            onMouseLeave={() => setIsExploreOpen(false)}
                        >
                            <button
                                className="flex items-center gap-1 text-gray-700 font-medium hover:text-blue-600 transition"
                                aria-haspopup="true"
                                aria-expanded={isExploreOpen}
                            >
                                Explore Programs
                                <ChevronDown className={`w-4 h-4 transition-transform ${isExploreOpen ? "rotate-180" : ""}`} />
                            </button>

                            <AnimatePresence>
                                {isExploreOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 12, scale: 1 }}
                                        exit={{ opacity: 0, y: 0, scale: 0.98 }}
                                        transition={{ duration: 0.18 }}
                                        className="absolute left-0 mt-2 w-[860px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                                        role="menu"
                                    >
                                        <div className="grid grid-cols-[240px_1fr]">
                                            {/* Left vertical goals */}
                                            <div className="max-h-[360px] overflow-auto border-r">
                                                {GOAL_LIST.map((g) => (
                                                    <button
                                                        key={g}
                                                        onMouseEnter={() => setActiveGoal(g)}
                                                        onClick={() => setActiveGoal(g)}
                                                        className={`w-full text-left px-4 py-3 flex items-center justify-between hover:bg-blue-50 transition ${activeGoal === g ? "bg-blue-50 text-blue-700 font-semibold" : "text-gray-700"
                                                            }`}
                                                    >
                                                        <span>{g}</span>
                                                        <ChevronRight className="w-4 h-4 opacity-70" />
                                                    </button>
                                                ))}

                                                <div className="p-3">
                                                    <button
                                                        onClick={() => navigate(`/programs`)}
                                                        className="w-full mt-2 bg-blue-600 text-white rounded-xl py-2 text-sm font-semibold hover:bg-blue-700 transition"
                                                    >
                                                        View All Programs →
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Right detail panel */}
                                            <motion.div
                                                key={activeGoal}
                                                initial={{ opacity: 0, x: 12 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -12 }}
                                                transition={{ duration: 0.2 }}
                                                className="grid grid-cols-2 gap-0"
                                            >
                                                {/* Top Cities */}
                                                <div className="p-5">
                                                    <h4 className="text-base font-semibold text-gray-800 mb-3">Top Cities</h4>
                                                    <ul className="space-y-2">
                                                        {(current.cities || []).slice(0, PREVIEW_LIMIT).map((c) => (
                                                            <li key={c.name}>
                                                                <button
                                                                    onClick={() =>
                                                                        navigate(buildListingPath({ type: "city", name: c.name, program: activeGoal }))
                                                                    }
                                                                    className="w-full text-left text-sm text-gray-700 hover:text-blue-600 hover:underline"
                                                                >
                                                                    {`Top ${activeGoal} Colleges in ${c.name}`}{" "}
                                                                    <span className="text-gray-400">({c.colleges})</span>
                                                                </button>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    {current.cities?.length > PREVIEW_LIMIT && (
                                                        <button
                                                            onClick={() =>
                                                                navigate(`/cities?program=${activeGoal.toLowerCase()}`)
                                                            }
                                                            className="mt-3 inline-flex items-center text-blue-600 text-sm font-semibold hover:underline"
                                                        >
                                                            View All
                                                        </button>
                                                    )}
                                                </div>

                                                {/* Top States */}
                                                <div className="p-5 border-l">
                                                    <h4 className="text-base font-semibold text-gray-800 mb-3">Top States</h4>
                                                    <ul className="space-y-2">
                                                        {(current.states || []).slice(0, PREVIEW_LIMIT).map((s) => (
                                                            <li key={s.name}>
                                                                <button
                                                                    onClick={() =>
                                                                        navigate(buildListingPath({ type: "state", name: s.name, program: activeGoal }))
                                                                    }
                                                                    className="w-full text-left text-sm text-gray-700 hover:text-blue-600 hover:underline"
                                                                >
                                                                    {`Top ${activeGoal} Colleges in ${s.name}`}{" "}
                                                                    <span className="text-gray-400">({s.colleges})</span>
                                                                </button>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    {current.states?.length > PREVIEW_LIMIT && (
                                                        <button
                                                            onClick={() =>
                                                                navigate(`/states?program=${activeGoal.toLowerCase()}`)
                                                            }
                                                            className="mt-3 inline-flex items-center text-blue-600 text-sm font-semibold hover:underline"
                                                        >
                                                            View All
                                                        </button>
                                                    )}
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Center spacer */}
                    <div className="flex-1 hidden sm:block" />

                    {/* Right: Actions */}
                    <div className="hidden sm:flex items-center gap-3">
                        <button
                            className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl font-medium hover:bg-blue-100 transition"
                            onClick={() => setShowCounselorForm(true)}
                        >
                            Need a Counselor
                        </button>

                        {/* Auth-aware button */}
                        {!isAuthenticated ? (
                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-700 transition"
                                onClick={() => navigate(AURoutes.LOGIN)}
                            >
                                Login
                            </button>
                        ) : (
                            <div className="relative">
                                <button
                                    onClick={() => setProfileOpen((v) => !v)}
                                    className="flex items-center bg-gray-100 text-gray-800 px-3 py-2 rounded-xl font-medium hover:bg-gray-200 transition"
                                    aria-haspopup="true"
                                    aria-expanded={profileOpen}
                                >
                                    <User className="w-5 h-5 mr-2" />
                                    {userName}
                                    <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
                                </button>

                                <AnimatePresence>
                                    {profileOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 10 }}
                                            exit={{ opacity: 0, y: 0 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                                        >
                                            <button
                                                onClick={() => {
                                                    setProfileOpen(false);
                                                    navigate(AURoutes.PROFILE);
                                                }}
                                                className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50"
                                            >
                                                My Profile
                                            </button>
                                            <button
                                                onClick={handleLogout}
                                                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                                            >
                                                <LogOut className="w-4 h-4" /> Logout
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="sm:hidden text-gray-700 focus:outline-none"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Open menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Drawer */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="sm:hidden bg-white shadow-md border-t border-gray-100"
                        >
                            <div className="px-4 py-3 space-y-4">
                                {/* Goals accordion */}
                                <details className="rounded-lg border" open>
                                    <summary className="px-3 py-2 font-semibold cursor-pointer">Explore Programs</summary>
                                    <div className="px-2 pb-3">
                                        {GOAL_LIST.map((g) => (
                                            <details key={g} className="border rounded-lg my-2">
                                                <summary className="px-3 py-2 cursor-pointer">{g}</summary>
                                                <div className="px-3 py-2">
                                                    <p className="text-xs text-gray-500 mb-2">Top Cities</p>
                                                    {(SAMPLE_DATA[g]?.cities || []).slice(0, PREVIEW_LIMIT).map((c) => (
                                                        <button
                                                            key={c.name}
                                                            onClick={() => {
                                                                navigate(buildListingPath({ type: "city", name: c.name, program: g }));
                                                                setMenuOpen(false);
                                                            }}
                                                            className="block w-full text-left text-sm py-1 hover:text-blue-600"
                                                        >
                                                            {c.name} ({c.colleges})
                                                        </button>
                                                    ))}
                                                    <p className="text-xs text-gray-500 mt-3 mb-2">Top States</p>
                                                    {(SAMPLE_DATA[g]?.states || []).slice(0, PREVIEW_LIMIT).map((s) => (
                                                        <button
                                                            key={s.name}
                                                            onClick={() => {
                                                                navigate(buildListingPath({ type: "state", name: s.name, program: g }));
                                                                setMenuOpen(false);
                                                            }}
                                                            className="block w-full text-left text-sm py-1 hover:text-blue-600"
                                                        >
                                                            {s.name} ({s.colleges})
                                                        </button>
                                                    ))}
                                                    <div className="mt-2 flex gap-3">
                                                        <button
                                                            onClick={() => {
                                                                navigate(`/cities?program=${g.toLowerCase()}`);
                                                                setMenuOpen(false);
                                                            }}
                                                            className="text-blue-600 text-sm"
                                                        >
                                                            View All Cities →
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                navigate(`/states?program=${g.toLowerCase()}`);
                                                                setMenuOpen(false);
                                                            }}
                                                            className="text-blue-600 text-sm"
                                                        >
                                                            View All States →
                                                        </button>
                                                    </div>
                                                </div>
                                            </details>
                                        ))}
                                        <button
                                            onClick={() => {
                                                navigate(`/programs`);
                                                setMenuOpen(false);
                                            }}
                                            className="mt-2 text-blue-600 text-sm font-semibold"
                                        >
                                            View All Programs →
                                        </button>
                                    </div>
                                </details>

                                <button
                                    className="w-full bg-blue-50 text-blue-600 py-2 rounded-xl font-medium hover:bg-blue-100 transition"
                                    onClick={() => {
                                        setShowCounselorForm(true);
                                        setMenuOpen(false);
                                    }}
                                >
                                    Need a Counselor
                                </button>

                                {!isAuthenticated ? (
                                    <button
                                        className="w-full bg-blue-600 text-white py-2 rounded-xl font-medium hover:bg-blue-700 transition"
                                        onClick={() => {
                                            navigate(AURoutes.LOGIN);
                                            setMenuOpen(false);
                                        }}
                                    >
                                        Login
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            className="w-full bg-gray-100 text-gray-800 py-2 rounded-xl font-medium hover:bg-gray-200 transition"
                                            onClick={() => {
                                                navigate(AURoutes.PROFILE);
                                                setMenuOpen(false);
                                            }}
                                        >
                                            <User className="inline w-5 h-5 mr-1" /> Profile
                                        </button>
                                        <button
                                            className="w-full bg-red-50 text-red-600 py-2 rounded-xl font-medium hover:bg-red-100 transition"
                                            onClick={() => {
                                                handleLogout();
                                                setMenuOpen(false);
                                            }}
                                        >
                                            <LogOut className="inline w-5 h-5 mr-1" /> Logout
                                        </button>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Counselor Modal */}
            <CounselorForm show={showCounselorForm} onClose={() => setShowCounselorForm(false)} />
        </>
    );
}
