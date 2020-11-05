//from react
import React,{useState} from 'react'
//from material ui
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//from components
//from external modules
//function begins
const Navbar = ({first,second,third}) => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-white addShadow">
      <a class="navbar-brand" href="https://www.google.com">
        <img src="https://tse4.mm.bing.net/th?id=OIP.jZ3WHoiyhLVfa-tOM85PFAAAAA&pid=Api&P=0&w=300&h=300" className="img-fluid" width="25" alt="hashtag" height="25"/>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="https://www.google.com">{first}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.google.com">{second}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.google.com">{third}</a>
          </li>
          <li class="nav-item">
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <AccountCircleIcon style={{width:"30px",height:"30px"}}/>
            </Button>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}>About US</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </li>
        </ul>
      </div>  
    </nav>
  )
}

export default Navbar;