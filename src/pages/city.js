import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import ListCity from "./ListItem";

export default props => {
  const [cities, setCities] = useState([]);
  const getData = () => {
    axios.get("https://api.etanee.id/provinsi").then(response => {
      const c = response.data.map((c, i) => c.name);
      setCities(c);
    });
  };
  useEffect(getData, []);
  return (
    <Fragment>
      <h1>Kota di Indonesia</h1>
      <ListCity data={cities} />
    </Fragment>
  );
};
