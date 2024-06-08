const Buttons = ({ platformItems }) => {
  return (
    <div className="flex justify-around py-2 mx-4 text-sm text-white bg-stone-800 bg-opacity-60">
      {platformItems.map((platform, index) => (
        <button key={index} className="px-4 py-2">
          {platform}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
