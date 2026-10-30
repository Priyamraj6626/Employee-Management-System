import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-7'
    style={{
backgroundImage: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80')",
backgroundSize: 'cover',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat'
}}>
      <Header changeUser={props.changeUser}/>
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard