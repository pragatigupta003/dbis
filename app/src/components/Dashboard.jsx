import React from 'react'

const Dashboard = () => {
  return (
    <div className = "d-flex justify-content-around align-items-center">
      <div className="border-bottom border-secondary p-2 bg-white text-black "><h4>Home</h4></div>
      <div className="border-bottom border-secondary p-2 bg-white text-black "><h4>Registration</h4></div>
      <div className="border-bottom border-secondary p-2 bg-white text-black "><h4>Courses</h4></div>
      <div className="border-bottom border-secondary p-2 bg-white text-black "><h4>Instructors</h4></div>
    </div>
  )
}

export default Dashboard