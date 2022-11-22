
import axios from 'axios';


let url='http://localhost:8000/users'

let  getData = async()=>
{
    return await axios.get(url);
}


let postData= async (users)=>
{
  return await axios.post(`${url}/add`,users)
}


let putData=async (id)=>
{
   return await axios.get(`${url}/${id}`)
}

let editData=async(id,users)=>
{
 return await axios.put(`${url}/${id}`,users)
}


let deleteData=async(id)=>
{
   return await axios.delete(`${url}/${id}`)
}

export {getData,postData,putData,editData,deleteData}