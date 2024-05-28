import { useEffect, useState } from "react";

import axios from "axios";

const FirstSection = () => {
  const [gameGiveaway, setgameGiveaway] = useState([]);
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

  return (
    <div className="flex ">
      <div className="flex">
        {gameGiveaway.map((data) => (
          <div key={data.id}>
            {data.title} {data.worth}
            <img src={`${data.thumbnail}`} />
            {data.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstSection;
