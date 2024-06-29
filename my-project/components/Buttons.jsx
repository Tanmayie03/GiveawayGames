const Buttons = ({ platformItems, filterItems, activePlatform }) => {
  return (
    <div className="flex flex-row  md:mx-4 justify-between  overflow-x-auto rounded w-[340px] sm:w-[360px] md:w-fit bg-[#0d1013]">
      {platformItems.map((platform, index) => (
        <div className="flex-shrink-0 md:flex" key={index}>
          <button
            className={`px-2 text-xs md:text-sm py-2 mx-1 ${
              activePlatform === platform
                ? "text-white bg-black border-b border-cyan-400"
                : "text-white bg-transparent"
            }`}
            onClick={() => filterItems(platform)}>
            {platform}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Buttons;
