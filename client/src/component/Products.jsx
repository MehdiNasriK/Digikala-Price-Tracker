import ProductCard from "./ProductCard"

function Products () {
    return (
        <section className="products-section">
            <div className="products-header">
              <h2>Search Results</h2>
              <span className="results-count">1000 products</span>
            </div>

            <div className="products-list">
                <ProductCard />
            </div>
        </section>
    )
}

export default Products