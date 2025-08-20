import React, { useState } from "react";
import * as XLSX from "xlsx";

function ExcelUploader(props) {
  const [excelData, setExcelData] = useState([]);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Assuming first sheet
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // Convert to JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      console.log("Parsed Data:", jsonData);

      setExcelData(jsonData);

      // Send to backend
      fetch("https://narad-latest.onrender.com/upload/xls", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonData),
      }).then(() => {
        props.setContext(true);
      });
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl shadow-md border border-gray-200 max-w-lg mx-auto">
      <label
        htmlFor="file-upload"
        className="cursor-pointer bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition"
      >
        Upload Excel File
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".xls,.xlsx"
        onChange={handleFileUpload}
        className="hidden"
      />

      {fileName && (
        <p className="mt-4 text-sm text-gray-700">
          ✅ File Selected: <span className="font-semibold">{fileName}</span>
        </p>
      )}

      {/* {excelData.length > 0 && (
        <div className="mt-6 w-full max-h-64 overflow-auto border rounded-lg bg-white p-4 shadow-inner">
          <h3 className="font-semibold text-gray-800 mb-2">Preview:</h3>
          <pre className="text-xs text-gray-600 whitespace-pre-wrap">
            {JSON.stringify(excelData.slice(0, 5), null, 2)} 
          </pre>
        </div>
      )} */}
    </div>
  );
}

export default ExcelUploader;
