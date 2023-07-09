import React from "react";

const LetterHistoryTitle = ({ handleOpenModal, val }) => {
  return (
    <button
      className="bg-gray-700  hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
      onClick={handleOpenModal}
    >
      View Latter
    </button>
  );
};

export default LetterHistoryTitle;
