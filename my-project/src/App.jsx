import { useEffect, useState } from "react";
import FirstSection from "../components/FirstSection";
import Navbar from "../components/Navbar";
import axios from "axios";

function App() {
  const [airbnb, setAirbnb] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.gamerpower.com/api/giveaways"
      )
      .then((response) => {
        console.log(response);
        setAirbnb(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  return (
    <>
      <Navbar />
      <FirstSection />

      <div>
        <h2>Data from GamerPower API:</h2>

        <div>
          {airbnb.map((data) => (
            <div key={data.id}>{data.title}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
