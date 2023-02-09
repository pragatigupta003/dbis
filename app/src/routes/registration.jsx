import React from 'react'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header'

const registration = () => {
  return (
    <div>
      <Header />
      <Dashboard />
      <div className="container align-content-center text-center">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope='col' className="bg-success">Course Code</th>
            <th scope='col' className="bg-success">Course Name</th>
            <th scope='col' className="bg-success">Section</th>
            <th scope='col' className="bg-success">Register</th>  
          </tr>
        </thead>
        <tbody className= "bg-light">
          <td>$CS101</td>
          <td>$Intro To Computer Science</td>

        </tbody>
      </table>
      </div>
    </div>
  )
}

export default registration