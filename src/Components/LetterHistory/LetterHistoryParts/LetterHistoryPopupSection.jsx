import React, { useRef } from 'react'
import CloseIconSVG from './CloseIconSVG'
import { FaFilePdf } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { jsPDF } from "jspdf";


const LetterHistoryPopupSection = ({modalRef, handleCloseModal, selectedVal}) => { 
    const pdfRef = useRef(null);
    const generatePDF = async () => {
        if (selectedVal.eligibility) {
          const content = pdfRef.current;
          const doc = new jsPDF({
            orientation: "p",
            unit: "mm",
            format: "a4",
          });
          await doc.html(content, {
            width: 180,
            windowWidth: 700,
            margin: [20, 20, 20, 20],
            html2Canvas: { scale: 0.67 },
            callback: (doc) => {
              doc.save("result.pdf");
            },
          });
          toast.success("PDF Downloaded Successfully!!")
        }
      };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
    <div className="bg-white w-1/2 rounded-lg" ref={modalRef}>
      <div className="flex justify-end">
        <button className="p-2" onClick={handleCloseModal}>
          <CloseIconSVG />
        </button>
      </div>
        <div className="p-4">
                <button
                  onClick={generatePDF}
                  className="rounded-full flex justify-center items-center gap-1 bg-rose-700 text-white px-3 py-1"
                >
                  <p>
                    <FaFilePdf></FaFilePdf>
                  </p> 
                  <p>Save</p>
                </button> 
            {selectedVal?.claimLetter.split('\n')
           .map((paragraph, index) => <span key={index}>{paragraph}<br /></span>)}
        </div>
    </div>
  </div>
  )
}

export default LetterHistoryPopupSection