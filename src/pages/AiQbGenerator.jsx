import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExcelUploader from "../components/ExcelUploader";

export default function AiQbGenerator() {
  const [platforms, setPlatforms] = useState({ instagram: false, whatsapp: false, facebook: false });
  const [context, setContext] = useState(false);
const navigate = useNavigate();


  // State for form fields
  const [surveyObjective, setSurveyObjective] = useState("");
  const [targetedAgeGroup, setTargetedAgeGroup] = useState("");
  const [financialCondition, setFinancialCondition] = useState("");
  const [region, setRegion] = useState("");
  const [surveyLength, setSurveyLength] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [timeline, setTimeline] = useState("");
  const [expectedOutput, setExpectedOutput] = useState("");
  const [expectedOutcome, setExpectedOutcome] = useState("");

  const togglePlatform = (key) => {
    setPlatforms({ ...platforms, [key]: !platforms[key] });
  };

  const handleSubmit = async () => {
    const payload = {
      surveyObjective,
      targetedAgeGroup,
      financialCondition,
      region,
      surveyLength,
      questionType,
      expectedOutput,
      expectedOutcome,
      timeline,
      // platforms: Object.keys(platforms).filter((p) => platforms[p]), // send only selected
    };

    try {
      const endpoint = context ? "/generateQB/context" : "/generateQB";

      const res = await fetch(`https://narad-latest.onrender.com${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).then(
        ()=>{navigate("/questionbank");}
      );
      const data = await res.json();
      console.log(context ? "With context:" : "Without context:", data);
    } catch (err) {
      console.error("Error submitting survey config:", err);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <div className="bg-white border border-black max-w-5xl mx-auto rounded-xl shadow-lg">
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Survey Configuration</h2>

          {/* Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              className="p-2 rounded border border-black w-full"
              onChange={(e) => setSurveyObjective(e.target.value)}
            >
              <option value="">Select Survey Objective</option>
              <option value="poverty_assessment">Poverty Assessment</option>
              <option value="employment_status">Employment Status</option>
              <option value="housing_sanitation">Housing & Sanitation</option>
              <option value="health_nutrition">Health & Nutrition</option>
              <option value="domestic_workforce">Domestic Workers</option>
              <option value="migrant_worker_employment">Migrant Worker Employment</option>
            </select>


            <select
              className="p-2 rounded border border-black w-full"
              onChange={(e) => setTargetedAgeGroup(e.target.value)}
            >
              <option value="">Select Age Group</option>
              <option value="0-5">0–5 (Infants & Toddlers)</option>
              <option value="6-12">6–12 (Children)</option>
              <option value="13-17">13–17 (Adolescents)</option>
              <option value="18-25">18–25 (Youth)</option>
              <option value="26-35">26–35 (Young Adults)</option>
              <option value="36-45">36–45 (Mid Adults)</option>
              <option value="46-60">46–60 (Older Adults)</option>
              <option value="60+">60+ (Senior Citizens)</option>
            </select>


            <select className="p-2 rounded border border-black w-full" onChange={(e) => setFinancialCondition(e.target.value)}>
              <option value="">Select Financial Condition</option>
              <option value="low">Low Income</option>
              <option value="mid">Middle Income</option>
              <option value="high">High Income</option>
            </select>

            <select className="p-2 rounded border border-black w-full" onChange={(e) => setRegion(e.target.value)}>
              <option value="">Select Region</option>
              <option value="urban">Urban</option>
              <option value="rural">Rural</option>
            </select>

            <select className="p-2 rounded border border-black w-full" onChange={(e) => setSurveyLength(e.target.value)}>
              <option value="">Select Survey Length</option>
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
            </select>

            <select className="p-2 rounded border border-black w-full" onChange={(e) => setQuestionType(e.target.value)}>
              <option value="">Select Question Type</option>
              <option value="mcq">Multiple Choice</option>
              <option value="open">Open Ended</option>
            </select>

            <select className="p-2 rounded border border-black w-full" onChange={(e) => setTimeline(e.target.value)}>
              <option value="">Select Timeline</option>
              <option value="1w">1 Week</option>
              <option value="1m">1 Month</option>
            </select>

            <select className="p-2 rounded border border-black w-full" onChange={(e) => setExpectedOutput(e.target.value)}>
              <option value="">Select Output</option>
              <option value="xls">Excel Report</option>
              <option value="pdf">PDF Report</option>
            </select>

            <input
              type="text"
              placeholder="Enter Expected Outcome"
              value={expectedOutcome}
              onChange={(e) => setExpectedOutcome(e.target.value)}
              className="p-2 rounded border border-black w-full"
            />

          </div>

          {/* Platforms */}
          <div className="mt-6">
            <h3 className="mb-2">Survey Platform</h3>
            <div className="flex space-x-4">
              {Object.keys(platforms).map((key) => (
                <label key={key} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={platforms[key]}
                    onChange={() => togglePlatform(key)}
                    className="accent-black"
                  />
                  <span className="capitalize">{key}</span>
                </label>
              ))}
            </div>
          </div>

          {/* File Upload */}
          <div className="mt-6 border-2 border-dashed border-black rounded-lg p-6 text-center">
            <p className="mb-2">Upload Question Bank (XLS)</p>
            <ExcelUploader setContext={setContext} />
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-right">
            <button
              className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-lg shadow-md"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
