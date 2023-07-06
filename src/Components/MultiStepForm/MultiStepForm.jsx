import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import airLoading from "../../Assets/loader.gif";
import { AuthContext } from "../../Context/AuthProvider";
import Result from "../Result/Result";
import Step1 from "./Step1";
import Step2 from "./Step2";

const MultiStepForm = () => {
  const { user } = useContext(AuthContext);
  const [step, setStep] = useState(1);
  const [eligibility, setEligibility] = useState();
  const [letter, setLetter] = useState();
  const [resultLoading, setResultLoading] = useState(false);
  const [dataForClaim, setDataForClaim] = useState();
  // const eligibility = {
  //   data
  //     :
  //   {
  //     airlineName
  //       :
  //       "Delta Air Lines",
  //     answer
  //       :
  //       "\n\nEligibility: FALSE\n\nFive reasons why user is not eligible for a refund or compensation:\n• The flight disruption occurred more than 24 hours before the flight, meaning the user was not eligible for compensation or refund according to Delta Airlines regulations.\n• The user's message exchange summary does not provide any evidence of Delta Airlines offering a refund or compensation.\n• The reason for the flight disruption was a delay caused by traffic, and Delta Airlines does not provide compensation or refunds for flight disruptions caused by traffic.\n• The user's email communication summary does not provide any evidence of Delta Airlines offering a refund or compensation.\n• The user is not in possession of any proof of purchase or boarding pass.",
  //     boardingPassDate
  //       :
  //       "Jul 4, 2023",
  //     boardingPassNumber
  //       :
  //       "DL1234",
  //     dateOfDisruption
  //       :
  //       "Jul 4, 2023",
  //     eligibility
  //       :
  //       false,
  //     email
  //       :
  //       "hiyahira8@gmail.com",
  //     emailCommunicationSummary
  //       :
  //       "I contacted Delta Airlines regarding the flight delay and received a response and they said flight delay for traffic.",
  //     flightNumber
  //       :
  //       "DL123",
  //     messageExchangeSummary
  //       :
  //       "I used the official Delta Airlines app to send a message about the flight delay and received a reply acknowledging the situation and that for traffic delays, they do not give compensation or refund",
  //     reasonForDisruption
  //       :
  //       "Delay",
  //     __v
  //       :
  //       0,
  //     _id
  //       :
  //       "64a326e454d83110b63e2b75",
  //   },
  //   status
  //     :
  //     "success"
  // }
  // const letter = {
  //   data
  //     :
  //   {
  //     airlineName
  //       :
  //       "Delta Air Lines",
  //     boardingPassDate
  //       :
  //       "Jul 4, 2023",
  //     boardingPassNumber
  //       :
  //       "DL1234",
  //     claimLetter
  //       :
  //       "\nDear Delta Air Lines Airlines,\n\nI am writing to request compensation or a refund due to a flight delay on July 4, 2023 for Flight DL123. According to my boarding pass, I was scheduled to board the flight at the given date and time.\n\nI experienced a delay for the flight and contacted Delta Air Lines Airlines regarding the issue by using the official Delta Airlines App. I received a response acknowledging the traffic-related delay, but was informed that Delta Air Lines Airlines does not offer compensation or refunds for such delays. I am attaching a copy of the ticket and boarding pass, receipts for additional costs incurred as a result of the delay, and the message exchange summary with Delta Airlines for your review.\n\nI hope you can appreciate the inconvenience this delay has caused and that you will grant my request for compensation and/or a refund.\n\nSincerely,\nHira Hiya",
  //     dateOfDisruption
  //       :
  //       "Jul 4, 2023",
  //     email
  //       :
  //       "hiyahira8@gmail.com",
  //     emailCommunicationSummary
  //       :
  //       "I contacted Delta Airlines regarding the flight delay and received a response and they said flight delay for traffic.",
  //     flightNumber
  //       :
  //       "DL123",
  //     fullName
  //       :
  //       "Hira Hiya",
  //     messageExchangeSummary
  //       :
  //       "I used the official Delta Airlines app to send a message about the flight delay and received a reply acknowledging the situation and that for traffic delays, they do not give compensation or refund",
  //     reasonForDisruption
  //       :
  //       "Delay",
  //     receipts
  //       :
  //       [{
  //         accommodation
  //           :
  //           0,
  //         meal
  //           :
  //           0,
  //         transportation
  //           :
  //           0,
  //         _id
  //           :
  //           "64a3270754d83110b63e2b78"
  //       }],
  //     __v
  //       :
  //       0,
  //     _id
  //       :
  //       "64a3270754d83110b63e2b77",
  //   },
  //   status
  //     :
  //     "success"
  // }

  console.log(user);

  const [formData, setFormData] = useState({
    airLineName: "",
    airLineId: "",
    flightNumber: "",
    dateOfDisruption: "",
    reasonForDisruption: "",
    boardingPassNumber: "",
    boardingPassDate: "",
    isRecipt: "no",
    receiptDetails: [{ receiptName: "", receiptAmount: "" }],
    emailSummary: "",
    messageSummary: "",
  });

  const handleNext = () => {
    if (
      formData?.airLineName !== "" &&
      formData?.flightNumber !== "" &&
      formData?.dateOfDisruption !== "" &&
      formData?.reasonForDisruption !== "" &&
      formData?.boardingPassNumber !== "" &&
      formData?.boardingPassDate !== ""
    ) {
      setStep(step + 1);
    } else {
      toast.error("Please Fill Up all fields.");
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const onSubmitFormData = async (e) => {
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
      messageExchangeSummary: formData?.messageSummary,
    };
    setResultLoading(true);
    await fetch("http://localhost:5000/api/v1/eligibility", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("eligibility: ", data);
        setEligibility(data);
      })
      .catch((error) => console.log(error));

    const meal = formData.receiptDetails.filter((receipt) =>
      receipt.receiptName.includes("meal")
    );
    let mealAmount = 0;
    if (meal.length > 0) {
      mealAmount = meal[0]?.receiptAmount;
    }
    const accommodation = formData.receiptDetails.filter((receipt) =>
      receipt.receiptName.includes("accommodation")
    );
    let accommodationAmount = 0;
    if (accommodation.length > 0) {
      accommodationAmount = accommodation[0]?.receiptAmount;
    }
    const transportation = formData.receiptDetails.filter((receipt) =>
      receipt.receiptName.includes("transportation")
    );
    let transportationAmount = 0;
    if (transportation.length > 0) {
      transportationAmount = transportation[0]?.receiptAmount;
    }
    const others = formData.receiptDetails.filter((receipt) =>
      receipt.receiptName.includes("others")
    );
    let othersAmount = 0;
    if (others.length > 0) {
      othersAmount = others[0]?.receiptAmount;
    }

    newData = {
      ...newData,
      fullName: user?.displayName,
      meal: mealAmount,
      accommodation: accommodationAmount,
      transportation: transportationAmount,
      others: othersAmount,
    };
    console.log(newData);

    setDataForClaim(newData);
    setResultLoading(false);
  };
  console.log(formData);

  return (
    <div className={`block mx-auto ${resultLoading && "lg:h-[90%]"}`}>
      <div
        className={`p-6 w-full lg:w-10/12 mx-auto ${resultLoading && "h-full"}`}
      >
        {
          //
          eligibility ? (
            <Result
              eligibleResult={eligibility}
              letterResult={letter}
              setEligibility={setEligibility}
              setLetter={setLetter}
              dataForClaim={dataForClaim}
              resultLoading={resultLoading}
              setResultLoading={setResultLoading}
            ></Result>
          ) : resultLoading ? (
            <>
              <div className="h-full flex justify-center items-center">
                <img className="rounded-full" src={airLoading} alt="" />
              </div>
            </>
          ) : (
            <>
              <h2 className="text-lg font-medium mb-4">Step {step} of 2</h2>
              <div className="flex mb-4">
                <div
                  className={`w-1/2  rounded-l-md flex items-center justify-center ${
                    step === 1
                      ? "bg-blue-500 text-white"
                      : formData?.name && formData?.email
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  } ? 
            } p-2 text-center cursor-pointer`}
                  onClick={() => setStep(1)}
                >
                  <div className="flex flex-col md:flex-row items-center justify-center">
                    <p
                      className={`px-2  rounded-full border ${
                        step === 1
                          ? "border-sky-500 shadow-md"
                          : "border-slate-400"
                      } mr-1.5`}
                    >
                      1
                    </p>
                    <p>Flight Details</p>
                  </div>
                </div>
                <div
                  className={`w-1/2 flex items-center justify-center ${
                    step === 2
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 rounded-r-md"
                  } p-2 text-center cursor-pointer`}
                  onClick={() => setStep(2)}
                >
                  <div className="flex flex-col md:flex-row items-center justify-center">
                    <p
                      className={`px-2  rounded-full border ${
                        step === 2
                          ? "border-sky-500 shadow-md"
                          : "border-slate-400"
                      } mr-1.5`}
                    >
                      2
                    </p>
                    <p>Communication Details</p>
                  </div>
                </div>
              </div>
              {step === 1 ? (
                <Step1 setFormData={setFormData} formData={formData} />
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

                    {formData?.airLineId &&
                      formData?.airLineName &&
                      formData?.airLineId &&
                      formData?.boardingPassDate &&
                      formData?.boardingPassNumber &&
                      formData?.dateOfDisruption &&
                      formData?.emailSummary &&
                      formData?.flightNumber &&
                      formData?.isRecipt &&
                      formData?.messageSummary &&
                      formData?.reasonForDisruption && (
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
                        ? "bg-blue-500 hover:bg-blue-600  px-6 py-1.5 rounded-lg text-white"
                        : "bg-blue-300 px-6 py-1.5 rounded-lg text-white cursor-not-allowed"
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
            </>
          )
        }
      </div>
    </div>
  );
};

export default MultiStepForm;
