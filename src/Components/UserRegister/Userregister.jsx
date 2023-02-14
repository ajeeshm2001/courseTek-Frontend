import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

function Userregister() {
  const {register,handleSubmit} = useForm()
  const [course,setCourse] = useState([])
  const [coursename,setCoursename] = useState('')
  const onSubmit = async(details)=>{
    const {data} = await axios.post("http://localhost:4000/register",{
      name:details.name,
      email:details.email,
      password:details.password,
      course:coursename
    },{withCredentials:true})
    console.log(data);
  }
  const handleChange =(event)=>{
    console.log(event.target.value);
    setCoursename(event.target.value)
  }
  useEffect(()=>{
    axios.get('http://localhost:4000/admin/getcourse').then((data)=>{
      console.log(data.data.course);
      setCourse(data.data.course)
    })
  },[])
  return (
    <div>
      <div className='loginbody'>
            <div className='containers'>
                <h1>User Registration</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                <div>
                        <label htmlFor="username">Name</label>
                        <input type="text" {...register("name")} />
                    </div>
                    <div>
                        <label htmlFor="username">Email</label>
                        <input type="email" {...register("email")} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" {...register("password")}/>
                    </div>
                    <div>
                      <label>Choose Course</label>
                      <select class="form-select" aria-label="Default select example" onChange={handleChange}>
  <option selected>Open this select menu</option>
  {
    course.map((course)=>{
      return(
        <option value={course.coursename}>{course.coursename}</option>
      )
    })
  }
</select>
                    </div>

                    <button type='submit'>Register</button>
                </form>
            </div>
            </div>
    </div>
  )
}

export default Userregister