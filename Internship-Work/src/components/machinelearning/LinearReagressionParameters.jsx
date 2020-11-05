//from react
//from material ui
//from components
//from external modules
//function begins
import React, { useEffect, useState } from "react";
const LinearRegressionPatameters = () => {
  return (
    <>
      <div
        style={{
          width: "20%",
          height: "72%",
          position: "absolute",
          top: "26%",
          left: "64%",
          boxShadow: "0 0 10px black",
        }}
      >
        <h5
          id="title"
          style={{
            textAlign: "left!important",
            fontSize: "18px",
            marginLeft: "4px",
            padding: "3px 0",
          }}
        >
          X-Axis
        </h5>
        <input
          style={{
            width: "80%",
            margin: "auto",
            display: "block",
            padding: "3px 0",
          }}
        />

        <h5
          id="x-axis"
          style={{
            textAlign: "left!important",
            fontSize: "18px",
            marginLeft: "4px",
            padding: "3px 0",
          }}
        >
          Y-Axis
        </h5>
        <input
          style={{
            width: "80%",
            margin: "auto",
            display: "block",
            padding: "3px 0",
          }}
        />
        
      </div>
    </>
  );
};
export default LinearRegressionPatameters;
