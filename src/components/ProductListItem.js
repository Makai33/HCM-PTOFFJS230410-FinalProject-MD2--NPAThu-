import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@stores/slices/cartSlice";
import { Container } from "react-bootstrap";

export default function ProductListItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="col-md-4 mb-2 d-flex flex-column justify-content-between align-items-stretch flex-column mb-5">
      <div
        className="card d-flex flex-column "
        style={{ width: "18rem", height: "30rem" }}
      >
        <div className="p-2">
          <img
            src={product.image}
            className="card-img-top"
            alt="..."
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="card-body mt-auto p-2">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            onClick={() => {
              let item = null;
              item = { ...product, quantity: 1 };
              dispatch(addToCart(item));
            }}
            className="btn btn-primary"
          >
            <i className="bi bi-cart-check"></i> add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
