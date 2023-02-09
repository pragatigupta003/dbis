import React from 'react'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header'

const instructor = () => {
  return (
    <div>
      <Header />
      <Dashboard />
      <div className="container align-content-center text-center">
        <h4 className="pt-5 pb-3"><u>Instructors</u></h4>
          <div className="container">
              <table className="table table-bordered bg-light">
                  <thead>
                      <tr>
                          <th scope='col' className="bg-secondary">ID</th>
                          <th scope='col' className="bg-secondary">Name</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>1</td>
                          <td>Mahadev</td>
                      </tr>
                  </tbody>
              </table>
          </div>
          </div>
    </div>
  )
}

export default instructor