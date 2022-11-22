import React from 'react';
import error from '../Images/error.png'
import { makeStyles } from '@material-ui/styles';


let useStyles=makeStyles(
    {
        img:
        {
            margin:"120px",
            marginLeft:"420px",
            width:"maxcontent"
        }
    }
)

function Error() {
    let classes=useStyles();
    return (
        <div>
            <img src={error} alt="404 Error Page Not Found" className={classes.img} />
        </div>
    )
}

export default Error

