import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

function Adminclassschedule() {
    const {register,handleSubmit} = useForm()
    const [subject,setSubject] = useState([])
    const [course,setCourse] = useState([]) 
    const [select,setSelect] = useState('')
    const [id,setId] = useState('')
    const onSubmit = async(details)=>{
        const {data} = await axios.post(`http://localhost:4000/admin/schedule/${id}`,{subject:select,date:details.date,slot:details.slot})
        console.log(data);

    }
    const handleChange =(event)=>{
        axios.get(`http://localhost:4000/admin/getonecourse/${event.target.value}`).then((response)=>{
            setSubject(response.data.course.subjects)
            setId(event.target.value)
            console.log(response.data.course.subjects);
        })
    }
    const handleChangeSubject = (event)=>{
        setSelect(event.target.value)
    }
    useEffect(()=>{
        const course =async()=>{
            axios.get("http://localhost:4000/admin/getcourse").then((response)=>{
                setCourse(response.data.course)
                console.log(response.data.course);

            })
            
        }
        course();
    },[])
  return (
    <div className='container mt-5'>
        <form onSubmit={handleSubmit(onSubmit)}>
  <div className="form-row">
    <div className="form-group col-md-6 mb-3">
      <label htmlFor="inputEmail4">Date</label>
      <input type="date" className="form-control" id="inputEmail4" placeholder="date" {...register("date")}/>
    </div>
    <div>
        <label>Choose Course</label>
            <select class="form-select" aria-label="Default select example" style={{width:"650px"}} onChange={handleChange}>
                <option selected>Open this select menu</option>
            {
                course.map((course)=>{
                return(
                <option value={course._id}>{course.coursename}</option>
            )
            })
            }
            </select>
    </div>
    <div>
        <label>Choose Subject</label>
            <select class="form-select" aria-label="Default select example" style={{width:"650px"}} onChange={handleChangeSubject}>
                <option selected>Open this select menu</option>
           
                                            <option value={subject.subject1}>{subject.subject1}</option>
                                            <option value={subject.subject2}>{subject.subject2}</option>
                                            <option value={subject.subject3}>{subject.subject3}</option>


                                           

                   
                
            </select>
    </div>
  </div>

  <div className="form-group col-md-6">
    <label htmlFor="inputAddress2">Available Slots</label>
    <input type="number" className="form-control" id="inputAddress2" placeholder="Available Slots" {...register("slot")}/>
  </div>
  <button type="submit" className="btn btn-dark" style={{width:"650px"}} >Add Course</button>
</form>
    </div>
  )
}

export default Adminclassschedule