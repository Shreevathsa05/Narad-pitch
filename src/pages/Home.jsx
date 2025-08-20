import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-200 text-black flex flex-col">

{/* Hero Section */}
<section className="text-center py-20 px-6 md:px-12 flex-grow">
  <h1 className="text-5xl md:text-6xl font-bold mb-6">
    Project Narad
  </h1>
  <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
    An AI-powered platform transforming government surveys with automation, 
    multilingual support, and real-time insights for faster, richer, and more 
    accurate data-driven policymaking.
  </p>

  {/* Main CTA */}
  <div className="mt-10 flex justify-center gap-4">
    <Link
      to="/questionbank"
      className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition"
    >
      Get Started
    </Link>
    <Link
      to="/about"
      className="bg-white border border-black px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
    >
      Learn More
    </Link>
  </div>

  {/* Stylish Quick Links */}
  <div className="mt-14 flex flex-wrap justify-center gap-4">
    <Link
      to="/aigenerate"
      className="px-5 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-black hover:text-white transition"
    >
      Generate Set of Questions
    </Link>
    <Link
      to="/questionbank"
      className="px-5 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-black hover:text-white transition"
    >
      Generated Questions
    </Link>
    <Link
      to="/surveymonitor"
      className="px-5 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-black hover:text-white transition"
    >
      Survey Monitor
    </Link>
    <Link
      to="/analytics"
      className="px-5 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-black hover:text-white transition"
    >
      Analytics
    </Link>
    <Link
      to="/about"
      className="px-5 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-black hover:text-white transition"
    >
      About
    </Link>
  </div>
</section>


      {/* Features Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Why Narad?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="font-semibold text-xl mb-2">AI-Powered Surveys</h3>
            <p className="text-gray-600">
              Automate survey creation, fraud detection, and instant validation 
              with LangChain, LangGraph, and LangSmith.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="font-semibold text-xl mb-2">Inclusive Outreach</h3>
            <p className="text-gray-600">
              Multilingual, voice-enabled, and social media–integrated outreach 
              ensures surveys reach every citizen.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="font-semibold text-xl mb-2">Real-Time Insights</h3>
            <p className="text-gray-600">
              Intuitive dashboards provide live survey results for faster 
              evidence-based policy decisions.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="font-semibold text-xl mb-2">Secure & Compliant</h3>
            <p className="text-gray-600">
              Built with DPDP Act compliance, biometric verification, and 
              secure offline-first data capture.
            </p>
          </div>
        </div>
      </section>

      {/* GitHub Repos */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-6">Explore Our Code</h2>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Shreevathsa05/Narad-pitch"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-5 py-3 rounded-lg shadow hover:bg-gray-800 transition"
          >
            Frontend Repo
          </a>
          <a
            href="https://github.com/Shreevathsa05/Narad-Backend"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-black px-5 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Backend Repo
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
