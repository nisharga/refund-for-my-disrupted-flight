import React from "react";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LetterHistoryTitle from "./LetterHistoryTitle";

const LetterTableItem = ({ item, setIsOpen, setSelectedVal, ind }) => {
  const { airlineName, flightNumber, boardingPassNumber } = item || {};
  const navigate = useNavigate();

  const handleOpenModal = (val) => {
    setSelectedVal(val);
    setIsOpen(true);
  };

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
    <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {ind + 1}
      </td>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {airlineName}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {flightNumber}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {boardingPassNumber}
      </td>
      <td className="whitespace-nowrap px-4 flex items-center gap-2 py-2">
        <LetterHistoryTitle
          handleOpenModal={() => handleOpenModal(item)}
          val={item}
        />
        <button
          onClick={() => handleDelet(item._id)}
          className="bg-blue-500  hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default LetterTableItem;
