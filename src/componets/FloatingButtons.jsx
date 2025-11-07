// export default function AiChatButton({ onOpen }) {
//     return (
//         <button
//             onClick={onOpen}
//             className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 hover:scale-110 transition z-50"
//         >
//             💬
//         </button>
//     );
// }





import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingButtons({ onChatOpen }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

            {/* Expandable Buttons */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* WhatsApp Button */}
                        <motion.a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                                className="w-6 h-6"
                                alt="WhatsApp"
                            />
                            WhatsApp
                        </motion.a>

                        {/* AI Chat Button */}
                        <motion.button
                            onClick={onChatOpen}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
                        >
                            💬 AI Chat
                        </motion.button>
                    </>
                )}
            </AnimatePresence>

            {/* Main Floating FAB */}
            <motion.button
                onClick={() => setOpen(!open)}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full bg-blue-600 text-white shadow-xl 
                           flex items-center justify-center text-2xl hover:bg-blue-700 transition"
            >
                {open ? "✖" : "☰"}
            </motion.button>
        </div>
    );
}
