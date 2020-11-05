//from react
import React from "react";
//from material ui
import Button from "@material-ui/core/Button";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { makeStyles } from "@material-ui/core/styles";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import Snackbar from "@material-ui/core/Snackbar";
//from components
//from external modules
//function begins
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));
const GetStartedDataVisualization = () => {
    const [state, setState] = React.useState({
        open: false,
        vertical: "top",
        horizontal: "center",
      });
      const classes = useStyles();
      const { vertical, horizontal, open } = state;
    
      const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
      };
    
      const handleClose = () => {
        setState({ ...state, open: false });
      };
    return (
        <>
    
          <p className="text-left"></p>
          <section>
            <div className="d-grid text-center">
              <input
                accept="csv/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  component="span"
                  color="primary"
                  endIcon={<FileCopyIcon />}
                  style={{
                    textTransform: "capitalize",
                  }}
                  size="small"
                >
                  Import CSV
                </Button>
              </label>
              <input
                accept="xl/*"
                className={classes.input}
                id="excel-button-file"
                multiple
                type="file"
              />
              <label htmlFor="excel-button-file">
                <Button
                  component="span"
                  variant="contained"
                  color="primary"
                  style={{
                    textTransform: "capitalize",
                  }}
                  endIcon={<InsertDriveFileIcon />}
                  size="small"
                >
                  Import Excel
                </Button>
              </label>
              <input
                accept="json/*"
                className={classes.input}
                id="json-button-file"
                multiple
                type="file"
              />
              <label htmlFor="json-button-file">
                <Button
                  component="span"
                  variant="contained"
                  color="primary"
                  style={{
                    textTransform: "capitalize",
                  }}
                  endIcon={<AttachFileIcon />}
                  size="small"
                >
                  Import Json
                </Button>
              </label>
    
              <Button
                variant="contained"
                style={{
                  textTransform: "capitalize",
                  gridColumn: "3/4",
                  width: "40%",
                  marginLeft: "100px",
                }}
                className="fbutton"
                color="primary"
                size="small"
                endIcon={<AttachFileIcon />}
                onClick={handleClick({ vertical: "bottom", horizontal: "center" })}
              >
                Get Link
              </Button>
              <Button
              variant="contained"
              style={{
                textTransform: "capitalize",
                gridColumn: "3/4",
                width: "40%",
                marginLeft: "100px",
              }}
              className="fbutton"
              color="primary"
              size="small"
             
              onClick={handleClick({ vertical: "bottom", horizontal: "center" })}
            >
             View Data
            </Button>
            </div>    
          </section>
          <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="text copied"
          key={vertical + horizontal}
        />
    
        </>
      );
}

export default GetStartedDataVisualization
