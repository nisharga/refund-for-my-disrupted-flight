import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  // const [disruptionDate, setDisruptionDate] = useState("");
  const [formData, setFormData] = useState({
    airLineName: "",
    airLineId: "",
    flightNumber: "",
    dateOfDisruption: "",
    reasonForDisruption: "",
    boardingPassNumber: "",
    boardingPassDate: "",
    mealAmount: "",
    accommodationAmount: "",
    transportAmount: "",
    emailSummary: "",
    messageSumamry: "",
  });

  /*
  State: step,input data
  1st form: next button === setStep(step+1)
  inputData must be contorled form // usecontex

*/

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const onSubmitFormData = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  console.log(formData);

  return (
    <div className="block mx-auto">
      <div className="p-6 w-full lg:w-10/12 mx-auto">
        <h2 className="text-lg font-medium mb-4">Step {step} of 2</h2>
        <div className="flex mb-4">
          <div
            className={`w-1/2  rounded-l-md ${
              step === 1
                ? "bg-blue-500 text-white"
                : formData?.name && formData?.email
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            } ? 
            } p-2 text-center cursor-pointer`}
            onClick={() => setStep(1)}
          >
            Step 1
          </div>
          <div
            className={`w-1/2 ${
              step === 2 ? "bg-blue-500 text-white" : "bg-gray-200 rounded-r-md"
            } p-2 text-center cursor-pointer`}
            onClick={() => setStep(2)}
          >
            Step 2
          </div>
        </div>
        {step === 1 ? (
          <Step1
            setFormData={setFormData}
            formData={formData}
            // setDisruptionDate={setDisruptionDate}
            // disruptionDate={disruptionDate}
          />
        ) : (
          <Step2 setFormData={setFormData} formData={formData} />
        )}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <>
              <button
                className="bg-gray-300 px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400"
                onClick={handleBack}
              >
                Back is not back to back cblll
              </button>

              {formData?.airLineName &&
                formData?.flightNumber &&
                formData?.dateOfDisruption &&
                formData?.reasonForDisruption &&
                formData?.boardingPassNumber &&
                formData?.boardingPassDate && (
                  <form onSubmit={onSubmitFormData}>
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-600  px-6 py-1.5 rounded-lg text-white"
                    >
                      Submit Data
                    </button>
                  </form>
                )}
            </>
          )}
          {step < 2 && (
            <button
              className={`${
                formData?.airLineName &&
                formData?.flightNumber &&
                formData?.dateOfDisruption &&
                formData?.reasonForDisruption &&
                formData?.boardingPassNumber &&
                formData?.boardingPassDate
                  ? "bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg text-white"
                  : "bg-blue-300 px-8 py-3 rounded-lg text-white cursor-not-allowed"
              }`}
              onClick={handleNext}
              disabled={
                formData?.airLineName === "" &&
                formData?.flightNumber === "" &&
                formData?.dateOfDisruption === "" &&
                formData?.reasonForDisruption === "" &&
                formData?.boardingPassNumber === "" &&
                formData?.boardingPassDate === ""
              }
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
