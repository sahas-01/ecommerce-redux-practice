import React from 'react'
import Navbar from '../components/Navbar'

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col bg-white shadow-xl p-10 gap-y-5 rounded-sm w-[420px]">
                    <h1 className="text-4xl font-bold">Login</h1>
                    <form className="flex flex-col gap-y-5">
                        <input type="text" placeholder="Email Address" className="p-3 bg-gray-100 border-none outline-none rounded-full" />
                        <input type="password" placeholder="Password" className="p-3 bg-gray-100 border-none outline-none rounded-full" />
                        <div className='flex items-center gap-x-2 justify-between'>
                            <p className="text-sm text-blue-500 w-64">New user? Create an account</p>
                            <button className="bg-blue-500 text-white p-2 w-full rounded-full">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login