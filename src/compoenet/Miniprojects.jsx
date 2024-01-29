import React from "react";

function Miniproject() {
  let currDate = new Date();
  currDate = currDate.getHours();
  let greeting = "";
  const cssStyle = {};

  if (currDate >= 1 && currDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (currDate <= 12 && currDate > 20) {
    greeting = "Good Afternoon";
    cssStyle.color = "orange";
  } else {
    greeting = "Good Night";
    cssStyle.color = "blue";
  }

  return (
    <>
      <div className="div1">
        <h1>
          Hello Sir, <span style={cssStyle}>{greeting} </span>
        </h1>
      </div>
    </>
  );
}

export default Miniproject;
