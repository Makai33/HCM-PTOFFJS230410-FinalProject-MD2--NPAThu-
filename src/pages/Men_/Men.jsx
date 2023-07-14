import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@stores/slices/cartSlice";
// import { FAKE_DATA } from "../../components/fakeData";

export default function Men() {
  // const ListProductMen = FAKE_DATA.products.filter((product) => {
  //   return product.type === "men";
  // });
  const products = useSelector((state) => state.product);
  const ListProductMen1 = products.filter((product) => {
    return product.type === "men";
  });
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 100,
      }}
    >
      {/* {FAKE_DATA.products.length > 0 &&
        ListProductMen.map((product) => { */}
      {products.length > 0 &&
        ListProductMen1.map((product) => {
          return (
            <div className="col-md-4 mb-2 d-flex justify-content-around flex-column">
              <div className="card" style={{ width: "18rem", height: "30rem" }}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt="..."
                  style={{ objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
        })}
    </div>
  );
}
