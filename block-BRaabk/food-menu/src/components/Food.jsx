import React from "react";

function Food(props) {
  let { title, price, img, desc } = props.item;
  return (
    <div className="flex basis-50 food-container">
      <div className="img-container">
        <img src={img} alt={title} />
      </div>
      <div className="text-container">
        <div className="flex">
          <h3>{title}</h3>
          <span>{price}</span>
        </div>{" "}
        <hr />
        <p>{desc}</p>
      </div>
    </div>
  );
}
export default Food;
