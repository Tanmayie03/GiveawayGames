const Buttons = ({ platformItems, filterItems, activePlatform }) => {
  return (
    <div className="flex justify-between m-4 overflow-x-scroll  rounded  sm:w-[400px] md:w-fit md:block bg-[#191919]">
      {platformItems.map((platform, index) => (
        <button
          key={index}
          className={`px-2 text-xs md:text-sm w-fit py-2  ${
            activePlatform === platform
              ? "text-white  bg-[#282828]  border-b border-cyan-400"
              : "text-white bg-transparent"
          }`}
          onClick={() => filterItems(platform)}>
          {platform}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
