import React from "react";

export default function Cart(props) {
  return (
    <div className="cart">
      <div>
        <img src="/static/" alt="" />
      </div>
      <div>
        <div className="cart-icon-wrapper">
          <span>
            <img src="/static/bag-icon.png" alt="cart" />
            <span>4</span>
          </span>
          <h2>Cart</h2>
        </div>
        <hr />
        <ul>
          {props.products.map((product) => {
            return (
              <li className="flex">
                <img src={`/static/products/${product.sku}_2.jpg`} alt="" />
                <div>
                  <p>{product.title}</p>
                  <span>|{product.style}</span>
                  <p>{product.ID}</p>
                </div>
                <div>
                  <p>
                    {product.currencyFormat}
                    {product.price}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex container">
          <h5>SUBTOTAL</h5>
          $999
        </div>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
}
