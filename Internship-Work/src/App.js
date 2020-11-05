//from react
import React from "react";
//from material ui
//from components
//from external modules
//function begins
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainContent from "./components/MainContent";
import { Route, Switch } from "react-router-dom";

import Projects from "./components/Projects";
import Artificial from "./components/Artificial";
import Datavisualization from "./components/datavisualization/Datavisualization";
import MachineLearning from "./components/machinelearning/MachineLearning";
import DataAnalysis from "./components/dataanalysis/DataAnalysis";

function App() {
  return (
    <>
    
      <Switch>
        <Route exact path="/" component={MainContent} />

        <Route exact path="/create" component={Projects} />
        <Route exact path="/ai" component={Artificial} />


        <Route path="/dv" component={Datavisualization} />
        <Route path="/ml" component={MachineLearning} />
        <Route path="/da" component={DataAnalysis} />
      </Switch>
    </>
  );
}
export default App;
