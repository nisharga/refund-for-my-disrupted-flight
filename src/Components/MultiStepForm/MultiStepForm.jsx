import { useContext, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const MultiStepForm = () => {
  const { user } = useContext(AuthContext);
  const [step, setStep] = useState(1);
  const [eligibility, setEligibility] = useState();
  const [letter, setLetter] = useState();

  const [formData, setFormData] = useState({
    airLineName: "",
    airLineId: "",
    flightNumber: "",
    dateOfDisruption: "",
    reasonForDisruption: "",
    boardingPassNumber: "",
    boardingPassDate: "",
    receiptDetails: [{ receiptName: "", receiptAmount: "" }],
    emailSummary: "",
    messageSummary: "",
  });

  /*
  State: step,input data
  1st form: next button === setStep(step+1)
  inputData must be contorled form // usecontex
*/

  const handleNext = () => {
    if (formData?.airLineName !== "" &&
      formData?.flightNumber !== "" &&
      formData?.dateOfDisruption !== "" &&
      formData?.reasonForDisruption !== "" &&
      formData?.boardingPassNumber !== "" &&
      formData?.boardingPassDate !== "") {
      setStep(step + 1);
    }
    else {
      toast.error("Please Fill Up all fields.")
    }

  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const onSubmitFormData = (e) => {
    e.preventDefault();
    let newData = {
      email: user?.email,
      airlineName: formData?.airLineName,
      flightNumber: formData?.airLineId + formData.flightNumber,
      dateOfDisruption: formData?.dateOfDisruption,
      reasonForDisruption: formData?.reasonForDisruption,
      boardingPassNumber: formData?.airLineId + formData?.boardingPassNumber,
      boardingPassDate: formData?.boardingPassDate,
      emailCommunicationSummary: formData?.emailSummary,
      messageExchangeSummary: formData?.messageSummary
    }
    fetch('http://localhost:5000/api/v1/eligibility', {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newData)
    })
      .then(res => res.json())
      .then(data => {
        console.log("eligibility: ",data);
        setEligibility(data);
      })
      .catch(error => console.log(error))

    const meal = formData.receiptDetails.filter(receipt => receipt.receiptName.includes("meal"));
    let mealAmount = 0;
    if (meal.length > 0) {
      mealAmount = meal[0]?.receiptAmount;
    }
    const accommodation = formData.receiptDetails.filter(receipt => receipt.receiptName.includes("accommodation"));
    let accommodationAmount = 0;
    if (accommodation.length > 0) {
      accommodationAmount = accommodation[0]?.receiptAmount;
    }
    const transportation = formData.receiptDetails.filter(receipt => receipt.receiptName.includes("transportation"));
    let transportationAmount = 0;
    if (transportation.length > 0) {
      transportationAmount = transportation[0]?.receiptAmount;
    }
    const others = formData.receiptDetails.filter(receipt => receipt.receiptName.includes("others"));
    let othersAmount = 0;
    if (others.length > 0) {
      othersAmount = others[0]?.receiptAmount;
    }

    newData = {
      ...newData, meal: mealAmount, accommodation: accommodationAmount, transportation: transportationAmount, others: othersAmount 
    }
    console.log(newData);
    fetch('http://localhost:5000/api/v1/letter', {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newData)
    })
      .then(res => res.json())
      .then(data => {
        console.log("letter: ",data);
        setLetter(data);
      })
      .catch(error => console.log("error: ",error))
  };

  console.log(formData);

  return (
    <div className="block mx-auto">
      <div className="p-6 w-full lg:w-10/12 mx-auto">
        <h2 className="text-lg font-medium mb-4">Step {step} of 2</h2>
        <div className="flex mb-4">
          <div
            className={`w-1/2  rounded-l-md ${step === 1
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
            className={`w-1/2 ${step === 2 ? "bg-blue-500 text-white" : "bg-gray-200 rounded-r-md"
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
                Previous
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
              className={`${formData?.airLineName &&
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
