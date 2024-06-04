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
    <div className=" h-[90.2%] overflow-hidden">
      <div className="grid  h-[90.2%] grid-cols-3 gap-6 m-6 overflow-y-scroll">
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
