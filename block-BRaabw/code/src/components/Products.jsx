import React from "react";
import Product from "./Product";

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: "",
    };
  }
  handleOrder = (event) => {
    this.setState({
      sort: event.target.value,
    });
  };
  filterProduct = (sizes) => {
    let products = this.props.products;
    let sortedProducts = products;
    if (sizes.length !== 0) {
      // eslint-disable-next-line array-callback-return
      sortedProducts = products.filter((product) => {
        for (const size of sizes) {
          if (product.availableSizes.includes(size)) {
            return true;
          }
        }
      });
    }
    if (this.state.sort === "lowest") {
      return [...sortedProducts].sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (this.state.sort === "highest") {
      return [...sortedProducts].sort((a, b) => {
        return b.price - a.price;
      });
    }
    return sortedProducts;
  };

  render() {
    console.log();
    return (
      <div className=" flex">
        <div className="products">
          <div className="header flex">
            <p>{this.filterProduct(this.props.size).length} Products Found</p>
            <div>
              <p>Order By</p>
              <select
                name=""
                id=""
                value={this.state.sort}
                onChange={this.handleOrder}
              >
                <option value="">Select</option>
                <option value="lowest">Lowest to Highest</option>
                <option value="highest">Highest to Lowest</option>
              </select>
            </div>
          </div>
          <ul className=" ">
            {this.filterProduct(this.props.size).map((product) => {
              return (
                <Product
                  key={product.sku}
                  product={product}
                  addToCart={this.props.addToCart}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
