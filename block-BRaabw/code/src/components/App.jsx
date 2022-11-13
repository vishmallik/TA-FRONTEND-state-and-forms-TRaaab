import React from "react";
import Cart from "./Cart";
import Products from "./Products";
import Aside from "./Aside";
import data from "../data.json";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      size: [],
    };
  }
  componentDidMount() {
    if (localStorage.carts) {
      this.setState({
        cart: JSON.parse(localStorage.carts),
      });
    }
    window.addEventListener("beforeunload", this.handleUpdateLocalStorage);
  }
  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.handleUpdateLocalStorage);
  }
  handleUpdateLocalStorage = () => {
    localStorage.setItem("carts", JSON.stringify(this.state.cart));
  };
  addToCart = (product) => {
    let present = this.state.cart.find((p) => p.id === product.id);
    if (present) {
      this.incQuantity(product.id);
    } else {
      this.setState((prevState) => {
        return {
          cart: prevState.cart.concat({ ...product, quantity: 1 }),
        };
      });
    }
  };
  incQuantity = (id) => {
    let updatedCart = this.state.cart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
    this.setState({
      cart: updatedCart,
    });
  };
  decQuantity = (id) => {
    let updatedCart = this.state.cart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    });
    this.setState({
      cart: updatedCart,
    });
  };
  deleteItem = (id) => {
    let updatedCart = this.state.cart.filter((product) => product.id !== id);
    this.setState({
      cart: updatedCart,
    });
  };

  selectedSize = (size) => {
    if (this.state.size.includes(size)) {
      this.setState((prevState) => {
        return {
          size: prevState.size.filter((s) => s !== size),
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          size: prevState.size.concat(size),
        };
      });
    }
  };
  render() {
    return (
      <>
        <div className="flex container">
          <Aside
            size={this.state.size}
            selectedSize={this.selectedSize}
            sizes={data.products
              .map((product) => product.availableSizes)
              .flat(2)}
          />
          <Products
            products={data.products}
            size={this.state.size}
            addToCart={this.addToCart}
          />
        </div>
        <Cart
          products={this.state.cart}
          inc={this.incQuantity}
          dec={this.decQuantity}
          del={this.deleteItem}
        />
      </>
    );
  }
}
