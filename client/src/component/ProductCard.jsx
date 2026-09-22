import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import BtnAdd from "./BtnAdd";
import BtnDelete from "./BtnDelete";

function ProductCard({ product }) {
  const [addState, setAddState] = useState("+ Add to My List");
  const location = useLocation();

  let isUpdating = false

  const handleAddFunction = async (e) => {
    try {
      e.preventDefault()
      if (addState === "added to your list") return;
      
      if (isUpdating) return
      isUpdating = true

      const requestBody = {
        DG_id: product.DG_id,
        name: product.name,
        DGprice: product.price,
        DGprice_D: product.price_D,
        image: product.image,
      };
      const response = await axios.post(
        "http://localhost:3000/api/v1/add",
        requestBody,
      );
      setAddState("added to your list");
    } catch (err) {
      if (err.response?.status === 409) setAddState("added to your list");
      else alert(err.message)
    } finally {
      isUpdating = false
    }
  };

  const handleDeleteFunction = async (e) => {
    try {
      e.preventDefault();

      if (isUpdating) return
      isUpdating = true

      const response = await axios.delete(
        `http://localhost:3000/api/v1/delete/${product.DG_id}`,
      );
      window.location.reload();
    } catch (err) {
      alert(err.message);
    } finally {
      isUpdating = false
    }
  };

  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>

        <div className="product-prices">
          <div className="price-row">
            <span className="price-label">Price:</span>
            <span className="old-price">
              {product.inStock
                ? `${Math.trunc(product.price / 10).toLocaleString("en-US")} تومان`
                : "ناموجود"}
            </span>
          </div>

          <div className="price-row">
            <span className="price-label">Discount Price:</span>
            <span className="discount-price">
              {product.inStock
                ? `${Math.trunc(product.price_D / 10).toLocaleString("en-US")} تومان`
                : "ناموجود"}
            </span>
          </div>
        </div>
      </div>

      {location.pathname === "/search" ? (
        <BtnAdd state={addState} handler={handleAddFunction} />
      ) : (
        <BtnDelete handler={handleDeleteFunction} />
      )}
    </article>
  );
}

export default ProductCard;
