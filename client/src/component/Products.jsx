import { useLocation } from "react-router-dom"
import ProductCard from "./ProductCard"

function Products ({ products = []}) {
    const location = useLocation()

    return (
        <section className="products-section">
            <div className="products-header">
              <h2>{location.pathname === "/search" ? "Search Results" : "Saved Products"}</h2>
              <span className="results-count">{ products?.length } products</span>
            </div>

            <div className="products-list">
                { products.map(product => <ProductCard product={product}/>)}
            </div>
        </section>
    )
}

export default Products