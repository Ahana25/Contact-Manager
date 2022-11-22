import { AppBar, Toolbar} from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core';
import '../index.css'

let useStyles=makeStyles(
    {
        app:
        {
            background:"black",
           
        },
        header:
        {
            color:"white",
            fontSize:"20px",
            textDecoration:"none",
            margin:"27px",
        },
    }
)

function NavBar() {
 let classes=useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.app}>
  <Toolbar>
    <NavLink exact to="/"  className={classes.header} id="id1">Home</NavLink>
    <NavLink exact to="all" className={classes.header} id="id2" >AllUser</NavLink>
    <NavLink exact to="add" className={classes.header} id="id3" >AddUser</NavLink>
</Toolbar>
</AppBar>
        </div>
    )
}

export default NavBar
