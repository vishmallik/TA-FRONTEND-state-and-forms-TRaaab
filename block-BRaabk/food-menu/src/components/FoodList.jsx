import React from "react";
import data from "../data.json";
import Food from "./Food";

function FoodList(props) {
  let { category } = props;
  return category === "All" ? (
    <div className="flex">
      {data.map((food, i) => (
        <Food key={i} item={food} />
      ))}
    </div>
  ) : (
    <div className="flex">
      {data
        .filter((menu) => menu["category"] == category)
        .map((food) => {
          return <Food key={food.id} item={food} />;
        })}
    </div>
  );
}
export default FoodList;
