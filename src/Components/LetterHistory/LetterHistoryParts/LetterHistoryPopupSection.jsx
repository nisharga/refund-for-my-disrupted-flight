import React from 'react'
import CloseIconSVG from './CloseIconSVG'
import LetterHistoryContent from './LetterHistoryContent'

const LetterHistoryPopupSection = ({modalRef, handleCloseModal}) => {
  return (
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
  )
}

export default LetterHistoryPopupSection