import React from "react";

export default props => {
  const cActivities = props.data.map((a, i) => {
    return <li key={i}>{a}</li>;
  });
  return <ul>{cActivities}</ul>;
};
