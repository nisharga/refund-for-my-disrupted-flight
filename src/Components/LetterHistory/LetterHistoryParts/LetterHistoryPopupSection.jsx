import { jsPDF } from "jspdf";
import React, { useRef } from "react";
import { toast } from "react-hot-toast";
import { FaFilePdf } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const LetterHistoryPopupSection = ({
  modalRef,
  handleCloseModal,
  selectedVal,
}) => {
  const pdfRef = useRef(null);
  const generatePDF = async () => {
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
        doc.save("letter.pdf");
      },
    });
    toast.success("PDF Downloaded Successfully!!");
  };
  return (
    <div className="fixed inset-0 overflow-hidden scroll-container  flex items-center justify-center p-10 lg:pt-5 lg:-mr-56 bg-black bg-opacity-[0.02] transition-opacity">
      <div
        className="bg-slate-200 w-full h-full lg:w-7/12 lg:h-[500px]  overflow-y-scroll  rounded-lg "
        ref={modalRef}
      >
        <div className="flex justify-end">
          <button
            className="p-2 fixed font-bold text-3xl "
            onClick={handleCloseModal}
          >
            <IoMdClose />
          </button>
        </div>
        <div className="w-10/12 mx-auto mt-10">
          <button
            onClick={generatePDF}
            className="rounded-full flex justify-center items-center gap-1 bg-rose-700 text-white px-3 py-1"
          >
            <p>
              <FaFilePdf></FaFilePdf>
            </p>
            <p>Save</p>
          </button>
          {
            <div ref={pdfRef} className="mb-10">
              {selectedVal?.claimLetter.split("\n").map(
                (paragraph, index) => (
                  <span key={index}>
                    {paragraph}
                    <br />
                  </span>
                )
                // ({ paragraph })
              )}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default LetterHistoryPopupSection;
