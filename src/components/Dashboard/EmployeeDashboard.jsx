import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'
    style={{
backgroundImage: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80')",
backgroundSize: 'cover',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat'
}}>
      
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumber data={props.data} />
      <TaskList data={props.data}/>
      
    </div>
  )
}

export default EmployeeDashboard
