//from react
import React, { useEffect,useState} from "react";
import { Route, Switch } from "react-router-dom";
//from material ui
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
//from components
import Navbar from "../common/Navbar";
import DataAnalysisLinks from "./DataAnalysisLinks";
import GetStarted from "./GetStarted";
import Data from "./Data";
import DataInfo from "./DataInfo";
import DataInsights from './DataInsights';
import DataMerge from "./DataMerge";
import DataProcessing from "./DataProcessing";
import DataAnalytics from "./DataAnalytics";
import DataArranging from "./DataArranging";
import DataArithmetic from "./DataArithmetic";
import DataModification from "./DataModification";
//from external modules
import Modal from "react-modal";
//function begins
const DataAnalysis = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.title = "Data Analysis";
  }, []);

  return (
    <>
      <Navbar first=" Artificial Intelligence" second="Data Visualization" third="Machine Learning" />
      <Button   style={{float:"right",textTransform: "capitalize",}}onClick={() => setOpen(true)}>See Timeline</Button>
      <Modal isOpen={open} style={{ height: "300px"}} onRequestClose={() => setOpen(false)}>
        <IconButton onClick={()=>setOpen(false)} aria-label="close Button" style={{float:"right"}} color="secondary">
          <CancelRoundedIcon/>
        </IconButton>
        <p>Popup Body</p>
      </Modal>
      <div className="DataAnalysisGrid">
        <div className="dataLists">
          <h1 className="putMarginTopOnDektop reduceFontSize ml-3">Data Analysis</h1>
          <div className="showLinks">
            <ul style={{paddingRight:"0px",marginRight:" 0px",borderRight: "2px dashed gray",width:"195px"}}>
              <input placeholder="Search" className="ml-3 widenSearchBox"/>
              {DataAnalysisLinks.map((dal) => {
                return (
                  <li key={dal.id} className=" dataListItems showlinks" style={{ backgroundColor:"black", listStyle:"none",fontWeight:"bold !important"}}>
                    <Button style={{ color: "white", textAlign:"left", textTransform:"capitalize",fontWeight:"bold !important",outline:"none",}}href={dal.rou}>
                      {dal.content}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="dataAnalysisRight ">
          <div className="buttonContainer">
          </div>
          <div className="conteiner">
            <Switch>
            <Route  exact path="/da/gs" component={GetStarted}/>
            <Route  exact path="/da/data" component={Data}/>
            <Route exact path="/da/info" component={DataInfo} />
            <Route exact path="/da/insights" component={DataInsights} />
            <Route exact path="/da/merge" component={DataMerge} />
            <Route exact path="/da/arithmetic" component={DataArithmetic} />
            <Route exact path="/da/arranging" component={DataArranging} />
            <Route exact path="/da/modification" component={DataModification} />
            <Route exact path="/da/processing" component={DataProcessing} />
            <Route exact path="/da/analytics" component={DataAnalytics} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataAnalysis;
