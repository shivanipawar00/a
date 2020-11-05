//from react
import React from 'react';

//from external modules
import Xarrow from "react-xarrows";
const Xarrows = () => {
return(
    <>
        <Xarrow style={{backgroundColor: 'grey'}} start="dataLink" end="fetchData" headSize="0" />
        <Xarrow start="fetchData" end="title"  headSize="0"  />
        <Xarrow start="fetchData" end="x-axis"  headSize="0"  />
        <Xarrow start="fetchData" end="y-axis"  headSize="0"  />
        <Xarrow start="fetchData" end="color"  headSize="0" />
        <Xarrow start="fetchData" end="hoverData"  headSize="0"/>
        <Xarrow start="fetchData" end="labels"  headSize="0" />
        <Xarrow start="fetchData" end="barMode"  headSize="0" />
        <Xarrow start="fetchData" end="orientation"  headSize="0" />
        <Xarrow start="fetchData" end="histFunction"  headSize="0" />
        <Xarrow start="fetchData" end="notch"  headSize="0" />
        <Xarrow start="fetchData" end="size"  headSize="0" />

    </>
)
}
export default Xarrows;