
import React, { useState, useEffect } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Live date and time
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    return (
        <div
            className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-28 sm:px-6 md:px-10"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >

            {/* LIVE DATE AND TIME */}
            <div className="absolute top-5 left-4 text-white sm:top-6 sm:left-8">

                <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">
                    {currentTime.toLocaleTimeString('en-IN')}
                </h1>

                <p className="mt-1 text-xs font-medium sm:text-sm lg:text-lg">
                    {currentTime.toLocaleDateString('en-IN', {
                        weekday: 'long',
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                    })}
                </p>

            </div>

            {/* RESPONSIVE LOGIN CONTAINER */}
            <div className="w-full max-w-md rounded-2xl border-2 border-pink-600 bg-black/40 p-6 shadow-2xl backdrop-blur-sm sm:p-10 lg:p-14">

                <h2 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
                    Welcome Back
                </h2>

                <form
                    onSubmit={submitHandler}
                    className="flex w-full flex-col items-center justify-center"
                >

                    {/* EMAIL INPUT */}
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full min-w-0 rounded-full border-2 border-pink-600 bg-transparent px-4 py-3 text-sm font-medium text-white outline-none placeholder:text-gray-400 focus:border-pink-400 sm:px-6 sm:text-base"
                        type="email"
                        placeholder="Enter your email"
                    />

                    {/* PASSWORD INPUT */}
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-4 w-full min-w-0 rounded-full border-2 border-pink-600 bg-transparent px-4 py-3 text-sm font-medium text-white outline-none placeholder:text-gray-400 focus:border-pink-400 sm:px-6 sm:text-base"
                        type="password"
                        placeholder="Enter password"
                    />

                    {/* LOGIN BUTTON */}
                    <button
                        type="submit"
                        className="mt-7 w-full rounded-full bg-orange-600 px-6 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-emerald-700 sm:text-lg"
                    >
                        Log in
                    </button>

                </form>
            </div>

        </div>
    )
}

export default Login
