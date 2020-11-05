//from react
import React,{useEffect, useState} from 'react';
import { Switch,Route } from 'react-router-dom';
//from material ui
import Button from "@material-ui/core/Button";
//from components
import MachineLearningList from './MachineLearningList';
import Navbar from '../common/Navbar';
import LinearRegression from './LinearRegression';
//from external modules
//function begins
const MachineLearning = () => {
    const [title,setTitle]=useState();
    const [parag,setParag]=useState();
    useEffect(()=>{
        document.title="Machine Learning"
        },[])
    return (
        <>
        <Navbar  first="Artificial Intelligence" second="Data Analysis" third="Data Visualization"/>
          <div className="DataAnalysisGrid">
            <div className="dataLists">
              <h1 className="putMarginTopOnDektop reduceFontSize ml-3">Machine Learning</h1>
              <div className="showLinks">
                <ul style={{paddingRight:"0px", marginRight:" 0px",borderRight: "2px dashed gray", width:"183px"}}>
                  <input placeholder="Search" className="ml-3 widenSearchBox"/>
                  {MachineLearningList.map((dal) => {
                    return (
                    <li key={dal.id} className=" dataListItems showlinks" style={{ backgroundColor:"black", listStyle:"none",fontWeight:"bold !important"}}>
                      <Button style={{ color: "white", textAlign:"left",textTransform:"capitalize",fontWeight:"bold !important",outline:"none"}} onClick={() => { setTitle(dal.content);setParag(dal.para);}}href={dal.rou}>
                        {dal.content}
                      </Button>
                    </li>
                    );
                  })}  
                </ul>
              </div>
            </div>
            <div className="dataAnalysisRight putMarginTopOnDektop">
              <div className="conteiner">
                <Switch>
                  <Route exact path="/ml/lr" component={LinearRegression}/>
                </Switch>
              </div>
            </div>
          </div>
        </>
    )
}

export default MachineLearning
