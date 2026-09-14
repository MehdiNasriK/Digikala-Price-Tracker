import SearchSection from "../component/SearchSection";
import Products from "../component/Products";
import Sidebar from "../component/Sidebar";

function SearchPage() {
  return (
    <div className="app">
      <main className="main-content">
        <div className="page">
          <header className="page-header">
            <h1>Search</h1>
          </header>

          <SearchSection />
          <Products />
        </div>
      </main>
    </div>
  );
}

export default SearchPage;
