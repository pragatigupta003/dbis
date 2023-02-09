import React from 'react'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header'
import StudentInfo from '../components/StudentInfo'

const home = () => {
  return (
    <div>
      <Header />
      <Dashboard />
      <StudentInfo />
    </div>
  )
}

export default home