import { jsPDF } from "jspdf";
import React, { useRef } from "react";
import { toast } from "react-hot-toast";
import { FaFilePdf } from "react-icons/fa";

const Result = ({ eligibleResult, letterResult }) => {
  const pdfRef = useRef(null);
  const { eligibility, answer } = eligibleResult?.data;
  const { claimLetter } = letterResult?.data;
  const splitAnswer = answer.split("\n");
  // const splitLetter = claimLetter.replace(/\n/g, '<br/>').replace(/\s\s+/g, ' ');
  const splitLetter = claimLetter
  .split('\n')
  .map((paragraph, index) => <span key={index}>{paragraph}<br /></span>);

  console.log(eligibleResult.data, letterResult, eligibility);
  const generatePDF = () => {
    if (eligibility) {
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
      toast.success("PDF Downloaded Successfully!!")
    }

  };
  return (
    <div className="m-5">
      <h1 className="text-center text-xl">Result For Disrupted Flight</h1>
      <div className="flex justify-between">
        <div className="py-12" >
          <h2>{eligibility ? "Eligible" : "Not Eligible"}</h2>
          <div ref={pdfRef}>
            {
              eligibility ?
                <>
                <div style={{ whiteSpace: 'pre-line' }}>{splitLetter}</div>
                  {/* <div dangerouslySetInnerHTML={{ __html: splitLetter }} /> */}
                  {/* {
                    splitLetter
                    // splitLetter.map((leter, i) => <span key={i}>{leter}</span>)
                  } */}
                </>
                :
                <>
                  {
                    splitAnswer.map((ans, i) => <p key={i} className="pb-2">{ans}</p>)
                  }
                </>
            }
          </div>
        </div>
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
