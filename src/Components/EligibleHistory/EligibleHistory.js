import React, { useState, useRef, useEffect } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const modalRef = useRef(null);

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

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleOpenModal}
      >
        Open Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-white w-1/2 rounded-lg" ref={modalRef}>
            <div className="flex justify-end">
              <button className="p-2" onClick={handleCloseModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 hover:text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <div className="flex">
                <button
                  className={`py-2 px-4 ${
                    activeTab === "tab1" ? "bg-gray-200" : "bg-gray-100"
                  }`}
                  onClick={() => handleTabChange("tab1")}
                >
                  Tab 1
                </button>
                <button
                  className={`py-2 px-4 ${
                    activeTab === "tab2" ? "bg-gray-200" : "bg-gray-100"
                  }`}
                  onClick={() => handleTabChange("tab2")}
                >
                  Tab 2
                </button>
              </div>
              <div className="p-4" onClick={(e) => e.stopPropagation()}>
                {activeTab === "tab1" ? (
                  <div>
                    <h2>Tab 1 Content</h2>
                    <p>This is the content of tab 1.</p>
                  </div>
                ) : (
                  <div>
                    <h2>Tab 2 Content</h2>
                    <p>This is the content of tab 2.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
