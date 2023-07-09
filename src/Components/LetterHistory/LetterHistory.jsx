import React, { useContext, useEffect, useRef, useState } from "react";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useNavigate } from "react-router-dom";
import airLoading from "../../Assets/loader.gif";
import { AuthContext } from "../../Context/AuthProvider";
import LetterHistoryPopupSection from "./LetterHistoryParts/LetterHistoryPopupSection";
import LetterTableItem from "./LetterHistoryParts/LetterTableItem";

const LetterHistory = () => {
  const { user, loading } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const [data, setData] = useState();
  const [selectedVal, setSelectedVal] = useState(null);
  const navigate = useNavigate();

  const handleOpenModal = (val) => {
    setSelectedVal(val);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://defiant-toad-gear.cyclic.app/api/v1/letter/${user?.email}`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user?.email]);

  if (loading && !data?.data) {
    return (
      <div className="h-full flex justify-center items-center">
        <img className="rounded-full" src={airLoading} alt="" />
      </div>
    );
  }
  return (
    <div className="block mx-auto">
      <h2 className="text-center mt-8 text-xl text-bold">
        {data?.length > 0 && (
          <p>
            You have generated a total of {data?.data.length} claim letters.
          </p>
        )}
      </h2>
      <div>
        {data?.data?.map((val, index) => (
          <div className="" key={index}>
            <div className="px-3 ">
              {isOpen && selectedVal && (
                <LetterHistoryPopupSection
                  modalRef={modalRef}
                  handleCloseModal={handleCloseModal}
                  selectedVal={selectedVal}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                SL No
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Airline Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Flight Number
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Boarding Pass Number
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y text-center divide-gray-200">
            {/* <LetterTableItem /> */}
            {data?.data?.map((item, ind) => (
              <LetterTableItem
                key={ind}
                ind={ind}
                item={item}
                setIsOpen={setIsOpen}
                setSelectedVal={setSelectedVal}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LetterHistory;
