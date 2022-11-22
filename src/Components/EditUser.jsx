import { FormControl, Input, InputLabel, Typography,FormGroup, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
// import { textAlign } from '@material-ui/system';
import {putData,editData } from '../Service/Api';
import { useHistory,useParams } from 'react-router-dom';
import { useEffect } from 'react';

let useStyles=makeStyles(
{
    form:
    {
        width:"70%",
        margin:"170px 0px 0px 240px",
    },
    heading:{
        textAlign:"center",
        textTransform:"capitalize",
        fontFamily:"cursive",
        marginTop:"40px",
        fontSize:"40px"
    }
}
)

function EditUser() {
    let history=useHistory();
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
    let {id}=useParams();
    useEffect(()=>
    {
        EditUser();
    },[])

    let EditUser=async()=>
    {
       let res= await putData(id);
       setUsers(res.data)
    }

    let updateVal=(event)=>
    {
       setUsers({...users,[event.target.name]:event.target.value})
    }
    let putUserDetails= async ()=>
    {
        await editData(id,users);
    }
    let putNewDetails=()=>
    {
        putUserDetails();
        history.push('/all')
    }
   
    let classes=useStyles();
    return (
        <div>
        <Typography variant="h5" className={classes.heading}>Edit User</Typography>
        <FormGroup className={classes.form}>
        <FormControl>
           <InputLabel htmlFor="name">First Name</InputLabel>
            <Input name="firstname" value={users.firstname}  onChange={updateVal}/>
            </FormControl>
            <FormControl>
           <InputLabel htmlFor="name">Last Name</InputLabel>   
            <Input name="lastname" value={users.lastname}  onChange={updateVal}/>
            </FormControl>
            <FormControl>
           <InputLabel htmlFor="username">Middle Name</InputLabel> 
            <Input name="middlename" value={users.middlename}  onChange={updateVal}/>
            </FormControl>
            <FormControl>
           <InputLabel htmlFor="email">Street Name</InputLabel>
            <Input name="streetname" value={users.streetname} onChange={updateVal} />
            </FormControl>
            <FormControl>
           <InputLabel htmlFor="email">Street Number</InputLabel>
            <Input name="streetnumber" value={users.streetnumber} onChange={updateVal} type="number"/>
            </FormControl>
            <FormControl>
           <InputLabel htmlFor="email">Apartment Number</InputLabel>
            <Input name="apartnumber" value={users.apartnumber} onChange={updateVal} type="number"/>
            </FormControl>
            <FormControl>
           <InputLabel htmlFor="email">Postal Code</InputLabel>
            <Input name="postalcode" value={users.postalcode} onChange={updateVal} type="number"/>
            </FormControl>
            <FormControl>
           <InputLabel htmlFor="email">City</InputLabel>
            <Input name="city" value={users.city} onChange={updateVal} />
            </FormControl>
            <FormControl>
           <InputLabel htmlFor="email">Country</InputLabel>
            <Input name="country" value={users.country} onChange={updateVal} />
            </FormControl>
            <FormControl>
           <InputLabel htmlFor="phone">Home</InputLabel>
            <Input name="home" value={users.home}  onChange={updateVal} type="number"/>
            </FormControl>
            <FormControl>
           <InputLabel htmlFor="phone">Work</InputLabel>
            <Input name="work" value={users.work}  onChange={updateVal} type="number"/>
            </FormControl> <FormControl>
           <InputLabel htmlFor="phone">Mobile</InputLabel>
            <Input name="mobile" value={users.mobile}  onChange={updateVal} type="number"/>
            </FormControl> <FormControl>
           <InputLabel htmlFor="phone">Fax</InputLabel>
            <Input name="fax" value={users.fax}  onChange={updateVal} type="number"/>
            </FormControl>
            <Button variant="contained" color="primary" onClick={putNewDetails}>Submit</Button>
            </FormGroup>
        </div>
    )
}

export default EditUser


