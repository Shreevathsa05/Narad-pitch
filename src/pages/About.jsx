import React from "react";
import parthImg from "../assets/images/parth.jpg";
import shreeImg from "../assets/images/shree.jpg";
import sumitImg from "../assets/images/sumit.jpg";
import tarunImg from "../assets/images/tarun.jpg";
import hardikImg from "../assets/images/hardik.png";
import loukikSirImg from "../assets/images/loukik-sir.jpg"
import TeamCard from "../Components/TeamCard";

const team = [
  { name: "Shreevastha Bhat", profile: shreeImg, linkedIn: "https://www.linkedin.com/in/shreevathsa-bhat-228157235/", mail: "bhatshreevathsa17@gmail.com", role: "Team Lead", lead: true },
  { name: "Sumit Sonkamble", profile: sumitImg, linkedIn: "http://www.linkedin.com/in/sumit-sonkamble-61b9502b0", mail: "sonkamblesumit236@gmail.com", role: "Collaborator" },
  { name: "Tarun Asthana", profile: tarunImg, linkedIn: "https://www.linkedin.com/in/tarun-asthana", mail: "tarunasthana2005@gmail.com", role: "UI/UX specialist" },
  { name: "Parth Gupta", profile: parthImg, linkedIn: "https://www.linkedin.com/in/parth-gupta-8a7521215/", mail: "parthgupta20052005@gmail.com", role: "Full stack developer" },
  { name: "Hardik", profile: hardikImg, linkedIn: "https://www.linkedin.com/in/parth-gupta-8a7521215/", mail: "parthgupta20052005@gmail.com", role: "Full stack developer" },
  { name: "Loukik Salvi", profile: loukikSirImg, linkedIn: "https://www.linkedin.com/in/loukik-salvi-589510164/", mail: "loukik.salvi@tcetmumbai.in", role: "Senior Technical Advisor", mentor: true },
];

export default function About() {
  const lead = team.find(member => member.lead);
  const mentor = team.find(member => member.mentor);
  const developers = team.filter(member => !member.lead && !member.mentor);

  return (
    <>
    <section className="bg-white">

      {/* Hero Section */}
      <div className="py-20 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            🚀 AI-Powered Government Solutions
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Project <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Narad</span>
          </h1>
          <p className="text-lg md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Transforming Government Survey Infrastructure Through AI Innovation
          </p>
        </div>
      </div>

      {/* Mission & Features */}
      <div className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-2xl border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Goals</h3>
          <p className="text-gray-700 text-sm">
            Streamline government surveys, improve data accuracy, reduce costs, and provide real-time insights for evidence-based policymaking.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-2xl border-l-4 border-purple-500">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Features</h3>
          <p className="text-gray-700 text-sm">
            AI-driven automation, multilingual support, real-time analytics, DPDP compliance, multi-channel integrations, and scalable Node.js + MongoDB backend.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-6 px-6  max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>

        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          <TeamCard member={mentor}/>
            <TeamCard member={lead} />
            {developers.map((dev, idx) => (
              <TeamCard key={idx} member={dev} />
            ))}
          </div>
        </div>

        <div className="text-center py-8">
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Project Narad is committed to transforming government surveys into smarter, faster, and more reliable processes through AI innovation and robust technology.
          </p>
        </div>

      </div>
    </section>
    </>);
}