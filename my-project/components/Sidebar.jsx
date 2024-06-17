import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  return (
    <div className="flex w-full h-screen">
      <div className="hidden w-1/5 pt-4 text-white border-r md:block bg-stone-900 border-stone-700">
        <img
          src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1718633152/logo_muowun.png"
          className="w-40 mx-auto"
          alt="Logo"
        />
        <nav className="w-full my-4">
          <ul className="w-full">
            <li className="w-full text-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-4 border-l-2 w-full border-cyan-600 rounded hover:bg-stone-950 bg-opacity-60 hover:border-cyan-600 bg-stone-950"
                    : "block py-4 border-l-2 w-full border-transparent rounded hover:bg-stone-950 bg-opacity-60 hover:border-cyan-600"
                }>
                Home
              </NavLink>
            </li>
            <li className="w-full text-center">
              <NavLink
                to="/allGames"
                className={({ isActive }) =>
                  isActive
                    ? "block py-4 border-l-2 w-full border-cyan-600 rounded hover:bg-stone-950 bg-opacity-60 hover:border-cyan-600 bg-stone-950"
                    : "block py-4 border-l-2 w-full border-transparent rounded hover:bg-stone-950 bg-opacity-60 hover:border-cyan-600"
                }>
                All Games
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="w-screen md:w-4/5">{children}</div>
    </div>
  );
};

export default Sidebar;
