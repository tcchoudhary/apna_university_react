import { Helmet } from "react-helmet";

export default function TermsConditions() {
    return (
        <>
            <Helmet>
                <title>Terms & Conditions | Apna University</title>
                <meta
                    name="description"
                    content="Read the Terms & Conditions of using Apna University services including counseling, admission guidance and informational resources."
                />
            </Helmet>

            <section className="min-h-screen bg-gray-50 py-12 px-5 md:px-20">
                <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">

                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                        Terms & Conditions
                    </h1>

                    <p className="text-gray-700 mb-6">
                        Welcome to <strong>Apna University</strong>. By using our website or services,
                        you agree to the following Terms and Conditions. Please read them carefully.
                    </p>

                    <div className="space-y-6 text-gray-700 leading-relaxed">

                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Introduction</h2>
                            <p>
                                These Terms apply to all users of Apna University. If you disagree with any
                                part of the terms, please discontinue using our website and services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Services Provided</h2>
                            <p>
                                We provide educational guidance, counseling, career support, college
                                information, study abroad guidance, and related resources.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. User Responsibilities</h2>
                            <p>
                                You must provide accurate information, respect copyright rules, and not misuse
                                the platform in any form.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Admission Disclaimer</h2>
                            <p>
                                Apna University does NOT guarantee admission, seat allotment, or scholarships.
                                All decisions depend on college rules, government policies, and student eligibility.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Payments & Refunds</h2>
                            <p>
                                Paid services once taken are non-refundable. Charges depend on service type and support.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Data Usage</h2>
                            <p>
                                User data is used for counseling, contact, updates, and service improvement. We
                                never sell or misuse data. Refer Privacy Policy for details.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Limitation of Liability</h2>
                            <p>
                                We are not responsible for admission delays, errors, third-party actions, or
                                policy changes. Use the service at your own discretion.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Updates to Terms</h2>
                            <p>
                                We may update these Terms anytime. Continued usage means you accept the changes.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">9. Contact Us</h2>
                            <p>
                                For any queries, reach out at:<br />
                                📧 support@apnauniversity.com<br />
                                📞 +91 98765 43210
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
