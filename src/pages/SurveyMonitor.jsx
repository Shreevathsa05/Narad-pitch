import React from "react";
import { FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function SurveyMonitor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-200 text-black flex flex-col">

      {/* Hero Section */}
      <section className="text-center py-24 px-6 md:px-12 flex-grow">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Survey Monitor
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
          Coming Soon: Monitor live surveys across multiple platforms with 
          real-time insights, secure data, and AI-powered analytics.
        </p>
      </section>

      {/* Feature Teasers */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">What to Expect</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">📡</div>
            <h3 className="font-semibold text-xl mb-2">Live Tracking</h3>
            <p className="text-gray-600">Track survey progress in real-time across regions.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center text-3xl gap-6 mb-4 text-gray-700">
              <FaInstagram className="hover:text-pink-600 transition" />
              <FaWhatsapp className="hover:text-green-600 transition" />
              <FaPhoneAlt className="hover:text-blue-600 transition" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Multi-Platform</h3>
            <p className="text-gray-600">Integrate responses from WhatsApp, Instagram, and phone.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="font-semibold text-xl mb-2">Reports</h3>
            <p className="text-gray-600">Generate insights and dashboards for decision-making.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="font-semibold text-xl mb-2">Secure Data</h3>
            <p className="text-gray-600">Store and transmit survey data safely and compliantly.</p>
          </div>
        </div>
      </section>

      {/* Dashboard Mockup */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">Sneak Peek</h2>
        <div className="flex justify-center">
          <div className="bg-gray-200 h-64 rounded-2xl shadow-lg flex items-center justify-center text-gray-500">
            Dashboard Mockup (Coming Soon)
          </div>
        </div>
      </section>

      {/* Optional CTA */}
      <section className="py-12 px-6 text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          Stay Updated
        </button>
      </section>

    </div>
  );
}

export default SurveyMonitor;
