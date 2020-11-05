//from react
import React from 'react';
//from material ui
//from components
//from external modules
//function begins
const Box = (props) => {
    return (
        <div>
          <div ref={props.box.ref} id={props.box.id} style={{...boxStyle, left:props.box.x, top:props.box.y}}>
            {props.box.id}
          </div>
        </div>
    )
}

export default Box;
