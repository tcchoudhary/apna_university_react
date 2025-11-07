import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | Apna University</title>
                <meta
                    name="description"
                    content="Read Apna University privacy policy to understand how we collect, store and protect your data."
                />
            </Helmet>

            <section className="min-h-screen bg-gray-50 py-12 px-5 md:px-20">
                <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">

                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Privacy Policy
                    </h1>

                    <p className="text-gray-700 mb-6">
                        At <strong>Apna University</strong>, your privacy is our top priority. This policy
                        describes how we collect, use, and safeguard your personal information.
                    </p>

                    <div className="space-y-6 text-gray-700 leading-relaxed">

                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Data We Collect</h2>
                            <p>
                                We collect personal data such as name, email, mobile, city, NEET score (optional),
                                course preferences, and technical data like IP and browser cookies.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. How We Use Your Data</h2>
                            <ul className="list-disc pl-5">
                                <li>Personalized counseling & guidance</li>
                                <li>College suggestions & admission updates</li>
                                <li>Improving platform experience</li>
                                <li>WhatsApp / Email / Call communication</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Sharing of Information</h2>
                            <p>
                                We do NOT sell your data.
                                We may share it with counselors, university partners, or legal authorities (if required).
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Cookies</h2>
                            <p>
                                Cookies help us analyze website behavior and improve user experience. You can
                                disable cookies anytime from your browser settings.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Data Security</h2>
                            <p>
                                We use SSL encryption, secured servers, and restricted data access to protect your information.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">6. User Rights</h2>
                            <p>
                                You can request data deletion, correction, consent withdrawal, or a copy of stored data anytime.
                                Email: support@apnauniversity.com
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Children’s Privacy</h2>
                            <p>
                                We do not knowingly collect data from children under 16 without guardian consent.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Updates to Policy</h2>
                            <p>
                                We may update this policy anytime. Updated version will be visible on this page.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
