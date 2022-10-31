import React from "react";
function unique(sizes) {
  let arr = [];

  sizes.forEach((size) => {
    if (!arr.includes(size)) {
      arr.push(size);
    }
  });

  return arr;
}

export default function Aside(props) {
  return (
    <ul>
      {unique(props.sizes).map((size) => (
        // console.log(size);
        <li>{size}</li>
      ))}
    </ul>
  );
}
