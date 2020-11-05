//from react
import React from "react";

//from material ui
import Button from "@material-ui/core/Button";

//from components

//from external modules

//function begins
const Allbuttons = () => {
  return (
    <>
      <Button variant="contained" className="addMarginOnMobile" color="primary">
        <a href="/ai" target="_blank">
          Artificial Intelligence
        </a>
      </Button>
      <Button variant="contained" className="addMarginOnMobile" color="primary">
        <a href="/da" target="_blank">
          Data Analysis
        </a>
      </Button>
      <Button variant="contained" className="addMarginOnMobile" color="primary">
        <a href="/dv" target="_blank">
          Data Visualization
        </a>
      </Button>
      <Button variant="contained" className="addMarginOnMobile" color="primary">
        <a href="/ml" target="_blank">
          Machine Learning
        </a>
      </Button>
    </>
  );
};

export default Allbuttons;
