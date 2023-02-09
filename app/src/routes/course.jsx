import React from 'react'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header'

const course = () => {
  return (
    <div>
      <Header />
      <Dashboard />
      <div className="container align-content-center text-center">
        <h4 className="pt-5 pb-3"><u>Running Courses</u></h4>
          <div className="container">
              <table className="table table-bordered bg-light">
                  <thead>
                      <tr>
                          <th scope='col' className="bg-secondary">Department</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Physics</td>
                      </tr>
                      <tr>
                          <td>Mathematics</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
    </div>
  )
}

export default course