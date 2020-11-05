//from react
import React from "react";
//from material ui
import { makeStyles } from "@material-ui/core/styles";
//from components
//from external modules
//function begins
const DataLink = () => {
  return (
    <div id="dataLink"
      style={{
        width: "18%",
        height: "18%",
        boxShadow: "0 0 10px black",
        padding: "10px",
        textAlign: "center",
        margin: "3% 0 0 1%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h5 style={{ textAlign: "left" }}>Data Link</h5>
      <input type="text" style={{ width: "80%" }} placeholder="Data Link" />
    </div>
  );
};
export default DataLink;
