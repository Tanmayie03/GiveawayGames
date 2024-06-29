import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const AllGames = () => {
  const [gameGiveaway, setgameGiveaway] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/b4d2e015-85f9-4513-b134-de6e4498026b")
      .then((response) => {
        console.log(response);
        setgameGiveaway(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);
  return (
    <div className=" h-[90.2%] bg-black overflow-hidden">
      <div className="mt-4 ">
        <p className="mx-6 text-2xl md:text-4xl md:mx-4 text-stone-300">
          109 Live Giveaways, Freebies and Offers
        </p>
        <div className="flex items-center mx-6 my-2 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26px"
            height="26px"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"
            />
          </svg>
          <p className="ml-2 text-sm md:text-base ">
            We found a total of $427.92 worth of games and loot, with a current
            count of 109 giveaways.
          </p>
        </div>
      </div>
      <div className="grid  mx-6  my-4 h-[90.2%] grid-cols-1 md:grid-cols-3  gap-6 overflow-y-scroll">
        {gameGiveaway.map((data) => (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            worth={data.worth}
            thumbnail={data.thumbnail}
            description={data.description}
            users={data.users}
            type={data.type}
            open_giveaway={data.open_giveaway}
          />
        ))}
      </div>
    </div>
  );
};

export default AllGames;
