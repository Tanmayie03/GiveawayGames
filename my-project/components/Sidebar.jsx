const Sidebar = () => {
  return (
    <div className="w-1/5 h-screen pt-4 text-white border-r-2 bg-stone-900 border-cyan-900">
      <img
        src="https://www.gamerpower.com/assets/images/logo.png"
        className="mx-auto w-44"
      />

      <ul className="my-4 text-center">
        <li className="py-2 border-l-2 border-transparent rounded hover:bg-gray-800 bg-opacity-60 hover:border-cyan-400">
          Home
        </li>
        <li className="py-2 border-l-2 border-transparent rounded hover:bg-gray-800 bg-opacity-60 hover:border-cyan-400">
          All Games
        </li>
        <li className="py-2 border-l-2 border-transparent rounded hover:bg-gray-800 bg-opacity-60 hover:border-cyan-400">
          Contact
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
