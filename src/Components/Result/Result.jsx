import { jsPDF } from "jspdf";
import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineReload, AiOutlineRollback } from "react-icons/ai";
import { FaFilePdf } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import letterLoading from "../../Assets/letterLoading.gif";

const Result = ({
  eligibleResult,
  letterResult,
  setEligibility,
  setLetter,
  dataForClaim,
  resultLoading,
  setResultLoading,
}) => {
  const pdfRef = useRef(null);
  const [size, setSize] = useState(0);
  const { eligibility, answer } = eligibleResult?.data;
  const splitAnswer = answer.split("\n");
  console.log("data for claim: ", dataForClaim);

  const generatePDF = async () => {
    if (eligibility) {
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
      toast.success("PDF Downloaded Successfully!!");
    }
  };
  const handleClaimLetter = async () => {
    setResultLoading(true);
    await fetch("http://localhost:5000/api/v1/letter", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataForClaim),
    })
      .then((res) => res.json())
      .then((data) => {
        setSize(1);
        console.log("letter: ", data);
        setLetter(data);
      })
      .catch((error) => console.log("error: ", error));
    setResultLoading(false);
  };

  const splitLetter = letterResult?.data?.claimLetter
    .split("\n")
    .map((paragraph, index) => (
      <span key={index}>
        {paragraph}
        <br />
      </span>
    ));

  const handleBack = () => {
    setEligibility();
    setLetter();
  };
  return (
    <div className="m-5">
      <h1 className="text-center text-xl">
        {size === 0 ? "Result" : "Claim Letter"} For Disrupted Flight
      </h1>
      <div className="pt-4">
        <div className="flex gap-2 justify-end">
          <div>
            <button
              onClick={handleBack}
              className="rounded-full flex justify-center items-center gap-1 bg-sky-500 hover:bg-sky-800 text-white px-3 py-1"
            >
              <p>
                <AiOutlineRollback></AiOutlineRollback>
              </p>{" "}
              <p>Back</p>
            </button>
          </div>
          {size !== 0 && (
            <>
              <div>
                <button
                  onClick={handleClaimLetter}
                  className="rounded-full flex justify-center items-center gap-1 bg-rose-700 text-white px-3 py-1"
                >
                  <p>
                    <AiOutlineReload></AiOutlineReload>
                  </p>{" "}
                  <p>Regenerate</p>
                </button>
              </div>
              <div>
                <button
                  onClick={generatePDF}
                  className="rounded-full flex justify-center items-center gap-1 bg-rose-700 text-white px-3 py-1"
                >
                  <p>
                    <FaFilePdf></FaFilePdf>
                  </p>{" "}
                  <p>Save</p>
                </button>
              </div>
            </>
          )}
        </div>
        <div className="py-7">
          <div>
            {resultLoading === true && (
              <div className="h-full flex justify-center items-center">
                <img className="rounded-full" src={letterLoading} alt="" />
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            {size === 0 ? (
              eligibility ? (
                <>
                  <span>ELigible</span>
                  <span className="text-teal-700 border border-cyan-950 rounded">
                    <TiTick></TiTick>
                  </span>
                </>
              ) : (
                <>
                  <span>Not Eligible</span>
                  <span className="text-rose-700 border border-cyan-950 rounded">
                    <RxCross2></RxCross2>
                  </span>
                </>
              )
            ) : (
              ""
            )}
          </div>
          {/* Reason for eligibility and claim letter */}
          <div>
            {size === 0 ? (
              eligibility ? (
                <>
                  {splitAnswer
                    .filter((ans) => ans !== "Eligibility: TRUE")
                    .map((ans, i) => (
                      <p key={i} className="pb-2">
                        {ans}
                      </p>
                    ))}
                </>
              ) : (
                <>
                  {splitAnswer
                    .filter((ans) => ans !== "Eligibility: FALSE")
                    .map((ans, i) => (
                      <p key={i} className="pb-2">
                        {ans}
                      </p>
                    ))}
                </>
              )
            ) : (
              <div ref={pdfRef}>
                <div style={{ whiteSpace: "pre-line" }}>{splitLetter}</div>
              </div>
            )}
          </div>
          <div className="pt-2">
            {size === 0 && eligibility && (
              <>
                <p className="text-center text-rose-700">
                  Clicking the next button generates a claim letter that you can
                  save or download. <br />
                  You can submit this to {dataForClaim?.airlineName} or the
                  relevant authorities.
                </p>
                <p className="flex justify-center pt-3">
                  <button
                    onClick={handleClaimLetter}
                    className="rounded-full flex justify-center items-center gap-1 bg-cyan-600 hover:bg-cyan-800 text-white px-5 py-1"
                  >
                    Next
                  </button>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
