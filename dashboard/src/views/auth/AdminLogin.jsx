import React, { useState } from 'react';

// import adminImage from '../../../public/images/admin.jpg';

const AdminLogin = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const inputHandle = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const submit = e => {
        e.preventDefault();
        console.log('state : ', state);
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    <img
                        className="w-full h-20 mx-auto rounded-full"
                        src="http://localhost:5173/images/logo.png"
                        alt="adminImage"
                    />
                </h2>
                <form onSubmit={submit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            value={state.email}
                            onChange={inputHandle}
                            type="email"
                            required
                            name="email"
                            id="email"
                            placeholder="Enter Your Email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            value={state.password}
                            onChange={inputHandle}
                            type="password"
                            required
                            name="password"
                            id="password"
                            placeholder="Enter Your Password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Admin Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
