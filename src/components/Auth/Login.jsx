import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }


  return (
    <div className='flex h-screen w-screen items-center justify-center'
    style={{
backgroundImage: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80')",
backgroundSize: 'cover',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat'
}}>
        <div className='border-2 rounded-xl border-pink-600 p-20'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'
            >
                <input value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-2 border-pink-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
                />
                <input value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-2 border-pink-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' />
                <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-orange-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login