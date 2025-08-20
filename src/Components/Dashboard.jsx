import React, { useState, useEffect, useMemo } from 'react';
// Step 1: Import Recharts components
import {
  ResponsiveContainer, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, Tooltip, CartesianGrid, Legend,
} from 'recharts';
import './Dashboard.css';

const rawData = [
  { id: 1001, age: '25-34', region: 'North', condition: 'Medium', platform: 'Mobile', date: '2024-07-20' },
  { id: 1002, age: '35-44', region: 'South', condition: 'High', platform: 'Desktop', date: '2024-07-21' },
  { id: 1003, age: '18-24', region: 'East', condition: 'Low', platform: 'Tablet', date: '2024-07-22' },
  // ... (the rest of your 100 data entries)
  { id: 1004, age: '45-54', region: 'West', condition: 'Medium', platform: 'Mobile', date: '2024-07-23' },
  { id: 1005, age: '55+', region: 'North', condition: 'High', platform: 'Desktop', date: '2024-07-24' },
  { id: 1006, age: '25-34', region: 'South', condition: 'Low', platform: 'Mobile', date: '2024-07-25' },
  { id: 1007, age: '35-44', region: 'East', condition: 'Medium', platform: 'Tablet', date: '2024-07-26' },
  { id: 1008, age: '18-24', region: 'West', condition: 'High', platform: 'Desktop', date: '2024-07-27' },
  { id: 1009, age: '55+', region: 'North', condition: 'Low', platform: 'Tablet', date: '2024-07-28' },
  { id: 1010, age: '25-34', region: 'East', condition: 'Medium', platform: 'Mobile', date: '2024-07-29' },
  { id: 1011, age: '45-54', region: 'South', condition: 'High', platform: 'Desktop', date: '2024-07-30' },
  { id: 1012, age: '35-44', region: 'West', condition: 'Low', platform: 'Mobile', date: '2024-07-31' },
  { id: 1013, age: '18-24', region: 'Central', condition: 'Medium', platform: 'Desktop', date: '2024-08-01' },
  { id: 1014, age: '55+', region: 'East', condition: 'High', platform: 'Tablet', date: '2024-08-02' },
  { id: 1015, age: '25-34', region: 'North', condition: 'Low', platform: 'Mobile', date: '2024-08-03' },
  { id: 1016, age: '35-44', region: 'Central', condition: 'Medium', platform: 'Desktop', date: '2024-08-04' },
  { id: 1017, age: '45-54', region: 'South', condition: 'High', platform: 'Mobile', date: '2024-08-05' },
  { id: 1018, age: '18-24', region: 'West', condition: 'Low', platform: 'Tablet', date: '2024-08-06' },
  { id: 1019, age: '55+', region: 'North', condition: 'Medium', platform: 'Desktop', date: '2024-08-07' },
  { id: 1020, age: '25-34', region: 'East', condition: 'High', platform: 'Mobile', date: '2024-08-08' },
  { id: 1021, age: '35-44', region: 'South', condition: 'Low', platform: 'Tablet', date: '2024-08-09' },
  { id: 1022, age: '45-54', region: 'Central', condition: 'Medium', platform: 'Desktop', date: '2024-08-10' },
  { id: 1023, age: '18-24', region: 'North', condition: 'High', platform: 'Mobile', date: '2024-08-11' },
  { id: 1024, age: '25-34', region: 'West', condition: 'Low', platform: 'Desktop', date: '2024-08-12' },
  { id: 1025, age: '35-44', region: 'Central', condition: 'Medium', platform: 'Tablet', date: '2024-08-13' },
  { id: 1026, age: '45-54', region: 'East', condition: 'High', platform: 'Mobile', date: '2024-08-14' },
  { id: 1027, age: '55+', region: 'South', condition: 'Low', platform: 'Desktop', date: '2024-08-15' },
  { id: 1028, age: '18-24', region: 'North', condition: 'Medium', platform: 'Tablet', date: '2024-08-16' },
  { id: 1029, age: '25-34', region: 'West', condition: 'High', platform: 'Mobile', date: '2024-08-17' },
  { id: 1030, age: '35-44', region: 'Central', condition: 'Low', platform: 'Desktop', date: '2024-08-18' },
  { id: 1031, age: '45-54', region: 'East', condition: 'Medium', platform: 'Tablet', date: '2024-08-19' },
  { id: 1032, age: '55+', region: 'South', condition: 'High', platform: 'Mobile', date: '2024-08-20' },
  { id: 1033, age: '18-24', region: 'Central', condition: 'Low', platform: 'Desktop', date: '2024-08-21' },
  { id: 1034, age: '25-34', region: 'North', condition: 'Medium', platform: 'Tablet', date: '2024-08-22' },
  { id: 1035, age: '35-44', region: 'West', condition: 'High', platform: 'Mobile', date: '2024-08-23' },
  { id: 1036, age: '45-54', region: 'South', condition: 'Low', platform: 'Desktop', date: '2024-08-24' },
  { id: 1037, age: '55+', region: 'East', condition: 'Medium', platform: 'Tablet', date: '2024-08-25' },
  { id: 1038, age: '18-24', region: 'West', condition: 'High', platform: 'Mobile', date: '2024-08-26' },
  { id: 1039, age: '25-34', region: 'Central', condition: 'Low', platform: 'Desktop', date: '2024-08-27' },
  { id: 1040, age: '35-44', region: 'North', condition: 'Medium', platform: 'Tablet', date: '2024-08-28' },
  { id: 1041, age: '45-54', region: 'East', condition: 'High', platform: 'Mobile', date: '2024-08-29' },
  { id: 1042, age: '55+', region: 'South', condition: 'Low', platform: 'Desktop', date: '2024-08-30' },
  { id: 1043, age: '18-24', region: 'North', condition: 'Medium', platform: 'Mobile', date: '2024-08-31' },
  { id: 1044, age: '25-34', region: 'West', condition: 'High', platform: 'Desktop', date: '2024-09-01' },
  { id: 1045, age: '35-44', region: 'Central', condition: 'Low', platform: 'Tablet', date: '2024-09-02' },
  { id: 1046, age: '45-54', region: 'East', condition: 'Medium', platform: 'Mobile', date: '2024-09-03' },
  { id: 1047, age: '55+', region: 'South', condition: 'High', platform: 'Desktop', date: '2024-09-04' },
  { id: 1048, age: '18-24', region: 'Central', condition: 'Low', platform: 'Tablet', date: '2024-09-05' },
  { id: 1049, age: '25-34', region: 'North', condition: 'Medium', platform: 'Mobile', date: '2024-09-06' },
  { id: 1050, age: '35-44', region: 'West', condition: 'High', platform: 'Desktop', date: '2024-09-07' },
  { id: 1051, age: '45-54', region: 'South', condition: 'Low', platform: 'Tablet', date: '2024-09-08' },
  { id: 1052, age: '55+', region: 'East', condition: 'Medium', platform: 'Mobile', date: '2024-09-09' },
  { id: 1053, age: '18-24', region: 'West', condition: 'High', platform: 'Desktop', date: '2024-09-10' },
  { id: 1054, age: '25-34', region: 'Central', condition: 'Low', platform: 'Mobile', date: '2024-09-11' },
  { id: 1055, age: '35-44', region: 'North', condition: 'Medium', platform: 'Tablet', date: '2024-09-12' },
  { id: 1056, age: '45-54', region: 'East', condition: 'High', platform: 'Desktop', date: '2024-09-13' },
  { id: 1057, age: '55+', region: 'South', condition: 'Low', platform: 'Mobile', date: '2024-09-14' },
  { id: 1058, age: '18-24', region: 'North', condition: 'Medium', platform: 'Tablet', date: '2024-09-15' },
  { id: 1059, age: '25-34', region: 'West', condition: 'High', platform: 'Desktop', date: '2024-09-16' },
  { id: 1060, age: '35-44', region: 'Central', condition: 'Low', platform: 'Mobile', date: '2024-09-17' },
  { id: 1061, age: '45-54', region: 'East', condition: 'Medium', platform: 'Tablet', date: '2024-09-18' },
  { id: 1062, age: '55+', region: 'South', condition: 'High', platform: 'Desktop', date: '2024-09-19' },
  { id: 1063, age: '18-24', region: 'Central', condition: 'Low', platform: 'Mobile', date: '2024-09-20' },
  { id: 1064, age: '25-34', region: 'North', condition: 'Medium', platform: 'Desktop', date: '2024-09-21' },
  { id: 1065, age: '35-44', region: 'West', condition: 'High', platform: 'Tablet', date: '2024-09-22' },
  { id: 1066, age: '45-54', region: 'South', condition: 'Low', platform: 'Mobile', date: '2024-09-23' },
  { id: 1067, age: '55+', region: 'East', condition: 'Medium', platform: 'Desktop', date: '2024-09-24' },
  { id: 1068, age: '18-24', region: 'West', condition: 'High', platform: 'Tablet', date: '2024-09-25' },
  { id: 1069, age: '25-34', region: 'Central', condition: 'Low', platform: 'Mobile', date: '2024-09-26' },
  { id: 1070, age: '35-44', region: 'North', condition: 'Medium', platform: 'Desktop', date: '2024-09-27' },
  { id: 1071, age: '45-54', region: 'East', condition: 'High', platform: 'Tablet', date: '2024-09-28' },
  { id: 1072, age: '55+', region: 'South', condition: 'Low', platform: 'Mobile', date: '2024-09-29' },
  { id: 1073, age: '18-24', region: 'North', condition: 'Medium', platform: 'Desktop', date: '2024-09-30' },
  { id: 1074, age: '25-34', region: 'West', condition: 'High', platform: 'Tablet', date: '2024-10-01' },
  { id: 1075, age: '35-44', region: 'Central', condition: 'Low', platform: 'Mobile', date: '2024-10-02' },
  { id: 1076, age: '45-54', region: 'East', condition: 'Medium', platform: 'Desktop', date: '2024-10-03' },
  { id: 1077, age: '55+', region: 'South', condition: 'High', platform: 'Tablet', date: '2024-10-04' },
  { id: 1078, age: '18-24', region: 'Central', condition: 'Low', platform: 'Mobile', date: '2024-10-05' },
  { id: 1079, age: '25-34', region: 'North', condition: 'Medium', platform: 'Desktop', date: '2024-10-06' },
  { id: 1080, age: '35-44', region: 'West', condition: 'High', platform: 'Tablet', date: '2024-10-07' },
  { id: 1081, age: '45-54', region: 'South', condition: 'Low', platform: 'Mobile', date: '2024-10-08' },
  { id: 1082, age: '55+', region: 'East', condition: 'Medium', platform: 'Desktop', date: '2024-10-09' },
  { id: 1083, age: '18-24', region: 'West', condition: 'High', platform: 'Tablet', date: '2024-10-10' },
  { id: 1084, age: '25-34', region: 'Central', condition: 'Low', platform: 'Mobile', date: '2024-10-11' },
  { id: 1085, age: '35-44', region: 'North', condition: 'Medium', platform: 'Desktop', date: '2024-10-12' },
  { id: 1086, age: '45-54', region: 'East', condition: 'High', platform: 'Tablet', date: '2024-10-13' },
  { id: 1087, age: '55+', region: 'South', condition: 'Low', platform: 'Mobile', date: '2024-10-14' },
  { id: 1088, age: '18-24', region: 'North', condition: 'Medium', platform: 'Desktop', date: '2024-10-15' },
  { id: 1089, age: '25-34', region: 'West', condition: 'High', platform: 'Tablet', date: '2024-10-16' },
  { id: 1090, age: '35-44', region: 'Central', condition: 'Low', platform: 'Mobile', date: '2024-10-17' },
  { id: 1091, age: '45-54', region: 'East', condition: 'Medium', platform: 'Desktop', date: '2024-10-18' },
  { id: 1092, age: '55+', region: 'South', condition: 'High', platform: 'Tablet', date: '2024-10-19' },
  { id: 1093, age: '18-24', region: 'Central', condition: 'Low', platform: 'Mobile', date: '2024-10-20' },
  { id: 1094, age: '25-34', region: 'North', condition: 'Medium', platform: 'Desktop', date: '2024-10-21' },
  { id: 1095, age: '35-44', region: 'West', condition: 'High', platform: 'Tablet', date: '2024-10-22' },
  { id: 1096, age: '45-54', region: 'South', condition: 'Low', platform: 'Mobile', date: '2024-10-23' },
  { id: 1097, age: '55+', region: 'East', condition: 'Medium', platform: 'Desktop', date: '2024-10-24' },
  { id: 1098, age: '18-24', region: 'West', condition: 'High', platform: 'Tablet', date: '2024-10-25' },
  { id: 1099, age: '25-34', region: 'Central', condition: 'Medium', platform: 'Mobile', date: '2024-10-26' },
  { id: 1100, age: '35-44', region: 'North', condition: 'Low', platform: 'Desktop', date: '2024-10-27' },
];

const getUniqueValues = (data, key) => {
  return [...new Set(data.map(item => item[key]))].sort();
};

// Step 2: Create a function to aggregate data for the charts
const aggregateData = (data, key) => {
  const counts = data.reduce((acc, item) => {
    const value = item[key];
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(counts).map(name => ({ name: name, count: counts[name] })).sort((a, b) => a.name.localeCompare(b.name));
};

const Dashboard = () => {
  const [displayData, setDisplayData] = useState(rawData);
  const [filters, setFilters] = useState({ age: '', region: '', condition: '', platform: '' });
  
  // Step 3: Memoize the aggregated data so it's not recalculated on every render
  const ageData = useMemo(() => aggregateData(rawData, 'age'), []);
  const regionData = useMemo(() => aggregateData(rawData, 'region'), []);
  const conditionData = useMemo(() => aggregateData(rawData, 'condition'), []);
  const platformData = useMemo(() => aggregateData(rawData, 'platform'), []);
  
  const ageOptions = getUniqueValues(rawData, 'age');
  const regionOptions = getUniqueValues(rawData, 'region');
  const conditionOptions = getUniqueValues(rawData, 'condition');
  const platformOptions = getUniqueValues(rawData, 'platform');

  useEffect(() => {
    let filteredData = rawData;
    if (filters.age) { filteredData = filteredData.filter(item => item.age === filters.age); }
    if (filters.region) { filteredData = filteredData.filter(item => item.region === filters.region); }
    if (filters.condition) { filteredData = filteredData.filter(item => item.condition === filters.condition); }
    if (filters.platform) { filteredData = filteredData.filter(item => item.platform === filters.platform); }
    setDisplayData(filteredData);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value, }));
  };
  
  const resetFilters = () => { setFilters({ age: '', region: '', condition: '', platform: '' }); };
  const handleJsonExport = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(displayData, null, 2))}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "filtered_survey_data.json";
    link.click();
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Analysis Dashboard</h1>
        <p>Analyze survey results and generate reports</p>
      </header>

      <section className="summary-section">
        <div className="card">
          <p className="card-title">Total Responses</p>
          {/* Step 4: Make summary card dynamic */}
          <p className="card-value">{rawData.length}</p>
        </div>
        <div className="card">
          <p className="card-title">Completion Rate</p>
          <p className="card-value">85%</p>
        </div>
        <div className="card key-insights-card">
          <p className="card-title">Key Insights</p>
          <p className="card-description"><b>70%</b> of respondents are satisfied with the current services</p>
        </div>
      </section>

      <section>
        <h2>Data Breakdown</h2>
        <div className="data-breakdown-grid">
          {/* Step 5: Replace placeholders with Recharts components */}
          <div className="card data-card">
            <div className="data-card-header">
              <p className="card-title">Responses by Age Group</p>
              <p className="card-value">{rawData.length}</p>
              <p className="card-change">Total Responses</p>
            </div>
            <div className="chart-placeholder">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ageData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" fontSize={12} tickLine={false} />
                  <YAxis fontSize={12} tickLine={false} />
                  <Tooltip cursor={{ fill: 'rgba(206, 206, 206, 0.2)' }} />
                  <Bar dataKey="count" name="Responses" fill="#8884d8" barSize={25} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="card data-card">
            <div className="data-card-header">
              <p className="card-title">Responses by Region</p>
              <p className="card-value">{rawData.length}</p>
              <p className="card-change">Total Responses</p>
            </div>
            <div className="chart-placeholder">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={regionData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" fontSize={12} tickLine={false} />
                  <YAxis fontSize={12} tickLine={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="count" name="Responses" stroke="#82ca9d" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card data-card">
            <div className="data-card-header">
              <p className="card-title">Responses by Financial Condition</p>
              <p className="card-value">{rawData.length}</p>
              <p className="card-change">Total Responses</p>
            </div>
            <div className="chart-placeholder">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={conditionData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" fontSize={12} tickLine={false} />
                  <YAxis fontSize={12} tickLine={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="count" name="Responses" stroke="#ffc658" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card data-card">
             <div className="data-card-header">
              <p className="card-title">Responses by Platform</p>
              <p className="card-value">{rawData.length}</p>
              <p className="card-change">Total Responses</p>
            </div>
            <div className="chart-placeholder">
               <ResponsiveContainer width="100%" height="100%">
                 {/* For horizontal bar chart, use BarChart with layout="vertical" */}
                <BarChart data={platformData} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" fontSize={12} tickLine={false} />
                  <YAxis type="category" dataKey="name" fontSize={12} tickLine={false} width={50} />
                  <Tooltip cursor={{ fill: 'rgba(206, 206, 206, 0.2)' }} />
                  <Bar dataKey="count" name="Responses" fill="#8884d8" barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
      
      <div className="grid-2-col">
        <section>
          <h2>Raw Data</h2>
          <div className="card table-card">
            <table className="raw-data-table">
              <thead>
                <tr>
                  <th>Respondent ID</th><th>Age Group</th><th>Region</th><th>Financial Condition</th><th>Platform</th><th>Response Date</th>
                </tr>
              </thead>
              <tbody>
                {displayData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td><td>{row.age}</td><td>{row.region}</td><td>{row.condition}</td><td>{row.platform}</td><td>{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <div className="card filter-card">
             <div className="filter-header">
                <h2>Filters</h2>
                <button className="btn-link" onClick={resetFilters}>Reset</button>
            </div>
            <div className="filter-grid">
              <div className="filter-group">
                <label htmlFor="age-group">Filter by Age Group</label>
                <select id="age-group" name="age" value={filters.age} onChange={handleFilterChange}>
                  <option value="">All Ages</option>
                  {ageOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
              <div className="filter-group">
                <label htmlFor="region">Filter by Region</label>
                <select id="region" name="region" value={filters.region} onChange={handleFilterChange}>
                  <option value="">All Regions</option>
                  {regionOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
              <div className="filter-group">
                <label htmlFor="financial">Filter by Financial Condition</label>
                <select id="financial" name="condition" value={filters.condition} onChange={handleFilterChange}>
                  <option value="">All Conditions</option>
                  {conditionOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
              <div className="filter-group">
                <label htmlFor="platform">Filter by Platform</label>
                <select id="platform" name="platform" value={filters.platform} onChange={handleFilterChange}>
                  <option value="">All Platforms</option>
                  {platformOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className="card export-card">
            <h2>JSON Export</h2>
            <button className="btn btn-secondary" onClick={handleJsonExport}>Download JSON</button>
          </div>
        </section>
      </div>

      
    </div>
  );
};

export default Dashboard;