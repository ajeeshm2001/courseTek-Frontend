import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import '../AdminLogin/AdminLogin.css'
import { useNavigate } from 'react-router-dom'

function Adminlogin() {
    const {register,handleSubmit} = useForm()
    const navigate = useNavigate()
    const onSubmit = async (detail)=>{
        const {data} = await axios.post("http://localhost:4000/admin/adminlogin",{username:detail.username,password:detail.password},{withCredentials:true})
        if(data.status) navigate('/adminhome')
        else navigate('/adminlogin')
    }
  return (
    <div>
        <div className='loginbody'>
            <div className='containers'>
                <h1>Admin Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="email" {...register("username")} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" {...register("password")}/>
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Adminlogin