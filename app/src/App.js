import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './routes/login';
import Home from './routes/home';
import Registration from './routes/registration';
import CourseInfo from './routes/courseInfo';
import Course from './routes/course';
import InstInfo from './routes/instInfo';
import Instructor from './routes/instructor';
import RunningDept from './routes/runningDept';



const App = () => {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/home/registration' element={<Registration/>}/>
          <Route path='/course/:course_id' element={<CourseInfo/>}/>
          <Route path='/course/running' element={<Course/>}/>
          <Route path='/course/running/:dept_name' element={<RunningDept/>}/>
          <Route path='/instructor' element={<Instructor/>}/>
          <Route path='/instructor/:instructor_id' element={<InstInfo/>}/>
        </Routes>
      </Router>
    </div>
    
  );
}



export default App;
