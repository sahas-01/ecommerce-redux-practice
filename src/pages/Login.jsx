import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        //put the data into the db.json, users array
        //redirect to the home page
        //if the user is already logged in, redirect to the home page
        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                window.location.href = '/products';
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col bg-white shadow-xl p-10 gap-y-5 rounded-sm w-[420px]">
                    <h1 className="text-4xl font-bold">Login</h1>
                    <form className="flex flex-col gap-y-5">
                        <input type="text" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address" className="p-3 bg-gray-100 border-none outline-none rounded-full" />
                        <input type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password" className="p-3 bg-gray-100 border-none outline-none rounded-full" />
                        <div className='flex items-center gap-x-2 justify-between'>
                            <p className="text-sm text-blue-500 w-64">New user? Create an account</p>
                            <button
                                onClick={handleLogin}
                                className="bg-blue-500 text-white p-2 w-full rounded-full">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login