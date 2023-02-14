import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../AdminUserApproval/Adminuserlist.css'

function Adminuserapproval() {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        const users = async()=>{
            const {data} = await axios.get('http://localhost:4000/admin/approvallist')
            setUsers(data.users)
        }
        users();
    },[])
    const approve = async(id)=>{
        console.log(id);
        setUsers(users.filter(user=>{
                console.log(user._id!==id);
                    return user._id!==id
                }))
        const {data} = await axios.patch(`http://localhost:4000/admin/approval/${id}`)
    }
  return (
        
    <div className='container mt-5'>
        <table class="table">
  <thead class="thead table-dark">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Course</th>
      <th scope='col'>Options</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((users,index)=>{
            return (
                <tr>
                <th scope="row">{index+1}</th>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td><b>{users.course}</b></td>
                <td>
                    <button onClick={()=>{approve(users._id)}} className='btn btn-success me-3'>Approve</button>
                    <button className='btn btn-danger'>Disapprove</button>
                </td>
              </tr>
            )
           
        })
        }
   
  </tbody>
</table>
    </div>
  )
}

export default Adminuserapproval