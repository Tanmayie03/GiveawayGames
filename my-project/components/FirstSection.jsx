import { useEffect, useState } from "react";
import "../src/index.css";
import axios from "axios";
import Card from "./Card";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import AllGames from "./AllGames";
import Buttons from "./Buttons";

const FirstSection = () => {
  const [gameGiveaway, setgameGiveaway] = useState([]);
  const [popularGame, setpopularGame] = useState([]);
  const [error, setError] = useState(null);
  const [platformItems, setPlatformItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activePlatform, setActivePlatform] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/ff15cb4d-af02-4091-9496-ddd576a21f29")
      .then((response) => {
        console.log(response);
        setgameGiveaway(response.data);
        setFilteredItems(response.data);
        setPlatformItems(getUniquePlatforms(response.data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });

    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://gamerpower.p.rapidapi.com/api/filter",
        params: {
          platform: "epic-games-store.steam.android",
          type: "game.loot",
        },
        headers: {
          "x-rapidapi-key":
            "43510225a5msh602504b2e2deac1p126d7djsn02c614603526",
          "x-rapidapi-host": "gamerpower.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/712adbea-e5df-457b-a2eb-54466e364613")
      .then((response) => {
        console.log(response);
        setpopularGame(response.data.slice(0, 5));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  const getUniquePlatforms = (data) => {
    const platforms = new Set();
    data.forEach((item) => {
      if (item.platforms) {
        item.platforms
          .split(", ")
          .forEach((platform) => platforms.add(platform));
      }
    });
    console.log(platforms);
    return Array.from(platforms);
  };

  const filterItems = (cat) => {
    setActivePlatform(cat);
    const newItems = gameGiveaway.filter((item) =>
      item.platforms.includes(cat)
    );
    setFilteredItems(newItems);
  };

  return (
    <div className="h-[90.5%]  p-2 overflow-y-scroll  bg-stone-900">
      <div className="flex">
        <Carousel items={popularGame} />
      </div>
      <div className="mt-4 ">
        <p className="mx-4 text-xl md:text-4xl text-stone-300">
          109 Live Giveaways, Freebies and Offers
        </p>
        <div className="flex items-center mx-4 my-2 text-stone-500">
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
          <p className="ml-2 text-sm md:text-base text-stone-500 ">
            We found a total of $427.92 worth of games and loot, with a current
            count of 109 giveaways.
          </p>
        </div>
        <Buttons
          platformItems={[...platformItems]}
          filterItems={filterItems}
          activePlatform={activePlatform}
        />
        <Link to="./allGames">
          <p className="flex justify-end mx-6 text-white"> See all</p>
        </Link>
        <div className="flex justify-center mx-4 overflow-x-scroll ">
          <div className="flex flex-wrap gap-4 md:flex-nowrap h-fit">
            {filteredItems.map((data) => (
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
