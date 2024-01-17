import React, { useState } from "react";
import Modal from "./Modal";
import Mrs from "./Mrs";
import Mr from "./Mr";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleCallApi = async () => {
    const response = await fetch("https://randomuser.me/api/");
    let data = await response.json();
    setUserData(data.results[0]);
  };
  return (
    <>
      {modal && <Modal modal={modal} setModal={setModal} />}
      <header className="bg-white shadow-md sticky">
        <nav
          className="mx-auto flex min-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <button onClick={() => setModal(!modal)} className="-m-1.5 p-1.5">
              <span className="sr-only">hamburger</span>
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18L20 18"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M4 12L20 12"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M4 6L20 6"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {userData ? (
              <div className="flex flex-row gap-3">
                {userData?.name?.title === "Mrs" && <Mrs />}
                {userData?.name?.title === "Mr" && <Mr />}
                <div className="text-sm font-semibold leading-6 text-gray-900">
                  {userData?.name?.title} {userData?.name?.first}{" "}
                  {userData?.name?.last}
                </div>
              </div>
            ) : (
              <button
                onClick={() => handleCallApi()}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </button>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
