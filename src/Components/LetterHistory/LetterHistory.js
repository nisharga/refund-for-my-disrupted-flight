import React, { useState, useRef, useEffect } from "react";
import CloseIconSVG from "./LetterHistoryParts/CloseIconSVG";
import LetterHistoryContent from "./LetterHistoryParts/LetterHistoryContent";
import LetterHistoryTitle from "./LetterHistoryParts/LetterHistoryTitle";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { FiTrash2 } from "react-icons/fi";

const LetterHistory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

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
  return (
    <div className={`block mx-auto  `}>
      <div className={`p-6 w-full lg:w-10/12 mx-auto flex  items-center`}>
        <div>
          <b>1.</b>
        </div>
        <div className="px-3">
          <LetterHistoryTitle handleOpenModal={handleOpenModal} />
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
              <div className="bg-white w-1/2 rounded-lg" ref={modalRef}>
                <div className="flex justify-end">
                  <button className="p-2" onClick={handleCloseModal}>
                    <CloseIconSVG />
                  </button>
                </div>
                <div className="p-4">
                  <LetterHistoryContent name="NK" />
                </div>
              </div>
            </div>
          )}
        </div>
        <button onClick={handleDelet}>
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

export default LetterHistory;
