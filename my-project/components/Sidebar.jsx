import { Link } from "react-router-dom";

const Sidebar = ({ children }) => {
  return (
    <div className="flex h-screen ">
      <div className="w-64 pt-4 text-white border-r-2 bg-stone-900 border-cyan-900">
        <img
          src="https://www.gamerpower.com/assets/images/logo.png"
          className="mx-auto w-44"
        />
        <div>
          <nav className="my-4 text-center">
            <ul>
              <li className="py-2 border-l-2 border-transparent rounded hover:bg-gray-800 bg-opacity-60 hover:border-cyan-400">
                <Link to="/">Home</Link>
              </li>
              <li className="py-2 border-l-2 border-transparent rounded hover:bg-gray-800 bg-opacity-60 hover:border-cyan-400">
                <Link to="/allGames">All Games</Link>
              </li>
              <li className="py-2 border-l-2 border-transparent rounded hover:bg-gray-800 bg-opacity-60 hover:border-cyan-400">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="w-[84%]">{children}</div>
    </div>
  );
};

export default Sidebar;
