import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className='navbar-brand ms-4 text-light' to={'/adminhome'}>Admin Panel</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="navbar-brand ms-2 text-light" to={'/admincourse'}>Course</Link>
      </li> 
      <li class="nav-item active">
        <Link class="navbar-brand ms-2 text-light" to={'/admincourselist'}>CourseList</Link>
      </li>
      <li class="nav-item active">
        <Link class="navbar-brand ms-2 text-light" to={'/adminuserapproval'}>Pending Approval</Link>
      </li>  
    </ul>
  </div>
  <button  class="btn btn-outline-danger my-2 my-sm-0 me-3" type="submit">Log Out</button>
</nav>
    </div>
  )
}

export default AdminNavbar