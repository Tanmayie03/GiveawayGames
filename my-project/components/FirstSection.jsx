import { useEffect, useState } from "react";

import axios from "axios";
import Card from "./Card";
import Carousel from "./Carousel";

const FirstSection = () => {
  const [gameGiveaway, setgameGiveaway] = useState([]);
  const [popularGame, setpopularGame] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // axios
    //   .get(
    //     "https://cors-anywhere.herokuapp.com/https://www.gamerpower.com/api/giveaways"
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     setgameGiveaway(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //     setError(error.message);
    //   });
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
    <>
      <div className="flex carousel">
        <Carousel items={popularGame} />
      </div>
      <div className="flex ">
        <div className="flex">
          {gameGiveaway.map((data) => (
            <Card
              key={data.id}
              id={data.id}
              title={data.title}
              worth={data.worth}
              thumbnail={data.thumbnail}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FirstSection;
