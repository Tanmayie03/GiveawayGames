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
  const instructionsArray = cardData.instructions.split("\r\n");
  return (
    <div className="h-[90.5%]  p-2 overflow-y-scroll  bg-stone-900">
      <div className="flex flex-col items-center p-6 text-white md:items-start ">
        <h1 className="text-3xl font-semibold md:text-4xl">{cardData.title}</h1>
        <div className="flex ">
          <img
            src={cardData.image}
            alt={cardData.title}
            className="w-full my-4 md:my-0"
          />
          <p>{cardData.description}</p>
        </div>
        <ul className="list-disc list-inside">
          {instructionsArray.map((instruction, index) => (
            <li
              className="list-none"
              key={index}
              dangerouslySetInnerHTML={{ __html: instruction }}
            />
          ))}
        </ul>
        <div className="flex col">
          <p>Worth: {cardData.worth}</p>
          <p>Type: {cardData.type}</p>
          <p>Users: {cardData.users}</p>
          <p> {cardData.published_date.slice(0, 10)}</p>
          <p> {cardData.end_date.slice(0, 10)}</p>
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
      </div>
    </div>
  );
};

export default CardId;
