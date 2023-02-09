import React from 'react'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header'

const courseInfo = () => {
  return (
    <div>
      <Header />
      <Dashboard />
      <div className="container p-5 align-content-center text-center">
        <h4 className="pb-3"><u>Var Course Information</u></h4>
        <div className = "container bg-info text-start border border-dark">
            <div className="container">
                <div className="row">
                    <div className="col-4"><p>Course_id</p></div>
                    <div className="vr p-0"></div>
                    <div className="col"><p>$value</p></div>
                </div>
                <hr className="m-0 bg-dark"/>
                <div className="row">
                    <div className="col-4"><p>Name</p></div>
                    <div className="vr p-0"></div>
                    <div className="col"><p>$name</p></div>
                </div>
                <hr className="m-0 bg-dark"/>
                <div className="row">
                    <div className="col-4"><p>Credit</p></div>
                    <div className="vr p-0"></div>
                    <div className="col"><p>$</p></div>
                </div>
                <hr className="m-0 bg-dark"/>
                <div className="row">
                    <div className="col-4"><p>Venue</p></div>
                    <div className="vr p-0"></div>
                    <div className="col"><p>$</p></div>
                </div>
                <hr className="m-0 bg-dark"/>
                <div className="row">
                    <div className="col-4"><p>Prerequisite</p></div>
                    <div className="vr p-0"></div>
                    <div className="col"><p>$id_ref, $course_name</p></div>
                </div>
                <hr className="m-0 bg-dark"/>
                <div className="row">
                    <div className="col-4"><p>Instructor</p></div>
                    <div className="vr p-0"></div>
                    <div className="col"><p>$id_ref, $inst_name</p></div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default courseInfo