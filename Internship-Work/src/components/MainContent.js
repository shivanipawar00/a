//from react
import React from "react";
import { useHistory } from "react-router-dom";
//from material ui
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
//from components

import Navbar from "./common/Navbar";
//from external modules
//function begins
const useStyles = makeStyles({
    root: {
      minWidth: 275,
      padding:40,
      height:'auto',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
      marginTop:0,
    },
    pos: {
      marginBottom: 12,
    },
  });
  

const MainContent = () => {
    const classes = useStyles();
    const history = useHistory();
    
  return (
    <>
      <Navbar  first="Documentation" second="Projects" third="Github"/>
      <div className="gri">
        <Card className={classes.root}>
          <CardContent>
            <h3>
              Create a Project
            </h3>
            <TextField variant="standard" label="Project Name" color="primary"/>
          </CardContent>
          <CardActions>
            <div className="flxi">
              <div>
                <Button variant="contained" onClick={()=>history.push('/create')} color="primary" endIcon={<AddCircleIcon/>}>
                  Create
                </Button>
              </div>
              <div>
                <Button variant="contained" color="primary">
                  Get Started
                </Button>
              </div>
            </div>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default MainContent;
