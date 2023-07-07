import React from 'react'

const LetterHistoryTitle = ({handleOpenModal, val}) => {
  return ( 
    <button
        className="bg-gray-700  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleOpenModal}
      >
        Airline: {val?.airlineName}, 
        FlightNumber: {val?.flightNumber}, 
        BoardingNumber: {val?.boardingPassNumber} 
      </button>
  )
}

export default LetterHistoryTitle