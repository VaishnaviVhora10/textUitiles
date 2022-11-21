import React from 'react';
import {Link} from "react-router-dom";
import {AppBar, Box, Typography, Button } from "@mui/material";


function NavBar({switchModetoblack, mode, title, switchModetogreen, switchModetoblue}) {

  return (
<AppBar  style = {mode}>
<Box sx={{display: 'flex', flexDirection: 'row', justifyContent: "space-between"}}>
<Typography sx={{ml:10}}>{title}</Typography>
<Link to="/About">
{/* <Typography sx={{ml:10}}>About</Typography> */}
</Link>
<Box>
<Button sx={{background:"skyblue"}}  onClick={switchModetoblack}>Switch Mode To Black</Button>
</Box>
<Box>
<Button sx={{background:"skyblue"}}  onClick={switchModetogreen}>Switch Mode To Green</Button>
</Box>
<Box>
<Button sx={{background:"skyblue"}}  onClick={switchModetoblue}>Switch Mode To Blue</Button>
</Box>

</Box>
</AppBar>
  )
}

export default NavBar;