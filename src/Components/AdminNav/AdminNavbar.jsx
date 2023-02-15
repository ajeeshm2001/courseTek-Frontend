import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className='navbar-brand ms-4 text-light' to={'/adminhome'}><b>Admin Panel</b></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="navbar-brand ms-2 text-light" to={'/admincourse'}><b>Course</b></Link>
      </li> 
      <li class="nav-item active">
        <Link class="navbar-brand ms-2 text-light" to={'/admincourselist'}><b>CourseList</b></Link>
      </li>
      <li class="nav-item active">
        <Link class="navbar-brand ms-2 text-light" to={'/adminuserapproval'}><b>PendingApproval</b></Link>
      </li> 
      <li class="nav-item active">
        <Link class="navbar-brand ms-2 text-light" to={'/adminclassschedule'}><b>ScheduleClass</b></Link>
      </li>   
      <li class="nav-item active">
        <Link class="navbar-brand ms-2 text-light" to={'/adminscheduledclass'}><b>ScheduledClasses</b></Link>
      </li> 
    </ul>
  </div>
  <button  class="btn btn-outline-danger my-2 my-sm-0 me-3" type="submit">Log Out</button>
</nav>
    </div>
  )
}

export default AdminNavbar