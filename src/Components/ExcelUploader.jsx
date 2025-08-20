import React, { useState } from "react";
import * as XLSX from "xlsx";

function ExcelUploader(props) {
  const [excelData, setExcelData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
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
      fetch("http://localhost:8080/upload/xls", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonData),
      }).then(
        ()=>{
          props.setContext(true)
        }
      );
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input type="file" accept=".xls,.xlsx" onChange={handleFileUpload} />
      {/* <div className="overflow-auto">
        <pre>{JSON.stringify(excelData, null, 2)}</pre>
      </div> */}
    </div>
  );
}

export default ExcelUploader;
