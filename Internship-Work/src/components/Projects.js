//from react
import React, { useState } from "react";
//from material ui
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
//from components
import Allbuttons from "./Allbuttons";
import Pagetitle from "./Pagetitle";
import Navbar from './common/Navbar';
//from external modules
import Modal from "react-modal";
//function begins
const Projects = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <Navbar  first="Documentation" second="Projects" third="Github"/>
      <Pagetitle />
      <Button onClick={() => setOpen(true)} style={{float: "right", marginTop: "-70px", textTransform: "capitalize",}}>
        See Timeline
      </Button>
      <Modal isOpen={open} style={{ height: "300px",}} onRequestClose={() => setOpen(false)}>
        <IconButton onClick={()=>setOpen(false)} aria-label="close Button" style={{float:"right"}} color="secondary">
          <CancelRoundedIcon/>
        </IconButton>
        <p>Popup Body</p>
      </Modal>
      <div className="projectGrid">
        <div className="projectLhs">
          <div className="buttonss">
            <Allbuttons />
          </div>
        </div>
        <div className="projectRhs"></div>
      </div>
    </>
  );
};

export default Projects;
