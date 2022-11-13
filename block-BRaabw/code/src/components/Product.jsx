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
        or {props.product.installments === 0 ? 1 : props.product.installments} x{" "}
        <small>{props.product.currencyFormat}</small>
        <h4>{getInstallments(props.product)}</h4>
      </div>
      <button onClick={() => props.addToCart(props.product)}>
        Add to cart
      </button>
    </li>
  );
}
function getInstallments(product) {
  if (product.installments === 0) {
    return Number((product.price / 1).toFixed(2));
  } else {
    return Number((product.price / product.installments).toFixed(2));
  }
}
