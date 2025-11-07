import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { User, Mail, Phone, MapPin, Edit3, Save } from "lucide-react";
import axios from "axios";

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const [user, setUser] = useState({
        name: "Subhash Mahiya",
        email: "subhash@example.com",
        phone: "+91 9876543210",
        country: "India",
        role: "Student",
        joined: "March 2024",
        avatar: "https://ui-avatars.com/api/?name=Subhash+Mahiya&background=2563eb&color=fff",
    });

    // ---------------- Update Profile API ----------------
    const updateProfile = async (updatedData) => {
        try {
            setLoading(true);
            setMessage(null);
            const res = await axios.put("/api/profile/update", updatedData);
            console.log("Profile updated:", res.data);
            setMessage({ type: "success", text: "✅ Profile updated successfully!" });
        } catch (error) {
            console.error("Update error:", error);
            setMessage({ type: "error", text: "❌ Failed to update profile!" });
        } finally {
            setLoading(false);
            setIsEditing(false);
        }
    };

    const handleSave = () => updateProfile(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <>
            {/* ---------- SEO Meta Tags ---------- */}
            <Helmet>
                <title>{`${user.name} | AU Profile`}</title>
                <meta
                    name="description"
                    content="Edit your AU student profile with personal details, contact info, and educational preferences."
                />
                <meta name="keywords" content="AU profile, education, student dashboard, user account" />
            </Helmet>

            {/* ---------- Page UI ---------- */}
            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-10 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white shadow-2xl rounded-2xl p-8 sm:p-10"
                    >
                        {/* -------- Header Section -------- */}
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <img
                                src={user.avatar}
                                alt="User Avatar"
                                className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-lg"
                            />

                            <div className="text-center sm:text-left flex-1">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{user.name}</h2>
                                <p className="text-blue-600 font-medium">{user.role}</p>
                                <p className="text-gray-500 text-sm mt-1">Joined {user.joined}</p>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => setIsEditing(!isEditing)}
                                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-700 transition"
                            >
                                {isEditing ? <Save className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                                {isEditing ? "Save" : "Edit"}
                            </motion.button>
                        </div>

                        <div className="border-t border-gray-200 my-6"></div>

                        {/* -------- User Info Form -------- */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { label: "Full Name", name: "name", icon: <User /> },
                                { label: "Email", name: "email", icon: <Mail /> },
                                { label: "Phone", name: "phone", icon: <Phone /> },
                                { label: "Country", name: "country", icon: <MapPin /> },
                            ].map((field, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="bg-blue-50 rounded-xl p-4 flex flex-col"
                                >
                                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                                        {field.icon}
                                        <span>{field.label}</span>
                                    </div>

                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name={field.name}
                                            value={user[field.name]}
                                            onChange={handleChange}
                                            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
                                        />
                                    ) : (
                                        <p className="font-medium text-gray-800">{user[field.name]}</p>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* -------- Save Button -------- */}
                        {isEditing && (
                            <div className="flex justify-end mt-8">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={handleSave}
                                    disabled={loading}
                                    className={`px-6 py-2 rounded-xl font-medium text-white transition ${loading
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-blue-600 hover:bg-blue-700"
                                        }`}
                                >
                                    {loading ? "Saving..." : "Submit Changes"}
                                </motion.button>
                            </div>
                        )}

                        {/* -------- Feedback Message -------- */}
                        {message && (
                            <p
                                className={`text-center mt-6 font-medium ${message.type === "success" ? "text-green-600" : "text-red-600"
                                    }`}
                            >
                                {message.text}
                            </p>
                        )}
                    </motion.div>
                </div>
            </div>
        </>
    );
}



// Tctctc@#123123