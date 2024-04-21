import React, { useEffect, useState } from "react";
import "../App.css";

const Planet = () => {
  const [searchText, setSearchText] = useState("a");
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPlanets = async () => {
    setLoading(true);

    try {
      const response = await fetch(`https://swapi.dev/api/planets/`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("response", data);
      setPlanets(data.results);
    } catch (error) {
      console.error("Error fetching planets:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlanets();
    // Cleanup the controller when the component unmounts or when searchText changes
  }, []);

  return (
    <div>
      <div>Search for planets </div>
      <div>
        <input
          id="search"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <section>
        <header>
          <div className="col">Name</div>
          <div className="col">Population</div>
        </header>
        {planets &&
          planets.length > 0 &&
          planets.map((planet, id) => (
            <div key={id}>
              <div className="col">{planet.name}</div>
              <div
                title={`Population: ${planet.population || "Unknown"}`}
                className="col"
              >
                {"\u{1F468}".repeat(planet.population || 0)}
              </div>
            </div>
          ))}
      </section>
      <br />
      {loading && <div className="loading">Loading...</div>}
      {!loading && planets.length === 0 && (
        <div className="error">No planets matching the search term</div>
      )}
    </div>
  );
};

export default Planet;
