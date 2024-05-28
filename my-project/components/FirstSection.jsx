import { useEffect, useState } from "react";

import axios from "axios";

const FirstSection = () => {
  const [gameGiveaw, setgameGiveaw] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.gamerpower.com/api/giveaways"
      )
      .then((response) => {
        console.log(response);
        setgameGiveaw(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h2>Data from GamerPower API:</h2>

      <div>
        {gameGiveaw.map((data) => (
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
