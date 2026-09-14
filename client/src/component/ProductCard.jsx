function ProductCard() {
  return (
    <article className="product-card">
      <img
        src="https://via.placeholder.com/80"
        alt="Apple AirPods Pro"
        className="product-image"
      />

      <div className="product-info">
        <h3 className="product-name">Apple AirPods Pro</h3>

        <div className="product-prices">
          <div className="price-row">
            <span className="price-label">Price:</span>
            <span className="old-price">$299.00</span>
          </div>

          <div className="price-row">
            <span className="price-label">Discount Price:</span>
            <span className="discount-price">$249.00</span>
          </div>
        </div>
      </div>

      <button className="btn btn-add">+ Add to My List</button>
    </article>
  );
}

export default ProductCard
