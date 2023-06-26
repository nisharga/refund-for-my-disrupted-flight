import { jsPDF } from "jspdf";
import React, { useRef } from "react";
import { FaFilePdf } from "react-icons/fa";

const Result = () => {
  const pdfRef = useRef(null);
  const generatePDF = () => {
    const content = pdfRef.current;
    const doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4",
    });
    doc.html(content, {
      width: 180,
      windowWidth: 700,
      margin: [20, 20, 20, 20],
      html2Canvas: { scale: 0.67 },
      callback: (doc) => {
        doc.save("result.pdf");
      },
    });
  };
  return (
    <div className="m-5">
      <h1 className="text-center text-xl">Result For Disrupted Flight</h1>
      <div className="flex justify-between">
        <div ref={pdfRef}>Result</div>
        <div>
          <button
            onClick={generatePDF}
            className="rounded-full flex justify-center items-center gap-1 bg-rose-700 text-white px-3 py-1"
          >
            <p>
              <FaFilePdf></FaFilePdf>
            </p>{" "}
            <p>PDF</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
