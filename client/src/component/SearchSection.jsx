import axios from "axios";
import { useState } from "react";

function SearchSection({ setProducts }) {
  const [searchInput, setSearchInput] = useState("");

  const handler = async (e) => {
    try {
      e.preventDefault();
      if (searchInput === "") return;

      const response = await axios.post("http://localhost:3000/api/v1/search", {
        searchInput,
      });

      setSearchInput("");
      setProducts([]);
      setProducts(response.data.products);
    } catch (err) {
      alert(err.message)
    }
  };

  return (
    <section className="search-section">
      <form className="search-box" onSubmit={handler}>
        <input
          className="searchInput"
          type="search"
          name="search"
          placeholder="Search products..."
          aria-label="Search products"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchSection;
