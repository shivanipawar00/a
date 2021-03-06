//from react
import React from 'react'
//from material ui
//from components
//from external modules
//function begins
const ScaPatameters = () => {
  return (
    <>
      <div style={{ width: "20%",height: "72%",position: "absolute",top:"26%",left:"64%",boxShadow: "0 0 10px black",overflowY:"scroll"}}>
        <h5 id="title"style={{textAlign: "left!important",fontSize: "18px", marginLeft: "4px",padding:"3px 0"}}>
          Title
        </h5>
        <input style={{ width: "80%", margin: "auto", display: "block" ,padding:"3px 0"}} />
        <h5 id="x-axis"style={{textAlign: "left!important",fontSize: "18px",marginLeft: "4px",padding:"3px 0"}}>
          X-axis
        </h5>
        <input style={{ width: "80%", margin: "auto", display: "block",padding:"3px 0" }} />
        <h5 id="y-axis"style={{ textAlign: "left!important",fontSize: "18px",marginLeft: "4px",padding:"3px 0" }}>
          Y-axis
        </h5>
        <input style={{ width: "80%", margin: "auto", display: "block",padding:"3px 0" }} />
        <h5 id="color" style={{textAlign: "left!important",fontSize: "18px",marginLeft: "4px",padding:"3px 0"}}>
          Color
        </h5>
        <input style={{ width: "80%", margin: "auto", display: "block" ,padding:"3px 0"}} />
        <h5 id="hoverData"style={{textAlign: "left!important",fontSize: "18px",marginLeft: "4px",padding:"3px 0"}}>
          Hover Data
        </h5>
        <input style={{ width: "80%", margin: "auto", display: "block" ,padding:"3px 0"}} />
        <h5 id="labels"style={{textAlign: "left!important",fontSize: "18px",marginLeft: "4px",padding:"3px 0"}}>
         Labels
        </h5>
        <input style={{ width: "80%", margin: "auto", display: "block" ,padding:"3px 0",marginTop:"2px"}} />
        <input style={{ width: "80%", margin: "auto", display: "block" ,padding:"3px 0",marginTop:"2px"}} />
        <h5 id="barMode"style={{textAlign: "left!important",fontSize: "18px",marginLeft: "4px",padding:"3px 0"}}>
         Scatter Mode
        </h5>
        <select  style={{ width: "80%", margin: "auto", display: "block" ,padding:"3px 0",marginTop:"2px"}}>
          <option value="Markers">Markers</option>
          <option value="Lines">Lines</option>
          <option value="Markers and Lines">Markers and Lines</option> 
        </select>
        <h5 id="size"style={{textAlign: "left!important",fontSize: "18px",marginLeft: "4px",padding:"3px 0"}}>
          Size
        </h5>
        <input style={{ width: "80%", margin: "auto", display: "block" ,padding:"3px 0"}} />
      </div>
    </>
  );
};
export default ScaPatameters;
