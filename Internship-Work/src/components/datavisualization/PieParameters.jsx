//from react
//from material ui
//from components
//from external modules
//function begins
import React, { useEffect, useState } from "react";
const PiePatameters = () => {
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
          Title
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
          Values
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
          id="y-axis"
          style={{
            textAlign: "left!important",
            fontSize: "18px",
            marginLeft: "4px",
            padding: "3px 0",
          }}
        >
          Names
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
          id="color"
          style={{
            textAlign: "left!important",
            fontSize: "18px",
            marginLeft: "4px",
            padding: "3px 0",
          }}
        >
          Color
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
          id="hoverData"
          style={{
            textAlign: "left!important",
            fontSize: "18px",
            marginLeft: "4px",
            padding: "3px 0",
          }}
        >
          Hover Data
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
          id="labels"
          style={{
            textAlign: "left!important",
            fontSize: "18px",
            marginLeft: "4px",
            padding: "3px 0",
          }}
        >
          Labels
        </h5>
        <input
          style={{
            width: "80%",
            margin: "auto",
            display: "block",
            padding: "3px 0",
            marginTop: "2px",
          }}
        />

        <input
          style={{
            width: "80%",
            margin: "auto",
            display: "block",
            padding: "3px 0",
            marginTop: "2px",
          }}
        />
        <h5
          id="barMode"
          style={{
            textAlign: "left!important",
            fontSize: "18px",
            marginLeft: "4px",
            padding: "3px 0",
          }}
        >
          Hole
        </h5>

        <input
          style={{
            width: "80%",
            margin: "auto",
            display: "block",
            padding: "3px 0",
            marginTop: "2px",
          }}
        />
      </div>
    </>
  );
};
export default PiePatameters;
