//from react
import React from 'react';
//from material ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//from components
//from external modules
import Xarrow from "react-xarrows";
//function begins
const useStyles = makeStyles({
    root: {
      minWidth: 200,
    },

    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Testinfo=()=>{
  const classes = useStyles();
    return(
        <>
        <div style={{
           display:"flex",
            justifyContent:"space-around",
            marginTop:"50px !important",
            

        }}>
        
        <div id="roo" className="bg-danger" style={{width:"220px",
                        height:"100px",
                        alignSelf:"flex-start",
                    }}>
                        
                        <Card 
                        style={{
                          
                            boxShadow: "0 0 10px black",
       
                        }}
                        
                        className={classes.root}>
            <CardContent>
              <Typography variant="h6">Data Link</Typography>
              <input type="text"  className="mt-3" placeholder="Data Link"/>
              
            </CardContent>
            </Card>
            </div>
                        
        <div className="rightDivs ">
        
       <div id="rd1" className="bg-danger " style={{width:"200px", boxShadow: "0 0 10px black", }}> <Card className={classes.root}>
       <CardContent>
         <Typography variant="h6">Min</Typography>
        
       </CardContent>
 
     </Card></div>
       <div id="rd2" className="bg-danger mt-3" style={{width:"200px", boxShadow: "0 0 10px black",}}> <Card className={classes.root}>
       <CardContent>
         <Typography variant="h6">Max</Typography>
        
       </CardContent>
 
     </Card></div>
       <div id="rd3" className="bg-danger mt-2" style={{width:"200px", boxShadow: "0 0 10px black",}}> <Card className={classes.root}>
       <CardContent>
         <Typography variant="h6">Std deviation</Typography>
        
       </CardContent>
 
     </Card></div>
       <div id="rd4" className="bg-danger mt-2" style={{width:"200px",height:"70px", boxShadow: "0 0 10px black",}}> <Card className={classes.root}>
       <CardContent>
         <Typography variant="h6">Mean</Typography>
        
       </CardContent>
 
     </Card></div>
       <div id="rd5" className="bg-danger mt-2 " style={{width:"200px",height:"70px" ,boxShadow: "0 0 10px black",}}> <Card className={classes.root} style={{height:"70px"}}>
       <CardContent>
         <Typography variant="h6">Sum</Typography>
        
       </CardContent>
 
     </Card></div>
     <div id="rd6" className="bg-danger mt-2" style={{width:"200px", height:"70px", boxShadow: "0 0 10px black",}}> <Card className={classes.root} style={{height:"70px"}}>
     <CardContent>
       <Typography variant="h6">Describe</Typography>
      
     </CardContent>

   </Card></div>
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
   <Xarrow
     start="roo" //can be react ref
     end="rd5" //or an id
     headSize="0"
    
   />
   <Xarrow
     start="roo" //can be react ref
     end="rd6" //or an id
     headSize="0"
    
   />
        </div>
        </div>
        </>
    )
  }
  export default Testinfo;