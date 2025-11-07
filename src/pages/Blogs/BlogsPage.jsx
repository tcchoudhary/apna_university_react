import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BlogsPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get("/api/blogs");
                if (res.data && res.data.length > 0) {
                    // setBlogs(res.data);
                    setBlogs([
                        {
                            id: 1,
                            title: "How to Choose the Right Medical College in India",
                            author: "Dr. Ritu Mehra",
                            date: "Oct 28, 2025",
                            category: "Admissions",
                            image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&q=80&w=800",
                            excerpt: "Choosing the right medical college can shape your entire career. Here’s how to evaluate colleges, placements, and accreditations...",
                        },
                        {
                            id: 2,
                            title: "NEET 2026 Preparation Tips from Toppers",
                            author: "Rahul Sharma",
                            date: "Nov 2, 2025",
                            category: "Exam Tips",
                            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&q=80&w=800",
                            excerpt: "Consistency and strategy are the keys to NEET success. Learn how toppers approached their daily study schedule and mock tests...",
                        },
                        {
                            id: 3,
                            title: "MBBS vs BDS vs BAMS – Which One is Better?",
                            author: "Dr. Neha Agarwal",
                            date: "Oct 20, 2025",
                            category: "Career Guidance",
                            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&q=80&w=800",
                            excerpt: "Confused between MBBS, BDS, and BAMS? Let’s break down the differences, scopes, and future opportunities for each field...",
                        },
                    ]);
                } else {
                    throw new Error("No data");
                }
            } catch (err) {
                console.error("API not working, using dummy data:", err);
                setBlogs([
                    {
                        id: 1,
                        title: "How to Choose the Right Medical College in India",
                        author: "Dr. Ritu Mehra",
                        date: "Oct 28, 2025",
                        category: "Admissions",
                        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&q=80&w=800",
                        excerpt: "Choosing the right medical college can shape your entire career. Here’s how to evaluate colleges, placements, and accreditations...",
                    },
                    {
                        id: 2,
                        title: "NEET 2026 Preparation Tips from Toppers",
                        author: "Rahul Sharma",
                        date: "Nov 2, 2025",
                        category: "Exam Tips",
                        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&q=80&w=800",
                        excerpt: "Consistency and strategy are the keys to NEET success. Learn how toppers approached their daily study schedule and mock tests...",
                    },
                    {
                        id: 3,
                        title: "MBBS vs BDS vs BAMS – Which One is Better?",
                        author: "Dr. Neha Agarwal",
                        date: "Oct 20, 2025",
                        category: "Career Guidance",
                        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&q=80&w=800",
                        excerpt: "Confused between MBBS, BDS, and BAMS? Let’s break down the differences, scopes, and future opportunities for each field...",
                    },
                ]);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen text-2xl text-blue-600">
                Loading blogs...
            </div>
        );
    }

    // 🔎 Filter Blogs by Search Term
    const filteredBlogs = blogs.filter((blog) =>
        [blog.title, blog.excerpt, blog.author, blog.category]
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return (
        <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                {/* 🏷 Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        Medical Guidance Blog
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore insights, guidance, and expert advice to help you make the right decision for your medical career.
                    </p>
                </div>

                {/* 🔍 Search Bar */}
                <div className="mb-10 flex justify-center">
                    <input
                        type="text"
                        placeholder="Search for topics (e.g. NEET, MBBS, BDS)"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-1/2 border border-gray-300 rounded-full px-5 py-3 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
                    />
                </div>

                {/* 📰 Blog Grid */}
                {filteredBlogs.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredBlogs.map((blog) => (
                            <Link
                                to={`/blogs/${blog.id}`}
                                key={blog.id}
                                className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                            >
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-52 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                                            {blog.category}
                                        </span>
                                        <span>{blog.date}</span>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-3 text-gray-900 hover:text-blue-600 transition">
                                        {blog.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {blog.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-gray-700 font-medium">
                                            ✍️ {blog.author}
                                        </p>
                                        <span className="text-blue-600 font-semibold text-sm">
                                            Read More →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600 mt-12 text-lg">
                        No blogs found for “{searchTerm}”
                    </p>
                )}

                {/* 🧭 Pagination */}
                <div className="flex justify-center mt-12 space-x-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                        Prev
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
}
