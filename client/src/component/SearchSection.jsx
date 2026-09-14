function SearchSection() {
  return (
    <section className="search-section">
      <form className="search-box">
        <input
          type="search"
          name="search"
          placeholder="Search products..."
          aria-label="Search products"
        />

        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchSection