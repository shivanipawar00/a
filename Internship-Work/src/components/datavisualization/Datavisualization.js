//from react
import React,{useEffect, useState} from 'react';
import {Switch,Route} from 'react-router-dom';

//from material UI
import Button from "@material-ui/core/Button";

//from components
import Navbar from '../common/Navbar';
import DataVisLinks from './DataVisLinks';
import Barplot from './Barplot';
import GetStartedDataVisualization from './GetStartedDataVisualization';
import Linechart from './Linechart';
import Piechart from './Piechart';
import Dotplot from './Dotplot';
import Distplot from './Distplot';
import Boxplot from './Boxplot';
import Histogram from './Histogram';
import BubbleChart from './Bubblechart'
import Scatterplot from './Scatterplot';

//from external modules 


//function begins
const Datavisualization = () => { 
  
  
  useEffect(()=>{
  document.title="Data Visualization"
  },[])

  return (
    <>
      <Navbar  first="Artificial Intelligence" second="Data Analysis" third="Machine Learning"/>
      <div className="DataVisualizationGrid">
        <div className="dataLists">
          <h1 className="putMarginTopOnDektop reduceFontSize ml-3">Data Visualization</h1>
          <div className="showLinks">
            <ul style={{paddingRight:"0px",marginRight:" 0px",borderRight: "2px dashed gray",width:"192px"}}>
              <input placeholder="Search" className="ml-3 widenSearchBox"/>
              {DataVisLinks.map((dal) => {
                return (
                  <li key={dal.id} className=" dataListItems showlinks" style={{backgroundColor:"black",listStyle:"none",fontWeight:"bold !important"}}>
                    <Button style={{ color: "white",textAlign:"left",textTransform:"capitalize",fontWeight:"bold !important",outline:"none"}} href={dal.rou}>
                      {dal.content}
                    </Button>
                  </li>
                );
              })}  
            </ul>
          </div>
        </div>
        <div className="dataAnalysisRight putMarginTopOnDektop" style={{marginRight:"3%"}}>
          <div className="conteiner" >
            <Switch>
            <Route  exact path="/dv/gs" component={GetStartedDataVisualization}/>
            <Route  exact path="/dv/barplot" component={Barplot}/>
            <Route exact path="/dv/linechart" component={Linechart} />
            <Route exact path="/dv/scatterplot" component={Scatterplot} />
            <Route exact path="/dv/piechart" component={Piechart} />
            <Route exact path="/dv/dotplot" component={Dotplot} />
            <Route exact path="/dv/distplot" component={Distplot} />
            <Route exact path="/dv/boxplot" component={Boxplot} />
            <Route exact path="/dv/histogram" component={Histogram} />
            <Route exact path="/dv/bubblechart" component={BubbleChart} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}

export default Datavisualization;
