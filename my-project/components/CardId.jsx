import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CardId = () => {
  const { id } = useParams();
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://mocki.io/v1/ff15cb4d-af02-4091-9496-ddd576a21f29`
        );

        const item = response.data.find((item) => item.id === parseInt(id));

        if (item) {
          setCardData(item);
        } else {
          setError("No data found for the given ID");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!cardData) {
    return <div>No data available</div>;
  }
  const instructionsArray = cardData.instructions.split("\r\n");
  const platformWord = cardData.platforms.split(",").slice(0, 2);
  console.log(platformWord);
  return (
    <div className="h-[90.5%]  font-lato  md:p-6 overflow-y-scroll  bg-[#121212]">
      <div className="flex flex-col items-center p-4 text-white md:p-0 md:items-start ">
        <div className="relative flex flex-col w-full rounded  md:flex-row bg-[#191919]">
          <div className=" md:w-1/2">
            <img
              src={cardData.image}
              alt={cardData.title}
              className="object-cover h-full mb-4 md:mb-0 hover:opacity-90 "
            />
          </div>
          <div className="absolute flex items-center px-2 text-sm text-green-500 border-2 border-green-500 rounded-full left-2 top-2 w-fit ">
            <div className="w-2 h-2 mr-1 bg-green-500 rounded-full animate-pulse"></div>
            {cardData.status}
          </div>
          <div className="flex flex-col p-4 md:p-0 md:py-4 md:px-6 md:w-1/2">
            <h1 className="text-2xl font-semibold md:text-2xl">
              {cardData.title}
            </h1>
            <p className="py-2 text-sm">
              {" "}
              <span className="mr-1 text-[#717171]"> Published on:</span>{" "}
              {cardData.published_date.slice(0, 10)}
            </p>

            <div className="flex my-1 text-sm text-[#717171]">
              Type:
              <p className="px-3 py-[2px] mx-2 text-white text-sm rounded-full border  border-[#717171] w-fit">
                {" "}
                {cardData.type}
              </p>
            </div>
            <p className="py-1 text-sm text-[#717171]">
              For Platform:{" "}
              {platformWord.map((platform, index) => (
                <span
                  key={index}
                  className="px-3 py-[2px] text-sm f text-[#5b5b5b] rounded-full bg-cyan-400 mx-1">
                  {platform}
                </span>
              ))}
            </p>
            <div className="flex my-2 ">
              <div className="flex items-center px-4 py-1 rounded w-fit bg-gradient-to-tr from-green-400 via-cyan-400 to-blue-400">
                <span className="line-through text- ">{cardData.worth}</span>
                <p className="pl-2 rounded-sm w-fit">Free</p>
              </div>
              <div className="flex items-center px-4 py-1 mx-4 border-2 rounded w-fit hover:bg-gradient-to-tr from-green-400 via-cyan-400 to-blue-400 border-cyan-500">
                <a href={cardData.open_giveaway} target="_blank">
                  <p className="rounded-sm w-fit">Claim now</p>
                </a>
              </div>
            </div>
            <p className="flex pt-2 text-[#717171]">
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="25px"
                  viewBox="0 0 32 32"
                  className="w-5 mr-1 ">
                  <path
                    fill="currentColor"
                    d="M12 16.14h-.87a8.67 8.67 0 0 0-6.43 2.52l-.24.28v8.28h4.08v-4.7l.55-.62l.25-.29a11 11 0 0 1 4.71-2.86A6.59 6.59 0 0 1 12 16.14"
                    className="clr-i-solid clr-i-solid-path-1"
                  />
                  <path
                    fill="currentColor"
                    d="M31.34 18.63a8.67 8.67 0 0 0-6.43-2.52a10.47 10.47 0 0 0-1.09.06a6.59 6.59 0 0 1-2 2.45a10.91 10.91 0 0 1 5 3l.25.28l.54.62v4.71h3.94v-8.32Z"
                    className="clr-i-solid clr-i-solid-path-2"
                  />
                  <path
                    fill="currentColor"
                    d="M11.1 14.19h.31a6.45 6.45 0 0 1 3.11-6.29a4.09 4.09 0 1 0-3.42 6.33Z"
                    className="clr-i-solid clr-i-solid-path-3"
                  />
                  <path
                    fill="currentColor"
                    d="M24.43 13.44a6.54 6.54 0 0 1 0 .69a4.09 4.09 0 0 0 .58.05h.19A4.09 4.09 0 1 0 21.47 8a6.53 6.53 0 0 1 2.96 5.44"
                    className="clr-i-solid clr-i-solid-path-4"
                  />
                  <circle
                    cx="17.87"
                    cy="13.45"
                    r="4.47"
                    fill="currentColor"
                    className="clr-i-solid clr-i-solid-path-5"
                  />
                  <path
                    fill="currentColor"
                    d="M18.11 20.3A9.69 9.69 0 0 0 11 23l-.25.28v6.33a1.57 1.57 0 0 0 1.6 1.54h11.49a1.57 1.57 0 0 0 1.6-1.54V23.3l-.24-.3a9.58 9.58 0 0 0-7.09-2.7"
                    className="clr-i-solid clr-i-solid-path-6"
                  />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>
              </span>{" "}
              {cardData.users}+ users claimed
            </p>
          </div>
        </div>
        <div className="h-[2px] bg-  my-1"></div>
        <div className=" bg-[#191919] text-justify my- px-6 w-full">
          <p className="py-4">
            {" "}
            <span className="text-lg  text-[#717171]">
              About this game:
            </span>{" "}
            <br></br> {cardData.description}
          </p>
          <div className="flex flex-col">
            <span className="text-lg  text-[#717171]">Instructions:</span>
            <ul className="list-disc list-inside">
              {instructionsArray.map((instruction, index) => (
                <li
                  className="list-none"
                  key={index}
                  dangerouslySetInnerHTML={{ __html: instruction }}
                />
              ))}
            </ul>
          </div>
          <div className="flex col"></div>
          <div className="flex items-center px-4 py-1 my-4 border-2 rounded w-fit hover:bg-gradient-to-tr from-green-500 via-cyan-500 to-blue-500 border-cyan-500">
            <a href={cardData.open_giveaway} target="_blank">
              <p className="rounded-sm w-fit">Claim now</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardId;
