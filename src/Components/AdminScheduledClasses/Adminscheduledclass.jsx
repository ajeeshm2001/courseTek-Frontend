import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Adminscheduledclass() {
    const [sub,setSub] = useState([]) 
    const [date,setDate] = useState('')
    useEffect(()=>{
        const classes = async()=>{
            const {data} = await axios.get("http://localhost:4000/admin/scheduled")
            console.log("kkk");
            setSub(data.data)
        }
        classes();
    },[])
    const handleDate = (e)=>{
        setDate(e.target.value)
        setSub(sub.filter(course=>{
            return course.date==date
        }))
    }
  return (
    <div className='m-5'>

    <div class="card">
    <div class="card-header text-center text-primary">
        <h3>      List of Classes
</h3>
    </div>
    <div className='text-end me-4 mt-3'>
    <input type="date" className='m-2 col-md-2 ' onChange={handleDate} />

    </div>
    <div class="card-body">
     {  
        sub.map((sub)=>{
            return(
                <div class="card mb-3">
                <div class="card-body bg-light">
                  <div className='d-md-flex justify-content-between m-3'>
                      <h5 >Date : {sub.date}</h5>
                      <h5 >Course Name : <span className='text-success'>{sub.courses[0].coursename}</span></h5>
                      <h5 >Subject : {sub.subject}</h5>
                      <h5 >Available Slots : <span className='text-danger'>{sub.slot}</span></h5>
                  </div>
                </div>
              </div>
            ) 
        })
         
     }
   
    </div>
  </div>
    </div>
  )
}

export default Adminscheduledclass