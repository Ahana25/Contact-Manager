import React, { useEffect, useState } from 'react'
import { putData } from '../Service/Api';
import { makeStyles } from '@material-ui/styles';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useParams } from 'react-router';


let useStyles= makeStyles({
    table:
    {
        width:"100%",
        margin:"10px"
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
        fontSize:"14px"
    }}})

function ViewUser() {
    let classes= useStyles();
    let {id}=useParams();
    let [users,setUsers]= useState(
        {
            firstname:"",
            lastname:"",
            middlename:"",
            streetname:"",
            streetnumber:"",
            apartnumber:"",
            postalcode:"",
            city:"",
            country:"",
            home:"",
            work:"",
            mobile:"",
            fax:""
        }
    )
    useEffect(()=>
    {
        EditUser();
    },[])

    let EditUser=async()=>
    {
       let res= await putData(id);
       setUsers(res.data)
    }
    return (
        <div>
            <Table className={classes.table}>
        <TableHead className={classes.tablehead}>
          <TableRow  className={classes.head}>
            <TableCell>Id</TableCell>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Middle Name</TableCell>
            <TableCell align="center">Street Name</TableCell>
            <TableCell align="center">Street Number</TableCell>
            <TableCell align="center">Apartment Number</TableCell>
            <TableCell align="center">Postal Code</TableCell>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">Home</TableCell>
            <TableCell align="center">Work</TableCell>
            <TableCell align="center">Mobile</TableCell>
            <TableCell align="center">Fax</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow  className={classes.head}>
                        <TableCell align="center">{users._id}</TableCell>
                        <TableCell align="center">{users.firstname}</TableCell>
                        <TableCell align="center">{users.lastname}</TableCell>
                        <TableCell align="center">{users.middlename}</TableCell>
                        <TableCell align="center">{users.streetname}</TableCell>
                        <TableCell align="center">{users.streetnumber}</TableCell>
                        <TableCell align="center">{users.apartnumber}</TableCell>
                        <TableCell align="center">{users.postalcode}</TableCell>
                        <TableCell align="center">{users.city}</TableCell>
                        <TableCell align="center">{users.country}</TableCell>
                        <TableCell align="center">{users.home}</TableCell>
                        <TableCell align="center">{users.work}</TableCell>
                        <TableCell align="center">{users.mobile}</TableCell>
                        <TableCell align="center">{users.fax}</TableCell>                        
                    </TableRow>
        </TableBody>
        </Table>
        </div>
    )
}

export default ViewUser
