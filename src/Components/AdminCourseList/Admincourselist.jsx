import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../AdminCourseList/Admincourselist.css'

function Admincourselist() {
    const [course,setCourse] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const courseList = async()=>{
            const {data} = await axios.get("http://localhost:4000/admin/getcourse",{})
      console.log(data.course);
      setCourse(data.course)
        }
        courseList();
      
    }, [setCourse])

    const editCourse = (id)=>{
        console.log(id);
        navigate(`/admineditcourse/${id}`)
    }
    const deleteCourse = async(id)=>{
        const {data} = await axios.delete(`http://localhost:4000/admin/deletecourse/${id}`,{})
        if(data.status){
            setCourse(course.filter(course=>{
                return course._id!=id
            }))
        }
    }
  return (
    <div className='courselist ms-3 mt-4 d-flex justify-content-center'>
        <div>
        {
            course.map((course)=>{
                return (
                    <div className="courses-container">
                    <div className="course">
                        <div className="course-preview">
                            <h6 className='mt-5'>Course</h6>
                            <h2>{course.coursename}</h2>
                        </div>
                        <div className="course-info">
                            <div className="progress-container">
                                <div className="progress"></div>
                                <span className="progress-text">
                                    6/9 Challenges
                                </span>
                            </div>
                            <h6>Subject 1</h6>
                            <h2>{course.subjects.subject1}</h2>
                            <h6>Subject 2</h6>
                            <h2>{course.subjects.subject2}</h2>
                            <h6>Subject 3</h6>
                            <h2>{course.subjects.subject3}</h2>
                            <button className='btn btn-dark me-5' onClick={()=>editCourse(course._id)}>Edit Course</button>
                            <button className='btn btn-danger' onClick={()=>{deleteCourse(course._id)}}>Delete</button>
                        </div>
                    </div>
                </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Admincourselist