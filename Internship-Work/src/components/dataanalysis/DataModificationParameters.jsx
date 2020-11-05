//from react
//from material ui
//from components
//from external modules
//function begins
import React, { useEffect, useState } from "react";
const DataModificationParameters = () => {
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
          Filter
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
          Rename
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
          Replace
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
          ReIndexing
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
export default DataModificationParameters;
