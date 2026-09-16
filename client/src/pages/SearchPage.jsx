import SearchSection from "../component/SearchSection";
import Products from "../component/Products";
import Sidebar from "../component/Sidebar";
import { useState } from "react";

function SearchPage() {
  const [products, setProducts] = useState([])

  return (
     <div className="app">
      <Sidebar />
      <main className="main-content">
        <div className="page">
          <header className="page-header">
            <h1>Search</h1>
          </header>

          <SearchSection setProducts={setProducts}/>
          <Products products={ products }/>
        </div>
      </main>
    </div>
  );
}

export default SearchPage;