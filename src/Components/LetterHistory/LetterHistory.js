import React, { useState, useRef, useEffect, useContext } from "react";
import LetterHistoryTitle from "./LetterHistoryParts/LetterHistoryTitle";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { FiTrash2 } from "react-icons/fi";
import LetterHistoryPopupSection from "./LetterHistoryParts/LetterHistoryPopupSection";
import { AuthContext } from "../../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import airLoading from "../../Assets/loader.gif";

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

  const handleDelet = (id) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to Delete Your Claim Letter History?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            fetch(
              `https://defiant-toad-gear.cyclic.app/api/v1/letter/delete/${id}`,
              {
                method: "DELETE",
              }
            )
              .then((response) => {
                if (response.ok) {
                  toast.success("Delete Successfully!!");
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
      {
        loading === true &&
        <div className="h-full flex justify-center items-center">
          <img className="rounded-full" src={airLoading} alt="" />
        </div>
      }
      <h2 className="text-center mt-8 text-xl text-bold">
        {data && (
          <p>
            You have generated a total of {data?.data.length} claim letters.
          </p>
        )}
      </h2>
      <div>
        {data?.data.map((val, index) => (
          <div
            className="p-6 w-full lg:w-10/12 mx-auto flex items-center"
            key={index}
          >
            <div>
              <b>{index + 1}.</b>
            </div>
            <div className="px-3 ">
              <LetterHistoryTitle
                handleOpenModal={() => handleOpenModal(val)}
                val={val}
              />
              {isOpen && selectedVal && (
                <LetterHistoryPopupSection
                  modalRef={modalRef}
                  handleCloseModal={handleCloseModal}
                  selectedVal={selectedVal}
                />
              )}
            </div>
            <button onClick={() => handleDelet(val._id)}>
              <FiTrash2 />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LetterHistory;
