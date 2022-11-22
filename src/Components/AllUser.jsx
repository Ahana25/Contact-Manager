import { Table, TableBody, TableCell, TableHead, TableRow,Button, AppBar, Toolbar } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { getData,deleteData } from '../Service/Api'
import { makeStyles } from '@material-ui/styles';
import {Link} from 'react-router-dom'
import { styled,alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
let useStyles= makeStyles({
    table:
    {
        width:"90%",
        margin:"60px",
        marginTop:"90px"
    },
    tablehead:
    {
        background:"blue",
    },
    head:
    {
    '&>*':
    {
        color:"black",
        fontSize:"20px"
    }
},
app:{
    marginTop:"70px"
}})

function AllUser() {
  let classes= useStyles();

    let [users,setUsers]= useState([]);
  let[searchVal,setSearchVal]= useState("")
    useEffect(()=>
    {
       getAllData();
    },[])

    let getAllData= async()=>
    {
        let res= await getData();
        console.log(res.data);
        setUsers(res.data);
    }

    let deleteUserData=async(id)=>
    {
       await deleteData(id);
       getAllData();
    }
    return (
        <div>
        <AppBar className={classes.app}>
            <Toolbar>
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase onChange={(event)=>{
                setSearchVal(event.target.value)
            }}
              placeholder="Search…"/>
          </Search>
            </Toolbar>
        </AppBar>
        <Table className={classes.table}>
        <TableHead className={classes.tablehead}>
          <TableRow  className={classes.head}>
            <TableCell>Id</TableCell>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Middle Name</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
            {users.filter((val)=>{
                if(searchVal===""){
                    return val
                }else if(val.firstname.toLowerCase().includes(searchVal.toLowerCase())){
                    return val
                }
            }).map((list)=>
            {
                return(
                    <TableRow  className={classes.head}>
                        <TableCell align="center">{list._id}</TableCell>
                        <TableCell align="center">{list.firstname}</TableCell>
                        <TableCell align="center">{list.lastname}</TableCell>
                        <TableCell align="center">{list.middlename}</TableCell>
                        <TableCell align="center"><Button  variant="contained" color="secondary" component={Link} to={`/view/${list._id}`}>View Details</Button></TableCell>                        
                        <TableCell align="center"><Button component={Link} variant="contained" to={`/edit/${list._id}`} color="primary">Edit</Button></TableCell>
                        <TableCell align="center"><Button  variant="contained" color="secondary" onClick={()=>deleteUserData(list._id)}>Delete</Button></TableCell>                        

                    </TableRow>
                )
            })}
        </TableBody>
        </Table>
        </div>
    )
}

export default AllUser
