import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'


function Admineditcourse() {
  const {register,handleSubmit} = useForm()
  const navigate = useNavigate()
  const [coursename,setCoursename] = useState('')
  const [description,setDescription] = useState('')
  const [duration,setDuration] = useState('')
  const [subject1,setSubject1] = useState('')
  const [subject2,setSubject2] = useState('')
  const [subject3,setSubject3] = useState('')
  const [course,setCourse] = useState([])
  const {id} = useParams()
  useEffect(()=>{
  
      axios.get(`http://localhost:4000/admin/getonecourse/${id}`,).then((data)=>{
        console.log(data.data.course);
        setCourse(data.data.course)
        setCoursename(data.data.course.coursename)
        setDescription(data.data.course.description)
        setDuration(data.data.course.duration)
        setSubject1(data.data.course.subjects.subject1)
        setSubject2(data.data.course.subjects.subject2)
        setSubject3(data.data.course.subjects.subject3)
    
  })
  },[])
  const handleName = (e)=>{
    setCoursename(e.target.value)
  }
  const handleDescription = (e)=>{
    setDescription(e.target.value)
  }
  const handleDuration = (e)=>{
    setDuration(e.target.value)
  }
  const handleSub1 = (e)=>{
    setSubject1(e.target.value)
  }
  const handleSub2 = (e)=>{
    setSubject2(e.target.value)
  }
  const handleSub3 = (e)=>{
    setSubject3(e.target.value)
  }
  const onSubmit = async(e)=>{
    e.preventDefault()
    axios.put(`http://localhost:4000/admin/editcourse/${course._id}`,{
            coursename,
            description,
            duration,
            subject1,
            subject2,
            subject3
    },{withCredentials:true}).then((data)=>{
      if(data.status){
        navigate('/admincourselist')
      }
    })
  }
  return (
    <div className='container mt-5'>
    <form onSubmit={(e)=>{onSubmit(e)}}>
            <div className="form-row">
<div className="form-group col-md-6 mb-3">
  <label htmlFor="inputEmail4">Course Name</label>
  <input type="text" value={coursename} className="form-control" id="inputEmail4" placeholder="Course Name" onChange={handleName}/>
</div>
<div className="form-group col-md-6 ">
  <label htmlFor="inputPassword4">Description</label>
  <input type="text" className="form-control" value={description} id="inputPassword4" placeholder="Description" onChange={handleDescription}/>
</div>
</div>
<div className="form-group col-md-6">
<label htmlFor="inputAddress">Duration</label>
<input type="number" className="form-control" value={duration} id="inputAddress" placeholder="Duration" onChange={handleDuration}/>
</div>
<div className="form-group col-md-6 mb-2">
<label htmlFor="inputAddress2">Subject 1</label>
<input type="text" className="form-control" id="inputAddress2" value={subject1}  placeholder="Subject 1" onChange={handleSub1}/>
</div>
<div className="form-group col-md-6">
<label htmlFor="inputAddress2">Subject 2</label>
<input type="text" className="form-control" id="inputAddress2" value={subject2}    placeholder="Subject 2" onChange={handleSub2}/>
</div>
<div className="form-group col-md-6">
<label htmlFor="inputAddress2">Subject 3</label>
<input type="text" className="form-control" id="inputAddress2" value={subject3}    placeholder="Subject 3" onChange={handleSub3}/>
</div>
<button type="submit" className="btn btn-dark" >Edit Course</button>
</form>
</div>
  )
}

export default Admineditcourse