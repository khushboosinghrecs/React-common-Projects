
import { useState } from "react";
 function SearchFilter() {
  {
    const [searchTerm, setSearchTerm] = useState("");

    // Your data goes here; replace this with your actual data
    const data = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig"];
    const [searchResults, setSearchResults] = useState(data);
    const handleInputChange = (e) => {
      const value = e.target.value;
      setSearchTerm(value);
      filterResults(value);
    };

    const filterResults = (query) => {
      const filteredData = data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredData);
    };

    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <ul>
          {searchResults.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchFilter;