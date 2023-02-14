import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

function UserLogin() {
  const {register,handleSubmit} = useForm()
  const onSubmit = async(details)=>{
    const {data} = await axios.post("http://localhost:4000/login",{email:details.email,password:details.password},{withCredentials:true})
    console.log(data);
  }
  return (
    <div>
      <div className='loginbody'>
            <div className='containers'>
                <h1>User Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="email" {...register("email")} />
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

export default UserLogin