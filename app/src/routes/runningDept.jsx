import React from 'react'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header'

const runningDept = () => {
  return (
    <div>
      <Header />
      <Dashboard />
      <div className="container align-content-center text-center">
        <h4 className="pt-5 pb-3"><u>VAR Dept</u></h4>
          <div className="container">
              <table className="table table-bordered bg-light">
                  <thead>
                      <tr>
                          <th scope='col' className="bg-secondary">Courses</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>CS101</td>
                      </tr>
                      <tr>
                          <td>CS228</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
    </div>
  )
}

export default runningDept