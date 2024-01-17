import React from "react";

const Modal = ({ setModal, modal }) => {
  return (
    <div className="fixed left-0 top-0 z-10 h-full min-h-screen w-1/6 overflow-hidden bg-white shadow-lg rounded-r-lg">
      <div className="flex flex-col justify-between relative">
        <div className="flex flex-row p-4 justify-between">
          <h3 className="font-bold ">Menu</h3>
          <button onClick={() => setModal(!modal)}>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-10">
          <div className="p-4">Content for Menu</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
