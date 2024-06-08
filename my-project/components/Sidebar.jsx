import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="w-1/5 pt-4 text-white border-r bg-stone-900 border-stone-700">
        <img
          src="../public/assets/images/logo.png"
          className="mx-auto w-44"
          alt="Logo"
        />
        <nav className="w-full my-4">
          <ul className="w-full">
            <li className="w-full text-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-4 border-l-2 w-full border-[#9799ff] rounded hover:bg-gray-800 bg-opacity-60 hover:border-[#9799ff] bg-gray-800"
                    : "block py-4 border-l-2 w-full border-transparent rounded hover:bg-gray-800 bg-opacity-60 hover:border-[#9799ff]"
                }>
                Home
              </NavLink>
            </li>
            <li className="w-full text-center">
              <NavLink
                to="/allGames"
                className={({ isActive }) =>
                  isActive
                    ? "block py-4 border-l-2 w-full border-[#9799ff] rounded hover:bg-gray-800 bg-opacity-60 hover:border-[#9799ff] bg-gray-800"
                    : "block py-4 border-l-2 w-full border-transparent rounded hover:bg-gray-800 bg-opacity-60 hover:border-[#9799ff]"
                }>
                All Games
              </NavLink>
            </li>
            <li className="w-full text-center">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "block py-4 border-l-2 w-full border-[#9799ff] rounded hover:bg-gray-800 bg-opacity-60 hover:border-[#9799ff] bg-gray-800"
                    : "block py-4 border-l-2 w-full border-transparent rounded hover:bg-gray-800 bg-opacity-60 hover:border-[#9799ff]"
                }>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-4/5">{children}</div>
    </div>
  );
};

export default Sidebar;
