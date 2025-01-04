import React, { useState } from 'react'
import { userAuthStore } from '../../store/userAuthStore'
import { Eye, EyeOff } from 'lucide-react'
import { Link } from 'react-router'
import toast from 'react-hot-toast'

function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [showPassword, setShowPassword] = useState(false) //toggle password

    const { login, isLogingIn } = userAuthStore()

    const validateForm = () => {
        // Check for empty fields
        const { email, password } = formData // destructuring

        if (!email) {
            return toast.error("Email is required")
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            return toast.error("Invalid email address")
        }
        if (!password) {
            return toast.error("Password is required")
        }
        if (password.length < 6) {
            return toast.error("Password must be at least 6 characters")
        }

        return true
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const success = validateForm()
        if (success === true) {
            login(formData)
        }
    }

    return (
        <>
            <div className='w-full h-screen'>
                <div className="contain pt-36">
                    <div className="bg-white max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden dark:bg-slate-900">
                        <h2 className="text-2xl uppercase font-black mb-1 font-Open-Sans text-custblue">Login</h2>
                        <p className="text-gray-600 mb-6 text-sm dark:text-white font-Open-Sans">Welcome! So good to have you back!</p>
                        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                            <div className="space-y-2 mb-2">
                                <div><label className="text-gray-600 dark:text-white mb-2 block">Email address</label><input type="email" name="email" value={formData.email} className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:outline-custblue placeholder-gray-400 dark:text-white" placeholder="youremail.@domain.com" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="space-y-2 mb-2">
                                <div><label className="text-gray-600 dark:text-white mb-2 block">Password</label><div className="relative"><input type={showPassword ? "text" : "password"} name="password" value={formData.password} className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:outline-custblue placeholder-gray-400 dark:text-white" placeholder="Password" onChange={handleChange} />
                                    <div
                                        className="cursor-pointer absolute inset-y-0 right-0 flex items-center px-8 text-gray-600 border-l border-gray-300" onClick={() => setShowPassword(!showPassword)}>
                                        {/* toggle eye icon */}
                                        {showPassword ? (
                                            <Eye className='size-6 text-gray-400 dark:text-white' />
                                        ) : (
                                            <EyeOff className='size-6 text-gray-400 dark:text-white' />
                                        )}
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button type='submit' className='block w-full py-2 text-center text-white bg-custblue border border-custblue rounded hover:bg-transparent hover:text-custblue transition uppercase font-roboto font-medium' disabled={isLogingIn}>
                                    {/* toggle the button based on signup status */}
                                    {
                                        isLogingIn ? (
                                            (
                                                <span className='animate-pulse'>Loading...</span>
                                            )
                                        ) : (
                                            "Login"
                                        )
                                    }
                                </button>
                                <div className="flex gap-2 pt-5">
                                    <p className="text-gray-600 text-sm dark:text-white font-Open-Sans">Don't have an account?</p>
                                    <Link to="/signup" className='text-custblue text-sm underline hover:text-gray-600 font-Open-Sans'>signup</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
