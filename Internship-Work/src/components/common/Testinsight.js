//from react
import React from 'react';
//from material ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//from components
import Xarrow from "react-xarrows";
//from external modules
//function begins
const useStyles = makeStyles({
    root: {
      minWidth: 200,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const Testinsight=()=>{
    const classes = useStyles();
    return(
        <>
        <div style={{display:"flex",justifyContent:"space-around",}}>
        <div id="roo" className="bg-danger" style={{width:"220px",height:"100px",alignSelf:"flex-start",marginTop:"0px"}}>
          <Card style={{boxShadow: "0 0 10px black",}}className={classes.root}>
            <CardContent>
              <Typography variant="h6">Data Link</Typography>
              <input type="text"  className="mt-3" placeholder="Data Link"/>  
            </CardContent>
          </Card>
        </div>               
        <div className="rightDivs ">
          <div id="rd1" className="bg-danger " style={{width:"200px", boxShadow: "0 0 10px black", }}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">Correlation</Typography>
            </CardContent>
          </Card></div>
          </div>
          +0999999999998786665q7*+-*
          43
     <Xarrow
     start="roo" //can be react ref
     end="rd1" //or an id
     headSize="0"
    
   />
   <Xarrow
     start="roo" //can be react ref
     end="rd2" //or an id
     headSize="0"
    
   />
   <Xarrow
     start="roo" //can be react ref
     end="rd3" //or an id
     headSize="0"
    
   />
   <Xarrow
     start="roo" //can be react ref
     end="rd4" //or an id
     headSize="0"
    
   />
  
       
        </div>
        </>
    )
  }
  export default Testinsight;