import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="relative bg-black">
      <div className="flex items-center justify-between h-16 p-2 px-4 text-white bg-opacity-80 bg-stone-800">
        <p className="mx-2 text-xl ">
          Welcome <span className="italic">User</span>!
        </p>
        <div className="md:hidden" onClick={() => setShowModal(true)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="6" width="16" height="2" fill="white" />
            <rect x="4" y="11" width="16" height="2" fill="white" />
            <rect x="4" y="16" width="16" height="2" fill="white" />
          </svg>
        </div>
        {showModal ? (
          <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-screen bg-black/80">
            <div className="text-">
              <button
                onClick={() => setShowModal(false)}
                className="absolute px-4 py-2 text-white rounded right-2 top-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <line
                    x1="18"
                    y1="6"
                    x2="6"
                    y2="18"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <line
                    x1="6"
                    y1="6"
                    x2="18"
                    y2="18"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <nav className="w-full my-4" onClick={() => setShowModal(false)}>
                <ul className="w-full">
                  <li className="w-full text-center">
                    <NavLink
                      to="/"
                      className="block w-full py-4 rounded hover:bg-stone-950 bg-opacity-60 hover: bg-stone-950">
                      Home
                    </NavLink>
                  </li>
                  <li className="w-full text-center">
                    <NavLink
                      to="/allGames"
                      className="block w-full py-4 rounded hover:bg-stone-950 bg-opacity-60 hover: bg-stone-950">
                      All Games
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
