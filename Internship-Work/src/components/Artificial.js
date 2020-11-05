//from react
import React,{useEffect, useState} from 'react';

//from material ui
import Button from "@material-ui/core/Button";
//from components
import Navbar from './common/Navbar';
import ArtificialLinks from "./ArtificialLinks";
//from external modules

//function begins
const Artificial = () => { 
  const [title,setTitle]=useState("");
  const [parag,setParag]=useState("");
  useEffect(()=>{
  document.title="Artificial Intelligence"
  },[])
  
  return (
    <>
      <Navbar  first="Data Analysis" second="Data Visualization" third="Machine Learning"/>
      <h1>Artificial Intelligence</h1> 
      <div className="DataAnalysisGrid">
        <div className="dataLists">
          <div className="showLinks">
            <ul>
              {ArtificialLinks.map((dal) => { return (
                <li key={dal.id} className="bg-dark  px-1 py-1 dataListItems text-center">
                  <Button style={{ color: "white", outline:"none"}}  onClick={() => {setTitle(dal.content);setParag(dal.para);}}>
                    {dal.content}
                  </Button>
                </li>
              );})}
            </ul>
          </div>
        </div>
        <div className="dataAnalysisRight">
          <div className="conteiner">
            <h1 className="text-left mt-5">{title}</h1>
            <hr className="mt-2" />
            <p className="text-left">{parag}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Artificial;
