//from react
import React from 'react';
//from material ui
//from components
//from external modules
//function begins
const BoxPatameters = () => {
  return (
    <>
      <div style={{width: "20%",height: "72%",position: "absolute",top:"26%",left:"64%",boxShadow: "0 0 10px black",overflowY: "scroll"}}>
        <h5 id="title" style={{textAlign: "left!important",fontSize: "18px",marginLeft: "4px",padding:"3px 0"}}>
          Title
        </h5>
        <input style={{ width: "80%", margin: "auto", display: "block" ,padding:"3px 0"}} />
        <h5 id="x-axis" style={{ textAlign: "left!important",fontSize: "18px",marginLeft: "4px",padding:"3px 0"}}>
          X-axis
        </h5>
        <input style={{ width: "80%", margin: "auto", display: "block",padding:"3px 0" }} />
        <h5 id="y-axis" style={{ textAlign: "left!important",fontSize: "18px",marginLeft: "4px",padding:"3px 0"}}>
          Y-axis
        </h5>
        <input style={{ width: "80%", margin: "auto", display: "block",padding:"3px 0" }} />
        <h5 id="color" style={{textAlign: "left!important",fontSize: "18px", marginLeft: "4px",padding:"3px 0"}}>
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
         Bar Mode
        </h5>
        <select  style={{ width: "80%", margin: "auto", display: "block" ,padding:"3px 0",marginTop:"2px"}}>
          <option>Group</option>
          <option>Stack</option>
          <option>Relative</option>
        </select>
        <h5 id="orientation"style={{textAlign: "left!important",fontSize: "18px",marginLeft: "4px",padding:"3px 0",marginTop:"2px"}}>
         Orientation
        </h5>
        <select  style={{ width: "80%", margin: "auto", display: "block" ,padding:"3px 0",marginTop:"2px"}}>
          <option value="Horizontal">Horizontal</option>
          <option value="Vertical">Vertical</option>
        </select>
        <h5 id="points"style={{textAlign: "left!important",fontSize: "18px",marginLeft: "4px",padding:"3px 0",marginTop:"2px"}}>
         Points
        </h5>
        <select  style={{ width: "80%", margin: "auto", display: "block" ,padding:"3px 0",marginTop:"2px"}}>
          <option value="All">All</option>
          <option value="None">None</option>
        </select>
        <h5 id="notch"style={{textAlign: "left!important",fontSize: "18px",marginLeft: "4px",padding:"3px 0",marginTop:"2px"}}>
         Notch
        </h5>
        <select  style={{ width: "80%", margin: "auto", display: "block" ,padding:"3px 0",marginTop:"2px"}}>
          <option value="True">True</option>
          <option value="False">False</option>
        </select>
        <h5 id="boxMode"style={{textAlign: "left!important",fontSize: "18px",marginLeft: "4px",padding:"3px 0",marginTop:"2px"}}>
         Box Mode
        </h5>
        <select  style={{ width: "80%", margin: "auto", display: "block" ,padding:"3px 0",marginTop:"2px"}}>
          <option value="Group">Group</option>
          <option value="Relative">Relative</option>
          <option value="Overlay">Overlay</option>
        </select>
      </div>
    </>
  );
};
export default BoxPatameters;
