import React from 'react'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header'
import { Dropdown, Option } from "../dropdown";
import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";



const ButtonStyle = { padding: "6px 40px", textAlign: "center",marginBottom: "2px"};


const registration = () => {
  return (
    <div>
      <Header />
      <Dashboard />
      <div className="container align-content-center text-center">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope='col' className="bg-primary">Course Code</th>
            <th scope='col' className="bg-primary">Course Name</th>
            <th scope='col' className="bg-primary">Section</th>
            <th scope='col' className="bg-primary">Register</th>  
          </tr>
        </thead>
        <tbody className= "bg-light">
          <td>CS101</td>
          <td>Intro To Computer Science</td>
          <td> <Dropdown 
         >
        <Option selected value="Choose Section" />
        <Option value="S1" />
        <Option value="S2" />
        <Option value="S3" />
      </Dropdown></td>
      <td>
        
      <Button active size="lg" appearance="primary"
                style={ButtonStyle}>
                Register
            </Button>
      </td>

        </tbody>
      </table>
      </div>
    </div>
  )
}



export default registration