const Sidebar = () => {
  return (
    <div className="w-1/5 h-screen p-4 text-white border-r-2 bg-stone-900 border-slate-700">
      <img src="https://www.gamerpower.com/assets/images/logo.png" />

      <ul className="my-4 text-center">
        <li className="py-2 rounded hover:bg-gray-800 bg-opacity-60">Home</li>
        <li className="py-2 rounded hover:bg-gray-800 bg-opacity-60">
          All Games
        </li>
        <li className="py-2 rounded hover:bg-gray-800 bg-opacity-60">
          Contact
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
