import React, { useEffect, useState } from "react";

const NBATeams = () => {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api-nba-v1.p.rapidapi.com/teams?search=utah";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "52a55b468amsh30c045b4169b68fp12e3e8jsn2c2316bdcf7f",
          "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const result = await response.json();

        // Log the entire API response
        console.log("API Response:", result);

        // Check if the 'response' property exists and is an array
        if (result && result.response && Array.isArray(result.response)) {
          setTeams(result.response);
          console.log(result.response[0]) //same as teams[0]
        } else {
          throw new Error("Failed to retrieve teams data");
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>NBA Teams</h1>
      {/* <h2>{thisTeam}</h2> */}
      <ul>
        {teams.map((team, index) => (
          <li key={index}>
            {team.name} - {team.code}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NBATeams;
