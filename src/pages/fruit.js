import React from "react";
import FruitList from "./ListItem";

export default props => {
  var fruits = [
    { name: "Apel", color: "red" },
    { name: "Mangga", color: "green" },
    { name: "Durian", color: "yellow" }
  ];

  const f = fruits.map((f, i) => f.name);

  return (
    <div className="container">
      <h1>Fruit</h1>
      <p>Daftar nama buah (Static array)</p>
      <FruitList data={f} />
    </div>
  );
};
