import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BlogDetail() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        // Dummy data — same as BlogsPage
        const allBlogs = [
            {
                id: 1,
                title: "How to Choose the Right Medical College in India",
                author: "Dr. Ritu Mehra",
                date: "Oct 28, 2025",
                category: "Admissions",
                image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&q=80&w=800",
                content: `
          Choosing the right medical college is one of the most important decisions for every NEET aspirant. 
          You should consider college reputation, MCI approval, faculty experience, hospital exposure, 
          and infrastructure before applying. Government colleges usually offer better patient inflow and experience. 
          Private colleges may have higher fees but can also offer good exposure if affiliated hospitals are active.
        `,
            },
            {
                id: 2,
                title: "NEET 2026 Preparation Tips from Toppers",
                author: "Rahul Sharma",
                date: "Nov 2, 2025",
                category: "Exam Tips",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&q=80&w=800",
                content: `
          NEET toppers focus more on revision and mock tests than long hours of study. 
          Time management and smart work are the keys. Always make a realistic daily plan 
          and practice previous year question papers regularly.
        `,
            },
            {
                id: 3,
                title: "MBBS vs BDS vs BAMS – Which One is Better?",
                author: "Dr. Neha Agarwal",
                date: "Oct 20, 2025",
                category: "Career Guidance",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&q=80&w=800",
                content: `
          MBBS, BDS, and BAMS are three major career paths after NEET. 
          MBBS is focused on allopathic medicine, BDS on dental sciences, and BAMS on Ayurvedic practices. 
          Each has its own scope and career growth opportunities.
        `,
            },
        ];

        const selected = allBlogs.find((b) => b.id === parseInt(id));
        setBlog(selected);
        setRelated(allBlogs.filter((b) => b.id !== parseInt(id)).slice(0, 2));
    }, [id]);

    if (!blog)
        return (
            <div className="flex justify-center items-center min-h-screen text-2xl text-gray-700">
                Blog not found...
            </div>
        );

    return (
        <section className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
                {/* 🔙 Back Button */}
                <Link
                    to="/blogs"
                    className="inline-block mb-8 text-blue-600 font-semibold hover:underline"
                >
                    ← Back to Blogs
                </Link>

                {/* 📰 Blog Header */}
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-md mb-8"
                />
                <h1 className="text-4xl font-bold text-gray-900 mb-3">{blog.title}</h1>
                <div className="text-sm text-gray-600 mb-6 flex items-center space-x-4">
                    <span>📅 {blog.date}</span>
                    <span>✍️ {blog.author}</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                        {blog.category}
                    </span>
                </div>

                {/* ✏️ Blog Content */}
                <div className="text-gray-700 leading-relaxed text-lg mb-12 whitespace-pre-line">
                    {blog.content}
                </div>

                {/* 🧭 Related Blogs */}
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Related Blogs
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {related.map((r) => (
                        <div
                            key={r.id}
                            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
                        >
                            <img
                                src={r.image}
                                alt={r.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600 transition">
                                    {r.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                    {r.content.substring(0, 120)}...
                                </p>
                                <Link
                                    to={`/blogs/${r.id}`}
                                    className="text-blue-600 font-medium text-sm hover:underline"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
