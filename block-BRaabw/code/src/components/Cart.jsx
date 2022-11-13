import React from "react";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  openCart = () => {
    this.setState({
      isOpen: true,
    });
  };
  closeCart = () => {
    this.setState({
      isOpen: false,
    });
  };
  getSubtotal = () => {
    let subtotal = this.props.products.reduce((acc, cv) => {
      acc += cv.quantity * cv.price;
      return acc;
    }, 0);
    return +subtotal.toFixed(2);
  };
  checkout = () => {
    alert(
      `The total amount is ${
        this.props.products.length === 0
          ? "$"
          : this.props.products[0].currencyFormat
      } ${this.getSubtotal()}`
    );
  };
  render() {
    if (this.state.isOpen) {
      return (
        <div className="cart">
          <div className="close" onClick={this.closeCart}>
            <i className="fas fa-xmark"></i>
          </div>
          <div>
            <div className="cart-icon-wrapper">
              <div>
                <img src="/static/bag-icon.png" alt="cart" />
                <span>
                  {this.props.products.reduce((acc, cv) => {
                    acc = acc + cv.quantity;
                    return acc;
                  }, 0)}
                </span>
              </div>
              <h2>Cart</h2>
            </div>
            <hr />
            <ul>
              {this.props.products.map((product) => {
                return (
                  <li className="flex item " key={product.sku}>
                    <i
                      className="fas fa-xmark delete-item"
                      onClick={() => this.props.del(product.id)}
                    ></i>
                    <img src={`/static/products/${product.sku}_2.jpg`} alt="" />
                    <div className="product-details">
                      <p>{product.title}</p>
                      <span>
                        {product.availableSizes[0]} | {product.style}
                      </span>
                      <p>Quantity: {product.quantity}</p>
                    </div>
                    <div className="price">
                      <p>
                        {product.currencyFormat}
                        {product.price}
                      </p>
                      <span onClick={() => this.props.inc(product.id)}>+</span>
                      <span onClick={() => this.props.dec(product.id)}>-</span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="flex container">
              <h5>SUBTOTAL</h5>
              <p>
                {" "}
                {this.props.products.length === 0
                  ? "$"
                  : this.props.products[0].currencyFormat}
                {this.getSubtotal()}
              </p>
            </div>
            <button onClick={this.checkout}>CHECKOUT</button>
          </div>
        </div>
      );
    } else {
      return (
        <label className="cart-button" htmlFor="cart" onClick={this.openCart}>
          <img src="/static/bag-icon.png" alt="cart" />
          <span>
            {this.props.products.reduce((acc, cv) => {
              acc = acc + cv.quantity;
              return acc;
            }, 0)}
          </span>
        </label>
      );
    }
  }
}
