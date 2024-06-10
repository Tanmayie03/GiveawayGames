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
          `https://gamerpower.p.rapidapi.com/api/filter/${id}`,
          {
            params: {
              platform: "epic-games-store.steam.android",
              type: "game.loot",
            },
            headers: {
              "x-rapidapi-key":
                "43510225a5msh602504b2e2deac1p126d7djsn02c614603526",
              "x-rapidapi-host": "gamerpower.p.rapidapi.com",
            },
          }
        );
        setCardData(response.data);
      } catch (error) {
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
  console.log(cardData);
  return (
    <div>
      <div className="p-4 text-white bg-stone-900">
        <h1 className="text-4xl">{cardData.title}</h1>
        <img
          src={cardData.thumbnail}
          alt={cardData.title}
          className="w-full h-auto"
        />
        <p>{cardData.description}</p>
        <p>Worth: {cardData.worth}</p>
        <p>Type: {cardData.type}</p>
        <p>Users: {cardData.users}</p>
        <p>Open Giveaway: {cardData.open_giveaway}</p>
      </div>
    </div>
  );
};

export default CardId;
