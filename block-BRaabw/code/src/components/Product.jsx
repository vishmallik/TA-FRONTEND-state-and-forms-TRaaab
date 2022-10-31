import React from "react";

export default function Product(props) {
  return (
    <li>
      <img src={`/static/products/${props.product.sku}_1.jpg`} alt="" />
      <h2>{props.product.title}</h2>
      <hr />
      <div>
        <small>{props.product.currencyFormat}</small>
        <h4>{props.product.price}</h4>
      </div>
      <div className="installment">
        or {props.product.installments} x{" "}
        <small>{props.product.currencyFormat}</small>
        <h4>
          {Number(
            (props.product.price / props.product.installments).toFixed(2)
          )}
        </h4>
      </div>
      <button onClick={() => props.addToCart(props.product)}>
        Add to cart
      </button>
    </li>
  );
}
