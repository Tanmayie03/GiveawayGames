import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="relative bg-[#1e1e2f]">
      <div className="flex items-center justify-between h-16 p-2 px-4 text-white bg-opacity bg-[#191919]">
        <img
          src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1718633152/logo_muowun.png"
          className="w-32 md:hidden"
          alt="Logo"
        />
        <p className="hidden mx-2 text-xl md:block font-montserrat ">
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
                <ul className="w-full px-8 py-4 text-black rounded bg-stone-100">
                  <li className="px-6 py-1 mb-4 text-xl font-semibold text-center text-white border-b rounded border-cyan-500 bg-cyan-500">
                    Menu
                  </li>
                  <li className="w-full text-center border-t border-cyan-500">
                    <NavLink
                      to="/"
                      className="block w-full py-4 rounded hover:bg-stone-950 bg-opacity-60 ">
                      Home
                    </NavLink>
                  </li>
                  <li className="w-full text-center">
                    <NavLink
                      to="/allGames"
                      className="block w-full py-4 rounded hover:bg-stone-950 bg-opacity-60 ">
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
