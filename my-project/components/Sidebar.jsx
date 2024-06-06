import { Link } from "react-router-dom";

const Sidebar = ({ children }) => {
  return (
    <div className="flex h-screen ">
      <div className="w-1/4 pt-4 text-white border-r bg-stone-900 border-stone-700">
        <img
          src="https://www.gamerpower.com/assets/images/logo.png"
          className="mx-auto w-44"
        />
        <div>
          <nav className="my-4 text-center">
            <ul>
              <Link to="/">
                Home
                <div className="py-4 border-l-2 border-transparent rounded hover:bg-gray-800 bg-opacity-60 hover:border-cyan-600"></div>
              </Link>
              <Link to="/allGames">
                {" "}
                <div className="py-4 border-l-2 border-transparent rounded hover:bg-gray-800 bg-opacity-60 hover:border-cyan-600">
                  All Games
                </div>
              </Link>
              <Link to="/contact">
                Contact{" "}
                <div className="py-4 border-l-2 border-transparent rounded hover:bg-gray-800 bg-opacity-60 hover:border-cyan-600"></div>
              </Link>
            </ul>
          </nav>
        </div>
      </div>

      <div className="w-[84%]">{children}</div>
    </div>
  );
};

export default Sidebar;
