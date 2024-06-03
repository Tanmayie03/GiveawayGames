import { useEffect, useState } from "react";

import axios from "axios";
import Card from "./Card";
import Carousel from "./Carousel";

const FirstSection = () => {
  const [gameGiveaway, setgameGiveaway] = useState([]);
  const [popularGame, setpopularGame] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.gamerpower.com/api/giveaways"
      )
      .then((response) => {
        console.log(response);
        setgameGiveaway(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.gamerpower.com/api/giveaways?platform=steam&type=loot&sort-by=popularity"
      )
      .then((response) => {
        console.log(response);
        setpopularGame(response.data.slice(0, 5));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  return (
    <div className="h-[90.5%] overflow-y-scroll  bg-stone-700">
      <div className="flex">
        <Carousel items={popularGame} />
      </div>
      <div className="">
        <p className="mx-4 my-2 text-4xl text-white">
          109 Live Giveaways, Freebies and Offers
        </p>
        <div className="flex items-center mx-4 my-2 text-gray-300">
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
          <p className="ml-2 text-gray-300 ">
            We found a total of $427.92 worth of games and loot, with a current
            count of 109 giveaways.
          </p>
        </div>
        <div className="flex mx-4 mt-8 overflow-x-scroll">
          <div className="flex gap-4 ">
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
      </div>
    </div>
  );
};

export default FirstSection;
