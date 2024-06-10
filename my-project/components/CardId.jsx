// CardId.js
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CardId = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://mocki.io/v1/b4d2e015-85f9-4513-b134-de6e4498026b/${id}`)
      .then((response) => {
        setCard(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="p-4 text-white bg-stone-900">
        <h1 className="text-4xl">{card.title}</h1>
        <img src={card.thumbnail} alt={card.title} className="w-full h-auto" />
        <p>{card.description}</p>
        <p>Worth: {card.worth}</p>
        <p>Type: {card.type}</p>
        <p>Users: {card.users}</p>
        <p>Open Giveaway: {card.open_giveaway}</p>
      </div>
    </div>
  );
};

export default CardId;
