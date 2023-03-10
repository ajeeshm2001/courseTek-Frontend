import { Route, Routes } from "react-router-dom";
import Adminlogin from "./Components/AdminLogin/Adminlogin";
import AdminClassSchedule from "./Pages/AdminClassSchedule";
import AdminCourse from "./Pages/AdminCourse";
import AdminCourseList from "./Pages/AdminCourseList";
import AdminEditCourse from "./Pages/AdminEditCourse";
import AdminHome from "./Pages/AdminHome";
import AdminScheduledClass from "./Pages/AdminScheduledClass";
import AdminUserApproval from "./Pages/AdminUserApproval";
import Userlogin from "./Pages/Userlogin";
import UserRegister from "./Pages/UserRegister";

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Userlogin/>}/>
      <Route path="/register" element={<UserRegister/>}/>
      <Route path="/adminlogin" element={<Adminlogin/>}/>
      <Route path="/adminhome" element={<AdminHome/>}/>
      <Route path="/admincourse" element={<AdminCourse/>}/>
      <Route path="/admincourselist" element={<AdminCourseList/>}/>
      <Route path="/admineditcourse/:id" element={<AdminEditCourse/>}/>
      <Route path="/adminuserapproval" element={<AdminUserApproval/>}/>
      <Route path="/adminclassschedule" element={<AdminClassSchedule/>}/>
      <Route path="/adminscheduledclass" element={<AdminScheduledClass/>}/>
    </Routes>
  );
}

export default App;
