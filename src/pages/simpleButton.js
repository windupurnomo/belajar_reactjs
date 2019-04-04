import React from "react";
import { Button } from "reactstrap";

export default props => {
  var btnClick = e => {
    alert("You click me!");
  };
  return (
    <Button color="danger" onClick={btnClick}>
      Click Me
    </Button>
  );
};
