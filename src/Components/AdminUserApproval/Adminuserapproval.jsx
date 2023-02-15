import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../AdminUserApproval/Adminuserlist.css'

function Adminuserapproval() {
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        const users = async()=>{
            const {data} = await axios.get('http://localhost:4000/admin/approvallist')
            setUsers(data.users)
        }
        users();
    },[])
    const approve = async(id)=>{
        setLoading(false)
        setUsers(users.filter(user=>{
                    return user._id!==id
                }))
        const {data} = await axios.patch(`http://localhost:4000/admin/approval/${id}`)
        setLoading(true)
    }
    const disapprove = async(id)=>{
        setUsers(users.filter(user=>{
            return user._id!==id
        }))
        axios.delete(`http://localhost:4000/admin/disapproval/${id}`,{}).then((data)=>{
            console.log(data);
        })
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
        users[0]?loading?
        users.map((users,index)=>{
            return (
                <tr>
                <th scope="row">{index+1}</th>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td><b>{users.course}</b></td>
                <td>
                    <button onClick={()=>{approve(users._id)}} className='btn btn-success me-3'>Approve</button>
                    <button onClick={()=>{disapprove(users._id)}} className='btn btn-danger'>Disapprove</button>
                </td>
              </tr>
            )
           
        }):<div class="lds-facebook"><div></div><div></div><div></div></div>:<h1 className='text-center text-danger mt-5'>No Users Found!</h1>
        }
   
  </tbody>
</table>
    </div>
  )
}

export default Adminuserapproval