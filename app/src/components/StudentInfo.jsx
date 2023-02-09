import React from 'react'

const StudentInfo = () => {
  return (
    <div className="container p-5 align-content-center text-center">
        <h4 className="pb-3"><u>Personal Information</u></h4>
        <div className = "container bg-info text-start border border-dark">
            <div className="container">
                <div className="row">
                    <div className="col-4"><p>id</p></div>
                    <div className="vr p-0"></div>
                    <div classNameName="col"><p>Note that the development build is not optimized.
To create a production build</p></div>
                </div>
                <hr className="m-0 bg-dark"/>
                <div className="row">
                    <div className="col-4"><p>Name</p></div>
                    <div className="vr p-0"></div>
                    <div className="col"><p>Note that the development build</p></div>
                </div>
                <hr class="m-0 bg-dark"/>
                <div class="row">
                    <div class="col-4"><p>Department</p></div>
                    <div class="vr p-0"></div>
                    <div className="col"><p>Note that</p></div>
                </div>
                <hr class="m-0 bg-dark"/>
                <div class="row">
                    <div class="col-4"><p>Total Credits</p></div>
                    <div class="vr p-0"></div>
                    <div className="col"><p>1000</p></div>
                </div>
            </div>
        </div>
        <h4 class="pt-5 pb-3"><u>Courses Registered</u></h4>
        <div class="container">
            <table class="table table-bordered bg-light">
                <thead>
                    <tr>
                        <th scope='col' className="bg-secondary">Course</th>
                        <th scope='col' className="bg-secondary">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row'>CS101</th>
                        <td><button type="button" className="btn btn-danger">Drop</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default StudentInfo