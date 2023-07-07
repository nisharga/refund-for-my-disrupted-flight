import React, { useState, useRef, useEffect } from "react";
import CloseSVG from "./EligibleHistoryParts/CloseSVG";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { FiTrash2 } from "react-icons/fi";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const modalRef = useRef(null);
  const [deleted, setDeleted] = useState(false);
  const navigate = useNavigate();
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
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

  const handleDelet = (id) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to Delete Your Claim Letter History?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            fetch(
              `https://defiant-toad-gear.cyclic.app/api/v1/eligibility/delete/${id}`,
              {
                method: "DELETE",
              }
            )
              .then((response) => {
                if (response.ok) {
                  toast.success("Delete Successfully!!");
                  setDeleted(true);
                  navigate("/");
                } else {
                  throw new Error("Error deleting user");
                }
              })
              .catch((error) => {
                console.error("Error deleting user:", error);
              });
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
    <div className="block mx-auto">
      <h2 className="text-center mt-8 text-xl text-bold">
        <p>You have generated a total of ppp</p>
      </h2>
      <div>
        <div className="p-6 w-full lg:w-10/12 mx-auto flex items-center">
          <div>
            <b>1.</b>
          </div>
          <div className="px-3">
            <button
              className="bg-gray-700  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleOpenModal}
            >
              NININ
            </button>
            {isOpen(<h2>HI</h2>)}
          </div>
          <button onClick={() => handleDelet(1)}>
            <FiTrash2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
