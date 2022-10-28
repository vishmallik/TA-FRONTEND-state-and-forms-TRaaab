import React from "react";
import data from "../data.json";
import FoodList from "./FoodList";
class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: "All",
    };
  }
  handleClick = (category) => {
    this.setState({
      activeMenu: category,
    });
  };
  render() {
    return (
      <>
        <ul className="flex">
          <li
            key="All"
            onClick={() => this.handleClick("All")}
            className={this.state.activeMenu == "All" ? "active" : ""}
          >
            All
          </li>
          {data
            .reduce((acc, menu) => {
              if (!acc.includes(menu.category)) {
                acc.push(menu.category);
              }
              return acc;
            }, [])
            .map((category) => (
              <li
                key={category}
                className={this.state.activeMenu == category ? "active" : ""}
                onClick={() => this.handleClick(category)}
              >
                {category}
              </li>
            ))}
        </ul>
        <FoodList category={this.state.activeMenu} />
      </>
    );
  }
}

export default Category;
