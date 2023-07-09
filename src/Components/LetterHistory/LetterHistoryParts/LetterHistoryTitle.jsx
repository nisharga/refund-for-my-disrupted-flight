import React from "react";

const LetterHistoryTitle = ({ handleOpenModal, val }) => {
  return (
    <button
      className="bg-blue-500  hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
      onClick={handleOpenModal}
    >
      View Latter
    </button>
  );
};

export default LetterHistoryTitle;
