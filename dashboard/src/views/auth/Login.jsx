import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';

const Login = () => {
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
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
                        Login
                    </button>
                </form>
                <div className="mt-6">
                    <p className="text-center text-sm text-gray-600">
                        Or register with{' '}
                        <Link className="font-bold" to="/register">
                            register
                        </Link>
                    </p>
                    <div className="mt-3 flex justify-center space-x-2">
                        <button className="flex items-center px-2 justify-center py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white transition duration-300 ease-in-out transform hover:bg-blue-200 hover:text-black hover:scale-105">
                            <FaGoogle className="text-red-500 cursor-pointer hover:scale-110 transition-transform mr-2" />
                            Google
                        </button>
                        <button className="flex items-center justify-center px-2 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white transition duration-300 ease-in-out transform hover:bg-gray-200 hover:scale-105">
                            <FaFacebook className="text-blue-600 cursor-pointer hover:scale-110 transition-transform mr-2" />
                            Facebook
                        </button>
                        <button className="flex items-center justify-center px-2 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white transition duration-300 ease-in-out transform hover:bg-gray-200 hover:scale-105">
                            <FaTwitter className="text-blue-400 cursor-pointer hover:scale-110 transition-transform mr-2" />
                            Twitter
                        </button>
                        <button className="flex items-center justify-center px-2 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white transition duration-300 ease-in-out transform hover:bg-gray-200 hover:scale-105">
                            <FaGithub className="text-gray-800 cursor-pointer hover:scale-110 transition-transform mr-2" />
                            GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
