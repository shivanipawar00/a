//from react
import React from "react";
//from material ui
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
//from components

//from external modules

import Xarrow from "react-xarrows";
//function begins
const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const Testi = () => {
  const classes = useStyles();
  return (
    <>
      <div style={{display: "flex",justifyContent: "space-around",}}>
        <div id="roo" className="bg-danger" style={{width: "220px",height: "100px",alignSelf: "flex-start",marginTop: "0px",}}>
          <Card style={{boxShadow: "0 0 10px black",}}className={classes.root}>
            <CardContent>
              <Typography variant="h6">Data Link</Typography>
              <input type="text" className="mt-3" placeholder="Data Link" />
            </CardContent>
          </Card>
        </div>
        <div className="rightDivs">
          <div id="rd1" className="bg-danger " style={{ width: "200px", boxShadow: "0 0 10px black" }}>
            {" "}
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h6">No. of Columns</Typography>
              </CardContent>
            </Card>
          </div>
          <div id="rd2" className="bg-danger mt-3" style={{ width: "200px", boxShadow: "0 0 10px black" }}>
            {" "}
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h6">No. of Rows</Typography>
              </CardContent>
            </Card>
          </div>
          <div id="rd3" className="bg-danger mt-2"style={{ width: "200px", boxShadow: "0 0 10px black" }}>
            {" "}
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h6">Head</Typography>
              </CardContent>
            </Card>
          </div>
          <div id="rd4" className="bg-danger mt-2" style={{ width: "200px",height: "70px", boxShadow: "0 0 10px black",}}>
            {" "}
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h6">Tail</Typography>
              </CardContent>
            </Card>
          </div>
          <div id="rd5" className="bg-danger mt-2 " style={{width: "200px",height: "70px",boxShadow: "0 0 10px black",}}>
            {" "}
            <Card className={classes.root} style={{ height: "70px" }}>
              <CardContent>
                <Typography variant="h6">Data Type</Typography>
              </CardContent>
            </Card>
          </div>
          <div id="rd6" className="bg-danger mt-2" style={{width: "200px",height: "70px",boxShadow: "0 0 10px black",}}>
            {" "}
            <Card className={classes.root} style={{ height: "70px" }}>
              <CardContent>
                <Typography variant="h6">Shape</Typography>
              </CardContent>
            </Card>
          </div>
          <Xarrow start="roo" end="rd1" headSize="0"/>
          <Xarrow start="roo" end="rd2" headSize="0"/>
          <Xarrow start="roo" end="rd3" headSize="0"/>
          <Xarrow start="roo" end="rd4" headSize="0"/>
          <Xarrow start="roo" end="rd5" headSize="0"/>
          <Xarrow start="roo" end="rd6" headSize="0"/>
          
        </div>
      </div>
    </>
  );
};
export default Testi;
