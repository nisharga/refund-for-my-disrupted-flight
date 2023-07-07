import React, { useState, useRef, useEffect, useContext } from "react";
import LetterHistoryTitle from "./LetterHistoryParts/LetterHistoryTitle";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { FiTrash2 } from "react-icons/fi";
import LetterHistoryPopupSection from "./LetterHistoryParts/LetterHistoryPopupSection";
import { AuthContext } from "../../Context/AuthProvider";

const LetterHistory = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const [data, setData] = useState();

  // Modal Code
  const handleOpenModal = () => {
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
  // Modal Code
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://defiant-toad-gear.cyclic.app/api/v1/letter/${user.email}`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelet = () => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to Delete Your Claim Letter History?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            alert("HI");
          },
        },
        {
          label: "No",
          onClick: () => "",
        },
      ],
    });
  };
  console.log(data);
  return (
    <div className="block mx-auto">
      <h2 className="text-center mt-8 text-xl text-bold">
        {data && (
          <p>
            You have generated a total of {data?.data.length} claim letters.
          </p>
        )}
      </h2>
      <div>
        {/* mapping data to show all data */}
        {data?.data.map((val, index) => (
          <div
            className="p-6 w-full lg:w-10/12 mx-auto flex  items-center"
            key={index}
          >
            <div>
              <b>{index + 1}.</b>
            </div>
            <div className="px-3">
              <LetterHistoryTitle handleOpenModal={handleOpenModal} val={val} />
              {isOpen && (
                <LetterHistoryPopupSection
                  modalRef={modalRef}
                  handleCloseModal={handleCloseModal}
                />
              )}
            </div>
            <button onClick={handleDelet}>
              <FiTrash2 />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LetterHistory;
