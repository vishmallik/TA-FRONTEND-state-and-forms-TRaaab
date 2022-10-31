import React from "react";
import Product from "./Product";
import Aside from "./Aside";
import data from "../data.json";
import Cart from "./Cart";
export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }
  addToCart = (product) => {
    this.setState({
      cart: [...this.state.cart, product],
    });
  };
  showCart = () => {
    return <Cart products={this.state.cart} />;
  };
  render() {
    return (
      <div className="container flex">
        <div className="aside">
          <Aside
            sizes={data.products
              .map((product) => product.availableSizes)
              .flat(2)}
          />
        </div>
        <div className="products">
          <div className="header flex">
            <p>{data.products.length} Products Found</p>
            <div>
              <p>Order By</p>
              <select name="" id="">
                <option value="">Lowest to Highest</option>
                <option value="">Highest to Lowest</option>
              </select>
            </div>
          </div>
          <ul className=" ">
            {data.products.map((product) => {
              return (
                <Product
                  key={product.sku}
                  product={product}
                  addToCart={this.addToCart}
                />
              );
            })}
          </ul>
        </div>
        <label className="cart-button" htmlFor="cart">
          <img src="/static/bag-icon.png" alt="cart" />
          <span>4</span>
        </label>
        <input type="checkbox" name="" id="cart" />
        <label htmlFor="cart">
          <img src="/static/sprite_delete_icon.png" alt="" />
        </label>
        <div className="cart1">
          {" "}
          <Cart products={this.state.cart} />;
        </div>
      </div>
    );
  }
}
