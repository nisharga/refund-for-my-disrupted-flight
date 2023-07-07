import React from 'react'

const LetterHistoryTitle = ({handleOpenModal}) => {
  return (
    <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleOpenModal}
      >
        Open Modal
      </button>
  )
}

export default LetterHistoryTitle