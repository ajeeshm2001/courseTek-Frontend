import axios from 'axios'
import React from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Admincourse() {
    const {register,handleSubmit} = useForm()
    const navigate = useNavigate()
    const onSubmit =async(details)=>{
        const {data} = await axios.post("http://localhost:4000/admin/addcourse",{
            coursename:details.coursename,
            description:details.description,
            duration:details.duration,
            subject1:details.subject1,
            subject2:details.subject2,
            subject3:details.subject3
        },{withCredentials:true})
        if(data.created){
            navigate('/admincourselist')
        }

    }
  return (
    <div className='container mt-5'>
        <form onSubmit={handleSubmit(onSubmit)}>
  <div className="form-row">
    <div className="form-group col-md-6 mb-3">
      <label htmlFor="inputEmail4">Course Name</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="Course Name" {...register("coursename")}/>
    </div>
    <div className="form-group col-md-6 ">
      <label htmlFor="inputPassword4">Description</label>
      <input type="text" className="form-control" id="inputPassword4" placeholder="Description" {...register("description")}/>
    </div>
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="inputAddress">Duration</label>
    <input type="number" className="form-control" id="inputAddress" placeholder="Duration" {...register("duration")}/>
  </div>
  <div className="form-group col-md-6 mb-2">
    <label htmlFor="inputAddress2">Subject 1</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Subject 1" {...register("subject1")}/>
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="inputAddress2">Subject 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Subject 2" {...register("subject2")}/>
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="inputAddress2">Subject 3</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Subject 3" {...register("subject3")}/>
  </div>
  <button type="submit" className="btn btn-dark" style={{width:"650px"}} >Add Course</button>
</form>
    </div>
  )
}

export default Admincourse