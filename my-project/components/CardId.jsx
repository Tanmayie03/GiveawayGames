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

  return (
    <div className="p-4 text-white bg-stone-900">
      <h1 className="text-4xl">{cardData.title}</h1>
      <img src={cardData.thumbnail} alt={cardData.title} className="" />
      <p>{cardData.description}</p>
      <p>Worth: {cardData.worth}</p>
      <p>Type: {cardData.type}</p>
      <p>Users: {cardData.users}</p>
      <p>
        Open Giveaway:{" "}
        <a
          href={cardData.open_giveaway}
          target="_blank"
          rel="noopener noreferrer">
          Claim now
        </a>
      </p>
    </div>
  );
};

export default CardId;
